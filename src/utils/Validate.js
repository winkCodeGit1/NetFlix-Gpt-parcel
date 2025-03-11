export const validateForm = (email, fullname, password) => {
  const isEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email);




  if (!isEmail) return "Please correct the email id!";

  return null;
};

