import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

const handleChange =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setState(event.nativeEvent.text);
    };

export  {handleChange}