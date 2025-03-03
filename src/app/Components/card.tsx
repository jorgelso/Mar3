import Image from 'next/image';

export default function Sidebar() {
    return (
        <div className="flex flex-col bg-gray-200 w-full min-h-full">
            <p>hi my name is</p>
            <h1>name</h1>
            <Image 
                src=""  
                alt="pfp"
                width={200}  
                height={200}
            />
        </div>
    );
}