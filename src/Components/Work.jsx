import "../assets/Style/Work.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gym from "../../src/assets/images/gym-image.png";
import portfolio from '../../src/assets/images/portfolio-image.png'
import ai from '../../src/assets/images/ai-image.png'
import ramaai from '../../src/assets/images/ramaai.png'
import crypto from '../../src/assets/images/crypto.png'


const projects = [
  {
    date: "12/04/2023",
    title: "GYM",
    description:
      "I Created a simple Gym website using react, sass and i also use a AOS for animation",
    url: "https://gymkd.netlify.app/",
    imgSrc: gym,
    id: 1,
  },

  {
    date: "25/04/2023",
    title: "SNAKE GAME",
    description: "Classic Snake Game Play and remember old day's.",
    url: "https://snakegamekd.netlify.app/",
    imgSrc:
      "https://www.friv5online.com/files/images/1e/1e020d80dd3ea57aa7aa12e4569596e6.png",
    id: 2,
  },

  {
    date: "01/05/2023",
    title: "Port Folio",
    description: "This is my first portfolio that i created using react",
    url: "https://kd-portfoliyo.vercel.app/",
    imgSrc:
      portfolio,
    id: 3,
  },

  {
    date: "10/05/2023",
    title: "Crypto tracking app",
    description: "This is crypt",
    url: "https://cryptoapp-h4c35o1tm-karandave06.vercel.app/",
    imgSrc:
      crypto,
    id: 4,
  },
  {
    date: "25/05/2023",
    title: "Rama Ai",
    description: "Image generating ai ",
    url: "https://rama-ai.vercel.app/",
    imgSrc:
      ramaai,
    id: 5,
  },

  {
    date: "01/06/2023",
    title: "Gpt 3",
    description: "Beautiful ai website using tailwind css",
    url: "https://gpt3kd.netlify.app/   ",
    imgSrc:
      ai,
    id: 6,
  },
];

const Work = () => {
  return (
    <div id="work">
      <h2> WORK </h2>
      <section>
        <article>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {projects.map((i) => (
              <div key={i.id} className="workItem">
                <img src={i.imgSrc} alt="image is hear" />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a href={i.url} target={"blank"}>
                    Visit Now{" "}
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
