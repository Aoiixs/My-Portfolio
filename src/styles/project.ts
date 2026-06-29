import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexWrap: "wrap",
    padding: 20,

    justifyContent: "center",
    flexDirection: "row",
    gap: 40
    
  },

  header: {
    fontSize: 35,
    color: "#4F46E5",
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  
  },

  card: {
    marginBottom: 20,
    padding: 16,
    width: "31%", // mas responsive kaysa 320 fixed
    maxWidth: 380,
    backgroundColor: "white",
    borderRadius: 16,
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxHeight: 450,    
    
    

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    
  },

  image: {
    width: "100%",
    height: 180, // importante: wag sobrang taas
    borderRadius: 12,
    resizeMode: "cover",
    marginVertical: 5,
    objectFit: "cover",

  },
  title: {
    fontSize: 15,
    color: "#111",
    fontWeight: "500",
    marginBottom: 20,

  },


  description: {
    fontSize: 13,
    color: "#444",
    lineHeight: 13,
    marginTop: 8,
  },

  

  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    gap: 8,
  },

  tags: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    
    
  },

  text:{
    padding: 0,
    paddingHorizontal: 10,
    paddingVertical: 1,
    backgroundColor: "#eeeeef",
    borderRadius: 15,
    color: "#4F46E5",

    fontSize: 13,
    fontWeight: 400,
    textAlign: "center",
    alignSelf: "center",
    top: 20

      

    
  },
 buttons: {
  backgroundColor: "#4F46E5",
  marginTop: 15,
  borderRadius: 10,
  width: 150,
  height: 40,
  alignItems: "center",
  marginLeft: 8,

  shadowColor: "#4F46E5",
  shadowOpacity: 1,
  shadowRadius: 12,
  elevation: 10,

},
buttonText: {
  color: "#fff",
  fontWeight: "600",
  fontSize: 14,
  bottom: 10

    

  },
  Icon:{
    right: 50,
    top: 10
  },

  imageHover:{
    borderRadius: 15,
    width: "100%"
    


  },
  itemHover:{
    backgroundColor: "#EFF2FF",
    transform: [{scale: 1.02}],
  },
  buttonContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 20,
  }
});