import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container:{
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 100,
    alignContent: "center",
    
  },
  
  header: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#4F46E5",
    marginBottom: 50,
    alignContent: "center",
    

    
  },

  section: {
    marginBottom: 50,
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
  marginBottom: 12,
  textAlign: "center",
},

  item: {
  fontSize: 15,
  color: "#333333",
  paddingVertical: 8,
  paddingHorizontal: 12,
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