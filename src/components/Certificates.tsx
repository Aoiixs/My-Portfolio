import certificates from "@/styles/certificates";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Image, Pressable, Text, View } from "react-native";
export default function Certificates(){
    return(
        <View style={certificates.header}>
            <Text style={certificates.header}>Certificates</Text>


            <View style={certificates.container}>


                <View style={certificates.card}>
  
                    <Text style={certificates.title}>2nd INNOVEX 2026: International Student Conference</Text>
                    <Pressable
                    style={({hovered}) =>[
                        certificates.imageHover,
                        hovered && certificates.itemHover,
                    ]}
                    >
                        
                        <Image 
                        source={require("@/assets/images/innovex2026.png")}
                        style={certificates.image}
                        />

                        </Pressable>
                  
                    <Text style={certificates.subtitle}>Certificate of Participation</Text>

                    <MaterialCommunityIcons name="calendar-today" size={15} color="#888">
                        <Text style={certificates.date}>June 12, 2026</Text>
                    </MaterialCommunityIcons>
                </View>



                <View style={certificates.card}>
                    <Text style={certificates.title}>3rd Runner-Up – Debugging</Text>

                    <Pressable
                    style={({hovered}) =>[
                        certificates.imageHover,
                        hovered && certificates.itemHover,
                    ]}
                    >
                        <Image
                        source={require("@/assets/images/debugging.png")}
                        style={certificates.image}
                        />
                    </Pressable>
                 
                    <Text style={certificates.subtitle}>GalaXCITE: Celestial Celebrations 2024</Text>
                    <MaterialCommunityIcons name="calendar-today" size={15} color="#888">

                    <Text style={certificates.date}>September 21, 2024</Text>
                    </MaterialCommunityIcons>  
                </View>




                <View style={certificates.card}>
                    <Text style={certificates.title}>Python Bootcamp Mentor - PHINMA UI</Text>

                    <Pressable
                    style={({hovered})=>[
                        certificates.imageHover,
                        hovered && certificates.itemHover,

                    ]}
                    >
                    <Image
                    source={require("@/assets/images/mentoring2025.png")}
                    style={certificates.image}
                    />

                    </Pressable>
                   
                    <Text style={certificates.subtitle}>Certificate of Appreciation</Text>
                    <MaterialCommunityIcons name="calendar-today" size={15} color="#888">
                    <Text style={certificates.date}>December 10, 2025</Text>
                    </MaterialCommunityIcons>
                </View>


                <View style={certificates.card}>
                    <Text style={certificates.title}>Top 2 Best Website Design</Text>

                    <Pressable
                    style={({hovered}) =>[
                        certificates.imageHover,
                        hovered && certificates.itemHover
                    ]}
                    >
                    <Image
                    source={require("@/assets/images/jangleDS.png")}
                    style={certificates.image}
                    />

                    </Pressable>
                   
                    <Text style={certificates.subtitle}>Human Computer Interaction 1</Text>
                    <MaterialCommunityIcons name="calendar-today" size={15} color="#888">
                        <Text style={certificates.date}>April 16, 2025</Text>
                    </MaterialCommunityIcons>
                </View>



                <View style={certificates.card}>
                    <Text style={certificates.title}>Certificate of Completion</Text>
                    <Pressable
                    style={({hovered}) =>[
                        certificates.imageHover,
                        hovered && certificates.itemHover,
                    ]}
                    >

                        
                    
                    <Image
                    source={require("@/assets/images/CID1.png")}
                    style={certificates.image}
                    />

                    </Pressable>

                    <Text style={certificates.subtitle}>CID 2025 | Challenge Master Participation</Text>
                    <MaterialCommunityIcons name="calendar-today" size={15} color="#888">
                        <Text style={certificates.date}>September 10, 2025</Text>
                    </MaterialCommunityIcons>
                    </View>
            </View>

        </View>
    )
}


