import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container:{

  flexDirection: "row",
  gap: 20,
  flexWrap: "wrap",
  justifyContent: "space-around"
  
  
  },
  
  header: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#4F46E5",
    marginBottom: 40,
    alignContent: "center",
    

    
  },

  section: {
    marginBottom: 80,
    padding: 10,

    
    
    
  },

  row:{
    marginTop: 20,
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 15,
    alignContent: "center"

  },

  title: {
  marginTop: 10,
  fontSize: 18,
  fontWeight: "bold",
  color: "#4F46E5",
  marginBottom: 10,
  textAlign: "center",
  minHeight: 50,
  
},

  item: {
  fontSize: 15,
  color: "#1f1c1c",
  paddingVertical: 8,
  paddingHorizontal: 20,
  backgroundColor: "#F3F4F6",
  borderRadius: 15,
  textAlign: "center",
  padding: 15,


  },
  itemHover:{
    backgroundColor: "#EFF2FF",
    transform: [{scale: 1.05}],
  }
});