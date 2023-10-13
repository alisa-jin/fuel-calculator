const fetchFoods = async() => {
    const apiRes = await fetch('/api/foods');
    if (!apiRes.ok) {
        throw new Error('/api/foods fetch not OK')
    }
    return apiRes.json();
}

export default fetchFoods;