//Importing the createContext function.
import { createContext } from 'react';

/*Using the createContext function to allow other components
access to the storage. */
const AuthStorageContext = createContext();

export default AuthStorageContext;
