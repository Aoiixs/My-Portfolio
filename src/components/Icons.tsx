import icons from "@/styles/icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";


export const  FrontendIcons = () => (
        <View style={icons.card}>
                <MaterialCommunityIcons
                name="monitor-dashboard"
                size={35}
                color="#4F46E5"
        />
        </View>
        
);

export const BackendIcons =() => (
        <View style={icons.card}>
                <MaterialCommunityIcons
                name="server"
                size={35}
                color = "#4F46E5"
                />
        </View>

);

export const ToolsIcons =() =>(
        <View style={icons.card}>
                <MaterialCommunityIcons
                name="tools"
                size={35}
                color="#4F46E5"
                />
        </View>
);

export const HardwareIcons =() =>(
        <View style={icons.card}>
                <MaterialCommunityIcons
                name="robot-angry-outline"
                size={35}
                color="#4F46E5"
                />
        </View>
)




