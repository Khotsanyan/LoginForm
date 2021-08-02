import "./Input.css";
export default function Input({
  onChange,
  type,
  size,
  placeholder,
  errorMessage,
}) {
  return (
    <div>
      <div>
        <input
          onChange={onChange}
          type={type}
          className={size}
          placeholder={placeholder}
        />
      </div>
      <div className="error">
        <span>{errorMessage}</span>
      </div>
    </div>
  );
}
