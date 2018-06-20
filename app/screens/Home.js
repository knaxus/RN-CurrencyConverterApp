import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'INR';
const TEMP_BASE_PRICE = '1';
const TEMP_QUOTE_PRICE = '68.04';

class Home extends Component {

    handlePressBaseCurrency = () => {
        console.log('press base');
    };
    
    handlePressQuoteCurrency = () => {
        console.log('press quote');
    };
    
    handleTextChange = (text) => {
        console.log('change text ', text);
    };
    
    handleSwapCurrency = () => {
        console.log('press swap currency ');
    };

  render() {
    return (
        <Container>
            <StatusBar translucent={false} barStyle="light-content" />
            <Logo />
            <InputWithButton
                buttonText={TEMP_BASE_CURRENCY}
                onPress={this.handlePressBaseCurrency}
                defaultValue={TEMP_BASE_PRICE}
                keyboardType="numeric"
                onChangeText={this.handleTextChange}
            />
            <InputWithButton
                buttonText={TEMP_QUOTE_CURRENCY}
                onPress={this.handlePressQuoteCurrency}
                editable={false}
                defaultValue={TEMP_QUOTE_PRICE}

            />
            <ClearButton 
                text="Reverse Currencies"
                onPress={this.handleSwapCurrency}
            />
        </Container>
    );
  }
}

export default Home;
