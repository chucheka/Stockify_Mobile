import React,{useEffect} from "react";
import { View,Text} from "react-native";

function Home({title}) {

    useEffect(() => {
        console.log("Application Did Mount")
    }, [])

    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default Home
