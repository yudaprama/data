You can either click on the `save` icon in the upper left of the screen or press <kbd>CTRL+S</kbd> or use the command `save` and the file name. 

To save the Stata file you just created in your default directory:
	
```stata
cd e:/stataclass
save fev.dta
```

If `fev.dta` already existed and you wanted to replace it with a new data version:

```stata
save "e:/stataclass/fev.dta", replace
```
