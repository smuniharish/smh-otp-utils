# smh-otp-utils

smh-otp-utils is a powerful and flexible OTP (One-Time Password) generation utility designed to ensure uniqueness in every OTP generated. It guarantees that no repeated OTPs are produced, providing enhanced security. The package offers extensive customization options, allowing you to tailor OTP length, character sets, and expiration times to suit your specific needs.

## Installation
```sh
# NPM
npm install --save smh-otp-utils

#Yarn
yarn add smh-otp-utils
```

## Parameters


| Parameter                 | Type   | Optional | Default      | Description                                                                            |
| -------------------- | ------ | -------- | ------------ | -------------------------------------------------------------------------------------- |
| length         | number | Yes      | 10           | Length of the otp text       |
| digits         | boolean | Yes      | true          | Demonstrates whether the otp contains the digits or not       |
| lowerCaseAlphabets         | boolean | Yes      | true          | Demonstrates whether the otp contains the lowercasealphabets or not       |
| upperCaseAlphabets         | boolean | Yes      | true          | Demonstrates whether the otp contains the upper case alphabets or not       |
| specialChars         | boolean | Yes      | true          | Demonstrates whether the otp contains the special characters or not       |

## Usage

```js

import { generateOtp } from 'smh-otp-utils'

console.log(generateOtp()) // abkdkdfjkj
console.log(generateOtp(4)) // jbkd
console.log(generateOtp(4,{digits:true})) // 8654
```

And we're done 🎉
## Contributing

Contribution are always welcome, no matter how large or small !

We want this community to be friendly and respectful to each other.Please follow it in all your interactions with the project.

Please feel free to drop me a mail [S MUNI HARISH](mailto:samamuniharish@gmail.com?subject=[GitHub])

## Acknowledgements

Thanks to the authors of these libraries for inspiration

## Sponsor & Support

To keep this library maintained and up-to-date please consider [sponsoring it on GitHub](https://github.com/sponsors/smuniharish). Or if you are looking for a private support or help in customizing the experience, then reach out to me on Linkedin [@smuniharish](https://www.linkedin.com/in/smuniharish).

## License

[Apache License 2.0](./LICENSE)

---

Made with ❤️

