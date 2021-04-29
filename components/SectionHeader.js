import styled from "styled-components";


export const SectionHeader = styled.div`
    position: relative; 
    padding-bottom: 45px;
    padding-top: 20px;
    h2 {
        position: relative;
        color: #242424;
        font-size: 32px;
        font-weight: 600;
        line-height: 1.2em;
        display: inline-block;
    }

    h2::after {
        position: absolute;
        content: '';
        left: 100%;
        margin-left: 10px;
        width: 40px;
        height: 2px;
        bottom: 8px;
        background-color: #f7bd00;
    }
`;
