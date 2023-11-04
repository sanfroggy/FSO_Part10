//Importing AsyncStorage.
import AsyncStorage from '@react-native-async-storage/async-storage';

//Defining the class AuthStorage to manipulate stored token data.
class AuthStorage {

    //Defining a namespace for the storage.
    constructor(namespace = 'rateRepoAuth') {
        this.namespace = namespace;
    }

    //Defining a method to get the currently stored accessToken.
    async getAccessToken() {
        const token = await AsyncStorage.getItem(
            `${this.namespace}:token`
        );
        return token
    }

    //Defining a method to set a new value for the stored accessToken.
    async setAccessToken(accessToken) {
        await AsyncStorage.setItem(
            `${this.namespace}:token`,
            accessToken,
        );
    }

    /*Defining a method to remove the currently stored accessToken
    from the storage. */
    async removeAccessToken() {
        await AsyncStorage.removeItem(`${this.namespace}:token`);
    }
}

export default AuthStorage;
