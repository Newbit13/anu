import { cloneElement, createElement, createFactory, isValidElement } from './element/index'
import { createClass, Component, PureComponent } from './component/index'
import render from './render'

const h = createElement;


export default {
    cloneElement,
    createElement,
    h,

    createFactory,
    isValidElement,

    createClass,
    Component,
    PureComponent,

    render
}