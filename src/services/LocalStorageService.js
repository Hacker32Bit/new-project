
class LocalStorageService {
    static USER_DATA_KEY = "userData"

    static saveUserData(userData) {
        localStorage.setItem(this.USER_DATA_KEY, JSON.stringify(userData))
    }

    static getUserData() {

        const storedData = localStorage.getItem(this.USER_DATA_KEY)

        if (storedData) {
            return JSON.parse(storedData)
        }

        return null
    }

    static clearUserData() {
        localStorage.removeItem(this.USER_DATA_KEY)
    }

}

export default LocalStorageService