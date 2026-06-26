import contacts from "@/styles/contacts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Linking, Pressable, Text, TouchableOpacity, View, } from "react-native";

export default function Contacts() {
    return(
        <View style={contacts.container}>
            <Text style={contacts.title}>Contact Me</Text>


            <View style={contacts.row}>
                <Pressable
                style={({hovered})=>[
                    contacts.gitHubLink,
                    hovered && contacts.gitHubLinkHover,
                ]}
                >
                    <TouchableOpacity
                    onPress={() => Linking.openURL("mailto:riveraluegi8@gmail.com?subject=Portfolio Inquiry")
                    }
                    >
                        <MaterialCommunityIcons name="email" size={20} color="#111">
                            <Text style={contacts.item}>riveraluegi8@gmail.com</Text>
                        </MaterialCommunityIcons>


                    </TouchableOpacity>

             
                </Pressable>
               


                <MaterialCommunityIcons name="phone" size={20} color="#111">
                    <Text style={contacts.item}>+63 9519918138</Text>
                </MaterialCommunityIcons>



                <MaterialCommunityIcons name="map-marker-radius-outline" size={20} color="#111">
                    <Text style={contacts.item}>Iloilo City, Philippines</Text>
                </MaterialCommunityIcons>


                <Pressable
                style={({hovered})=> [
                    contacts.gitHubLink,
                    hovered && contacts.gitHubLinkHover,
                ]}
                >
                    
                    <TouchableOpacity
                    onPress={() => Linking.openURL
                        ("https://github.com/Aoiixs?tab=repositories")
                    }
                >
                    <MaterialCommunityIcons name="github" size={20} color="#111">
                        <Text style={contacts.item}>github.com/Aoiixs</Text>
                    </MaterialCommunityIcons>
                </TouchableOpacity>
                </Pressable>

              
            </View>

            
        </View>

        

    )


}

