function Fieldset({
  cssClass,
  id,
  label,
  type,
  placeholderText = null,
  value,
  isChecked = null,
  onChangeFunc,
}) {
  return (
    <fieldset className={cssClass}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        name={value}
        placeholder={placeholderText}
        checked={isChecked}
        onChange={onChangeFunc}
      ></input>
    </fieldset>
  );
}

export default Fieldset;
