const UnCrontrolled = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    alert(`Email: ${email} password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>UnControlled</h1>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button>Login</button>
    </form>
  );
};

export default UnCrontrolled;
