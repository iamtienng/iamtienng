export default function YouTube({ id }: { id: string }) {
  return (
    <div className="pb-96 relative h-0 overflow-hidden max-w-full">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}
