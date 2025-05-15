"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  category: "TIPS" | "HACKS";
  title: string;
  slug: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "airbnb-checklist",
    category: "HACKS",
    title: "Airbnb Cleaning Checklist: Simplify Your Hosting Duties",
    slug: "/blog/airbnb-cleaning-checklist",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "apartment-guide",
    category: "TIPS",
    title: "Comprehensive Cleaning Guide for a Spotless Apartment",
    slug: "/blog/comprehensive-cleaning-guide",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "eco-friendly",
    category: "TIPS",
    title: "7 Eco-Friendly Cleaning Products You Can Make at Home",
    slug: "/blog/eco-friendly-cleaning-products",
    image: "https://images.pexels.com/photos/5824884/pexels-photo-5824884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "spring-cleaning",
    category: "HACKS",
    title: "15-Minute Spring Cleaning Shortcuts That Actually Work",
    slug: "/blog/spring-cleaning-shortcuts",
    image: "https://images.pexels.com/photos/4107292/pexels-photo-4107292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  }
];

export function BlogSection() {
  // We'll only show 2 featured posts in the main section
  const featuredPosts = blogPosts.slice(0, 2);
  
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <span className="uppercase text-xs tracking-wider text-gray-500 font-parkinsans mb-2 block">
              FROM OUR BLOG
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-parkinsans">
              Cleaning Tips & Hacks
            </h2>
          </div>
          <Link 
            href="/blog" 
            className="mt-4 md:mt-0 inline-block py-2 px-8 rounded-full bg-green-100 text-green-800 font-medium hover:bg-green-200 transition-colors font-outfit"
          >
            More Tips
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="flex flex-col group">
              <Link href={post.slug} className="block overflow-hidden rounded-2xl relative h-[280px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="mt-4">
                <span className="text-xs font-medium text-green-600 uppercase tracking-wider font-parkinsans">
                  {post.category}
                </span>
                <h3 className="mt-2">
                  <Link 
                    href={post.slug} 
                    className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors font-outfit"
                  >
                    {post.title}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Optional: Show additional posts in a smaller format */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.slice(2).map((post) => (
            <div key={post.id} className="flex flex-col group">
              <Link href={post.slug} className="block overflow-hidden rounded-xl relative h-[180px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="mt-3">
                <span className="text-xs font-medium text-green-600 uppercase tracking-wider font-parkinsans">
                  {post.category}
                </span>
                <h3 className="mt-1">
                  <Link 
                    href={post.slug} 
                    className="text-sm font-bold text-gray-800 hover:text-green-600 transition-colors line-clamp-2 font-outfit"
                  >
                    {post.title}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
