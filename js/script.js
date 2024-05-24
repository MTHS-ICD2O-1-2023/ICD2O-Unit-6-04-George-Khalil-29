// Copyright (c) 2024 George, Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

window.onload = function() {
  // this calculate volume of a sphere

  const params = new URLSearchParams(document.location.search)
  
  //input
  const radius = params.get('radius')
  console.log(aBase)

  //process
  const volume = Math.abs(radius);
  const volumeOfSphere = (4 / 3) * Math.PI * Math.pow(radius, 3);
  const dimensions = "<ul>/n<li>radius = " 
  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('volume').innerHTML
    = 'Volume is: ' + (4 / 3) * Math.PI * Math.pow(radius, 3) + '.'
}