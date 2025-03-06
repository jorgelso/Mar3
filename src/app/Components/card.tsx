import { useState } from "react";
import Image from "next/image";
import { PersonCard } from "./personCard";

interface CardProps {
    person: PersonCard;
}

export default function Card({ person }: CardProps) {
    const [hoveredField, setHoveredField] = useState<string>("name");

    return (
        <div className="flex flex-col bg-gray-200 w-[40rem] h-80 text-center justify-center items-center p-4 rounded-md">
            <img
                src={person.picture.medium}
                alt="Profile Image"
                className="rounded-full mb-4"
            />

            <div>
                <div className="h-6">
                    {hoveredField === "name" && <h1>Hi, my name is</h1>}
                    {hoveredField === "email" && <h1>My email is</h1>}
                    {hoveredField === "birthday" && <h1>My birthday is</h1>}
                    {hoveredField === "address" && <h1>My address is</h1>}
                    {hoveredField === "phone" && <h1>My phone number is</h1>}
                    {hoveredField === "password" && <h1>My password is</h1>}
                </div>

                <div className="h-6">
                    {hoveredField === "name" && (
                        <h1 className="font-bold text-lg">
                            {person.name.first + " " + person.name.last}
                        </h1>
                    )}
                    {hoveredField === "email" && (
                        <h1 className="font-bold text-lg">{person.email}</h1>
                    )}
                    {hoveredField === "birthday" && (
                        <h1 className="font-bold text-lg">
                            {new Date(person.dob.date).toLocaleDateString()}
                        </h1>
                    )}
                    {hoveredField === "address" && (
                        <h1 className="font-bold text-lg">{`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}`}</h1>
                    )}
                    {hoveredField === "phone" && (
                        <h1 className="font-bold text-lg">{person.phone}</h1>
                    )}
                    {hoveredField === "password" && (
                        <h1 className="font-bold text-lg">{person.login.password}</h1>
                    )}
                </div>
            </div>

            <div className="flex gap-4 mt-10">
                <p
                    className="cursor-pointer w-[70px] text-center hover:font-bold"
                    onMouseEnter={() => setHoveredField("name")}
                >
                    Name
                </p>
                <p
                    className="cursor-pointer w-[70px] text-center hover:font-bold"
                    onMouseEnter={() => setHoveredField("email")}
                >
                    Email
                </p>
                <p
                    className="cursor-pointer w-[70px] text-center hover:font-bold"
                    onMouseEnter={() => setHoveredField("birthday")}
                >
                    Birthday
                </p>
                <p
                    className="cursor-pointer w-[70px] text-center hover:font-bold"
                    onMouseEnter={() => setHoveredField("address")}
                >
                    Address
                </p>
                <p
                    className="cursor-pointer w-[70px] text-center hover:font-bold"
                    onMouseEnter={() => setHoveredField("phone")}
                >
                    Phone
                </p>
                <p
                    className="cursor-pointer w-[70px] text-center hover:font-bold"
                    onMouseEnter={() => setHoveredField("password")}
                >
                    Password
                </p>
            </div>
        </div>
    );
}
