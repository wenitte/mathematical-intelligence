# 

Source: https://proofwiki.org/wiki/Chu-Vandermonde_Identity/Proof_1



Theorem
$\ds \sum_{k \mathop = 0}^n \binom r k \binom s {n - k} = \binom {r + s} n$


Proof













\(\ds \sum_{n \mathop = 0}^{r + s} \binom {r + s} n x^n\)

\(=\)







\(\ds \paren {1 + x}^{r + s}\)





Binomial Theorem - Integral Index














\(\ds \)

\(=\)







\(\ds \paren {1 + x}^r \paren {1 + x}^s\)





Exponent Combination Laws














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^r \binom r k x^k \sum_{k \mathop = 0}^s \binom s k x^k\)





Binomial Theorem - Integral Index














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^{r + s} \paren {\sum_{k \mathop = 0}^n \binom r k \binom  s {n - k} } x^n\)





Product of Absolutely Convergent Series



Therefore:

$\ds \binom {r + s} n = \sum_{k \mathop = 0}^n \binom r k \binom s {n - k}$
$\blacksquare$


Source of Name
This entry was named for Chu Shih-chieh and Alexandre-Théophile Vandermonde.


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-4}$ Generating Functions: Exercise $3$
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2.4$: Factorials and binomial coefficients: $1.35$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $17$




