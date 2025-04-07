import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import bioImage from "/public/images/the_boss.jpg";
import Image from "next/image";

export default function AboutPage() {
  const certsImagesArray: string[] = ["/cc-cert.png", "/oracle-cert.avif"];
  const certsAltTextArray: string[] = ["ISC2-logo", "oracle-cert-logo"];

  return (
    <>
      <div className="bg-creme">
        <Navbar />
        <p className="text-navy font-nosifer text-6xl text-center mt-4 pt-4 pb-10">
          Eddie P.
        </p>
        <div className="flex flex-row justify-center space-x-4 mt-10 mb-10">
          <div className="border-dashed border-2 border-purple rounded-md">
            <Image
              className="rounded-md"
              src={bioImage}
              alt="site-owner"
              height={400}
              width={400}
            />
          </div>
          <div className="text-navy text-center w-96">
            {/*TODO: ppl don't care 4 wall of text emphasize certain words over others & keep short & sweet */}
            <p>
              Quia fuga eaque quis velit itaque voluptatem. Et impedit quibusdam deserunt
              velit fuga accusantium beatae quam dignissimos consequuntur id dolorem. Ut
              ut et accusantium facere dolor error ipsam consequatur quae ad itaque
              adipisci magni non nobis. Porro deserunt iste molestias suscipit pariatur ut
              deserunt et nemo repellendus nihil. Sequi labore earum non modi. Sit illo
              architecto quia voluptatem distinctio cum numquam. Aut ut ut ut doloribus
              doloremque laborum quos. Ipsam quas non dolorum eum ipsa dicta quod. Aut
              ullam consequatur ut vero est expedita quo in. Cumque doloribus ipsam sit ut
              dolor autem ut ut. Tempora aspernatur debitis doloribus vel quasi nam vel
              provident porro. Rerum perspiciatis unde voluptatem qui tempore quas non
              necessitatibus. Eos asperiores molestiae molestiae nisi autem cumque
              eligendi ut numquam. Quibusdam dicta sapiente fugit quis aut molestias rerum
              debitis quia maxime culpa iure.
            </p>
          </div>
        </div>
        <p className="text-5xl text-center font-poppins font-bold pt-10 text-navy">
          Certifications
        </p>
        <Carousel imagesArray={certsImagesArray} imagesAltTextArray={certsAltTextArray} />
        <Footer />
      </div>
    </>
  );
}
