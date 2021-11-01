export const formatOnlyNumbers = (value) => {
    if (value === null) {
        return "";
    }
    if (value !== undefined) {
        return typeof value === 'string' ? value.replace(/\D/g, '') : value
    }
}
export default formatOnlyNumbers