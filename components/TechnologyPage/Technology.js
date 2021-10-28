import { useState, useEffect } from "react";
import { technology } from "../../public/data";
import useMediaQuery from "../../hooks/useMediaQuery";
import Image from "next/image";

const Technology = () => {
  const [value, setValue] = useState(0);
  const { name, images, description } = technology[value];
  const screen = useMediaQuery("(max-width: 895px)");
  const [landscape, setLandscape] = useState(false);

  useEffect(() => {
    if (screen) {
      setLandscape(true);
    } else {
      setLandscape(false);
    }
  }, [screen]);

  return (
    <div className="technology--container container">
      <h4>
        <span>03</span> SPACE LAUNCH 101
      </h4>
      <div className="flex-ac technology--content">
        <div className="technology--left flex-ac">
          <ul className="technology--tabs flex-ac">
            {technology.map((tech, index) => (
              <li
                onClick={() => setValue(index)}
                className={
                  value === index
                    ? "technology--active flex-ac-jc"
                    : "flex-ac-jc"
                }
                key={index}
              >
                {tech.id}
              </li>
            ))}
          </ul>
          <div className="technology--left--info">
            <h4>THE TERMINOLOGY…</h4>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="technology--right">
          <Image
            src={landscape ? images.landscape : images.portrait}
            width={landscape ? 900 : 415}
            height={landscape ? 310 : 427}
            alt={`image of ${name}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
