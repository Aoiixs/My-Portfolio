import { StyleSheet } from "react-native";

export default StyleSheet.create({
    
    header:{
        fontSize: 35,
        color: "#4F46E5",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 50
    },

    container:{
    flexWrap: "wrap",
    padding: 20,
    
    gap: 10, // okay lang sa newer RN, pero kung error alisin mo
    backgroundColor: "white",
    justifyContent: "space-between",
    flexDirection: "row"
    },

    title:{
        flex: 1,
        fontSize: 15,
        color: "#111",
        fontWeight: "500",
        marginBottom: 15,


    
    },
    card:{
        marginBottom: 20,
        padding: 16,
        width: "31%", // mas responsive kaysa 320 fixed
        maxWidth: 380,
        backgroundColor: "white",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        
        

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
            

    },
    image:{
        width: "100%",
        height: 250, // importante: wag sobrang taas
        borderRadius: 12,
        resizeMode: "cover",
        marginVertical: 5,
        objectFit: "cover",

        

    },


        
    subtitle:{
        fontSize: 13,
        color: "#444",
        lineHeight: 20,
        marginTop: 8,

    },
    date:{
        fontSize: 13,
        color: "#444",
        lineHeight: 30,
        marginTop: 8,
        

    },

    imageHover:{
        borderRadius: 10,
        width: "100%"
    },

    itemHover:{
        backgroundColor: "#EFF2FF",
        transform: [{scale: 1.02}]

    }
  
    
})