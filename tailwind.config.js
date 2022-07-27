module.exports = {
    content: [
        './wwwroot/index.html',
        './Pages/*.razor',
        './Layouts/*.razor',
        './Components/*.razor'
    ],
    safelist: [
        {
          // Backgrounds
          pattern: /^bg-[^/]+$/,
          variants: ["dark", "hover", "focus", "focus-visible", "group-hover"],
        },
        {
          // Borders
          pattern: /^border-[^/]+$/,
          variants: ["dark", "hover", "focus", "focus-visible", "group-hover"],
        },
        {
          // Ring Color
          pattern: /^ring-[^/]+$/,
        },
        {
          // Text Color
          pattern: /^text-[^/]+$/,
          variants: ["dark", "hover", "focus", "focus-visible", "group-hover"],
        },
        {
          // Gradients
          pattern: /^(from|to|via)-[^/]+$/,
          variants: ["dark", "hover", "focus", "focus-visible"],
        },
    ],
    theme: {
      extend: {
        listStyleType: {
          //none: 'none',
          //disc: 'disc',
          decimal: 'decimal',
          square: 'square',
          circle: 'circle',
          roman: 'upper-roman',
          smallroman: 'lower-roman',
          lower: 'lower-alpha',
          upper: 'upper-alpha',
        },
      },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio')
    ],
  }
