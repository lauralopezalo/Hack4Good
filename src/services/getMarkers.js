const fetchMarkers = async (selectedCategories) => {
    const url = "http://localhost:8080/findBusinessByType";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selectedCategories)
        });

        if (!response.ok) {
            throw new Error("Error al obtener los marcadores");
        }
        const data = await response.json();
        const parsedData = data.map(item => ({
            ...item,
            Longitud: parseFloat(item.Longitud),
            Latitud: parseFloat(item.Latitud)
        }));
        return parsedData;
    } catch (error) {
        console.error("Error al obtener los marcadores:", error);
        return [];
    }
};

export { fetchMarkers };
