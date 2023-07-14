import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

import { fetchMarkers } from "../../services/getMarkers";
import { businessTypes } from "../../data/businessTypes";
import { StyledCheckbox } from "./MapStyles";



const geoUrl =
    "https://raw.githubusercontent.com/martgnz/bcn-geodata/master/barris/barris.geojson";

const Map = () => {
    const [markers, setMarkers] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleInputChange = (value) => {
        setSelectedCategories((prevInputs) => {
            if (prevInputs.includes(value)) {
                return prevInputs.filter((item) => item !== value);
            } else {
                return [...prevInputs, value];
            }
        });
    };

    useEffect(() => {
        const fetchMarkersData = async () => {
            const data = await fetchMarkers(selectedCategories);
            setMarkers(data);
        };

        fetchMarkersData();
    }, [selectedCategories]);

    return (
        <>
            <section className="text-gray-600 body-font lg:px-24 min-h-screen">
                <div className="container px-5 lg:py-12 mx-auto flex flex-wrap">
                    <div className="flex flex-col lg:flex-row w-full">
                        <div className="lg:w-2/5 md:pr-10 md:py-24">
                            <div className="h-96 lg:w-3/5 overflow-y-auto">
                                {Object.entries(businessTypes).map(([key, color], id) => (
                                    <>
                                        <label className="flex flex-row gap-4 px-12">
                                            <StyledCheckbox
                                                key={id}
                                                type="checkbox"
                                                checked={selectedCategories.includes(key)}
                                                onChange={() => handleInputChange(key)}
                                                color={color}
                                            />
                                            <h4 className="text-gray-900 font-ligth text-sm">
                                                {" "}
                                                {key}
                                            </h4>
                                        </label>
                                    </>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-2">
                            <div className="flex flex-grow flex-col mx-14">
                                <ComposableMap
                                    projectionConfig={{
                                        scale: 220000,
                                        center: [2.2, 41.4],
                                    }}
                                >
                                    <Geographies geography={geoUrl}>
                                        {({ geographies }) =>
                                            geographies.map((geo) => (
                                                <Geography
                                                    key={geo.rsmKey}
                                                    geography={geo}
                                                    fill="#EAEAEC"
                                                    stroke="#D6D6DA"
                                                />
                                            ))
                                        }
                                    </Geographies>
                                    {markers.map(({ Nom_Activitat, Longitud, Latitud, markerOffset, id }) => {
                                        const businessType = businessTypes[Nom_Activitat];
                                        const markerFill = businessType ? businessType : "#4F46E5";

                                        return (
                                            <Marker key={id} coordinates={[Longitud, Latitud]}>
                                                <circle r={3} fill={markerFill} stroke="#fff" strokeWidth={1} />
                                                <text textAnchor="middle" y={markerOffset} style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}>
                                                    {/* {Nom_Activitat} */}
                                                </text>
                                            </Marker>
                                        );
                                    })}
                                </ComposableMap>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center pt:24 lg:mt-2 lg:mb-12">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6  focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        <Link to="/">Volver</Link>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Map;
