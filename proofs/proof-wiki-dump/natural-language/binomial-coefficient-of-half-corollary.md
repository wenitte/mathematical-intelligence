# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_of_Half/Corollary

Theorem
Let $k \in \Z_{\ge 0}$.

$\dbinom {\frac 1 2} k = \dfrac {\paren {-1}^{k - 1} } {2^{2 k - 1} \paren {2 k - 1} } \dbinom {2 k - 1} k - \delta_{k 0}$
where:

$\dbinom {\frac 1 2} k$ denotes a binomial coefficient
$\delta_{k 0}$ denotes the Kronecker delta.


Proof
When $k > 0$ we have:














\(\ds \dfrac {\paren {-1}^{k - 1} } {4^k \paren {2 k - 1} } \dbinom {2 k} k\)

\(=\)







\(\ds \dfrac {\paren {-1}^{k - 1} } {4^k \paren {2 k - 1} } \dfrac {2 k} {2 k - k} \dbinom {2 k - 1} k\)





Factors of Binomial Coefficient: Corollary 1














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^{k - 1} } {4^k \paren {2 k - 1} } \dfrac {2 k} k \dbinom {2 k - 1} k\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 \paren {-1}^{k - 1} } {4^k \paren {2 k - 1} } \dbinom {2 k - 1} k\)










When $k = 0$ we have:














\(\ds \dfrac {\paren {-1}^{k - 1} } {4^k \paren {2 k - 1} } \dbinom {2 k} k\)

\(=\)







\(\ds \dfrac {\paren {-1}^{-1} } {-1} \dbinom 0 0\)




















\(\ds \)

\(=\)







\(\ds 1\)










while:














\(\ds \dfrac {\paren {-1}^{k - 1} } {2^{2 k - 1} \paren {2 k - 1} } \dbinom {2 k - 1} k\)

\(=\)







\(\ds \dfrac {\paren {-1}^{-1} } {2^{-1} \paren {-1} } \dbinom {-1} 0\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {2^{-1} } \dbinom {-1} 0\)




















\(\ds \)

\(=\)







\(\ds 2 \dbinom {-1} 0\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {-1}^0 \dbinom {0 - \paren {-1} - 1} 0\)





Negated Upper Index of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds 2 \dbinom 0 0\)




















\(\ds \)

\(=\)







\(\ds 2\)










Hence:

$(1): \quad \dbinom {\frac 1 2} k = \dfrac {2 \paren {-1}^{k - 1} } {4^k \paren {2 k - 1} } \dbinom {2 k - 1} k - \delta_{k 0}$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $53 \ \text{(b)}$




