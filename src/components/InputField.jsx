function Fieldset({cssClass, id, label, type, placeholderText, value, onChangeFunc}) {

/*   const count = 1; */

  return (
    <fieldset className={cssClass}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        name={value}
        placeholder={placeholderText}
        onChange={onChangeFunc}
      ></input>
    </fieldset>
  );
}

export default Fieldset;