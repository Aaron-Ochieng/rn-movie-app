import SearchBar from "@/components/searchbar";
import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <SafeAreaView />
      <ScrollView
        className="flex-1 px-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <View className="mt-5 flex-1">
          <SearchBar
            onPress={() => router.push(`/search`)}
            placeholder="Search through 300+ movies online"
          />
        </View>
      </ScrollView>
    </View>
  );
}
