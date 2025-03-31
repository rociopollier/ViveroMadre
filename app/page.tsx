import Image from "next/image"
import { Facebook, Instagram, MessageCircle, Youtube } from "lucide-react"
import ContactForm from "@/components/contact-form"
import PlantCategory from "@/components/plant-category"
import ServiceCard from "@/components/service-card"
import ProductCategory from "@/components/product-category"
import WhatsAppButton from "@/components/whatsapp-button"
import MobileMenu from "@/components/mobile-menu"
import Logo from "@/components/logo"

export default function Home() {
  const whatsappNumber = "+5493547514197"
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  const plantCategories = [
    { name: "Suculentas", image: "/suculentas.png?height=200&width=300" },
    { name: "Cactus", image: "/cactus.png?height=200&width=300" },
    { name: "Flores", image: "/flores.png?height=200&width=300" },
    { name: "Arbustos", image: "/arbustos.png?height=200&width=300" },
    { name: "Plantas de Interior", image: "/plantasdeinterior.png?height=200&width=300" },
    { name: "Árboles", image: "/arboles.png?height=200&width=300" },
    { name: "Semillas Hortalizas", image: "/semillashortalizas.png?height=200&width=300" },
    { name: "Semillas Aromáticas", image: "/semillasaromaticas.png?height=200&width=300" },
    { name: "Semillas Florales", image: "/semillasflorales.png?height=200&width=300" },
    { name: "Semillas de Hierbas para Gatos y Perros", image: "/semillasdehierbasparagatosyperros.png?height=200&width=300" },
    { name: "Semilla de Césped Resiembra Otoñal", image: "/semillasdecespedresiembraotoñal.png?height=200&width=300" },
  ]

  const services = [
    {
      name: "Poda de Árboles",
      description: "Servicio profesional de poda y mantenimiento de árboles para mantener su salud y estética.",
      image: "/podadearboles.png?height=200&width=300",
    },
    {
      name: "Lirios",
      description: "Cultivo y cuidado especializado de lirios para embellecer su jardín con estas elegantes flores.",
      image: "/lirios.png?height=200&width=300",
    },
    {
      name: "Paisajismo",
      description: "Diseño y planificación de espacios verdes para crear ambientes armoniosos y funcionales.",
      image: "/paisajismo.png?height=200&width=300",
    },
    {
      name: "Plantación",
      description: "Servicio completo de plantación para asegurar el correcto desarrollo de sus plantas y jardines.",
      image: "/plantacion.png?height=200&width=300",
    },
    {
      name: "Asesoramiento",
      description: "Consultoría personalizada para el cuidado y mantenimiento de sus plantas y espacios verdes.",
      image: "/asesoramiento.png?height=200&width=300",
    },
  ]

  const productCategories = [
    {
      name: "Macetas",
      description: "Variedad de macetas de diferentes materiales, tamaños y estilos",
      image: "/macetas.png?height=200&width=300",
    },
    {
      name: "Organizadores",
      description: "Muebles y estantes para organizar sus plantas de manera estética",
      image: "/organizadores.png?height=200&width=300",
    },
    {
      name: "Decoración",
      description: "Elementos decorativos para embellecer su jardín y espacios verdes",
      image: "/decoracion.png?height=200&width=300",
    },
    {
      name: "Insumos",
      description: "Tierra, fertilizantes y herramientas para el cuidado de sus plantas",
      image: "/insumos.png?height=200&width=300",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Logo width={50} height={50} className="rounded-full" />
            <h1 className="text-2xl font-bold text-green-800">Vivero Madre</h1>
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <a href="#inicio" className="text-green-700 hover:text-green-500 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#categorias" className="text-green-700 hover:text-green-500 transition-colors">
                  Categorías
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-green-700 hover:text-green-500 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#productos" className="text-green-700 hover:text-green-500 transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-green-700 hover:text-green-500 transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-green-700 hover:text-green-500 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-16 md:py-24 bg-gradient-to-r from-green-100 to-amber-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-6">Más que plantas para tu hogar</h2>
          <p className="text-xl md:text-2xl text-green-700 max-w-3xl mx-auto">
            Traemos vida, color y armonía a cada rincón de tu casa
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-green-700 mb-8">
              En Vivero Madre, encontrarás todas las plantas, árboles, flores y más que estás buscando. Somos una
              empresa familiar dedicada a compartir nuestro amor por las plantas y ponerlo a disposición de todos
              aquellos que nos eligen.
            </p>

            <div className="mt-12 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/imagenreprecentativa.png?height=500&width=1000"
                alt="Variedad de plantas y flores en Vivero Madre"
                width={1000}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plant Categories */}
      <section id="categorias" className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">Nuestras Categorías</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plantCategories.map((category, index) => (
              <PlantCategory key={index} name={category.name} image={category.image} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">Prestación de Servicios</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} name={service.name} description={service.description} image={service.image} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section id="productos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">Otros Productos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {productCategories.map((category, index) => (
              <ProductCategory
                key={index}
                name={category.name}
                description={category.description}
                image={category.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="nosotros" className="py-16 md:py-24 bg-gradient-to-r from-green-100 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">Sobre Nosotros</h2>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <p className="text-lg text-green-700 mb-6">
                Con <span className="font-bold">20 años de experiencia</span>, Vivero Madre es un negocio familiar que
                comenzó en Córdoba con la pasión por las plantas y la naturaleza.
              </p>

              <p className="text-lg text-green-700 mb-6">
                Buscamos contribuir con nuestro trabajo no solo agregando color y vida a tu hogar, sino también creando
                una conexión tanto con tus plantas de interior como con tu jardín. Tú les das vida a las plantas, y
                ellas te devuelven felicidad.
              </p>

              <p className="text-lg text-green-700">
                No hay nada más hermoso que entrar a cualquier espacio y encontrar una planta bellamente cuidada y
                espléndida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">Contáctanos</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-6">Información de Contacto</h3>

              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <MessageCircle className="text-green-600" />
                  <span>WhatsApp: </span>
                  <a href={whatsappUrl} className="text-green-600 hover:underline">
                    {whatsappNumber}
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>Email: </span>
                  <a href="mailto:viveromadre@gmail.com" className="text-green-600 hover:underline">
                    viveromadre@gmail.com
                  </a>
                </p>

                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Ubicación: </span>
                </div>
                <address className="not-italic pl-10 text-green-700">
                  Calle Pública 123, Villa del Dique, Cordoba, Argentina
                </address>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-green-700 mb-6">Síguenos</h3>

                <div className="flex gap-4">
                  <a href="#" className="bg-green-100 hover:bg-green-200 transition-colors p-3 rounded-full">
                    <Instagram className="text-green-700 h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>

                  <a href="#" className="bg-green-100 hover:bg-green-200 transition-colors p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-700 h-6 w-6"
                    >
                      <path d="M9 12 11 14 15 10" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    <span className="sr-only">TikTok</span>
                  </a>

                  <a href="#" className="bg-green-100 hover:bg-green-200 transition-colors p-3 rounded-full">
                    <Youtube className="text-green-700 h-6 w-6" />
                    <span className="sr-only">YouTube</span>
                  </a>

                  <a href="#" className="bg-green-100 hover:bg-green-200 transition-colors p-3 rounded-full">
                    <Facebook className="text-green-700 h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-6">Envíanos un Mensaje</h3>
              <ContactForm whatsappNumber={whatsappNumber} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Logo width={40} height={40} className="rounded-full bg-white" />
              <h2 className="text-xl font-bold">Vivero Madre</h2>
            </div>

            <p className="text-sm text-green-200">
              &copy; {new Date().getFullYear()} Vivero Madre. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton whatsappNumber={whatsappNumber} />
    </main>
  )
}

