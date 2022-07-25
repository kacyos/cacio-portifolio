import "./styles.scss";

interface IAnimatedLetters {
  animatedText: string;
  index: number;
  className: string;
}

const AnimatedLetters = ({
  animatedText,
  index,
  className,
}: IAnimatedLetters) => {
  const textArray = animatedText.split("");

  return (
    <span>
      {textArray.map((char, i) => (
        <span key={`${char}_${i}`} className={`${className} _${i + index}}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
