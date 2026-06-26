import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,

  },

  greetings: {
    fontSize: 30,
    color: "#4F46E5",
    fontWeight: "500",
    marginBottom: 50
    
    
  },

  name: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#111111",
    textAlign: "center",
    left: 15
  },

  role: {
    fontSize: 25,
    color: "#444444",
    textAlign: "center",
    marginBottom: 20,
  },

  header: {
    fontSize: 30,
    color: "#666666",
    fontWeight: "500",
    marginBottom: 20,

   
  },

  button: {
    backgroundColor: "#4F46E5",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 200,
    marginTop: 5,
  },

  icon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },


  contactButton: {
    backgroundColor: "#4F46E5",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 200,
    marginTop: 10,
    bottom: 58
    
  },

  contactIcon:{
     flexDirection: "row",
    alignItems: "center",
    gap: 10,
    

  },

  box: {
    fontSize: 15,
    color: "white",
    fontWeight: "600",
  },
});