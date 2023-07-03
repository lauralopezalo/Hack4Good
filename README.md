# Find a spot

Welcome to Find a spot! This project is built using React and npm.

<br>

## Introduction
This project is part of the Tech4Good hackathon organized by Barcelona Activa and the Mobile World Capital Barcelona. The hackathon aims to foster creativity and innovation in the technology field while addressing challenges aligned with the United Nations' Sustainable Development Goals (SDGs) of the 2030 Agenda.

<br>

## Getting Started

To get started with the project, follow the instructions below:

1. Clone the repository to your local machine.
2. Open a terminal and navigate to the project directory.

<br>

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js
- npm (Node Package Manager)

<br>

### Installation
Install project dependencies by running the following command:

   ```shell
   npm install
   ```

<br>


### Usage
To run the project in development mode, use the following command:

```shell
npm start
```

This will start the development server and open the application in your default browser at [http://localhost:3000](http://localhost:3000). The page will automatically reload if you make any changes to the source code.

<br>



## Code Examples
```javascript
 useEffect(() => {
        const fetchMarkers = async () => {
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
                setMarkers(parsedData);
                setMarkers(data);
            } catch (error) {
                console.error("Error al obtener los marcadores:", error);
            }
        };

        fetchMarkers();
    }, [selectedCategories]);
```

<br>

***

That's it! You're now ready to start working on Find a spot. Happy coding!

