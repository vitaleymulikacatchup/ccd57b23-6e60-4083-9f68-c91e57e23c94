"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Sparkles, Flower2, ChefHat, Dumbbell, Building2, Bed, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "product" },
            { name: "Amenities", id: "feature" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grandview Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury at Grandview Hotel"
          description="Indulge in sophisticated comfort with our premium accommodations, world-class amenities, and exceptional hospitality in the heart of the city."
          tag="5-Star Luxury"
          tagIcon={Award}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant hotel lobby with luxurious interior design"
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "product" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Since 1985, Grandview Hotel has been the epitome of luxury hospitality, offering discerning travelers an unforgettable experience where elegance meets exceptional service in every detail."
          buttons={[
            { text: "Learn Our Story", href: "about" },
            { text: "View Awards", href: "#awards" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Premium Amenities"
          description="Discover our world-class facilities designed to enhance your stay"
          tag="Amenities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind in our full-service spa featuring massage therapy, facial treatments, and wellness programs.",
              icon: Flower2
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by our award-winning chefs using the finest local and international ingredients.",
              icon: ChefHat
            },
            {
              title: "State-of-the-Art Fitness",
              description: "Maintain your fitness routine in our fully equipped gym with modern equipment and personal training services.",
              icon: Dumbbell
            },
            {
              title: "Business Center",
              description: "Stay productive with our comprehensive business facilities including meeting rooms and high-speed internet.",
              icon: Building2
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our elegant rooms and suites designed for ultimate comfort"
          tag="Rooms & Suites"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe-room",
              brand: "Grandview Hotel",
              name: "Deluxe King Room",
              price: "$299/night",
              rating: 5,
              reviewCount: "450+",
              imageSrc: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant deluxe king room with luxury bedding"
            },
            {
              id: "junior-suite",
              brand: "Grandview Hotel",
              name: "Junior Suite",
              price: "$449/night",
              rating: 5,
              reviewCount: "320+",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Spacious junior suite with separate living area"
            },
            {
              id: "presidential-suite",
              brand: "Grandview Hotel",
              name: "Presidential Suite",
              price: "$899/night",
              rating: 5,
              reviewCount: "180+",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxurious presidential suite with premium amenities"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Experience the luxury through the eyes of our satisfied guests"
          tag="Guest Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Richardson",
              role: "Corporate Executive",
              testimonial: "Absolutely exceptional service and accommodations. The attention to detail and luxury amenities exceeded all expectations. Will definitely be returning.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Banker",
              testimonial: "The perfect blend of elegance and comfort. The spa services were outstanding and the dining experience was world-class. Highly recommend.",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              testimonial: "From the moment we arrived, the staff treated us like royalty. The suite was magnificent and every detail was perfectly arranged.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Tech Entrepreneur",
              testimonial: "Outstanding hospitality and luxury at its finest. The business facilities are top-notch and the location couldn't be better.",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "5",
              name: "Amanda Foster",
              role: "Real Estate Mogul",
              testimonial: "Grandview Hotel sets the gold standard for luxury hospitality. Every aspect of our stay was flawless and memorable.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Reserve Your Luxury Experience"
          description="Contact our reservation team to book your stay or inquire about our premium services and special packages."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "checkin",
              type: "date",
              placeholder: "Check-in Date",
              required: true
            },
            {
              name: "checkout",
              type: "date",
              placeholder: "Check-out Date",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or questions...",
            rows: 4,
            required: false
          }}
          buttonText="Submit Reservation"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "product" },
                { label: "Amenities", href: "feature" },
                { label: "Dining", href: "#dining" },
                { label: "Spa & Wellness", href: "#spa" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "#concierge" },
                { label: "Business Center", href: "#business" },
                { label: "Events", href: "#events" },
                { label: "Airport Transfer", href: "#transfer" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Guest Services", href: "#services" },
                { label: "Location", href: "#location" },
                { label: "Careers", href: "#careers" }
              ]
            }
          ]}
          copyrightText="© 2024 Grandview Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}