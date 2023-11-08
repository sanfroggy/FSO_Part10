//Importing Picker.
import { Picker } from '@react-native-picker/picker';

/*Defining a component to allow the user to pick a value
from a list of values. */
const SortMenu = ({ sortOrderValue, setSortOrderValueFnct }) => {

    /*Returning a menu to select a value that is used for sorting.
    The selected value is set to the state of the sortMethod variable
    define din RepositoryList, using the function received as a prop. */
    return (
        <Picker
            selectedValue={sortOrderValue}
            onValueChange={(itemValue) =>
                setSortOrderValueFnct(itemValue)
            }>
            <Picker.Item label="Latest repositories" value="CREATED_AT" />
            <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE_DESC" />
            <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE_ASC" />
        </Picker>
    );
}

export default SortMenu


