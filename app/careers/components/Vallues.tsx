import { poppins, roboto_slab } from "../../font";
import ValluesCard from "./ValluesCard";
const Vallues = () => {
  const subjects = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="none"
        >
          <defs>
            {" "}
            <linearGradient
              id="a"
              x1="11.93"
              x2="79.72"
              y1="12.26"
              y2="27.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#23BFB8"></stop>
              <stop offset="1" stop-color="#85EA80"></stop>
            </linearGradient>
          </defs>
          <path
            fill="#fff"
            d="M69.3 32.25c-1.13-1.18-2.3-2.4-2.74-3.47-.4-.98-.43-2.61-.45-4.19-.05-2.93-.1-6.25-2.4-8.56-2.32-2.31-5.64-2.36-8.57-2.4-1.58-.03-3.2-.05-4.19-.46-1.07-.44-2.29-1.61-3.47-2.74-2.07-2-4.43-4.25-7.56-4.25-3.14 0-5.5 2.25-7.57 4.25-1.18 1.13-2.4 2.3-3.47 2.74-.98.4-2.61.43-4.19.46-2.93.04-6.25.09-8.56 2.4-2.31 2.31-2.34 5.63-2.4 8.56-.03 1.58-.05 3.2-.46 4.19-.44 1.07-1.61 2.3-2.75 3.47-1.99 2.08-4.24 4.43-4.24 7.57 0 3.13 2.25 5.48 4.24 7.56 1.14 1.18 2.3 2.4 2.75 3.47.4.99.43 2.61.46 4.2.04 2.92.09 6.24 2.4 8.55 2.3 2.31 5.63 2.36 8.56 2.4 1.58.03 3.2.06 4.19.46 1.07.45 2.29 1.62 3.47 2.75 2.08 1.99 4.43 4.25 7.57 4.25 3.13 0 5.48-2.26 7.56-4.25 1.18-1.13 2.4-2.3 3.47-2.75.99-.4 2.61-.43 4.19-.45 2.93-.05 6.25-.1 8.56-2.4 2.31-2.32 2.36-5.64 2.4-8.57.03-1.58.05-3.2.46-4.19.44-1.06 1.61-2.29 2.75-3.47 1.99-2.07 4.24-4.43 4.24-7.56 0-3.14-2.25-5.49-4.24-7.57Zm-3.46 11.8c-1.44 1.5-2.93 3.06-3.72 4.97-.76 1.83-.79 3.92-.82 5.95-.03 2.1-.06 4.3-1 5.23-.93.94-3.12.97-5.23 1-2.03.03-4.12.06-5.95.82-1.91.8-3.46 2.28-4.97 3.72-1.5 1.44-3.03 2.91-4.23 2.91-1.2 0-2.75-1.48-4.24-2.91-1.5-1.43-3.06-2.93-4.96-3.72-1.84-.76-3.93-.79-5.96-.82-2.1-.03-4.3-.06-5.23-1-.93-.93-.97-3.12-1-5.23-.03-2.03-.06-4.12-.82-5.95-.79-1.91-2.28-3.46-3.72-4.97-1.44-1.5-2.9-3.03-2.9-4.23 0-1.2 1.47-2.75 2.9-4.24 1.44-1.49 2.93-3.06 3.72-4.96.76-1.83.8-3.93.82-5.96.03-2.1.06-4.3 1-5.23.93-.93 3.12-.97 5.23-1 2.03-.03 4.12-.06 5.96-.82 1.9-.79 3.46-2.28 4.96-3.72 1.5-1.43 3.03-2.9 4.24-2.9 1.2 0 2.74 1.47 4.23 2.9 1.5 1.44 3.06 2.93 4.97 3.72 1.83.76 3.92.8 5.95.82 2.1.03 4.3.07 5.23 1 .93.93.97 3.12 1 5.23.03 2.03.06 4.13.82 5.96.79 1.9 2.28 3.46 3.72 4.96 1.44 1.5 2.9 3.04 2.9 4.24 0 1.2-1.47 2.75-2.9 4.23Z"
          ></path>
          <path
            fill="url(#a)"
            d="M67.74 40c0 3.59-4.17 5.52-5.4 8.67-2.74 6.92-3.13 10.8-13.45 13.62-3.32 1.4-5.05 5.45-8.89 5.45-3.84 0-6.17-4.04-9.5-5.45-9.77-2.11-10.2-5.9-12.93-12.83-1.24-3.15-5.31-5.87-5.31-9.46 0-3.89 3.87-6.4 5.3-9.75 2.83-6.57 4.17-13.33 12.95-13.33 3.32-1.41 5.65-4.66 9.49-4.66s5.57 3.25 8.9 4.66c6.57 2.79 11.71 3.94 13.43 13 1.44 3.35 5.41 6.2 5.41 10.08Z"
          ></path>
          <path
            fill="#000"
            d="M65.65 33.22c-.99-1.04-2-2.1-2.4-3.04-.35-.85-.37-2.28-.4-3.65-.03-2.56-.07-5.46-2.09-7.48-2.01-2.01-4.91-2.05-7.47-2.1-1.38-.01-2.8-.03-3.66-.4-.93-.38-2-1.4-3.03-2.39-1.8-1.74-3.86-3.7-6.6-3.7-2.74 0-4.79 1.96-6.6 3.7-1.03 1-2.1 2.01-3.03 2.4-.86.36-2.28.38-3.66.4-2.56.04-5.46.08-7.47 2.1-2.02 2.01-2.05 4.91-2.1 7.47-.02 1.37-.04 2.8-.4 3.65-.38.94-1.4 2-2.4 3.04-1.73 1.8-3.7 3.86-3.7 6.6 0 2.73 1.97 4.79 3.7 6.6 1 1.03 2.02 2.1 2.4 3.03.36.86.38 2.28.4 3.65.04 2.56.08 5.46 2.1 7.48 2.01 2.01 4.91 2.06 7.47 2.1 1.38.02 2.8.04 3.66.4.93.38 2 1.4 3.03 2.39 1.8 1.74 3.86 3.7 6.6 3.7 2.74 0 4.79-1.96 6.6-3.7 1.03-.99 2.1-2.01 3.03-2.4.86-.35 2.28-.37 3.66-.4 2.56-.03 5.46-.08 7.47-2.1 2.02-2 2.06-4.9 2.1-7.47.02-1.37.04-2.8.4-3.65.38-.93 1.4-2 2.4-3.03 1.73-1.81 3.7-3.87 3.7-6.6 0-2.74-1.97-4.8-3.7-6.6Zm-3.02 10.3c-1.26 1.3-2.56 2.66-3.25 4.33-.66 1.6-.69 3.42-.72 5.2-.02 1.83-.05 3.75-.87 4.56-.81.81-2.72.84-4.57.87-1.76.03-3.6.06-5.2.72-1.66.69-3.01 1.99-4.32 3.24-1.31 1.26-2.65 2.54-3.7 2.54-1.05 0-2.4-1.29-3.7-2.54-1.3-1.25-2.67-2.55-4.33-3.24-1.6-.66-3.43-.7-5.2-.72-1.83-.03-3.75-.05-4.56-.87-.82-.81-.85-2.72-.88-4.57-.02-1.77-.05-3.6-.71-5.2-.69-1.66-1.99-3.01-3.25-4.32-1.25-1.32-2.54-2.66-2.54-3.7 0-1.05 1.3-2.4 2.54-3.7 1.25-1.3 2.56-2.67 3.25-4.33.66-1.6.69-3.43.71-5.2.03-1.83.06-3.76.88-4.57.81-.81 2.72-.84 4.56-.87 1.77-.02 3.6-.05 5.2-.71 1.66-.7 3.02-2 4.33-3.25 1.31-1.26 2.65-2.54 3.7-2.54 1.05 0 2.4 1.29 3.7 2.54 1.3 1.25 2.66 2.56 4.33 3.25 1.6.66 3.43.69 5.2.71 1.83.03 3.75.06 4.56.87.82.82.85 2.73.87 4.57.03 1.77.06 3.6.72 5.2.69 1.66 1.99 3.02 3.25 4.33 1.25 1.3 2.54 2.65 2.54 3.7 0 1.04-1.3 2.4-2.54 3.7ZM51.97 32.04a2.1 2.1 0 0 1 0 2.97L37.29 49.69a2.1 2.1 0 0 1-2.97 0l-6.29-6.3A2.1 2.1 0 0 1 31 40.44l4.8 4.81L49 32.04a2.1 2.1 0 0 1 2.97 0Z"
          />
        </svg>
      ),
      title: "Commitment to Quality",
      description:
        "We dedicate ourselves to delivering quality in our products and the processes we use to develop them, continuously striving for improvement.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="none"
        >
          <defs>
            {" "}
            <linearGradient
              id="a"
              x1="11.93"
              x2="79.72"
              y1="12.26"
              y2="27.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#23BFB8"></stop>
              <stop offset="1" stop-color="#85EA80"></stop>
            </linearGradient>
          </defs>
          <path
            fill="#fff"
            d="M19.5 35.83c-.74 2.24-8.15 3.3-11.77 3.56v11.53c6.07-.03 19.37-.07 23.98 0 5.76.08 24.91-7.12 26.44-10.34 1.22-2.58-2.6-3.9-4.66-4.24L38.24 39.4c-1.78 0 5.83-3.49-1.02-7.96-8.56-5.6-16.78 1.6-17.71 4.4Z"
          ></path>
          <path
            fill="url(#a)"
            d="M51.57 50.62c7-7.01 14.11-10.76 17-15.01 7.3-10.78.06-18.57-7.48-18.85-3.97-.15-6.33 4.58-10.38 6-5.2-3.22-7.88-6.59-11.21-6.75-7.33-.36-14.65 9.76-9.4 18.31 3.25 5.29 17.66-1.97 21.47 16.3Z"
          ></path>
          <path
            fill="#000"
            d="M71.27 44.84A6.9 6.9 0 0 0 66 43.48C71.32 38.11 74 32.77 74 27.53a13.55 13.55 0 0 0-19.16-12.38 13.49 13.49 0 0 0-4.65 3.52 13.49 13.49 0 0 0-10.36-4.75c-7.42 0-13.45 6.1-13.45 13.6 0 3.12.91 6.16 2.85 9.36a9.03 9.03 0 0 0-4.18 2.38l-6.42 6.41h-8.13a4.54 4.54 0 0 0-4.54 4.54v11.34a4.54 4.54 0 0 0 4.54 4.53h29.48c.19 0 .37-.02.55-.07l18.15-4.53c.11-.03.23-.07.33-.12l11.02-4.68.13-.06a6.97 6.97 0 0 0 1.11-11.78ZM39.84 18.45a8.83 8.83 0 0 1 8.26 5.4 2.27 2.27 0 0 0 4.2 0 8.83 8.83 0 0 1 8.26-5.4 9.12 9.12 0 0 1 8.92 9.08c0 5.53-4.48 11.78-12.95 18.11l-3.14.72a7.94 7.94 0 0 0-7.73-9.76H34.52c-2.45-3.3-3.6-6.2-3.6-9.07a9.12 9.12 0 0 1 8.92-9.08ZM10.51 50.21h6.8v11.34h-6.8V50.2Zm57.67 2.32-10.77 4.59-17.7 4.43H21.85V48.88l6.42-6.42a4.5 4.5 0 0 1 3.2-1.33h14.2a3.4 3.4 0 0 1 0 6.8h-7.94a2.27 2.27 0 0 0 0 4.54h9.07c.17 0 .34-.02.5-.05l19-4.37.09-.02a2.44 2.44 0 0 1 1.78 4.5h.01Z"
          />
        </svg>
      ),
      title: "Respect and Empathy",
      description:
        "We cultivate a remarkable culture and work environment grounded in mutual respect, empathy, and compassion, valuing diverse perspectives.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="none"
        >
          <defs>
            {" "}
            <linearGradient
              id="a"
              x1="11.93"
              x2="79.72"
              y1="12.26"
              y2="27.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#23BFB8"></stop>
              <stop offset="1" stop-color="#85EA80"></stop>
            </linearGradient>
          </defs>
          <path
            fill="#fff"
            d="m29.7 14.68-1.9 26.47c-.52-.3-2.3-1.68-5.36-4.86-7.65-6.08-10.07.7-10.33 4.86 2.94 10.97 13.55 32.43 32.52 30.56C68.34 69.38 68.9 43.3 67.38 25.38c-1.52-17.9-13-2.14-13.57-10.7-.46-6.85-6.31-7.92-9.18-7.6l-4.78 6.43-2.5-1.56-7.64 2.73Z"
          ></path>
          <path
            fill="#000"
            d="M62.14 13.96c-1.35 0-2.68.3-3.9.88v-2.18a9.12 9.12 0 0 0-17.8-2.8 9.12 9.12 0 0 0-13.45 8V38.7l-1.25-2a9.12 9.12 0 0 0-15.82 9.06c5.2 11 9.42 18.8 14.23 23.66 4.87 4.94 10.39 7.04 18.46 7.04a28.68 28.68 0 0 0 28.65-28.65V23.07a9.12 9.12 0 0 0-9.12-9.11Zm3.91 33.85a23.47 23.47 0 0 1-23.44 23.44c-6.63 0-10.9-1.58-14.76-5.48-4.3-4.37-8.27-11.77-13.27-22.32a3.9 3.9 0 1 1 6.72-4.02l6.08 9.76a2.6 2.6 0 0 0 4.81-1.38V17.86a3.9 3.9 0 0 1 7.82 0V37.4a2.6 2.6 0 1 0 5.2 0V12.66a3.9 3.9 0 1 1 7.82 0V37.4a2.6 2.6 0 1 0 5.2 0V23.07a3.9 3.9 0 0 1 7.82 0v24.74Z"
          ></path>
          <path
            fill="url(#a)"
            d="m38.49 47.29 3.65 3.65 6.09-8.52M43.36 31a19.41 19.41 0 0 1-13.64 5.33 19.49 19.49 0 0 0 13.64 24.95A19.49 19.49 0 0 0 57 36.33h-.25A19.4 19.4 0 0 1 43.35 31Z"
          />
          <path
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="m38.49 47.29 3.65 3.65 6.09-8.52M43.36 31a19.41 19.41 0 0 1-13.64 5.33 19.49 19.49 0 0 0 13.64 24.95A19.49 19.49 0 0 0 57 36.33h-.25A19.4 19.4 0 0 1 43.35 31Z"
          ></path>
        </svg>
      ),
      title: "Accountability",
      description:
        "Our employees take responsibility for their actions and decisions, delivering on commitments and maintaining ethical practices.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="none"
        >
          <defs>
            {" "}
            <linearGradient
              id="a"
              x1="11.93"
              x2="79.72"
              y1="12.26"
              y2="27.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#23BFB8"></stop>
              <stop offset="1" stop-color="#85EA80"></stop>
            </linearGradient>
          </defs>
          <circle cx="40" cy="40" r="31.65" fill="#fff"></circle>
          <circle cx="40" cy="40" r="23.32" fill="url(#a)"></circle>

          <path
            fill="#000"
            d="M40 13.5a26.5 26.5 0 1 0 0 53 26.5 26.5 0 0 0 0-53Zm0 48.92a22.42 22.42 0 1 1 0-44.84 22.42 22.42 0 0 1 0 44.84ZM27.77 34.9a3.06 3.06 0 1 1 6.12 0 3.06 3.06 0 0 1-6.12 0Zm26.5 0a2.04 2.04 0 0 1-2.04 2.04h-6.12a2.04 2.04 0 1 1 0-4.07h6.12a2.04 2.04 0 0 1 2.04 2.03Zm-2.32 12.23c-2.62 4.54-6.97 7.14-11.95 7.14-4.98 0-9.33-2.6-11.96-7.14a2.04 2.04 0 1 1 3.53-2.03c1.9 3.28 4.9 5.1 8.43 5.1 3.53 0 6.53-1.82 8.43-5.1a2.04 2.04 0 1 1 3.52 2.03Z"
          ></path>
        </svg>
      ),
      title: "A Fun-filled Atmosphere",
      description:
        "We create a vibrant community where team members can share their passions and interests, contributing to an enjoyable and fulfilling work environment.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="81"
          height="80"
          fill="none"
        >
          <defs>
            {" "}
            <linearGradient
              id="a"
              x1="11.93"
              x2="79.72"
              y1="12.26"
              y2="27.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#23BFB8"></stop>
              <stop offset="1" stop-color="#85EA80"></stop>
            </linearGradient>
          </defs>

          <path
            fill="#fff"
            d="m22.97 22.93-9.22-3.2-9.91 17.59 9.91 5.72 17.87 12 19.13 4.76 10.9-11.6a636.89 636.89 0 0 1-13-9.35c-3.12 5.48-12.65 1.26-17.03-1.53l14.94-15.78-5.86-3.21-17.73 4.6Z"
          ></path>
          <path
            fill="url(#a)"
            d="m45.92 22.85-14.7 14.92v3.7l9.14 1.28 10.19-3.94 12.5 7.87 4.97-5.2 7.64-3.7-9.38-18.06-7.75 3.82-12.61-.7Z"
          ></path>
          <path
            fill="#000"
            d="M37.8 67.89a2.45 2.45 0 0 1-2.98 1.78l-9.78-2.45a2.45 2.45 0 0 1-.76-.34L16.94 62a2.45 2.45 0 0 1 2.72-4.07l6.98 4.66L36 64.92a2.45 2.45 0 0 1 1.8 2.97ZM78.37 38.4a4.86 4.86 0 0 1-2.44 2.82l-7.24 3.62L51.84 61.7a2.45 2.45 0 0 1-2.32.64l-19.56-4.89c-.3-.07-.58-.2-.83-.38L12.16 44.94l-7.42-3.7a4.89 4.89 0 0 1-2.19-6.56l7.6-15.2a4.89 4.89 0 0 1 6.56-2.18l6.74 3.36 16.2-4.63c.44-.12.9-.12 1.34 0l16.2 4.63 6.74-3.36a4.89 4.89 0 0 1 6.56 2.19l7.6 15.19a4.86 4.86 0 0 1 .27 3.73Zm-14.11 3.95-8.32-16.63H46.2L33 38.57c3.87 2.47 9.94 3.15 15.38-2.34a2.44 2.44 0 0 1 3.26-.18l10.52 8.42 2.1-2.1Zm-57.32-5.5 5.4 2.7 7.6-15.18-5.4-2.7-7.6 15.18Zm51.73 11.08-8.47-6.79c-5.97 4.9-13.55 5.54-19.84 1.53a4.89 4.89 0 0 1-.8-7.6l13.7-13.3-2.93-.84-15.4 4.4-8.37 16.73L31.59 52.8l17.77 4.44 9.3-9.31Zm15.05-11.08-7.58-15.19-5.41 2.7 7.6 15.2 5.4-2.71Z"
          ></path>
        </svg>
      ),
      title: "A Supportive Attitude",
      description:
        "Our primary focus is to assist others through our efforts, prioritizing customer satisfaction and anticipating their needs.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="none"
        >
          <defs>
            {" "}
            <linearGradient
              id="a"
              x1="11.93"
              x2="79.72"
              y1="12.26"
              y2="27.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#23BFB8"></stop>
              <stop offset="1" stop-color="#85EA80"></stop>
            </linearGradient>
          </defs>

          <rect
            width="55.89"
            height="53.49"
            x="13.45"
            y="11.01"
            fill="url(#a)"
            rx="2"
          ></rect>
          <path
            fill="#fff"
            d="m30.1 34.47-1.77-1.77 1.77 1.77Zm.7 0 1.77-1.77-1.76 1.77ZM40.36 44l-1.77 1.76 1.77 1.77 1.77-1.77-1.77-1.76Zm17.93-14.4a2.5 2.5 0 1 0-3.53-3.54l3.53 3.54ZM13.52 54.58l18.35-18.35-3.54-3.53L9.98 51.05l3.54 3.53Zm15.52-18.35 9.54 9.54 3.54-3.53-9.55-9.54-3.53 3.53Zm13.08 9.54 16.16-16.16-3.53-3.54-16.17 16.17 3.54 3.53Zm-10.25-9.54a2 2 0 0 1-2.83 0l3.53-3.53a3 3 0 0 0-4.24 0l3.54 3.53Z"
          ></path>
          <path
            fill="#000"
            d="M71.4 66.58a2.41 2.41 0 0 1-2.42 2.41H11.02a2.41 2.41 0 0 1-2.41-2.41v-48.3a2.41 2.41 0 0 1 4.83 0V51.1l15.2-15.2a2.41 2.41 0 0 1 3.41 0L40 43.85l15.9-15.9h-6.24a2.41 2.41 0 1 1 0-4.84h12.07a2.41 2.41 0 0 1 2.42 2.42V37.6a2.41 2.41 0 1 1-4.83 0v-6.24L41.7 48.96a2.41 2.41 0 0 1-3.42 0l-7.95-7.94-16.9 16.9v6.24h55.54a2.41 2.41 0 0 1 2.41 2.42Z"
          ></path>
        </svg>
      ),
      title: "Personal and Professional Growth",
      description:
        "We encourage our team members to be proactive, self-driven, and eager to learn, fostering collaboration and open communication.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="none"
        >
          <defs>
            {" "}
            <linearGradient
              id="a"
              x1="11.93"
              x2="79.72"
              y1="12.26"
              y2="27.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#23BFB8"></stop>
              <stop offset="1" stop-color="#85EA80"></stop>
            </linearGradient>
          </defs>

          <path
            fill="#fff"
            d="M66.3 33.22a26.4 26.4 0 0 1-10.11 20.8c-1.8 1.42-3.06 6.07-5.2 6.99-3.2 1.36-7.44.42-11.13.42-3.7 0-7.57.94-10.76-.42-1.38-.6-2.35-4.75-3.6-5.56a26.45 26.45 0 1 1 40.8-22.23Z"
          ></path>
          <circle cx="39.85" cy="33.22" r="17.36" fill="url(#a)"></circle>
          <path
            fill="#000"
            d="M55.58 73.82a2.62 2.62 0 0 1-2.62 2.62H26.74a2.62 2.62 0 0 1 0-5.25h26.22a2.62 2.62 0 0 1 2.62 2.63ZM68.7 31.86a28.7 28.7 0 0 1-11.03 22.68 5.32 5.32 0 0 0-2.09 4.2v1.96a5.25 5.25 0 0 1-5.24 5.25H29.36a5.24 5.24 0 0 1-5.25-5.25v-1.96a5.25 5.25 0 0 0-2.04-4.15A28.71 28.71 0 0 1 11 32.02 29 29 0 0 1 39.15 3.01 28.85 28.85 0 0 1 68.7 31.86Zm-5.25 0a23.6 23.6 0 0 0-24.17-23.6 23.7 23.7 0 0 0-23.03 23.72 23.49 23.49 0 0 0 9.06 18.46 10.5 10.5 0 0 1 4.05 8.3v1.96h7.87V46.05l-9.73-9.72a2.62 2.62 0 1 1 3.71-3.7l8.64 8.63 8.63-8.64a2.62 2.62 0 0 1 3.71 3.71l-9.72 9.72V60.7h7.87v-1.96a10.53 10.53 0 0 1 4.09-8.31 23.49 23.49 0 0 0 9.02-18.57Z"
          ></path>
        </svg>
      ),
      title: "Innovation",
      description:
        "We continuously seek new ideas, embrace change, and strive for improvement in our products and services.",
    },
  ];

  return (
    <>
      <div className="  ">
        <h2
          className={` ${poppins.className} hidden md:block uppercase text-center  text-[#e7f2ef] mt-[160px]   text-[70px] font-bold md:text-[110px] lg:text-[150px] 2xl:text-[220px] `}
        >
          Our Vallues
        </h2>

        <div className=" mx-auto sm:px-10 xl:px-20 px-5 2xl:px-[160px] space-y-10   z-30  md:mt-[-180px] 2xl:mt-[-250px]  ">
          <div className="  ">
            <h2
              className={` ${roboto_slab.className} text-[35px] font-semibold  mt-5 text-[#26302b] lg:text-[45px] lg:mt-20 xl:text-[55px] 2xl:text-[40px] 2xl:w-[70%]`}
            >
              At Ollyo, our company values reflect the core beliefs and guiding
              principles that shape our culture, decision-making process, and
              overall behavior.
            </h2>

            <div className=" grid gap-y-10 lg:grid-cols-2 lg:ml-[365px]  mt-20 xl:grid-rows-4  gap-x-10  ">
              {subjects.map((sub, index) => (
                <ValluesCard key={index} subject={sub} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vallues;
