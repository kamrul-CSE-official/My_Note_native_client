import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToken = async (accessToken, refreshToken) => {
  try {
    await AsyncStorage.setItem("accessToken", accessToken);

    await AsyncStorage.setItem("refreshToken", refreshToken);
  } catch (error) {
    console.error("Error saving tokens:", error);
    throw error;
  }
};

export const getTokens = async () => {
  try {
    const accessToken = await AsyncStorage.getItem("accessToken");
    const refreshToken = await AsyncStorage.getItem("refreshToken");

    if (accessToken === null || refreshToken === null) {
      throw new Error("One or more tokens are not found in AsyncStorage");
    }

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    console.error("Error getting tokens:", error);
    throw error;
  }
};
