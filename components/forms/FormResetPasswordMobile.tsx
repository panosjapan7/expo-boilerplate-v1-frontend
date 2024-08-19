// ./components/forms/FormResetPasswordMobile.tsx
import { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { useDebouncedValidation, validateEmail } from "../../hooks/validations";
import { useGlobalStyles } from "../../styles/stylesheets/globalStyles";
import InputEmailMobile from "../inputs/InputEmailMobile";
import InputLabelMobile from "../inputs/InputLabelMobile";
import ButtonSubmitFormMobile from "../buttons/ButtonSubmitFormMobile";
import ModalAlertMobile from "../modals/ModalAlertMobile";

const FormResetPasswordMobile = () => {
  const { globalStyles } = useGlobalStyles();
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleResetPassword = () => {
    console.log("Reset Password email sent!");
    setSubmittedEmail(email);
    setEmail("");
    setTimeout(() => {
      setIsModalVisible(true);
      Keyboard.dismiss();
    }, 0);
  };

  useDebouncedValidation(
    email,
    validateEmail,
    setEmailErrorMessage,
    "is invalid"
  );

  useEffect(() => {
    setIsButtonDisabled(!validateEmail(email));
  }, [email]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ModalAlertMobile
        header="Check your email!"
        paragraph={`We have sent you an email at ${submittedEmail} with instructions to reset your password.`}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        showModalScreenBackground={true}
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.container}>
          <InputLabelMobile caption="Email " errorMessage={emailErrorMessage} />

          <InputEmailMobile
            value={email}
            setValue={setEmail}
            returnKeyType="done"
          />

          <ButtonSubmitFormMobile
            onPress={handleResetPassword}
            isDisabled={isButtonDisabled}
            buttonText="Reset Password"
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default FormResetPasswordMobile;
