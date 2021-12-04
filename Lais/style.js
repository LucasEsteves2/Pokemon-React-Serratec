import styled from "styled-components";

export const Container = styled.footer`
background:#060b26;
padding: 2rem 0rem 2rem;
display: flex;
position: absolute;
bottom:0;
width:100%;
height:250px;

html{
    @media (max-width: 1080px){
        font-size: 93.75%;
    }
    @media (max-width: 720px){
        font-size: 87.5%;
    }
}

.social_list{
    display:flex;
    justify-content: center;
    list-style-type: none;
    padding: 2rem;
    position: relative;
}

.social{
    margin: 0 1rem;
    padding-top:1rem;
    
}
.social:hover{
color: #ffbb33;
}


.social_list svg{
font-size: 2.5rem;
cursor: pointer;
}

.sobre{
    float:left;
    padding-left:3rem;
    color: white;
    position: relative;
    
}
.endereco{
    float:right;
    color: white;
    padding-left:1em;
    position: relative;
}
`