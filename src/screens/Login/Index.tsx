import {
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
  Image,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import PhoneInput from 'react-native-phone-input';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import BottomSheet from '@gorhom/bottom-sheet';

const {width, height} = Dimensions.get('window');
export default function Login({}) {
  const phone = useRef<PhoneInput>(null);
  const textRef = useRef();
  const bottomSheetRef = useRef<BottomSheet>(null);
  // const [valid, setValid] = useState();
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value) {
      const valid = phone?.current?.isValidNumber();
      // if (valid) {
      //   // setValid(valid);
      //   navigaion.navigate('Home');
      // }
    }
  }, [value, phone.current]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/login_image.png')}
            style={styles.imageLogin}
          />
          <View style={styles.LoginInfoContainer}>
            <Text style={styles.textBold}>Get your groceries with nectar</Text>
            <View style={styles.phoneInputContainer}>
              <PhoneInput
                ref={phone}
                initialCountry="eg"
                flagStyle={styles.flagStyle}
                style={styles.phoneInput}
                onChangePhoneNumber={e => {
                  bottomSheetRef?.current?.snapToIndex(0);
                  setValue(e);
                }}
              />
            </View>
          </View>
          <View style={styles.optionContainer}>
            <Text style={styles.optionText}>Or connect with social media</Text>
            <TouchableOpacity
              style={[styles.Btn, {backgroundColor: '#5383EC'}]}>
              <AntDesign
                size={20}
                name="google"
                color={'#fff'}
                style={styles.BtnIcon}
              />
              <Text style={styles.BtnText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.Btn, {backgroundColor: '#4A66AC'}]}>
              <EvilIcons
                name="sc-facebook"
                color={'#fff'}
                size={27.5}
                style={styles.BtnIcon}
              />
              <Text style={styles.BtnText}>Continue with Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>

        <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={['100%']}>
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheet>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  imageLogin: {
    width: width,
    height: '35%',
    resizeMode: 'cover',
  },
  LoginInfoContainer: {
    width: '70%',
    paddingVertical: 25,
    paddingHorizontal: 15,
    flex: 1 / 2,
  },
  textBold: {
    fontSize: 20,
    fontWeight: '600',
  },
  phoneInputContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    width: width * 0.85,
  },
  flagStyle: {
    width: 50,
    height: 30,
    borderWidth: 0,
  },
  phoneInput: {
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
    paddingBottom: 7.5,
  },
  optionContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1 / 3,
  },
  optionText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#828282',
    marginBottom: 30,
  },
  Btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: '85%',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: 10,
    height: 60,
  },
  BtnText: {
    textAlign: 'center',
    color: '#fff',
    alignSelf: 'center',
  },
  BtnIcon: {
    right: 25,
  },
  PhoneTextInput: {
    marginLeft: 10,
  },
  contentContainer: {},
});
