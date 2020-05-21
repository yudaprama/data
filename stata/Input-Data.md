How to input data in Stata? There are several ways to input data into Stata.

### Enter data from keyboard

For small data set, we can also input data from keyboard using command input. E.g.:

```stata
input [varlist] [, automatic label ]

// example
clear
 
input id sex str10 gender inc80 inc81 inc82
1 0 "female" 5000 5500 6000
2 1 "male" 2000 2200 3300
3 0 "female" 3000 2000 1000
end
```

The command `input` should be followed by variable names `[varlist]` that are user-specified.

Every name is separated by a space, and character or string-valued variables should be preceded by `str#` where # is the max number of characters to read in for that character variable.  If `str#` is not specified then the variable is numeric by default.

Command `clear` cleans the active data set in STATA memory. STATA allows only one data set at one time in memory for analysis

Alternatively, you can go to the toolbar : **Data** --> **Data Editor**.  The variable values can be typed.  Double-click on the column heading and the variable name, label, and format can be specified.

To save the data, click on **Preserve**.  To restore the previously saved data, click on **Restore**.  Variables or certain values can also be deleted by clicking the **Delete...** button and then specifying what variable(s) or highlighted values are to be deleted.

###	Open an existing STATA data file

There are three ways to open a Stata data file.

With Stata running, open a file by clicking on the **open** icon in the upper left (it works like Word), or pulling down the **File** menu. Go to the **e:/stataclass** directory and select **census.dta**.

You also have the option of locating a Stata file in Windows Explorer and double clicking on a data file and Stata will open if you have the right version of Stata for that data file. 

You have another option made much simpler by census.dta being in your default directory. Here we use `use` command.

```stata
use [varlist] [if] [in] using filename [, clear nolabel]

// example
use census, clear
use e:/stataclass/census, clear
```

The `clear` option will clear current dataset.

###	Read ASCII (text) data created by a spreadsheet

We will show how to read in comma separated files (also known as .csv files) into Stata. We will show you how to use both syntax and point-and-click.

You can import csv files using the `insheet` command

```stata
insheet [varlist] using filename [, [no]double [no]names [ comma | tab | delimiter("char") ] clear ]

// example
insheet using "auto.csv", comma clear
```

This command is useful when reading in data that is either comma-delimited, tab-delimited or character-delimited data.  The filename is the path or location of the file.  It could either be a url or a directory location.  The “clear” option replaces all other data from the working memory with the one being currently read.  When [varlist] is not specified, the variable names from the original file are used.

The `using auto.csv` statement just tells Stata the file name of the csv file. If the csv file is not in your working directory, then you will need to provide the entire filepath or `cd` to the directory with the csv file. we typically include the option `comma`. This tells Stata that the file is a csv file. This isn’t necessary but it will speed up the `insheet` command (only an issue if the csv file is pretty big). 

However, the primary reason we put it in there is to make the code more readable (i.e., so that we know from the code that we read in a csv file, which is particularly important if the file extension is something other than csv). we also add the `clear` option to clear out any data that are currently in memory

If you have a dataset in Excel, you can save it as a csv.  Simply chose **CSV (Comma delimited) *.csv** from the drop down choices under **Save as type**.  Excel will give you warning windows about multiple sheets and formatting features, chose **yes** for both.

We can import csv files by using the **Import** submenu under the File menu. We’ll select **ASCII data created by a spreadsheet** under the **Import** submenu.

![](https://raw.githubusercontent.com/brianks/briandata/master/stata/img/import_pointclick-1.jpg)

This will open the following dialog menu.

![](https://raw.githubusercontent.com/brianks/briandata/master/stata/img/insheet-Import-ASCII-data.jpg)

Click on **Browse** to select the csv file saved on your computer. Select **Comma-delimited data**. I’ve also selected **Replace data in memory** to clear out any data loaded into Stata already. If you need to add variable names, you can add them in the dialog box.

Now your data will be read into Stata and ready to use.

### Read unformatted ASCII (text) data

```stata
infile varlist [_skip[(#)] [varlist [_skip[(#)] ...]]] using filename [if exp] [in range] [, automatic byvariable(#) clear ]

// example
infile string7 v1 v2 v3 using mydata.txt
```

This command reads in a data file that has no column variable labels and is in ANSI text format.  Therefore, varlist, the list of names for the column variables has to be defined.  This command allows the data to be subset based on an expression `[if exp]` or by observation positions `[in range]`. The `byvariable(#)` option is used when the data has rows as variables and columns as observations. In this case, the # would denote the number of row variables.

Example show you that v1 is a string up to 7 characters long, the other variable v2 and v3 are numeric which is the default.

### Importing the Dataset using the menu

Here we will use Stata File Menu. A short-cut would be to use the toolbar : **File** --> **Import** --> (select the type of data to import).

![](https://raw.githubusercontent.com/brianks/briandata/master/stata/img/stata02filemenu.gif)

Click on **Open** and browse to the appropriate directory (here the data were in a subdirectory called stata) 

![](https://raw.githubusercontent.com/brianks/briandata/master/stata/img/stata03fileopen.gif)

Then click on **Open**. We obtain:

![](https://raw.githubusercontent.com/brianks/briandata/master/stata/img/stata04fileopen.gif)

