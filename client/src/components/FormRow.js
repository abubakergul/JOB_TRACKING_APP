const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        name={name}
        value={value}
        onChange={handleChange}
        type={type}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
