import Certificates from "@/components/Certificates";
import Contacts from "@/components/Contacts";
import Projects from "@/components/Projects";
import Skills from "@/components/skills";
// import Nav from "@/components/nav";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import about from "../styles/about";
import styles from "../styles/homeStyle";



export default function Home(){
    return(
    <View style={{flex: 1}}>
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
        
        {/* <Nav /> */}
        
        <View style={styles.container}>
        {/* <Text style={styles.header}>
            Welcome to my Portfolio!
        </Text> */}
        
        {/* <Text style={styles.greetings}>
        Hi, I'm 
        </Text> */}

          <Text style={styles.name}>
            LUEGI
        </Text>


        <Text style={styles.role}>
            IT Student • Web Development • Embedded Systems Enthusiast
        </Text>
        
        <TouchableOpacity style={styles.button}>
            
            <View style={styles.icon}>
                <MaterialCommunityIcons
                name="folder-open-outline"
                size={25}
                color="white">

                    
                </MaterialCommunityIcons>
        <Text style={styles.box}>View Projects</Text>
        </View>
        </TouchableOpacity>
        
         
        <TouchableOpacity style={styles.contactButton}>
            
            <View style={styles.contactIcon}>
                <MaterialCommunityIcons
                name="handshake-outline"
                size={25}
                color="white">

                    
                </MaterialCommunityIcons>
        <Text style={styles.box}>Contact Me</Text>
        </View>
        </TouchableOpacity>
       
      

       

        <Text style={about.aboutme}>
                About Me
        </Text>


        <Text style={about.description}>
            Hi, I'm Luegi, an aspiring Web Developer and IT student.
            I enjoy building software projects that help me improve my programming and problem-solving skills.
            Currently, I am learning React, TypeScript, and backend development while also exploring Arduino and microcontroller programming.
        </Text>
         <Skills />
        
  </View>

    
    <Projects />
    <Certificates />
    <Contacts />

   </ScrollView>
   </View>
    );
}

