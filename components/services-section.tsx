import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 font-parkinsans">SERVICES</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-parkinsans">
            Cleaning Services for Just
            <br />
            About Anyone
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* House Cleaning Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col h-full">
            <div>
              <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="House cleaning"
                  fill
                  className="object-cover opacity-30"
                />
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-600 relative z-10">
                  <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 font-parkinsans">House Cleaning</h4>
              <ul className="space-y-3">
                <ServiceItem text="Regular Cleaning" />
                <ServiceItem text="Deep Cleaning" />
                <ServiceItem text="Moving Cleaning" />
                <ServiceItem text="Post-Construction Cleaning" />
              </ul>
            </div>
            <div className="mt-auto pt-6">
              <Link
                href="/services/house-cleaning"
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-full transition-colors w-full justify-center font-outfit"
              >
                Learn more
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Short Term Rentals Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col h-full">
            <div>
              <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Rental cleaning"
                  fill
                  className="object-cover opacity-30"
                />
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-600 relative z-10">
                  <path
                    fill="currentColor"
                    d="M12,20L8.4,15.2C9.4,14.45 10.65,14 12,14C13.35,14 14.6,14.45 15.6,15.2L12,20M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H20V6H4M12,7L16,11H13.5V16H10.5V11H8L12,7Z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 font-parkinsans">Short Term Rentals</h4>
              <ul className="space-y-3">
                <ServiceItem text="Turnover Service" />
                <ServiceItem text="Inventory Management" />
                <ServiceItem text="Laundry Service" />
              </ul>
            </div>
            <div className="mt-auto pt-6">
              <Link
                href="/services/short-term-rentals"
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-full transition-colors w-full justify-center font-outfit"
              >
                Learn more
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Commercial Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col h-full">
            <div>
              <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1613323593608-abc90fec84ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Commercial cleaning"
                  fill
                  className="object-cover opacity-30"
                />
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-600 relative z-10">
                  <path
                    fill="currentColor"
                    d="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 font-parkinsans">Commercial</h4>
              <ul className="space-y-3">
                <ServiceItem text="Office Spaces" />
                <ServiceItem text="End of Tenancy" />
                <ServiceItem text="Educational Institutions" />
                <ServiceItem text="Healthcare Settings" />
              </ul>
            </div>
            <div className="mt-auto pt-6">
              <Link
                href="/services/commercial"
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-full transition-colors w-full justify-center font-outfit"
              >
                Learn more
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Satisfaction Guarantee Card */}
          <div className="bg-green-100 rounded-3xl p-6 flex flex-col h-full">
            <div>
              <h4 className="text-2xl font-bold text-green-600 text-center mb-4 font-parkinsans">
                100%
                <br />
                Satisfaction
                <br />
                Guarantee
              </h4>
              <ul className="space-y-3">
                <GuaranteeItem text="No contracts or commitments" />
                <GuaranteeItem text="Easy last-minute bookings" />
                <GuaranteeItem text="Secure online payments" />
              </ul>
            </div>
            <div className="mt-auto pt-6">
              <Link
                href="/get-quote"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full transition-colors w-full justify-center font-outfit"
              >
                Get Price
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ServiceItemProps {
  text: string
}

function ServiceItem({ text }: ServiceItemProps) {
  return (
    <li className="flex items-center">
      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
      <span className="text-gray-600 font-outfit">{text}</span>
    </li>
  )
}

function GuaranteeItem({ text }: ServiceItemProps) {
  return (
    <li className="flex items-center">
      <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
      <span className="text-green-800 font-outfit">{text}</span>
    </li>
  )
}
