import CONST from '../../Routes/HomePage/index.constants';
export default {
    postInputs: [
        {
            name: 'title',
            type: 'text',
            dataTest: CONST.addPostTitle,
            value: '',
            placeholder: 'Enter the title for Post.'
        },
        {
            name: 'description',
            type: 'text',
            dataTest: CONST.addPostDescription,
            value: '',
            placeholder: 'Enter the description for the Post.'
        }
    ]
};
