# 

Source: https://proofwiki.org/wiki/Discrepancy_between_Gregorian_Year_and_Tropical_Year

Theorem
The Gregorian year and the tropical year differ such that the Gregorian calendar becomes $1$ day further out approximately every $3319$ years.


Proof
By definition, the length $Y_T$ of the tropical year is defined as $\approx 365 \cdotp 24219 \, 878$ days.
By definition of the Gregorian year:

$Y_G = \begin{cases} 366 \, \text {days} & : 400 \divides y \\
365 \, \text {days} & : 400 \nmid  y \text { and } 100 \divides y\\
366 \, \text {days} & : 100 \nmid  y \text { and } 4 \divides y\\
365 \, \text {days} & : 4 \nmid y \end{cases}$
where:

$Y_G$ denotes the length of the Gregorian year in days
$y$ denotes the number of the year
$4 \divides y$ denotes that $y$ is divisible by $4$
$4 \nmid y$ denotes that $y$ is not divisible by $4$.

Thus in every $400$ years, there are:

$300$ years which are not divisible by $4$, which have $365$ days
$1$ year which is divisible by $400$, which has $366$ days
$3$ years which are divisible by $100$ but not $400$, which have $365$ days
The remaining $96$ years which are divisible by $4$ but not $100$, which have $366$ days.

Thus:














\(\ds 400 Y_G\)

\(=\)







\(\ds 303 \times 365 + 97 \times 366\)





considering $400$ consecutive Gregorian years








\(\ds \leadsto \ \ \)





\(\ds Y_G\)

\(=\)







\(\ds \frac {110 \, 595 + 35 \, 502} {400}\)




















\(\ds \)

\(=\)







\(\ds \frac {146 \, 097} {400}\)




















\(\ds \)

\(=\)







\(\ds 365 \cdotp 2425\)














\(\ds \leadsto \ \ \)





\(\ds Y_G - Y_T\)

\(\approx\)







\(\ds 365 \cdotp 2425 - 365 \cdotp 24219 \, 878\)




















\(\ds \)

\(\approx\)







\(\ds 0 \cdotp 0003013\)




















\(\ds \)

\(\approx\)







\(\ds \frac 1 {3318 \cdotp 95}\)









Thus the mean Gregorian year is $\dfrac 1 {3318 \cdotp 95}$ days longer than the tropical year.
This means that after approximately $3319$ Gregorian years, the Gregorian calendar starts one day later relative to the tropical year.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $365 \cdotp 2422$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $365 \cdotp 24219 \, 878$




