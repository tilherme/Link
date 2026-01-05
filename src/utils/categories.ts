import MaterialIcons from '@expo/vector-icons/MaterialIcons';


type Category = {
    id: string 
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
    { id: "1", name:"Curso", icon: "code" },
    { id: "2", name:"Site", icon: "language" },
    { id: "3", name:"Projeto", icon: "folder" },
    {id: "4", name:"Vídeo", icon: "movie" },
    {id: "5", name:"Artigo", icon: "newspaper" },
    { id: "6", name:"Documentação", icon: "content-paste" }

]