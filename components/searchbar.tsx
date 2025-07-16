import SearchProps from "@/types/searchprops";
import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

const SearchBar = ({ onPress, placeholder }: SearchProps) => {
  return (
    <View className="flex-row items-center bg-primary/50 px-5 py-2 border-[0.5px] border-accent rounded-full">
      <Feather name="search" size={20} color="#E3DE61" />
      <TextInput
        placeholder={placeholder}
        className="flex-1 ml-2 text-lightyellow font-semibold"
        placeholderTextColor="#E3DE61"
        onPress={onPress}
        onChangeText={() => {}}
      />
    </View>
  );
};

export default SearchBar;
