import { AiFillLinkedin, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

const SocialLinks = () => {
  return (
    <div className="text-5xl flex justify-center gap-16 py-5 text-gray-600 dark:text-gray-400">
      <a target="_blank" href="https://www.instagram.com/iamtienng/">
        <AiFillInstagram className="cursor-pointer" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/iamtienng/">
        <AiFillLinkedin className="cursor-pointer" />
      </a>
      <a target="_blank" href="https://www.youtube.com/@iamtienng">
        <AiFillYoutube className="cursor-pointer" />
      </a>
    </div>
  );
};

export default SocialLinks;
