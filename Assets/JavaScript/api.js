
async function fatchProfileData(){
    const url='https://raw.githubusercontent.com/JaisonMachado/Portfolio/main/Assets/Json/profile.json'
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}