import PropTypes from 'prop-types';
// import {  } from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => { 
    return (
        <div>
            {options.map(option => (<button type="button" value={option} onClick={onLeaveFeedback} key={option} >{option}</button>))}
        </div>
    )
};

FeedbackOptions.propTypes = {
    
};

export default FeedbackOptions;