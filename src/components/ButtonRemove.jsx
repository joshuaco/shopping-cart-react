const ButtonRemove = (props) => {
  const { handleRemove, item } = props;
  return ( 
  <button onClick={() => handleRemove(item)} className='remove-product'>X</button>
  );
};

export default ButtonRemove;
