export default function Home({ procedure }) {
    console.log('hi', procedure)

    const details = () => {
    for (const [k, v] of Object.entries(procedure)) {
        console.log(k,v)
      return (
        <li>
          {k}:{v}
        </li>
      );
    }
  };

  return (
    <>
      <div>procedure details</div>
      <div>{details()}</div>
    </>
  );
}
