The most important skill to gain is to understand the help features that are already installed in STATA.  Being able to search for functions, access the help pages for these functions, and being able to understand the examples and the format of the commands will be invaluable.

### Help from the menu bar
Stata has an on-line help system that can be accessed by choosing Help from the menu bar. When you click on Help you get the following submenu

| Contents | See the help table of contents |
| ------------- | ------------- |
| Search… | Search for help on a particular topic |
| Stata Command… | Get help for a particular Stata command |

If you are a new user it is useful to browse through the table of Contents just to get an idea of what the package can do. Search is useful if you have a general topic you are interested in but don't know the actual command.

Help pages are shown using the Viewer.  Each command's help page uses boldface font for stata commands, ordinary type for documentation/explanation of the command, and underlined blue for cross-references and hyperlinks.  When you click on a word in blue you get either the help screen for that word or its dialog box, depending upon the context.

###  Help via Stata commands
Alternatively, instead of accessing help from the menu bar, you can also type in :

```stata
search word [word ...] [, [ local | net | all ] author entry exact faq historical or manual sj ]
```

```stata
help [command or topic name] 

// example
help regress
```

Note: The underlined portion of the command is the minimal abbreviation that Stata will recognize. The `[...]` indicate optional parts of the command.