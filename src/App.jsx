import "./App.scss";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

// Assets
import statue from "./images/statue.jpg";
import arrow from "./images/arrow-right.svg";

function App() {
  let app = useRef(null);
  let image = useRef(null);
  let text = useRef(null);

  useEffect(() => {
    const headlineFirst = text.children[0].children[0].children[0];
    const headlineSecond = text.children[0].children[1].children[0];
    const headlineThird = text.children[0].children[2].children[0];
    const contentP = text.children[1];
    const contentB = text.children[2];

    gsap.fromTo(
      [headlineFirst, headlineSecond, headlineThird],
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 100,
        y: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.3, // jeda waktu antara setiap elemen
      }
    );

    gsap.fromTo(
      [contentP, contentB],
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1, // ubah opacity menjadi 1
        y: 0,
        duration: 1,
        ease: "power1.in",
        stagger: 0.1,
      }
    );

    gsap.fromTo(
      image.firstElementChild,
      {
        y: 1000,
      },
      {
        y: 0,
        duration: 2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      image.firstElementChild.firstElementChild,
      {
        scale: 2,
      },
      {
        scale: 1,
        duration: 1.6,
        ease: "power3.out",
      }
    );

    // gsap
    //   .timeline()
    //   .from(image.firstElementChild.firstElementChild, { scale: 2 })
    //   .to(
    //     image.firstElementChild,
    //     { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
    //     0
    //   )
    //   .to(image.firstElementChild, { scale: 0.95, duration: 1 });
  }, []);

  return (
    <div className="hero" ref={(el) => (app = el)}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={(el) => (text = el)}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Find Your Words</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Faster Than Ever
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    with FindMyWord.
                  </div>
                </div>
              </h1>
              <p>
                This is an application that can help you search for words in a
                document quickly and easily. You only need to enter the keyword
                you want to search for, and the application will display the
                search results instantly.
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="row" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images" ref={(el) => (image = el)}>
            <div className="mask">
              <img src={statue} className="statue" alt="statue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
