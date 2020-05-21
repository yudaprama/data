### A generic STATA command

```stata
[by varlist:] command [varlist] [=exp] [if exp] [in range] [weight] [using filename] [,options]
```

STATA’s documentation and help menu use a convention where an actual command term is bolded, and some value that you would specify is given in italics.  Think of it as a form that says “Your name here.” Items in brackets are optional.

Learning this structure will help you learn commands.  It looks daunting at first, but if you work from the inside out it’ll make more sense.  One thing to remember is that STATA is a language, and, like German, sentence order is important in STATA.

The command is the basis of anything you enter in STATA.  Think of it as an imperative verb that tells STATA what to do with the data in its memory.  Examples of these that we have already seen are use, save, tabulate, list, summary.

The varlist is one or more variables towards with the command will be directed.  The varlist comes directly after the command.

The specification `[=exp]` (read: “equals expression”) is used with commands such as generate that specify that STATA should execute some function.  For example, 
generate under50=0
generate heightcm=ht * 2.54

Common arithmetic operators in STATA are: `+, -, *, /, ^`

### Using if and in

if and in options are used to run the command on a subset of the data.  When used, if or in should be put in the command after the main part of the command (and before the comma and option).  A common mistake is to try to put if and in after the comma and options.

### Relational Operators
The if option uses logical expressions which are created with the following relational operators:

```stata
== is equal to (double equal sign)
~= not equal to (can also use !=)
>  is greater than
<  is less than
>= is greater than or equal to
<= is less than or equal to
&  specifies AND
|  specifies OR
~  specifies NOT
```

You can create simple logical expressions, such as 

```stata
ht < 72 
```

or more complex expressions such as 

```stata
(ht < 72 & sex==”M”) | (ht<68 & sex==”F”)
```

> NOTE:

>	For complicated expressions it is good to use parentheses to make sure expressions are evaluated in the order that you want.  

>	We have to put the M and F in quotes because sex is a string variable.

>	For relational operators we use ==, for arithmetic operators we use =


### Missing values in logical expressions

> **It is important to consider missing values when using relational operators!**

> STATA codes missing *numeric* values as a `.` which is equivalent to a very large number. 

> To indicate a missing *string* value in a logical expression use empty quotes.  (i.e. `sex==””`)

Aside on missing values, starting with Version 8 of Stata, you can specify up to 27 different types of missing values. They are: `.`, `.a`, `.b`, ... ,`.z`. (During data entry, you can use these to differentiate among Refused, Not Applicable, Don't Know, and other possible reasons for missing values.) These are the largest values allowed by the data type, so you can use `<.` to exclude all 27 missing values for a variable.

### The `in` option

The in qualifier specifies a range of values for the command.  The in  option is based on the order of the variables in storage, and is sensitive to the way in which the data is sorted.  

Example

```stata
// Read in the data
insheet using toy_data.csv, clear

// Summarize height for males 
summarize ht if sex==”M”

// Determine what percentage of cases are female/male.
tabulate sex if case==1

// Summarize age for individuals 66 inches or taller
summarize age if ht >=66 & ht~=.

// Summarize age of the 5 shortest people
sort ht
summarize age in 1/5
```



### Using `by:`

The `by varlist:` option may be used with a number of commands. This option repeats the command groups of observations specified by the variable list.

The dataset must be sorted before you can use the by command.  However, recent versions of STATA allow you to use `bysort` (abbreviated `bys`), which will both sort and subset the data.

If you want to sort in descending (rather than ascending order) use the `gsort` command with a `–` in front of the variable.

If you sort on a variable, STATA will **jumble** the observations within each level unless you use the `stable` option.

### Example

```stata
// Read in the data
insheet using http://students.washington.edu/chutter/Intro_to_STATA/toy_data.csv, clear

// Summarize height separately for males and females
sort sex 
by sex: summarize ht

// Find the mean, median and 90th percentile of age for men and women separated by cases/control status
bys case: tabstat age, stat(mean, p50, p90) by(sex)

// Sort height in descending order (from tallest to shortest)
gsort –ht
list ht

// Contrast the following:
sort ht
list if sex==”M”
sort sex
list if sex==”M”

sort ht
list if sex==”M”
sort sex, stable
list if sex==”M”

sort sex ht
list if sex==”M”
```
