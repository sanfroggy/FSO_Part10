/*Importing the Text, Pressable, View and StyleSheet components, as well
as the imported FormikTextInput component. Also importing Formik component from
formik library and themes as well as the useReview and useNavigate hooks. */
import { Pressable, View, StyleSheet } from 'react-native';
import Text from './Text'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik';
import themes from '../theme'
import * as yup from 'yup'
import { useNavigate } from 'react-router-native'
import useReview from '../hooks/useReview'

/*Creating a validationSchema using the yup library to validate
user input, when creating a review. */
const validationSchema = yup.object().shape({
    repoOwner: yup.string().
        required('Repository owner is a required field.'),
    repoName: yup.string().
        required('Repository name is a required field.'),
    rating: yup.number().required('Rating must have a numeric value.')
        .min(0, 'Rating must be between 0 and 100.').max(100, 'Rating must be between 0 and 100.'),
    review: yup.string().optional()
});

//Defining initial values for the Review component.
const initialValues = {
    repoOwner: '',
    repoName: '',
    rating: 0,
    review: ''
}

//Defining a style for the Pressable submit container.
const styles = StyleSheet.create({
    btnStyle: {
        marginLeft: 25,
        marginTop: 10
    }
});

/*Defining a component that uses the FormikTextInput components
to keep track of written repository name and owner, as well as
rating and review input. Also contains the Pressable Text component 
used to submit the data. */
const NewReviewForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput
                name='repoOwner'
                placeholder='Owner of the repository.'
            />
            <FormikTextInput
                name='repoName'
                placeholder='Name of the repository'
            />
            <FormikTextInput
                type="number"
                name='rating'
                placeholder='Rating given (0-100).'
            />
            <FormikTextInput
                name='review'
                multiline={true}
                placeholder='Review.'
            />
            <View style={styles.btnStyle}>
                <Pressable style={themes.aesthetics.largeContainerWithSilverBrgd} onPress={onSubmit}>
                    <Text style='label' color='textSecondary'>Submit</Text>
                </Pressable>
            </View>
        </View>
    )
}

/*Defining a component to tie the defined components logically together.
In addition to providing an onSubmit function, it provides initial values
for the Formik component and the NewReviewForm defined as it's child also gets
the onSubmit function from the same Formik component. */
const Review = () => {

    //Defining a variable to use the useNavigate hook.
    const navigate = useNavigate()

    //Defining a variable to use the defined useReview hook.
    const [postReview] = useReview()

    /*If the mutation defined in the useReview hook is successfully executed,
    the review is created and the user is redirected to the view of the reviewed repository. 
    If not, the occurred error is then printed to console.*/
    const onSubmit = async (values) => {

        try {
            const response = await postReview({
                repoOwner: values.repoOwner, repoName: values.repoName,
                rating: parseInt(values.rating), reviewText: values.review
            })
            if (!response.loading) {
                navigate(`/repositories/${response.data.createReview.repositoryId}`)
            }

        } catch (error) {
            console.log(error)
        }

    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <NewReviewForm onSubmit={handleSubmit} />}
        </Formik>
    )

}

export default Review
