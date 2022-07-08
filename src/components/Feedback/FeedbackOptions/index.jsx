import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => { 
    return (
        <div>
            {options.map(option => (<Button type="button" value={option} onClick={onLeaveFeedback} key={option} >{option}</Button>))}
        </div>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string,),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;