export async function reverseGeocode(latitude, longitude) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    try {
        const response = await fetch(url, {
            headers: { 'Accept-Language': 'en' }
        });
        const data = await response.json();
        if (data && data.address) {
            const ad = data.address;
            return `${ad.village || ad.town || ad.city} (${ad.country})` ;
        } else {
            return 'Current location';
        }
    } catch (error) {
        console.error('Error:', error);
        return 'Current location';
    }
}