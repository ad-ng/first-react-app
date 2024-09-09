import PropTypes from 'prop-types';

export default function NamePrinter({ myName, age }) {
    
    return (
    <> 
       <p>my name is {myName}</p> 
       <p>my age is {age}</p>
    </>
    )
}

NamePrinter.propTypes = {
  myName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};