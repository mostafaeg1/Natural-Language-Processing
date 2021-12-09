export const getKey = async () => {
    const response = await fetch('http://localhost:8082/getkey');
    try {
        const key = await response.text()
        console.log('Key: ' + key);
        return key
    } catch (error) {
        console.log("ERROR :", error)
    }
}
