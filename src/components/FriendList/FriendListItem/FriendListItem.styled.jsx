import styled from "styled-components";

export const Item = styled.li`
width: 300px;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
display: flex;
align-items: center;
justify-content: space-around;
margin-bottom: 20px;
`;

export const StatusOffline = styled.span`
display: block;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: red;
`;

export const StatusOnline = styled.span`
display: block;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: green;
`;

export const Name = styled.p`
width: 60px;
text-align: center;
font-weight: 700;
font-size: 20px;
`;

export const Avatar = styled.img`
`;

