const ButtonRemove = (props) => {
  const { handleRemove, item } = props;
  return (
    <button onClick={() => handleRemove(item)} className='remove-product'>
      &#10005;
    </button>
  );
};

export default ButtonRemove;
