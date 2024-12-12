# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_of_Minus_Half

Theorem
Let $k \in \Z$.

$\dbinom {-\frac 1 2} k = \dfrac {\paren {-1}^k} {4^k} \dbinom {2 k} k$
where $\dbinom {-\frac 1 2} k$ denotes a binomial coefficient.


Proof
From Product of r Choose k with r Minus Half Choose k:

$\dbinom r k \dbinom {r - \frac 1 2} k = \dfrac {\dbinom {2 r} k \dbinom {2 r - k} k} {4^k}$

Setting $r = -\dfrac 1 2$:














\(\ds \dbinom {-\frac 1 2} k \dbinom {-1} k\)

\(=\)







\(\ds \frac 1 {4^k} \dbinom {-1} k \dbinom {-1 - k} k\)














\(\ds \leadsto \ \ \)





\(\ds \dbinom {-\frac 1 2} k\)

\(=\)







\(\ds \frac 1 {4^k} \dbinom {-1 - k} k\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^k} {4^k} \dbinom {k - \paren {-1 - k} - 1} k\)





Negated Upper Index of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^k} {4^k} \dbinom {2 k} k\)





simplifying



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $47$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $53 \ \text{(b)}$




