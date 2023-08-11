import React from 'react';
import {SafeAreaView, View, ViewStyle, StyleProp} from 'react-native';
import {makeStyles} from '@rneui/themed';
import {
  KeyboardAwareProps,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
import {customSize} from '../../../theme';
import * as Animatable from 'react-native-animatable';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
type Props = {
  fixedView?: boolean;
  noPadding?: boolean;
  contentPadding?: boolean;
  gutterBottom?: boolean;
  backgroundColor?: string;
  children?: React.ReactNode | any;
  style?: ViewStyle;
  animated?: any;
};

type IProps = Props & KeyboardAwareProps;

export const Screen = (props: IProps) => {
  const insets = useSafeAreaInsets();

  const styles = useStyles({...props, insets});
  const {children, fixedView, style, animated} = props;

  const renderComponent = (key: string, style?: StyleProp<ViewStyle>) => {
    let component;
    if (Array.isArray(children)) {
      component = children.find(view => view.key === key);
    } else {
      component = children?.key === key ? children : null;
    }
    if (!component) return null;
    return (
      <View style={[style, component.props.style]}>
        {component.props.children}
      </View>
    );
  };

  if (!props.children) return null;

  if (fixedView) {
    return (
      <SafeAreaView style={styles.container}>
        <Animatable.View animation="zoomIn" style={styles.viewContainer}>
          {renderComponent('header')}
          {renderComponent('content', styles.content)}
          {renderComponent('footer')}
        </Animatable.View>
      </SafeAreaView>
    );
  }
  return (
    <KeyboardAwareScrollView
      style={styles.scrollViewStyle}
      contentContainerStyle={styles.contentContainerStyle}
      automaticallyAdjustContentInsets={true}
      keyboardDismissMode="on-drag"
      scrollsToTop={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      enableResetScrollToCoords={false}>
      <SafeAreaView style={styles.container}>
        {animated ? (
          <Animatable.View
            animation={animated === true ? 'zoomIn' : animated}
            style={[styles.viewContainer, style]}>
            {renderComponent('header')}
            {renderComponent('content', styles.content)}
            {renderComponent('footer')}
          </Animatable.View>
        ) : (
          <View style={[styles.viewContainer, style]}>
            {renderComponent('header')}
            {renderComponent('content', styles.content)}
            {renderComponent('footer')}
          </View>
        )}
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const useStyles = makeStyles(
  (
    theme,
    {backgroundColor, contentPadding, noPadding, gutterBottom, insets}: any,
  ) => {
    return {
      container: {
        flex: 1,
        backgroundColor: backgroundColor,
      },
      viewContainer: {
        flex: 1,
        backgroundColor: backgroundColor,
        marginHorizontal: contentPadding || noPadding ? 0 : customSize.mhs(16),
        marginBottom: insets.bottom ? 0 : customSize.mvs(14),
      },
      scrollViewStyle: {
        backgroundColor: backgroundColor,
      },
      contentContainerStyle: {
        flexGrow: 1,
      },
      content: {
        flexGrow: 1,
        marginHorizontal: contentPadding ? customSize.mhs(16) : 0,
      },
    };
  },
);
