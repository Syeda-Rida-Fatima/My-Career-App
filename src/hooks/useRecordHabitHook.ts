import {useState} from 'react';
import {formatDate} from 'src/utils';

export const useRecordHabitHook = () => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);
  const [selectedHabitDate, setSelectedHabitDate] = useState<any>(formatDate());
  const [percentage, setPercentage] = useState<any>(0);
  const [textNotes, setTextNotes] = useState('');
  const [images, setImages] = useState<any>([]);
  const [habitState, setHabitState] = useState<string>('');

  return {
    isDatePickerOpen,
    selectedHabitDate,
    images,
    textNotes,
    habitState,
    percentage,
    setPercentage,
    setHabitState,
    setTextNotes,
    setImages,
    setIsDatePickerOpen,
    setSelectedHabitDate,
  };
};
