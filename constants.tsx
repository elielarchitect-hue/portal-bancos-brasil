
import React from 'react';
import type { Bank } from './types';

export const BANKS: Bank[] = [
  {
    name: 'Itaú',
    url: 'https://www.itau.com.br/',
    logo: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="12" fill="#EC7000"/>
        <path d="M24 35H35.5V70H24V35Z" fill="white"/>
        <path d="M44 35H55.5V70H44V35Z" fill="white"/>
        <path d="M64 35H75.5V70H64V35Z" fill="white"/>
        <path d="M29.5 22.5C31.9853 22.5 34 20.4853 34 18C34 15.5147 31.9853 13.5 29.5 13.5C27.0147 13.5 25 15.5147 25 18C25 20.4853 27.0147 22.5 29.5 22.5Z" fill="#00529B"/>
      </svg>
    ),
  },
  {
    name: 'Bradesco',
    url: 'https://banco.bradesco/',
    logo: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="12" fill="#CC092F"/>
        <path d="M50 15L20 32.5V67.5L50 85L80 67.5V32.5L50 15Z" fill="white"/>
        <path d="M50 20L25 35V65L50 80L75 65V35L50 20Z" fill="#CC092F"/>
        <path d="M50 50L20 32.5" stroke="white" strokeWidth="4"/>
        <path d="M50 50L80 32.5" stroke="white" strokeWidth="4"/>
        <path d="M50 50V85" stroke="white" strokeWidth="4"/>
      </svg>
    ),
  },
  {
    name: 'Banco do Brasil',
    url: 'https://www.bb.com.br/',
    logo: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="12" fill="#003DA5"/>
        <rect x="15" y="15" width="70" height="70" fill="#FDDF13"/>
        <path d="M30 30H45V45H30V30Z" fill="#003DA5"/>
        <path d="M55 30H70V70H55V30Z" fill="#003DA5"/>
        <path d="M30 55H45V70H30V55Z" fill="#003DA5"/>
      </svg>
    ),
  },
  {
    name: 'Caixa',
    url: 'https://www.caixa.gov.br/',
    logo: (
       <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="12" fill="#0065A4"/>
        <path d="M50 15L85 50L50 85L15 50L50 15Z" fill="white"/>
        <path d="M50 25L75 50L50 75L25 50L50 25Z" fill="#0065A4"/>
        <path d="M40 40H60V60H40V40Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Santander',
    url: 'https://www.santander.com.br/',
    logo: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="12" fill="#EC0000"/>
        <path d="M50 30C66.5685 30 80 43.4315 80 60C80 68.2843 73.2843 75 65 75H35C26.7157 75 20 68.2843 20 60C20 43.4315 33.4315 30 50 30Z" fill="white"/>
        <path d="M50 40C55.5228 40 60 44.4772 60 50C60 52.7614 57.7614 55 55 55H45C42.2386 55 40 52.7614 40 50C40 44.4772 44.4772 40 50 40Z" fill="#EC0000"/>
      </svg>
    ),
  },
  {
    name: 'Nubank',
    url: 'https://nubank.com.br/',
    logo: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="12" fill="#6A00A8"/>
        <path d="M25 50C25 36.1929 36.1929 25 50 25C63.8071 25 75 36.1929 75 50V75H25V50Z" fill="#A400ED"/>
        <path d="M25 75V50C25 63.8071 36.1929 75 50 75H25Z" fill="#6A00A8"/>
        <path d="M75 50H50V75H75V50Z" fill="#FFFFFF" fillOpacity="0.8"/>
      </svg>
    ),
  },
  {
    name: 'Banco Inter',
    url: 'https://bancointer.com.br/',
    logo: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="12" fill="#FF7A00"/>
        <path d="M30 30H70V42H30V30Z" fill="white"/>
        <path d="M30 58H70V70H30V58Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'BTG Pactual',
    url: 'https://www.btgpactual.com/',
    logo: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="12" fill="#00A5F0"/>
        <path d="M25 25H75L50 50L75 75H25L50 50L25 25Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'XP Inc.',
    url: 'https://www.xpi.com.br/',
    logo: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="12" fill="#1C1C1C"/>
        <path d="M25 25L50 50L25 75" stroke="#FFD700" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M75 25L50 50L75 75" stroke="#FFD700" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'C6 Bank',
    url: 'https://www.c6bank.com.br/',
    logo: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="12" fill="#242424"/>
        <path d="M75 50C75 63.8071 63.8071 75 50 75C36.1929 75 25 63.8071 25 50C25 36.1929 36.1929 25 50 25" stroke="white" strokeWidth="10" strokeLinecap="round"/>
        <path d="M50 35H65" stroke="white" strokeWidth="10" strokeLinecap="round"/>
      </svg>
    ),
  },
];
