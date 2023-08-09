import React, {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  OutputFormatAndroidType,
} from 'react-native-audio-recorder-player';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import RNFetchBlob from 'rn-fetch-blob';
import type {
  AudioSet,
  PlayBackType,
  RecordBackType,
} from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';
import {
  convertMillisecondsToSeconds,
  convertMillisecondsToMinutes,
} from 'src/utils';
import {useFocusEffect} from '@react-navigation/native';

const RECORDING_LIMIT = 30;

export const useVoiceRecordHook = (id: string) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('00:00');
  const [duration, setDuration] = useState(0);
  const [playSecs, setPlaySecs] = useState(0);
  const [playTime, setPlayTime] = useState('00:00');
  const [durationMins, setDurationMins] = useState('00:00');
  const [uri, setUri] = useState('');
  const [base64Data, setBase64Data] = useState('');

  const dirs = RNFetchBlob.fs.dirs;
  const path = Platform.select({
    ios: 'test.m4a',
    android: `${dirs.CacheDir}/test.mp3`,
  });

  const audioRecorderPlayer = new AudioRecorderPlayer();
  audioRecorderPlayer.setSubscriptionDuration(0.1);

  useEffect(() => {
    setIsRecording(false);
    setIsPlaying(false);
    setRecordSecs(0);
    setRecordTime('00:00');
    setDuration(0);
    setPlaySecs(0);
    setPlayTime('00:00');
    setDurationMins('00:00');
    setUri('');
    setBase64Data('');
  }, [id]);

  useEffect(() => {
    return () => {
      audioRecorderPlayer.stopPlayer();
      audioRecorderPlayer.removePlayBackListener();
    };
  }, []);

  useEffect(() => {
    if (recordSecs >= RECORDING_LIMIT) {
      onStopRecord();
    }
  }, [recordSecs]);

  useEffect(() => {
    if (playSecs >= duration) {
      onStopPlay();
    }
  }, [playSecs]);

  const checkPermissions = async () => {
    if (Platform.OS === 'ios') {
      check(PERMISSIONS.IOS.MICROPHONE)
        .then(result => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              console.log(
                'This feature is not available (on this device / in this context)',
              );
              break;
            case RESULTS.DENIED:
              console.log(
                'The permission has not been requested / is denied but requestable',
              );
              break;
            case RESULTS.LIMITED:
              console.log(
                'The permission is limited: some actions are possible',
              );
              break;
            case RESULTS.GRANTED:
              console.log('The permission is granted');
              break;
            case RESULTS.BLOCKED:
              console.log(
                'The permission is denied and not requestable anymore',
              );
              break;
          }
        })
        .catch(error => {
          console.log('Error Getting Audio Permissions', error);
        });
    } else {
      check(PERMISSIONS.ANDROID.RECORD_AUDIO)
        .then(result => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              console.log(
                'This feature is not available (on this device / in this context)',
              );
              break;
            case RESULTS.DENIED:
              console.log(
                'The permission has not been requested / is denied but requestable',
              );
              break;
            case RESULTS.LIMITED:
              console.log(
                'The permission is limited: some actions are possible',
              );
              break;
            case RESULTS.GRANTED:
              console.log('The permission is granted');
              break;
            case RESULTS.BLOCKED:
              console.log(
                'The permission is denied and not requestable anymore',
              );
              break;
          }
        })
        .catch(error => {
          console.log('Error Getting Audio Permissions', error);
        });
    }
  };

  const onStartRecord = React.useCallback(async () => {
    try {
      await checkPermissions();

      const audioSet: AudioSet = {
        AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
        AudioSourceAndroid: AudioSourceAndroidType.MIC,
        AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
        AVNumberOfChannelsKeyIOS: 2,
        AVFormatIDKeyIOS: AVEncodingOption.aac,
        OutputFormatAndroid: OutputFormatAndroidType.AAC_ADTS,
      };
      console.log(`path: ${path}`);
      const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
      console.log(`uri: ${uri}`);

      setIsRecording(true);

      audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => {
        setRecordTime(convertMillisecondsToMinutes(e.currentPosition));
        setRecordSecs(convertMillisecondsToSeconds(e.currentPosition));
      });
      setUri(uri);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onStopRecord = React.useCallback(async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    console.log(`result: ${result}`);

    setIsRecording(false);
    var data = await RNFS.readFile(result, 'base64');
    setBase64Data(data);
  }, []);

  const onStartPlay = React.useCallback(async (base64Data: any) => {
    let tempPath = path;
    try {
      if (base64Data) {
        tempPath = `${RNFS.CachesDirectoryPath}/${path}`;
        await RNFS.writeFile(tempPath, base64Data, 'base64');
      }
      const msg = await audioRecorderPlayer.startPlayer(`file://${tempPath}`);
      const volume = await audioRecorderPlayer.setVolume(1.0);
      console.log(`path: ${msg}`, `volume: ${volume}`);
      setIsPlaying(true);

      audioRecorderPlayer.addPlayBackListener((e: PlayBackType) => {
        setPlayTime(convertMillisecondsToMinutes(e.currentPosition));
        setPlaySecs(convertMillisecondsToSeconds(e.currentPosition));
        setDuration(convertMillisecondsToSeconds(e.duration));
        setDurationMins(convertMillisecondsToMinutes(e.duration));
        return;
      });
    } catch (err) {
      console.log('startPlayer error', err);
    }
  }, []);

  const onStopPlay = React.useCallback(() => {
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
    setIsPlaying(false);
  }, []);

  return {
    uri,
    isRecording,
    recordTime,
    playTime,
    duration,
    durationMins,
    recordSecs,
    playSecs,
    isPlaying,
    base64Data,
    setBase64Data,
    onStopPlay,
    onStartPlay,
    onStopRecord,
    onStartRecord,
  };
};
