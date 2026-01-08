import { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { linkStorage } from "@/storage/link-storage";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

export default function Add() {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("");

    // Função auxiliar para voltar com segurança
    function handleNavigateBack() {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace("/");
        }
    }

    async function handleAdd() {
        try {
            if (!category) {
                return Alert.alert("Categoria", 'Selecione a categoria');
            }
            if (!name.trim()) {
                return Alert.alert("Nome", 'Nome é obrigatório');
            }
            if (!url.trim()) {
                return Alert.alert("URL", 'URL é obrigatório');
            }

            await linkStorage.save({
                id: new Date().getTime().toString(),
                name,
                url,
                category
            });

            Alert.alert("Sucesso", "Novo link adicionado", [
                { 
                    text: "ok", 
                    onPress: () => handleNavigateBack() 
                }
            ]);

        } catch (error) {
            Alert.alert("Erro", "não foi possível realizar essa ação");
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* Botão de voltar com verificação de histórico */}
                <TouchableOpacity onPress={handleNavigateBack}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>
                <Text style={styles.title}>Novo</Text>
            </View>

            <Text style={styles.label}>
                Selecione uma categoria
            </Text>
            
            <Categories selected={category} onChange={setCategory} />

            <View style={styles.form}>
                <Input 
                    placeholder="Nome" 
                    autoCapitalize="none" 
                    onChangeText={setName} 
                />
                <Input 
                    placeholder="Url" 
                    autoCapitalize="none" 
                    onChangeText={setUrl} 
                />
                <Button title="Enviar" onPress={handleAdd} />
            </View>
        </View>
    );
}