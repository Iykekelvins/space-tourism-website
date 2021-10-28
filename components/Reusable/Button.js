import Link from "next/link";

const Button = () => {
  return (
    <div className="btn-container">
      <Link href="/destinations">
        <a>
          <button className="btn flex-ac-jc">EXPLORE</button>
        </a>
      </Link>
    </div>
  );
};

export default Button;
