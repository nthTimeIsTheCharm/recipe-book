function Field({
  id,
  label,
  type,
  placeholderText,
  value,
  onChangeFunc,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        name={value}
        placeholder={placeholderText}
        onChange={onChangeFunc}
      ></input>
    </div>
  );
}

export default Field;
