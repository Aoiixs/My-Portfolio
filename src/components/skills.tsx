import { BackendIcons, FrontendIcons, HardwareIcons, ToolsIcons } from "@/components/Icons";
import skills from "@/styles/skills";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, Text, useWindowDimensions, View } from "react-native";


export default function Skills() {
    const {width} = useWindowDimensions();
    const sectionWidth = width < 768? "100%" : "25%";
    return(

        <>
    <Text style = {skills.header}>Skills</Text>
       <View style={skills.container}>
        
        {/* FRONTEND */}
     

        <View style={[skills.section,
            {
              width: sectionWidth,

                
            },
        ]}>

            <Pressable
            style={({ hovered}) => [
                skills.item,
                hovered && skills.itemHover,
            ]}
            >
            <FrontendIcons />
            <Text style={skills.title}>Frontend</Text>

            </Pressable>
          
            <View style={skills.row}>

                <Pressable
                style={({ hovered }) => [
                    skills.item,
                    hovered && skills.itemHover,

                ]}
                >
                <FontAwesome name="html5" size={20} color="#111">
                <Text style={skills.item}>HTML</Text>
                </FontAwesome>

                </Pressable>

                <Pressable
                style={({ hovered}) => [
                    skills.item,
                    hovered && skills.itemHover,
                ]}
                >
                <FontAwesome name="css3" size={20} color="#111">
                <Text style={skills.item}>CSS</Text>
                </FontAwesome>
                </Pressable>
               
               <Pressable
               style={({hovered})=>[
                skills.item,
                hovered && skills.itemHover,

               ]}
               >
                
                <FontAwesome5 name ="js" size={20} color="#111">
                <Text style={skills.item}>Javascript</Text>
                </FontAwesome5>
               </Pressable>
             

               <Pressable
               style={({hovered}) => [
                skills.item,
                hovered && skills.itemHover,

               ]}
               >
                <FontAwesome5 name="react" size={20} color="#111">
                <Text style={skills.item}>React</Text>
                </FontAwesome5>

               </Pressable>
             
            </View>
        </View>

        {/* BACKEND */}
        <View style={[skills.section,
            {
                 width: sectionWidth,


            },
        ]}>

               <Pressable
               style={({hovered}) => [
                skills.item,
                hovered && skills.itemHover,

               ]}
               >
                <BackendIcons />
                <Text style={skills.title}>Backend</Text>
               </Pressable>
            

            <View style={skills.row}>


                <Pressable
                style={({hovered}) => [
                    skills.item,
                    hovered && skills.itemHover,

                ]}
                >
                <FontAwesome5 name="python" size={20} color="#111">
                <Text style={skills.item}>Python</Text>
                </FontAwesome5>
                </Pressable>
                

                <Pressable
                style={({hovered}) => [
                    skills.item,
                    hovered && skills.itemHover,

                ]}
                >
                <MaterialCommunityIcons name="flask" size={20} color="#111">
                <Text style={skills.item}>Flask</Text>
                </MaterialCommunityIcons>

                </Pressable>

                <Pressable
                style={({hovered}) => [
                    skills.item,
                    hovered && skills.itemHover,
                ]}
                >
                    
                    <MaterialCommunityIcons name="database" size={20} color="#111">
                    <Text style={skills.item}>MySQL</Text>

                    </MaterialCommunityIcons>

                </Pressable>
                
            </View>
        </View>

        {/* TOOLS */}
        <View style={[skills.section,
            {
                      width: sectionWidth,


            },
        ]}>

            <Pressable
            style={({hovered}) => [
                skills.item,
                hovered && skills.itemHover,
            ]}
            >
                <ToolsIcons />
                <Text style={skills.title}>Tools</Text>
            </Pressable>
           
            
            <View style={skills.row}>

                <Pressable
                style={({hovered}) => [
                    skills.item,
                    hovered && skills.itemHover,
                ]}
                >
                    <MaterialCommunityIcons name="git" size={20} color="#111">
                    <Text style={skills.item}>Git</Text>
                    </MaterialCommunityIcons>

                </Pressable>


                <Pressable
                style={({hovered}) => [
                    skills.item,
                    hovered && skills.itemHover,
                ]}
                >

                     <MaterialCommunityIcons name="github" size={20} color="#111">
                    <Text style={skills.item}>GitHub</Text>
                    </MaterialCommunityIcons>
                </Pressable>


                <Pressable
                style={({hovered}) => [
                    skills.item,
                    hovered && skills.itemHover,
                ]}
                >
                    <MaterialCommunityIcons name="microsoft-visual-studio-code" size={20} color="#111">
                    <Text style={skills.item}>VS Code</Text>

                    </MaterialCommunityIcons>
                </Pressable>
             
            </View>
        </View>

        {/* HARDWARE */}
        <View style={[skills.section,
            {
            width: sectionWidth,


            },
        ]}>
            <Pressable
            style={({hovered}) => [
                skills.item,
                hovered && skills.itemHover,
            ]}
            >
                <HardwareIcons />
                <Text style={skills.title}>Hardware | Embedded </Text>      

            </Pressable>
           
                <View style={skills.row}>

                    <Pressable
                    style={({hovered}) =>[
                        skills.item,
                        hovered && skills.itemHover,
                    ]}
                    >
                        <MaterialCommunityIcons name="robot" size={20} color="#111">
                        <Text style={skills.item}>Microcontrollers</Text>
                        </MaterialCommunityIcons>
                            
                    </Pressable>


                    <Pressable 
                    style ={({hovered}) => [
                        skills.item,
                        hovered && skills.itemHover,
                    ]}
                    >

                        <MaterialCommunityIcons name="chip" size={20} color="#111">
                        <Text style={skills.item}>Arduino</Text>
                        </MaterialCommunityIcons>
                    </Pressable>

                    <Pressable
                    style={({hovered}) => [
                        skills.item,
                        hovered && skills.itemHover
                    ]}
                    >

                        <MaterialCommunityIcons name="cable-data" size={20} color="#111">
                        <Text style={skills.item}>Circuit Design & Wiring</Text>

                        </MaterialCommunityIcons>
                    </Pressable>
                 
                </View>
                </View>
                </View>
                </>
                
                
    

    )
}

      