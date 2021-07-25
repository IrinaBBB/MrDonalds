import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Styled/ButtonCheckout';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

const Modal = styled.div`
    width: 600px;
    height: 600px;
    background-color: white;
    text-align: center;
`;

const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const OrderButton = styled.button`
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 2px;
    margin-top: 40px;
    transition-property: all;
    transition-duration: 0.3s;
    &:hover {
        box-shadow: 8px 8px 15px rgb(55, 55, 55, 0.5);
        outline: none;
    }
    &:active {
        box-shadow: 1px 1px 10px rgb(55, 55, 55, 0.5);
    }
`;

const Content = styled.section`
    display: flex;
    height: 350px;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    };

    const order = {
        ...openItem,
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img} />
                <Content>
                    <ModalHeader>
                        <h3>{openItem.name}</h3>
                        <h3>
                            {openItem.price.toLocaleString('ru-RU', {
                                style: 'currency',
                                currency: 'RUB',
                            })}
                        </h3>
                    </ModalHeader>
                    <ButtonCheckout onClick={addToOrder}>
                        Добавить
                    </ButtonCheckout>
                </Content>
            </Modal>
        </Overlay>
    );
};
