import { Text } from 'react-native';
import Colors from '../constants/colors'
import {Image} from 'react-native';

export const HomeScreen = () => 
    {
    <linearGradient
        style={{
            flex: 1
        }}
        colors={[Colors.secondary, Colors.primary]}
        >
            <View style={{flex: 1}}>
                <View>
                    <Image
                        source={require=('../assets/Boiler.png')}
                        style={{
                            height: 100,
                            width: 100,
                        }}    
                    />
                </View>
            
            </View>
    
    <Text>Home</Text>;
    </linearGradient>
    }