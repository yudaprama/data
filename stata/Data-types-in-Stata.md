### Data types in Stata

STATA stores data as either string variables or as numeric variables. 

Strings are stored as `str#`, for instance, `str1`, `str2`, `str3`, ..., `str244`.  The number after the str indicates the maximum length of the string.  Numbers are stored as byte, int, long, float, or double, with the default being float. describe and/or codebook can be used to tell you what type of variable you have.

It is important to know how STATA stores a variable, because STATA treats different types of data differently.  For example, STATA expects quotes around string variables in logical expressions.

In general, it is a good idea to store a variable in the smallest datatype possible (for example, if you have a Y/N variable you should store it as a str1, rather than a str2 or greater.  Similarly, if you have a 0/1 variable you should store it as a byte, rather than as a double.

```stata
                                                     Closest to
Storage                                              0 without
type                 Minimum              Maximum    being 0     bytes
----------------------------------------------------------------------
byte                    -127                  100    +/-1          1
int                  -32,767               32,740    +/-1          2
long          -2,147,483,647        2,147,483,620    +/-1          4
float   -1.70141173319*10^38  1.70141173319*10^36    +/-10^-36     4
double  -8.9884656743*10^307  8.9884656743*10^307    +/-10^-323    8
----------------------------------------------------------------------
Precision for float  is 3.795x10^-8
Precision for double is 1.414x10^-16

String
storage       Maximum
type          length         Bytes
----------------------------------
str1             1             1
str2             2             2
 ...             .             .
 ...             .             .
 ...             .             .
str244         244           244
----------------------------------
```
