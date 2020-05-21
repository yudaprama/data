## Creating log file

The `log` command allows you to make a full record of your Stata session. A log is a file containing what you type and Stata's output. The `cmdlog` command allows you to make a record of only the commands you type during your Stata session.  You can make full logs and command logs simultaneously, one or the other, or neither.  Neither is produced until you tell STATA to start logging.

```stata
log using filename [, append replace [ text | smcl ] ]
cmdlog using filename [, append replace ]

log { on | off | close }
cmdlog { on | off | close }
```

log and its subcommands tell Stata to open a log file and create a record of what you type and any output that appears in the Results window, to suspend or resume logging, to check logging status, and to close the log file.  The default format is Stata Markup and Control Language (SMCL) but can be plain text.  You can have up to five SMCL and five text logs open at a time. `cmdlog` and its subcommands are similar to log but create a command log recording only what you type and can be only plain text.  You can have only one command log open at a time.

Full logs are recorded in one of two formats: **SMCL (Stata Markup and Control Language)** or **text (ASCII)**. The default is **SMCL**, but you can specify an option to state the format. The SMCL format preserves graphs and Stata formats, but the ASCII format is easily copied into Word or other text editor.

### Example

```stata
// Create a log file called test.smcl in your “e:\stataclass” directory:
log using “e:\stataclass\test.smcl”

// Check the status of logging:
log

// Open our toy dataset and summarize the data
insheet using toy_data.csv, clear
sum

// Suspend the recording of your commands in the test.smcl log file:
log off

// Check the status of logging:
log

// Type in some more commands that will not be in the test.smcl log file:
codebook
list

// Turn the recording back on:
log on

// Type in some more commands that will be in the test.smcl log file:
tabstat age

// Ending the recording session; You should get into the habit of closing your logs:
log close

// Repeat the above using a log that is text, rather than SMCL:
log using “e:\stataclass\test.log”, text
```

## Viewing log file 

```stata
view [file] ["]filename["] [, asis]
```

The log file can be viewed by typing in `view [filename]`.  The asis option specifies that the file should be in ASCII format. 

### Example:

```stata
// To view the log:
view “e:\stataclass\test.smcl”
```

Alternatively, go to the toolbar:  **File** -> **Log** -> **View…**

Note that the creation of testvar2 is not in **test.smcl** because the log was suspended with the `log off` command.

## Translating log file into txt file

```stata
translate input_filename output_filename [, translator(tname) override_options replace ]
```

Use this command to produce printable versions of SMCL logs by converting the SMCL format files to ACSII format files.  Alternatively, you can print or view SMCL logs by clicking on File  Log.  SMCL logs can be viewed in the Viewer.

### Example:

```stata
// Convert the *sml* log file to an ASCII format.
translate “e:\stataclass\test.smcl” “e:\stataclass\mylog.log”
```

> Note a location directory does not always have to be specified when specifying the log-file, but you must be consistent throughout.  In other words, if you decide to specify the log-file with the location then you can’t refer to the same log-file without the location specification.

Another nice use of translate is to recover a log and save it to a log-file (ie, **mylog.txt**) when you have forgotten to start one:

```stata
translate @Results mylog.txt
```

View the contents by going to **File** -> **Log** -> **View**
Browse for your log