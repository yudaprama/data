### Generate

`generate` creates a new variable. The values of the variable are specified by = exp. You can find out more about allowable expressions by looking up “functions” in the help menu.

```stata
generate [type] newvar[:lblname] = exp [if exp] [in range]


// Create variable age2 with a storage type of int 
// and containing the values of age squared for all 
// observations for which age is more than 30
webuse genxmpl3, clear
generate int age2 = age^2 if age > 30


// generate variable over50 with value 0
insheet using toy_data.csv, clear
generate over50=0
```

### Replace

`replace` changes the contents of an existing variable.

```stata
replace oldvar = exp [if exp] [in range]

// Replace the value of over50 become 1 if variable age more then 50 excluding missing value
insheet using http://students.washington.edu/chutter/Intro_to_STATA/toy_data.csv, clear
replace over50=1 if age>50 & age<.

// Replace the value of odd in the third observation
webuse genxmpl4, clear
replace odd = 5 in 3
```

### Recode

Recode changes the values of a numeric variable and is often used to code variables into catergories

```stata
recode varlist (rule) [(rule) ...] [, generate(newvarlist) ]
```

```stata
// Setup
webuse recxmpl

// List the data
list

// For x, change 1 to 2, leave all other values unchanged, and store the results in nx
recode x (1 = 2), gen(nx)

// List the result
list x nx

// For x1, swap 1 and 2, and store the results in nx1
recode x1 (1 = 2) (2 = 1), gen(nx1)

// List the result
list x1 nx1

// For x2, collapse 1 and 2 into 1, change 3 to 2, change 4 through 7 to 3, and store the results in nx2
recode x2 (1 2 = 1) (3 = 2) (4/7 = 3), gen(nx2)

// List the result
list x2 nx2

// For x1, x2, and x3, change the direction of 1, 2, ..., 8, moving 8 to 1, 7 to 2, etc., and store the transformed variables in newx1, newx2, and newx3
recode x1-x3 (1=8) (2=7) (3=6) (4=5) (5=4) (6=3) (7=2) (8=1), pre(new) test

// List the result
list x1 newx1 x2 newx2 x3 newx3

// Setup
webuse fullauto, clear

// For rep77 and rep78, collapse 1 and 2 into 1, change 3 to 2, collapse 4 and 5 into 3, store results in newrep77 and newrep78, and define a new value label newrep
recode rep77 rep78 (1 2 = 1 "Below average") (3 = 2 Average) (4 5 = 3 "Above average"), pre(new) label(newrep)

// List the old and new value label
label list repair newrep

// List some of the data
list *rep77 *rep78 in 1/10, nolabel

// long recode commands may conveniently be written using the line continuation ///.  For example

recode x y (1 2 = 1 low)  ///
             (3   = 2 medium)  ///
             (4 5 = 3 high)  ///
             (nonmissing = 9 "something else")  ///
             (missing = .)  ///
           , gen(Rx Ry) label(Cat3)
```


### Encode

Encode changes a string variable into a numeric variable.  

```stata
encode varname [if exp] [in range], generate(newvar)
```

Note, you should not  use encode if you have a variable that contains numbers that merely happen to be stored as strings; instead, use 

```stata
generate newvar = real(varname)
```


### Egen

Egen is an extension of generate, and allows for more complicated functions.  We will talk more about egen in a later session.