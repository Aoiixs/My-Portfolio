import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Linking, Pressable, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import project from "../styles/project";

export default function Projects() {
  const {width} = useWindowDimensions();
  return (
  <View style={project.header}>
      <Text style={project.header}>Projects</Text>

    <View style={project.container}>
      {/* PROJECT 1 */}
      
      <View style={[project.card,
        {
          width: width < 900 ? "100%" : "31%",
        },
        
      ]}
      >
        <Text style={project.title}>TuitionQueueTrack</Text>


        <Pressable
        style={({hovered})=>[
          project.imageHover,

          hovered && project.itemHover,
        ]}
        >

        <Image
          source={require("@/assets/images/tuitionQ.png")}
          style={project.image}
          
        />
        </Pressable>

        <Text style={project.description}>
          A real-time web and mobile-based system designed to streamline student payment transactions...
        </Text>
        


        <View style={project.tags}>
          <Text style={project.text}>C++</Text>
          <Text style={project.text}>HTML</Text>
          <Text style={project.text}>CSS</Text>
          <Text style={project.text}>JS</Text>
          <Text style={project.text}>React Native</Text>
          <Text style={project.text}>Python</Text>
          <Text style={project.text}>Flask</Text>
          <Text style={project.text}>MySQL</Text>
          <Text style={project.text}>Bootstrap</Text>
        </View>

          <View style={project.buttonContainer}>
              <TouchableOpacity  style={project.buttons}
              onPress={() => 
            Linking.openURL("https://github.com/Aoiixs/TuitionTrack")}
          >
            <View style={project.Icon}>
              <MaterialCommunityIcons
              name="github"
              size={20}
              color="white"
              />

            </View>
            <Text style={project.buttonText}>Github</Text>

          </TouchableOpacity>
          


        {/*GITHUB */}
          <TouchableOpacity  style={project.buttons}>
            <View style={project.Icon}>
              <MaterialCommunityIcons
              name="open-in-new"
              size={20}
              color="white"
              />
              

            </View>
            <Text style={project.buttonText}>Demo</Text>
          </TouchableOpacity>
           </View>
        
        </View>




      {/* PROJECT 2 */}
      
      <View style={[project.card,
        {
          width: width < 768 ? "100%" : "31%",
        }
      ]}>

        <Text style={project.title}>Campus Event & Activity Appointment System</Text>

        <Pressable
        style={({hovered}) =>[
        project.imageHover,
        hovered && project.itemHover,
      ]}
      >
        <Image
        source={require("@/assets/images/campusE.png")}
        style={project.image}
        />
        </Pressable>

        <Text style={project.description}>
          A web-based platform for managing campus events and appointments...
        </Text>

        <View style={project.tags}>
          <Text style={project.text}>HTML</Text>
          <Text style={project.text}>CSS</Text>
          <Text style={project.text}>JS</Text>
          <Text style={project.text}>Python</Text>
          <Text style={project.text}>Flask</Text>
          <Text style={project.text}>Bootstrap</Text>
          <Text style={project.text}>MySQL</Text>
        </View>
          


          <View style={project.buttonContainer}>

            <TouchableOpacity
          style={project.buttons}
            onPress={() =>
            Linking.openURL(
              "https://github.com/Aoiixs/Campus-Events-Activity-Appointment-System"
              )
            }
          >
            <View style={project.Icon}>
              <MaterialCommunityIcons
              name="github"
              size={20}
              color="white"
              />

            </View>
            <Text style={project.buttonText}>GitHub</Text>
          </TouchableOpacity>



          
        {/*GITHUB */}
          <TouchableOpacity  style={project.buttons}>
            <View style={project.Icon}>
              <MaterialCommunityIcons
              name="open-in-new"
              size={20}
              color="white"
              />

            </View>
            <Text style={project.buttonText}>Demo</Text>
          </TouchableOpacity>

      </View>
      </View>

      {/* PROJECT 3 */}
      <View style={[project.card,
        {
          width: width < 768 ? "100%" : "31%",
        }
      ]}>

             
          <Text style={project.title}>
            Jangle Delivery & Services
        </Text>

        <Pressable
        style={({hovered})=> [
          project.imageHover,
          hovered && project.itemHover,
        ]}
        >
     
        <Image
          source={require("@/assets/images/jangle.png")}
          style={project.image}
        />

        </Pressable>

        
        <Text style={project.description}>
          A food ordering platform that enables users to browse menus and place orders...
        </Text>




         <View style={project.tags}>
          <Text style={project.text}>HTML</Text>
          <Text style={project.text}>CSS</Text>
          <Text style={project.text}>JS</Text>
          <Text style={project.text}>Bootstrap</Text>
         </View> 

          <View style={project.buttonContainer}>


              <TouchableOpacity
        style={project.buttons}
        onPress={() =>Linking.openURL(
            "https://github.com/Aoiixs/Jangle-Delivery-and-Services---Frontend"
          )
        }
      >
        <View style={project.Icon}>
          <MaterialCommunityIcons name="github" size={20} color="white" />
        </View>

        <Text style={project.buttonText}>GitHub</Text>
      </TouchableOpacity>



              <TouchableOpacity
        style={project.buttons}
        onPress={() =>Linking.openURL(
            "https://jangle-delivery-and-services.vercel.app/"
          )
        }
      >
        <View style={project.Icon}>
          <MaterialCommunityIcons name="open-in-new" size={20} color="white" />
        </View>

        <Text style={project.buttonText}>Demo</Text>
      </TouchableOpacity>
          </View>
         
    
      </View>

    
    </View>
    </View>
  );
}