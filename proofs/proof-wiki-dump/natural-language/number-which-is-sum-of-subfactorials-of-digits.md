# 

Source: https://proofwiki.org/wiki/Number_which_is_Sum_of_Subfactorials_of_Digits



Theorem
The only integer which is the sum of the subfactorials of its digits is $148 \, 349$:

$148 \, 349 = \mathop !1 + \mathop !4 + \mathop !8 + \mathop !3 \mathop + \mathop !4 \mathop + \mathop !9$


Proof
We have:














\(\ds 148 \, 349\)

\(=\)







\(\ds 0 + 9 + 14 \, 833 + 2 + 9 + 133 \, 496\)




















\(\ds \)

\(=\)







\(\ds \mathop !1 + \mathop !4 + \mathop !8 + \mathop !3 \mathop + \mathop !4 \mathop + \mathop !9\)










A computer search can verify solutions under $10^6$ (that is, with no more than $6$ digits) in seconds.

Let $n$ be a $k$-digit number, for $k \ge 7$.
Then the sum of the subfactorials of its digits is not more than $\mathop !9 \times k$.
But we have:














\(\ds n\)

\(\ge\)







\(\ds 10^{k - 1}\)




















\(\ds \)

\(=\)







\(\ds 10^6 \times 10^{k - 7}\)




















\(\ds \)

\(\ge\)







\(\ds 10^6 \times \paren {1 + 9 \paren {k - 7} }\)





Bernoulli's Inequality














\(\ds \)

\(>\)







\(\ds 7 \times \mathop !9 \times \paren {9 k - 62}\)





$7 \times \mathop !9 = 934472$














\(\ds \)

\(=\)







\(\ds \mathop !9 \paren {63 k - 62 \times 7}\)




















\(\ds \)

\(\ge\)







\(\ds \mathop !9 \times k\)





$k \ge 7$














\(\ds \)

\(\ge\)







\(\ds \text{sum of the subfactorials of digits of } n\)









So no more numbers have this property.
$\blacksquare$


Historical Note
This result was apparently obtained by R.S. Dougherty, but details are hard to come by.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $148,349$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $148,349$




