import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
    title:'Login',
    path:"/login",
    icon:<MdIcons.MdLogin/>,
    cName: 'nav-text'
    },
    {
    title:'Cadastro',
    path:"/cadastro",
    icon:<AiIcons.AiOutlineUserAdd />,
    cName: 'nav-text'
    },
    {
    title:'Buscar',
    path:"/buscar",
    icon:<AiIcons.AiOutlineSearch />,
    cName:'nav-text'
    },
    {
    title:'Carrinho',
    path:"/carrinho",
    icon:<BsIcons.BsCart2 />,
    cName:'nav-text'
    }

]
