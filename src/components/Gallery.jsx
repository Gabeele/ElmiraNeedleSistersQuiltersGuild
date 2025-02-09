import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  // Initially show 6 items
  const [visibleItems, setVisibleItems] = useState(6);

  // Generate quilt gallery items dynamically
  const quiltGalleryItems = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    image: `/src/assets/img/Quilt_${index + 1}.jpg`,
    title: `Quilt #${index + 1}`,
    artist: 'Guild Member'
  }));

  const loadMore = () => {
    setVisibleItems(prev => prev + 6);
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-primary mb-4">Our Quilts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of beautiful quilts created by our talented guild members.
            Each piece tells a unique story and showcases the diversity of quilting styles in our community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {quiltGalleryItems.slice(0, visibleItems).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
        {visibleItems < quiltGalleryItems.length && (
          <div className="text-center">
            <button
              onClick={loadMore}
              className="bg-secondary hover:bg-primary text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Load More Quilts
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
