### how many observations are in your dataset
		
`count` will count observations satisfying specified conditions

```stata
count [if exp] [in range]

// Example
sysuse auto

// Count the number of 
// observations having rep78>4
count if rep78>4

// By categories of foreign, 
// count the number of observations 
// having rep78>4
by foreign: count if rep78>4
```

### what variables are in your dataset

```stata
describe [varlist] [, memory_options]
```

`describe` produces a summary of the dataset, including the count, variable names and variable type (string, numeric, float, etc.) we will discuss different variable types later.

### what kind of variables they are

```stata
codebook [varlist] [if exp] [in range] [, memory_options]
```

`codebook` gives you the variable type, range, units, number of unique values, number of observations missing values, mean, standard deviation as well as 10th, 25th, 50th, 75th and 90th percentiles.

### Very basic desciptive statistics

```stata
table rowvar [colvar [supercolvar]] [if] [in] [weight] [, options]
tabulate varname1 varname2 [if] [in] [weight] [, options]
summarize [varlist] [weight] [if exp] [in range] [, [detail|meanonly]
tabstat varlist [if] [in] [weight] [, options]
```

You will become very familiar with the above commands. We will discuss `tabulate`, `summarize` and `tabstat` later.

`table` is the basic command for making tables.

`tabulate` produces one- and two-way tables of frequency counts and row and column percentages, along with various measures of association, including the *Pearson chi-squared*, and *Fisher's exact test*.

For continuous variables we will want to generate summary statistics, such as *mean, standard deviation, minimum, maximum*, etc. STATA will provide this information with the `summarize` command.

If you are interested in a specific list of summary statistics, or if you want summary statistics for numeric variables conditioned on another variable you can use the `tabstat` command. A list of allowable statistics can be found in the `tabstat` help window.