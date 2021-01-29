import './style.scss';
import $ from 'jquery';
import { sectionHeader } from './src/services/section-header';
import { homePage } from './src/services/homepage';
import { about } from './src/services/section-about';
import { contact } from './src/services/section-contact';
import { work } from './src/services/section-work';
// import axios from 'axios';

$('#header').html(sectionHeader);
$('#home').append(homePage);
$('#about').append(about);
$('#contact').append(contact);
$('#work').append(contact);
