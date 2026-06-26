import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container:{
      marginBottom: 50
    },
    title:{
        fontSize: 35,
        fontWeight: "bold",
        color: "#4F46E5",
        textAlign: "center",
        padding: 30
    },
    row:{
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 30,
        gap: 40,
        alignSelf: "center",
  
        
    },
    item:{
        padding: 15,
        fontSize: 15
        
      
    },
    gitHubLink:{
        color: "#333"
    },
    gitHubLinkHover:{
        color: "#4F4E65",
        textDecorationLine: "underline"
    }
});