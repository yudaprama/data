### Description

You can use the format command to change the number of significant digits displayed in the output for a variable This is a two step process:
1) format the variable
2) specify format as an option for the command (if allowed)

Typically you format a numeric variable as %9.xf where x is the number of significant digits after the decimal place.
Exercise

### Using Menu toolbar

Data > Variables Manager

### Set style of decimal point

```stata
set dp {comma|period} [, permanently]
```

`set dp` sets the symbol that Stata uses to represent the decimal point The default is period, meaning that one and a half is displayed as `.5.`

### Display long formats

```stata
format [varlist]
```

where `%fmt` can be a numerical, date, business calendar, or string format.

```stata
    Numerical
      %fmt            Description              Example
-------------------------------------------------------
right-justified
      %#.#g           general                  %9.0g
      %#.#f           fixed                    %9.2f
      %#.#e           exponential              %10.7e
      %21x            hexadecimal              %21x
      %16H            binary, hilo             %16H
      %16L            binary, lohi             %16L
      %8H             binary, hilo             %8H
      %8L             binary, lohi             %8L

right-justified with commas
      %#.#gc          general                  %9.0gc
      %#.#fc          fixed                    %9.2fc

right-justified with leading zeros
      %0#.#f          fixed                    %09.2f

left-justified
      %-#.#g          general                  %-9.0g
      %-#.#f          fixed                    %-9.2f
      %-#.#e          exponential              %-10.7e

left-justified with commas
      %-#.#gc         general                  %-9.0gc
      %-#.#fc         fixed                    %-9.2fc
-------------------------------------------------------
You may substitute comma (,) for period (.) in any of
the above formats to make comma the decimal point In
%9,2fc, 1000.03 is.000,03 Or you can set dp comma.


      date
      %fmt            Description              Example
-------------------------------------------------------
right-justified
      %tc             date/time                %tc
      %tC             date/time                %tC
      %td             date                     %td
      %tw             week                     %tw
      %tm             month                    %tm
      %tq             quarter                  %tq
      %th             half-year                %th
      %ty             year                     %ty
      %tg             generic                  %tg

left-justified
      %-tc            date/time                %-tc
      %-tC            date/time                %-tC
      %-td            date                     %-td
      etc.
-------------------------------------------------------
There are many variations allowed See
[D] datetime display formats.


business calendar
      %fmt               Description           Example
-------------------------------------------------------
%tbcalname               a business calendar  %tbsimple
  [:datetime-specifiers]   defined in
                           calname.stbcal
-------------------------------------------------------
See [D] datetime business calendars.


     string
      %fmt            Description              Example
-------------------------------------------------------
right-justified
      %#s             string                   %15s

left-justified
      %-#s            string                   %-20s

centered
      %~#s            string                   %~12s
-------------------------------------------------------
The centered format is for use with display only.
```

`format varlist %fmt` and `format %fmt varlist` are the same commands. They set the display format associated with the variables specifiedThe default formats are a function of the type of the variable:

```stata
byte    %8.0g
int     %8.0g
long    %12.0g
float   %9.0g
double  %10.0g

str#    %#s
strL    %9s
```

`format [varlist]` displays the current formats associated with the variables format by itself lists all variables that have formats too long to be listed in their entirety by describeformat varlist lists the formats for the specified variables regardless of their lengthformat * lists the formats for all the variables.

### Examples

```stata
Four values displayed in different numeric display formats
+---------------------------------------------------------------------+
|   %9.0g   %9.0gc     %9.2f     %9.2fc %-9.0g       %09.2f     %9.2e |
|---------------------------------------------------------------------|
|   12345   12,345  12345.00  12,345.00  12345    012345.00  1.23e+04 |
|  37.916   37.916     37.92      37.92  37.916   000037.92  3.79e+01 |
| 3567890  3567890  3.57e+06   3.57e+06  3567890   3.57e+06  3.57e+06 |
|   .9165    .9165      0.92       0.92  .9165    000000.92  9.16e-01 |
+---------------------------------------------------------------------+
```

### Examples

```stata
// Setup
webuse census10

// Describe the data
describe

// List some of the data
list in 1/8

// Left-align the state variable
format state %-14s

// List the result
list in 1/8

// Left-align region, a numeric variable with attached value label
format region %-8.0g

// List the result
list in 1/8

// Insert commas in the variable pop
format pop %12.0gc

// List the result
list in 1/8

// Vertically align the decimal points in medage
format medage %8.1f

// List the result
list in 1/8
```

### Examples

```stata
// Setup
webuse fmtxmpl

// List some of the data
list empid in 83/87

Attach leading zeros to empid values
format empid %05.0f

List the result
list empid in 83/87
```

### Examples

```stata
// Setup
webuse fmtxmpl2

// Display the formats of the three date variables
format hiredate login logout

// Attach a date format to login and logout
format login logout %tcDDmonCCYY_HH:MM:SS.ss

// List the result
list login logout in 1/5

// Attach a date format to the hiredate variable
format hiredate %td

// List the result
list hiredate in 1/5

// Attach a different date format to the hiredate variable
format hiredate %tdDD/NN/CCYY

// List the result
list hiredate in 1/5

// Display the current formats for all variables using describe
describe

// Display the formats for the variables whose display format is too long to show in the describe output
format
```

### Examples

```stata
// Setup
webuse census10

// Attach a European format to the variables pop and medage
format pop %12,0gc     (note the comma)
format medage %9,2gc

// List the result
list in 1/8

// Remove the European format from variables pop and medage
format pop %12.0gc      (back to period for the decimal point)
format medage %9.2gc

// Change the setting for the decimal point to comma
set dp comma

// Perform a one-way tabulation
tabulate region [fw=pop]

// Restore period as the setting for the decimal point
set dp period
```
