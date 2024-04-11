export type Product = {
    id: string;
    name: string;
    price: number;
    currency: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
}

export type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    currency: string;
    image?: string;
}