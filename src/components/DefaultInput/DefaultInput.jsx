const DefaultInput = ({ name, onChange, value }) => {
  console.log('asa');

  return (
    <div>
      <input name={name} onChange={onChange} value={value} />
    </div>
  );
};

export default DefaultInput;
