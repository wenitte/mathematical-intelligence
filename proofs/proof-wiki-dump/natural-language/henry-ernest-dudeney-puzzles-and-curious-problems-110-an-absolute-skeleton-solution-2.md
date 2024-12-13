# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/110_-_An_Absolute_Skeleton/Solution_2

Puzzles and Curious Problems by Henry Ernest Dudeney: $110$
An Absolute Skeleton
Here is a good skeleton puzzle.
The only conditions are:
$(1)$ No digit appears twice in any row of figures except the dividend.
$(2)$ If $2$ be added to the last figure in the quotient it equals the last but one,
and if $2$ be added to the third figure from the end it gives the last figure but $3$ in the quotient.
That is to say, the quotient might end in, say, $9742$, or in $3186$.
        ********
    ------------
 ***)***********
      ***
       ---
       ***
       ***
       ----
       ****
       ****
       -----
         ***
         ***
         ----
         ****
         ****
         -----
          ****
          ****
          -----
           ****
           ****
           -----
            ****
            ****
            ----



Solution
        32819764
    ------------
 310)10174126840
      930
       ---
       874
       620
       ----
       2541
       2480
       -----
         612
         310
         ----
         3026
         2790
         -----
          2368
          2170
          -----
           1984
           1860
           -----
            1240
            1240
            ----



Proof
From the initial deductions, we have determined that:

$(1): \quad$ It is possible that there is a solution in which the divisor is $310$
$(2): \quad$ If this is the case, then the quotient is one of:
$32418697$
$32419786$
$32816497$
$32819764$
Thus the dividend in each case will be:

$10049796070$
$10050133660$
$10173114070$
$10174126840$
It remains to investigate each one.

Hence we set up a long division and check the partial dividends in each case.

        32418697
    ------------
 310)10049796070
      930
       ---
       749
       620
       ----
       1297
       1240
       -----
         579
         310
         ----
         2696
         ****

and we need go no further.


        32419786
    ------------
 310)10050133660
      930
       ---
       750
       620
       ----
       1301
       1240
       -----
         613
         310
         ----
         3033
         ****
         -----

and we need go no further.


        32816497
    ------------
 310)10173114070
      930
       ---
       873
       620
       ----
       2531
       2480
       -----
         511
         ***
         ----

and we need go no further.

Finally:

        32819764
    ------------
 310)10174126840
      930
       ---
       874
       620
       ----
       2541
       2480
       -----
         612
         310
         ----
         3026
         2790
         -----
          2368
          2170
          -----
           1984
           1860
           -----
            1240
            1240
            ----

and we have found a solution.

Hence the only solution with $D = 310$ is:

$\dfrac {10174126840} {310} = 32819764$
$\blacksquare$





