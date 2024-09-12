import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl text-[#004AAD] sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 relative">
        <span className="relative z-10">What People are saying</span>
        <span
          className="absolute inset-0 text-black z-0"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000",
          }}
          aria-hidden="true"
        >
          What People are saying
        </span>
      </h2>

      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-[#004AAD] rounded-md p-6 text-md border border-neutral-800">
              <p className="text-[#101720]">{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-[#101720 ]">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
