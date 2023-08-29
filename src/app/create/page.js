import Image from "next/image";
import img2 from "/public/images/hoho.jpg";

export default function Create() {
    return(
        <>
        Create!!
        <p><Image src={img2} /></p>
        </>
    );
}