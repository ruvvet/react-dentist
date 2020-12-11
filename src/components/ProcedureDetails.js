export default function Home({ procedure }) {

const details=[]

    for (const [k, v] of Object.entries(procedure)) {

        details.push([k,v])

    }

    const printDetails = details.map(i => <li>{i[0]}: {i[1]} </li>)


    return (
        <>
          <div>procedure details</div>
          <ul>{printDetails}</ul>

        </>
      );
  };
