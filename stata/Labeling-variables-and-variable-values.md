## Description

`label` allow you to document the variables with more detailed descriptions.  We will go over how to label variables from the command line. Alternatively, the toolbar menu could also have been used.

## Labeling With Menu

```stata
// label data 
Data > Data Utilities > Label Utilities > Label Dataset

// label variable
Data > Variables Manager

// label define
Data > Variables Manager

// giving value to label
Data > Variables Manager

// label list
Data > Data Utilities > Label Utilities > List Value Labels

// label copy
Data > Data Utilities > Label Utilities > Copy Value Labels

// label drop
Data > Variables Manager

// label save
Data > Data Utilities > Label Utilities > Save Value Labels As Do-File
```

## Labeling With Command

### Label a variable

It is often useful to give a variable a character string descriptive label. This is done using the command:

```stata
label variable varname ["label"]
```

### Label values of a variable

It is also useful to give values of a variable descriptive label.  This is a two step process: 

**1. Define a label: assign character string descriptions to categorical, numeric values (#)**

```stata
label define lblname # "label" [# "label" ...] [, add modify nofix]
```

**2. Label the values: Attach the defined label to the variable**

```stata
label values varname [lblname] [, nofix ]
```

> People often forget this second step.  We assume that STATA will know that we want to attach the label to a particular variable.  STATA is not that smart.

> Even if you label a variable, STATA still “thinks” of the unlabeled values when using relational operators.

To view the labels for a variable, use `codebook` or `describe`

## Example

```stata
insheet using toy_data.csv, clear

// Label the variables with a description :
label variable ht “height (inches)”

// Table an unlabeled version of the “case” variable to see how it looks before labeling
table case

// Label the case variable with a description
label variable case “Disease status (0=control, 1=case)”

// Construct a label that describes disease status categories:
label define status 1 “Case” 0 “Control”

// Apply this labeling to the values of the variable, case:
label values case status

// Table the labeled version of the “case” variable to see how it looks after labeling
table case

// Note the error if you try to use labels in relational operators:
// Wrong:
sum ht if case==”Case”
// Right:
sum ht if case==1

// To view the labels on specific variables:
codebook case ht 
describe case ht

// To view Value Labels in the dataset
labelbook
```
