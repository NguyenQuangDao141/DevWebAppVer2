import { useState, useEffect } from "react";
import firebase from "./config";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default function App() {
    const [data, setData] = useState({});

    useEffect(() => {
        const rootRef = firebase.database().ref();
        rootRef.on("value", function (snapshot) {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() });
            } else {
                setData({});
            }
        });
        return () => {
            setData({});
        };
    }, []);

    // console.log(data);
    return (
        <>
            <Navbar />
            <Content data={data} />
            <Footer />
        </>
    );
}
