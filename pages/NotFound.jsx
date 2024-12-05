const { useNavigate, useParams } = ReactRouterDOM;

export function NotFound() {
  const { "*": url } = useParams();
  const navigate = useNavigate();

  return (
    <section className="home">
      <h2>Invalid url </h2>
      <p>{url} is not a valid url</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go home
      </button>
    </section>
  );
}
