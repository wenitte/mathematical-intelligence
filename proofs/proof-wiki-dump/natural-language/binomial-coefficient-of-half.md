# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_of_Half



Theorem
Let $k \in \Z$.

$\dbinom {\frac 1 2} k = \dfrac {\left({-1}\right)^{k - 1} } {4^k \left({2 k - 1}\right)} \dbinom {2 k} k$
where $\dbinom {\frac 1 2} k$ denotes a binomial coefficient.


Corollary
Let $k \in \Z_{\ge 0}$.

$\dbinom {\frac 1 2} k = \dfrac {\paren {-1}^{k - 1} } {2^{2 k - 1} \paren {2 k - 1} } \dbinom {2 k - 1} k - \delta_{k 0}$
where:

$\dbinom {\frac 1 2} k$ denotes a binomial coefficient
$\delta_{k 0}$ denotes the Kronecker delta.


Proof













\(\ds \dbinom {\frac 1 2} k\)

\(=\)







\(\ds \dfrac {1/2} {1/2 - k} \dbinom {1/2 - 1} k\)





Factors of Binomial Coefficient: Corollary 1














\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - 2 k} \dbinom {-1/2} k\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - 2 k} \dfrac {\left({-1}\right)^k} {4^k} \dbinom {2 k} k\)





Binomial Coefficient of Minus Half














\(\ds \)

\(=\)







\(\ds \dfrac {\left({-1}\right)^{k - 1} } {4^k \left({2 k - 1}\right)} \dbinom {2 k} k\)





simplifying



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $53 \ \text{(b)}$




