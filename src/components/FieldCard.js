import Link from "next/link";

function FieldCard({
  icon,
  fieldHref,
  fieldTitle,
  fieldDescription,
  fieldListTitle,
  fieldList,
}) {
  return (
    // <Link href="/kd">
    //     <div className="transition ease-in-out delay-150 hover:-translate-y-1 bg-gray-200 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-100 duration-300 text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-200 flex-1">
    //     <FaKeyboard className="text-5xl" />
    //     <h3 className="text-lg font-medium pt-8 pb-2 ">
    //         Keycap Designing
    //     </h3>
    //     <p className="py-2">
    //         From a passion for the beauty of custom high end mechanical
    //         keyboards. The world of keyboard is where I apply my knowledge
    //         of art to have the opportunity to create real creation.
    //     </p>
    //     <h3 className="text-lg font-medium pt-8 pb-2">Tools I use</h3>
    //     <p className="text-gray-800 py-1">Blender</p>
    //     <p className="text-gray-800 py-1">Moment of Inspiration</p>
    //     <p className="text-gray-800 py-1">Adobe Illustrator</p>
    //     <p className="text-gray-800 py-1">Adobe Photoshop</p>
    //     </div>
    // </Link>
    <Link href={fieldHref}>
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 bg-gray-200 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-100 duration-300 text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-200 flex-1">
        {icon}
        <h3 className="text-lg font-medium pt-8 pb-2  ">{fieldTitle}</h3>
        <p className="py-2">{fieldDescription}</p>
        <h3 className="text-lg font-medium pt-8 pb-2">{fieldListTitle}</h3>
        {fieldList.map((listItem) => (
          // eslint-disable-next-line react/jsx-key
          <p className="text-gray-800 py-1">{listItem}</p>
        ))}
      </div>
    </Link>
  );
}

export default FieldCard;
