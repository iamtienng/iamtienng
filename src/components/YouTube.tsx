export default function YouTube({ id }: { id: string }) {
  return (
    <div className="position: relative padding-bottom: 56.25% height: 0 overflow: hidden max-width: 100%">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className="position: absolute top: 0 left: 0 width: 100% height: 100% border: 0"
      />
    </div>
  );
}
