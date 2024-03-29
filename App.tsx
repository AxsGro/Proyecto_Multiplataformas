//import { config } from '@gluestack-ui/config';
import { config } from "./config/gluestack-ui.config";
import { Box, GluestackUIProvider, Text, Image, VStack, Heading, Link, Button } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import Gradient from './assets/Icons/Gradient';
import DocumentData from './assets/Icons/DocumentData';
import LightBulbPerson from './assets/Icons/LightbulbPerson';
import Rocket from './assets/Icons/Rocket';
import Logo from './assets/Icons/Logo';
import BackGround_blue from './components/BackGround_blue';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <BackGround_blue />
    </GluestackUIProvider>
  );
}


function Card () {
  return (   
    <Box
    maxWidth='$64'
    borderColor='$borderLight200'
    borderRadius='$lg'
    borderWidth='$1'
    my="$4"
    overflow="hidden"
    $base-mx="$5"
    $dark-bg="$backgroundDark900"
    $dark-borderColor="$borderDark800"
    display='flex'
    borderCurve='circular'
    position='absolute'
  >
    <Box>
      <Image
        h={150}
        w={300}
        borderColor='#fafaf9'
        source={{
          uri: 'https://images.unsplash.com/photo-1549888834-3ec93abae044?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
        }}        
      />
    </Box>
    <VStack px='$6' pt='$4' pb='$6'>
      <Text $dark-color="$textLight200" fontSize='$sm'  my='$1.5'>
      August 16, 2023
      </Text>
      <Heading $dark-color="$textLight200" size='sm'>
      Fresh Orange 
      </Heading>
      <Text my='$1.5' $dark-color="$textLight200" fontSize='$xs'>
        Oranges are a great source of vitamin C, which is essential for a healthy immune system. Oranges are a great source of vitamin C,
        which is important for maintaining a healthy immune system.
      </Text>
      <Text $dark-color="$textLight200" my='$1.5' fontSize='$xs' isTruncated="true">
      Vitamin C also helps with the absorption of iron and the production of collagen, which supports healthy skin, teeth, and bones.
      </Text>   
      <Link href="https://gluestack.io/" isExternal>
        <Button fontSize='$sm' color='#fafaf9'>
        Find out more
        </Button>
      </Link>
    </VStack>
  </Box>    
      ) 
}