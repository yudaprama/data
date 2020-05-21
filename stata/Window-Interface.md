After following the previous instructions, the Stata program should be up and running. You will notice that Stata is made up of the following components:

![](https://raw.githubusercontent.com/brianks/briandata/master/stata/img/stata14.png)

### Dropdown windows
Provides options for performing tasks

### Toolbar
Provides buttons for common tasks (open, save, log, etc)

### Stata Command
Where the commands are typed

### Results 
Shows all the output from typed in commands

### Review
Shows previous commands. Your command is added to a list in the window labeled *Review* on the left, so you can keep track of the commands you have used

### Variables
Shows all variables in the dataset. The window labeled *Variables*, on the top right, lists the variables in your dataset

### Properties
The Properties window immediately below that, introduced in version 12, displays properties of your variables and dataset

You can resize or even close some of these windows. Stata remembers its settings the next time it runs. You can also save (and then load) named preference sets using the menu Edit|Preferences. I happen to like the Compact Window Layout. You can also choose the font used in each window; just right click and select font from the context menu; my own favorite, Lucida Console, is now the default in Windows. Finally, it is possible to change the color scheme, selecting from seven preset or three customizable styles. One of the preset schemes is classic, the traditional black background used in earlier versions of Stata.

There are other windows that we will discuss as needed, namely the Graph, Viewer, Variables Manager, Data Editor, and Do file Editor.

Starting with version 8 Stata's graphical user interface (GUI) allows selecting commands and options from a menu and dialog system. However, I strongly recommend using the command language as a way to ensure reproducibility of your results. In fact, I recommend that you type your commands on a separate file, called a do file, as explained in Section 1.2 below, but for now we will just type in the command window. The GUI can be helpful when you are starting to learn Stata, particularly because after you point and click on the menus and dialogs, Stata types the corresponding command for you

Additional windows can be opened:

1. Data Browser: Shows the data without allowing changes
2. Data Editor: Shows the data, but allows for changes
3. Graph: Appears when graphs are created
4. Do-file Editor: Allows editing of do-files

Please note that the some windows cannot be accessed simultaneously.  For example, when the “Data Editor” window is opened, you cannot input commands into the “Stata Command” window.