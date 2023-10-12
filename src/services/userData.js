import profilePicture from '../images/profile_picture.jpg'

export function getLoggedInUser() {
    return {
        name: "Danilo",
        surname: "Freitas dos Reis",
        profileImage: profilePicture,
        initialWeight: 98,
        currentWeight: 87,
        goalWeight: 75,
        height: 1.70,
        age: 25,
        gender: "M",
        dateOfBirth: "01/01/1990",
        email: "<EMAIL>",
        phone: "1234567890",
        address: "Rua dos Bobos, 0",
        city: "São Paulo",
        state: "SP",
        country: "Brasil",
        zipCode: "12345-678"
    };
}