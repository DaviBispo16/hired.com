export interface InputAddEmailProps {
    email: string,
    onChangeEmail?: (newEmail: string) => void;
}

export interface InputAddPasscodeProps {
    passcode: string,
    onChangePasscode?: (newPasscode: string) => void;
}

export interface InputAddUsernameProps {
    username: string,
    onChangeUsername?: (newUsername: string) => void;
}