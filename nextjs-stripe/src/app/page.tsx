import Image from "next/image";
import { data } from "../../data/products";
import ProductCard from "@/components/productCard";

export default function Home() {
  return (
   <section className="w-full h-full mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-white">
    <h2 className="text-4xl text-black py-8">Products</h2>

    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
   </section>
  );
}
