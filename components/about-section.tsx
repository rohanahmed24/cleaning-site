"use client"

import Image from "next/image"
import { ExpandableItem } from "./expandable-item"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 font-parkinsans">
              WHO WE ARE
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-parkinsans">
              Transform Your Space
              <br />
              Into a Sanctuary
            </h3>
            <p className="text-gray-600 mb-10 leading-relaxed max-w-lg font-outfit">
              We strive to create a fair, low-stress, and empowering workplace for our technicians while championing
              sustainability by reducing carbon emissions through advanced green technology and eco-friendly practices.
            </p>

            <div className="space-y-4 mb-10">
              <ExpandableItem title="Experienced & friendly maids">
                <p className="text-gray-600 font-outfit">
                  Our team consists of highly trained and friendly cleaning professionals who are dedicated to providing
                  exceptional service. Each member undergoes extensive training to ensure they meet our high standards
                  of quality and customer service.
                </p>
              </ExpandableItem>

              <ExpandableItem title="Vetted & screened professionals">
                <p className="text-gray-600 font-outfit">
                  We carefully vet and screen all our cleaning professionals to ensure they are trustworthy and
                  reliable. Background checks, reference verification, and skills assessment are part of our
                  comprehensive hiring process.
                </p>
              </ExpandableItem>
            </div>

            <a
              href="#"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-8 rounded-full transition-colors font-outfit"
            >
              Learn More
            </a>
          </div>

          <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Professional cleaner spraying and wiping surface"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
