### List the values of variables

```stata
list [varlist] [if exp] [in range] [, options]
```

Where options affect the style of the list. Certain displays of subsets of the data can be used with `[if exp]` and certain observations can be accessed by using `[in range]` options.  See the exercises below for examples.

### Viewing the data in the data browser window

Now that you have the data, type `browse` (in the command window) to bring up the Data Browser. You can also view the complete data from the browser window which can be accessed via the toolbar : **Data** --> **Data browser** (read-only editor)

![](https://www.reed.edu/psychology/stata/assets/images/browserbutton.png)

![](https://www.reed.edu/psychology/stata/assets/images/Variables/databrowser.png)

Note the Properties window within the Data Browser – use this rather than the Properties window in the main Stata layout when editing your variables within the Data Browser.

When you browse your data, you may realize that you have entered something incorrectly. In this case, the first line of data needs to be changed. Click the **Edit** button on the Data Browser window's toolbar to change to edit mode. If Stata asks if you're sure that you want to leave browse mode, click **Yes**

Click the cell in the first row containing the **3** under the **dog** column, highlighting it. Type **4** and hit <kbd>enter</kbd>, changing the value. Notice that doing this prints a line in the main Results window. This is all it takes to change a variable in the data browser.

Now we're going to add variable labels and value labels to our data in order to make its meaning more apparent.

To add a variable label, first select any cell in the column of the variable you'd like to change - in this case, **sex**. Then, double-click on the cell to the right of the Label cell in the Data Browser's Properties window, type what you want the variable to be known as, and hit <kbd>enter</kbd>. For **sex** let's use the label **Gender**

Now let's add value labels. Right-click on the **sex** cell, select Data, and under the Value Labels menu, click Manage Value Labels... to open the value label window.

![](https://www.reed.edu/psychology/stata/assets/images/Variables/managevaluelabels.png)

Click **Create Label** and you will see another window overlaying the value label window. From here, type Gender into the **label name** field. This is what our set of labels will be known as (note that this cannot be edited after finishing this step unless you delete the entire label set - be careful). Then, in the **value** field, type **0** and in the **label** field, **Male** Click the **Add** button below the label field and repeat this process, assigning **Female** to **1** Your window should look like this:

![](https://www.reed.edu/psychology/stata/assets/images/Variables/createlabel.png)

Click <strong>OK</strong> and close this window. Right-click once more on the **sex** cell, follow Data to Value Labels to Attach Value Label to Variable 'sex'. Select **Gender** and you will see that the data in the sexcolumn has changed from numbers to the labels you've just finished inputting. Stata still recognizes these as 0s and 1s, and if you input any further data you must use numbers rather than these labels, but by labeling our numbers we can identify them more easily without having to memorize - and potentially mix up - what they stand for, making your data much more accessible.