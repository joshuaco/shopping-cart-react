
const getNumber = (number) => {
  if (!number) return ' ';
  return number > 9 ? '9+' : number;
}

const BubbleAlert = (props) => {
  const { value } = props;
  return (
    <span className="bubble-alert">
      {getNumber(value)}
    </span>
  );
};

export default BubbleAlert;