module.exports = {
    content: [
        './wwwroot/index.html',
        './Pages/*.razor',
        './Layouts/*.razor',
        './Components/*.razor'
    ],
    safelist: [
        {
            pattern: /.*/,
            variants: [
                "first",
                "last",
                "odd",
                "even",
                "visited",
                "checked",
                "empty",
                "read-only",
                "group-hover",
                "group-focus",
                "focus-within",
                "hover",
                "focus",
                "focus-visible",
                "active",
                "disabled",
            ],
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
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio')
    ],
  }
