import { Text, View , SafeAreaView, TouchableOpacity, Image} from 'react-native';
import { styles } from './styles';

export default function App() {

  let img = 'https://avatars.githubusercontent.com/u/25805709?s=400&u=45ff669e27e1511275407bb77e08d36516b9b746&v=4';

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Image
          source = {{ uri: img }}
          style = {styles.imagem}
        />
      </SafeAreaView>
      <View style={styles.dados}>
        <Text style={styles.text}>Dados pessoais</Text>
        <Text style={styles.text}>Daniel Alves</Text>
      </View>  
      <View style={styles.dados}>
        <Text style={styles.text}>Formação</Text>
        <Text style={styles.text}>Analise e Desenvolvimento</Text>
      </View>
      <View style={styles.dados}>
        <Text style={styles.text}>Experiência</Text>
        <Text style={styles.text}>tecnico por 3 anos</Text>
      </View>
      <View style={styles.dados}>
        <Text style={styles.text}>Projetos</Text>
        <Text style={styles.text}>9 TPs de Dispositivos Móveis</Text>
      </View>
    </>
  );
}
