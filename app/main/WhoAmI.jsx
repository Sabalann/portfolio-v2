'use client'
import Image from "next/image";
import { useState } from "react";


export default function WhoAmI() {
    const [selectedAudience, setSelectedAudience] = useState("everyone");
    const arrowSrc = "/arrow.png"

    const textOptions = {
        everyone: "Welkom! Ik ben Sabalan en ik hou ervan om digitale ervaringen te creëren. Mijn focus ligt voornamelijk op het ontwikkelen van websites, maar ik ben ook actief in het maken van games, het bewerken van video’s en foto’s en nog veel meer. Kortom, ik ben een veelzijdige maker met een brede creatieve interesse.",
        recruiters: "Ik ben een front-end developer met 2 jaar ervaring. Ik heb technologiën als Nextjs, Reactjs en Tailwind onder de knie. Bovendien ben ik bezig met het behalen van mijn Computer Science bachelor diploma.",
        clients: "Heb je een website nodig die een bepaald gevoel moet kunnen oproepen? Eentje die mooi, uniek, snel en passend bij jou of jouw bedrijf is? Goed nieuws! Je hoeft niet verder te zoeken."
    };

    return (
        <>
            <div className="intro">
                <div className="flex gap-4">
                    {/* <Image className="arrow-img" src={arrowSrc} width={50} height={50} alt="arrow"></Image> */}
                    {["everyone", "recruiters", "clients"].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                        type="radio"
                        name="audience"
                        value={option}
                        checked={selectedAudience === option}
                        onChange={(e) => setSelectedAudience(e.target.value)}
                        className="hidden"
                        />
                        <span
                        className={`options py-2 text-base transition-all duration-500 ease-in-out ${
                            selectedAudience === option ? " text-white" : "options text-gray-400"
                        }`}
                        >
                        {option === "everyone"
                            ? "Voor iedereen"
                            : option === "recruiters"
                            ? "Recruiters"
                            : "Website-nodig-hebbers"}
                        </span>
                    </label>
                    ))}
                </div>

                <h1 className="text-white text-4xl">
                    {textOptions[selectedAudience]}

                </h1>
            </div>
        </>
    );
}