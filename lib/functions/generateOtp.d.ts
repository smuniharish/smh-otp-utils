interface GenerateOptions {
    digits?: boolean;
    lowerCaseAlphabets?: boolean;
    upperCaseAlphabets?: boolean;
    specialChars?: boolean;
}
declare const generateOtp: (length: number, options?: GenerateOptions) => string;
export default generateOtp;
