export const validateForm = (email, fullname, password) => {
  const isEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!?])[A-Za-z\d@#$%^&*!?]{8,}$/.test(
      password
    );

  const isFullName = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/.test(fullname);

  if (!isEmail) return "Please correct the email id!";
  if (!isPassword) return "Please correct the password!";
  if (!isFullName) return "Please enter correct Name";

  return null;
};
