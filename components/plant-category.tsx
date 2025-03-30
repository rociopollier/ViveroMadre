import Image from "next/image"
import Link from "next/link"

interface PlantCategoryProps {
  name: string
  image: string
}

export default function PlantCategory({ name, image }: PlantCategoryProps) {
  return (
    <Link href="#" className="group">
      <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 group-hover:shadow-xl">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-green-800 group-hover:text-green-600 transition-colors">{name}</h3>
        </div>
      </div>
    </Link>
  )
}

