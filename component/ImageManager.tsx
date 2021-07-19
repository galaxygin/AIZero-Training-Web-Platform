import Image from "next/image";

export function showImage(src: string) {
    return <Image src={src} width={600} height={400} />
}