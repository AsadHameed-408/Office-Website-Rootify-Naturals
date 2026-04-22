// Email Validation
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required.";
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    return "";
};

// Password Validation
export const validatePassword = (password) => {
    if (!password) return "Password is required.";
    if (password.length < 6) return "Password must be at least 6 characters long.";
    return "";
};

// Phone Number Validation (Pakistan format)
export const validatePhone = (phone) => {
    const phoneRegex = /^((\+92)|(0092))-{0,1}3\d{2}-{0,1}\d{7}$|^03\d{2}-{0,1}\d{7}$/;
    if (!phone) return "Phone number is required.";
    if (!phoneRegex.test(phone)) return "Please enter a valid phone number (e.g. 03001234567).";
    return "";
};

// Required Field (General)
export const validateRequired = (value, fieldName) => {
    if (!value || value.trim() === "") return `${fieldName} cannot be empty.`;
    return "";
};