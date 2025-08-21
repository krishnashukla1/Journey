import react ,{useState} from "react";
import testimonial from "../assets/images/testimonial-1.png"; // Adjust the path as necessary
import testimonial1 from "../assets/images/testimonial-1.png"; // Adjust the path as necessary
import testimonial2 from "../assets/images/testimonial-2.png"; // Adjust the path as necessary
import testimonial3 from "../assets/images/testimonial-2.png"; // Adjust the path as necessary
import testimonial4 from "../assets/images/testimonial-4.png"; // Adjust the path as necessary

const testimonials = [
  {
    img: testimonial1,
    text: `"I travelled to the dream destination and it was an indelible moment .... A big thanks to the best travel agency in Andaman for making this happen hassle-free..."`,
    name: "Krishna Jayan",
    rating: 5,
  },
  {
    img: testimonial2,
    text: `"Amazing experience! Everything was perfectly organized. Highly recommend Journey Empires for hassle-free Andaman trips."`,
    name: "Anjali Menon",
    rating: 5,
  },
  {
    img: testimonial3,
    text: `"It was my first trip to Andaman, and it couldn’t have been better. Hotels and guides were perfect."`,
    name: "Ravi Kumar",
    rating: 4,
  },
  {
    img: testimonial4,
    text: `"Superb service! Right from airport pickup to sightseeing everything was smooth. Will travel again."`,
    name: "Meera Das",
    rating: 5,
  },
];

const Testimonials = () => {

    const [activeIndex, setActiveIndex] = useState(0);

  const testimonial = testimonials[activeIndex];


  return (
    // <div className="bg-white p-6 grid-cols-2 rounded-lg shadow-md mb-8">
    <div className="grid grid-cols-1  gap-8 items-center">

      {/* <h2 className="text-2xl italic font-sm mb-6">Helping Travellers to experience the most exciting trip at Andaman Islands.</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="text-center">
          <h3 className="font-bold text-5xl">19+</h3>
          <p className="font-bold">PRO GUIDES</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-5xl">15k+</h3>
          <p className="font-bold">PACKAGES SOLD</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-5xl">53k+</h3>
          <p className="font-bold">TRAVELLERS SERVED</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-5xl">8+</h3>
          <p className="font-bold">YEAR SERVING</p>
        </div>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg flex items-start gap-4">
        <img 
          src={testimonial} 
          alt="Happy traveler" 
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="italic mb-4">
            "I travelled to the dream destination and it was an indelible moment .... A big thanks to the best travel agency in Andaman for making this happen hassle-free... I will definitely recommend Journey Empires if anyone wants to travel to Andaman."
          </p>
          <p className="font-semibold">- Krishna Jayan</p>
          <div className="flex mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-yellow-400">★</span>
            ))}
          </div>
        </div>
      </div> */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-4xl italic mb-10">
        Helping Travellers to experience the most exciting trip at Andaman Islands.
      </h2>

      <div className="grid grid-cols-4 gap-6 mb-20">
        <div className="text-center">
          <h3 className="font-bold text-5xl">19+</h3>
          <p className="font-bold">PRO GUIDES</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-5xl">15k+</h3>
          <p className="font-bold">PACKAGES SOLD</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-5xl">53k+</h3>
          <p className="font-bold">TRAVELLERS SERVED</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-5xl">8+</h3>
          <p className="font-bold">YEAR SERVING</p>
        </div>
      </div>
    </div>

    {/* RIGHT TESTIMONIAL */}
    {/* <div className="bg-gray-100 p-6 rounded-lg flex items-start gap-4">
      <img 
        src={testimonial} 
        alt="Happy traveler" 
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <p className="italic mb-4">
          "I travelled to the dream destination and it was an indelible moment .... 
          A big thanks to the best travel agency in Andaman for making this happen hassle-free... 
          I will definitely recommend Journey Empires if anyone wants to travel to Andaman."
        </p>
        <p className="font-semibold">- Krishna Jayan</p>
        <div className="flex mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400">★</span>
          ))}
        </div>
      </div>
    </div> */}


     <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      {/* Testimonial Content */}
      <div className="flex items-start gap-4">
        <img
          src={testimonial.img}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="italic mb-4 text-2xl">{testimonial.text}</p>
          <p className="font-semibold">- {testimonial.name}</p>
          <div className="flex mt-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bullet Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>


  </div>
</div>

    </div>

    
  );
};

export default Testimonials;