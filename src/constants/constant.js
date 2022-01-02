const COMMON = {
    PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE_NUMBER_REGEX: /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)(?=.*\d{4,10}$)/
}

const API = { context: 'api' };

export { COMMON, API };