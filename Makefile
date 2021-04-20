format: 
    #   Format's all the html, css and javascript files.
    #   Make sure the prettier-cli is installed on your system.
	prettier --config .prettierrc.json --write './**/**/*.{html,css,js}'
	