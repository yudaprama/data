Stata on PC uses a default directory. It is best to specify that directory when opening Stata. That way the names files can be understood just by specifying its name rather than its entire path.

The `cd` command sets a directory as the default or “working” directory

The `ls` command lets you know what files are available in the default directory

> Create **stataclass** directory and copy the following files to **stataclass** directory:

> census.dta

```stata
cd ["]drive:directory_name["]

// example windows
cd c:\stataclass
cd "c:\stata class"
ls

// example mac
cd /Users/user/stataclass
cd "/Users/user/stataclass directory"
ls
```

> The underlined portion of the command is the minimal abbreviation that Stata will recognize. The `[...]` indicate optional parts of the command.

> You might want to use `"..."` when directory contain <kbd>space</kbd>, for example "/Users/user/stataclass directory"