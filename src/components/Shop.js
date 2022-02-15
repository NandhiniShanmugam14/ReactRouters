import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://api.sampleapis.com/coffee/hot");
    const newitems = await data.json();
    console.log(newitems);
    setItems(newitems);
  };

  return (
    <div>
      <h1>Coffee Titles</h1>
      {items.map((item) => (
        <h1 key={item.id}>
          <Link to={ `/shop/${item.id}`}>{item.title}</Link>
          {/* <Link to={{ pathname: `/shop/${item.id}`, state: {title : item.title}}}>{item.title}</Link> */}
        </h1>
      ))}
    </div>
  );
}

export default Shop;

// class Shop extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         items: {},
//         isLoaded: false,
//       };
//     }

//     componentDidMount() {
//       fetch("https://api.sampleapis.com/coffee/hot")
//         .then((res) => {
//           return res.json();
//         })
//         .then((json) => {
//           this.setState({
//             isLoaded: true,
//             items: json,
//           });
//         });
//     }
//     render() {
//       const { isLoaded, items } = this.state;
//       if (!isLoaded) {
//         return <div>Loading</div>;
//       } else {
//         return (
//           <div>
//             <ul>
//               {items.map((item) => (
//                 <li>{item.title}</li>
//               ))}
//             </ul>
//           </div>
//         );
//       }
//     }
//   }
