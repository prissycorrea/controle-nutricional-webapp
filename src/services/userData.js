import profilePicture from '../images/profile_picture.jpg'

export function getLoggedInUser() {
    return {
        name: "Danilo",
        surname: "Freitas dos Reis",
        profileImage: profilePicture,
        initialWeight: 98,
        currentWeight: 87,
        goalWeight: 75
    };
}