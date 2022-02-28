import { useState, useEffect } from "react";
import firebase from "./config";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default function App() {
    const [data, setData] = useState({});
    const [search, setSearch] = useState("");
    const [newData, setnewData] = useState([]);

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

    useEffect(() => {
        let newData = [];
        let index = 1;
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                const element = data[key];
                if (
                    element.bedId.toUpperCase().indexOf(search.toUpperCase()) > -1 ||
                    element.name.toUpperCase().indexOf(search.toUpperCase()) > -1
                ) {
                    newData.push({
                        index: index,
                        velo: element.velo,
                        time: element.time,
                        stt: element.stt,
                        name: element.name,
                        bedId: element.bedId,
                        calibVelo: element.calibVelo,
                    });
                    index++;
                }
            }
        }
        setnewData(newData);
    }, [search, data]);

    return (
        <>
            <Navbar search={search} setSearch={setSearch} />
            <Content data={newData} />
            <Footer />
        </>
    );
}
