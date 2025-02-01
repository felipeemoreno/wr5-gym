import AsyncStorage from "@react-native-async-storage/async-storage"

import { UserDto } from "@dtos/UserDto"
import { USER_STORAGE } from "./storageConfig"

export const storageSaveUser = async (user: UserDto) => {
  try {
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
  } catch (error) {
    throw error
  }
}

export const storageGetUser = async () => {
  try {
    const user = await AsyncStorage.getItem(USER_STORAGE)

    if (user) {
      return JSON.parse(user) as UserDto
    }

    return null
  } catch (error) {
    throw error
  }
}

export const storageRemoveUser = async () => {
  try {
    await AsyncStorage.removeItem(USER_STORAGE)
  } catch (error) {
    throw error
  }
}
