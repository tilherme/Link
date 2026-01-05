import { useState } from "react";

import { Image, FlatList, View, TouchableOpacity, Modal, Text } from "react-native";
import {MaterialIcons} from "@expo/vector-icons"
import { router } from "expo-router";

import { styles } from './styles'
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { categories } from "@/utils/categories";

export default function Index() {
  const [category, setCategory] = useState(categories[0].name)

  return (
    <View style={styles.container} >
        <View style={styles.header}>
        <Image
          source={require('@/assets/logo.png')} style={styles.logo}/>
        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]}/>
        </TouchableOpacity>
        </View>
        <Categories onChange={setCategory} selected={category} />
 
    <FlatList data={["1","2","3"]}
    keyExtractor={item => item}
    renderItem={({item}) => (
      <Link name="googgle" url="https://www.google.com.br" onDetalis={() => {console.log(`CLICOU !!!!link ${item}`)}}/>
    )}
    style={styles.links}
    contentContainerStyle={styles.linksContent}
    showsVerticalScrollIndicator={false}
    />

    <Modal transparent visible={false}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent }>
          <View style={styles.modalHeader}>
            <Text style={styles.modalCategory}>Curso</Text>
            <TouchableOpacity>
            <MaterialIcons name="close" size={24} color={colors.gray[400]}/>
            </TouchableOpacity>
          </View>
            <Text style={styles.modalTitleLink}>Google</Text>
            <Text style={styles.modalUrlLink}>https://www.google.com.br</Text>
        <View style={styles.modalOption}>
          <Option name="excluir" icon="delete" variant="secondary"/>
          <Option name="abrir" icon="language"/>

        </View>

        </View>  
      </View>
    </Modal>
    </View>
  );
}
