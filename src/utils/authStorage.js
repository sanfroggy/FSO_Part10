//Importing AsyncStorage.
import AsyncStorage from '@react-native-async-storage/async-storage';

//Defining the class AuthStorage to manipulate stored token data.
class AuthStorage {
    constructor(namespace = 'rateRepoAuth') {
        this.namespace = namespace;
    }

    getAccessToken() {
        const token = await AsyncStorage.getItem(
            `${this.namespace}:token`
        );
        return token
    }

    setAccessToken(accessToken) {
        await AsyncStorage.setItem(
            `${this.namespace}:token`,
            accessToken,
        );
    }

    removeAccessToken() {
        await AsyncStorage.removeItem(`${this.namespace}:token`);
    }
}

export default AuthStorage;
