import React from 'react';
import {addDecorator} from "@storybook/react";
import Center from "../src/components/Center/Center";
import {ThemeProvider, theme, CSSReset} from "@chakra-ui/react";

addDecorator(story => <ThemeProvider theme={theme}>
    <CSSReset/>
    {story()}
</ThemeProvider>);
