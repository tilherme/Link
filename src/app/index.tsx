import { useState, useCallback } from "react";

import { Image, FlatList, View, TouchableOpacity, Alert, Modal, Text, Linking } from "react-native";
import {MaterialIcons} from "@expo/vector-icons"
import { router, useFocusEffect } from "expo-router";

import { styles } from './styles'
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { linkStorage,LinkStorage } from "@/storage/link-storage";
import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { categories } from "@/utils/categories";

export default function Index() {

  const [category, setCategory] = useState(categories[0].name)
  const [links, setLinks] = useState<LinkStorage[]>([])
  const [link, setLink] = useState<LinkStorage>({}as LinkStorage)

  const [showModal, setShowModal] = useState(false)

  async function getLinks() {
    try{
      const response = await linkStorage.get()
      const filted = response.filter((link)=> link.category === category)
      setLinks(filted)
    } catch (erro){
      Alert.alert("erro", "Não foi possivel listar os links")
    }
  }
  function handleDetail(selected:LinkStorage){
    setShowModal(true)
    setLink(selected)
  }
  async function handleOpen() {
    try{
      await Linking.openURL(link.url)
    }catch(error){
      Alert.alert("Erro", "Não foi possível abrir link")
    }
    
  }
  async function linkRemove() {
    try{
      await linkStorage.remove(link.id)
      getLinks()
      setShowModal(false)

    } catch(error){
      Alert.alert("Erro", "Não foi possivel excluir")
    }
    
  }
  function handleRemove(){
    Alert.alert("Excluir","Deseja realmente excluir?",[
      {style:"cancel", text:"Não"},
      {text: "sim", onPress:linkRemove},
    ]
  )
  }
  useFocusEffect(useCallback(()=>{
    getLinks()
  },[category]))
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
 
    <FlatList data={links}
    keyExtractor={item => item.id}
    renderItem={({item}) => (
      <Link 
        name={item.name} 
        url={item.url}
        onDetalis={() => handleDetail(item)}/>
    )}
    style={styles.links}
    contentContainerStyle={styles.linksContent}
    showsVerticalScrollIndicator={false}
    />

    <Modal transparent visible={showModal} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent }>
          <View style={styles.modalHeader}>
            <Text style={styles.modalCategory}>{ link.category}</Text>
            <TouchableOpacity onPress={()=> setShowModal(false)}>
            <MaterialIcons name="close" size={24} color={colors.gray[400]}/>
            </TouchableOpacity>
          </View>
            <Text style={styles.modalTitleLink}>{link.name}</Text>
            <Text style={styles.modalUrlLink}>{link.url}</Text>
        <View style={styles.modalOption}>
          <Option name="excluir" icon="delete" variant="secondary" onPress={handleRemove}/>
          <Option name="abrir" icon="language" onPress={handleOpen}/>

        </View>

        </View>  
      </View>
    </Modal>
    </View>
  );
}
