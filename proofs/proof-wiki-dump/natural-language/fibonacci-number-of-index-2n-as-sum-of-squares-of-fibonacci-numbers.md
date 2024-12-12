# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_of_Index_2n_as_Sum_of_Squares_of_Fibonacci_Numbers

Theorem
Let $F_n$ denote the $n$th Fibonacci number.
Then:

$F_{2 n} = {F_{n + 1} }^2 - {F_{n - 1} }^2$


Proof
From Honsberger's Identity:

$\forall m, n \in \Z_{>0}: F_{m + n} = F_{m - 1} F_n + F_m F_{n + 1}$

Setting $m = n$:














\(\ds F_{2 n}\)

\(=\)







\(\ds F_{n - 1} F_n + F_n F_{n + 1}\)




















\(\ds \)

\(=\)







\(\ds F_n \paren {F_{n + 1} + F_{n - 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {F_{n + 1} - F_{n - 1} } \paren {F_{n + 1} + F_{n - 1} }\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds {F_{n + 1} }^2 - {F_{n - 1} }^2\)





Difference of Two Squares



$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$




