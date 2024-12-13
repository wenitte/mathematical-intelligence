# 

Source: https://proofwiki.org/wiki/Limit_to_Infinity_of_Binomial_Coefficient_over_Power



Theorem
Let $k \in \R \setminus \set {-1, -2, -3, \dotsc}$.
Then:

$\ds \lim_{r \mathop \to \infty} \dfrac {\dbinom r k} {r^k} = \frac 1 {\map \Gamma {k + 1} }$


Integer Case
Let $k \in \N$.
Then:

$\ds \lim_{r \mathop \to \infty} \frac {\dbinom r k} {r^k} = \frac 1 {k!}$


Proof













\(\ds \lim_{r \mathop \to \infty} \frac {\dbinom r k} {r^k}\)

\(=\)







\(\ds \lim_{r \mathop \to \infty} \frac {\map \Gamma {r + 1} } {\map \Gamma {k + 1} \map \Gamma {r - k + 1} r^k}\)





Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds \lim_{r \mathop \to \infty} \frac 1 {\map \Gamma {k + 1} } \frac {\sqrt {2 \pi r} \paren {r / e}^r} {\sqrt {2 \pi \paren {r - k} } \paren {\paren {r - k} / e}^{r - k} r^k}\)





Stirling's Formula for Gamma Function; first term














\(\ds \)

\(=\)







\(\ds \frac 1 {\map \Gamma {k + 1} } \lim_{r \mathop \to \infty} \sqrt {\frac r {r - k} } \paren {\frac r e}^r \paren {\frac e {r - k} }^{r - k} \frac 1 {r^k}\)





$\sqrt {2 \pi}$ cancels














\(\ds \)

\(=\)







\(\ds \frac 1 {\map \Gamma {k + 1} } \lim_{r \mathop \to \infty} \sqrt {\frac r {r - k} } \frac 1 {e^k} \frac {r^{r - k} } {\paren {r - k}^{r - k} }\)





Exponent Combination Laws: Quotient of Powers














\(\ds \)

\(=\)







\(\ds \frac 1 {\map \Gamma {k + 1} } \frac 1 {e^k} \lim_{r \mathop \to \infty} \frac {r^{r - k + \frac 1 2} } {\paren {r - k}^{r - k + \frac 1 2} }\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \frac 1 {\map \Gamma {k + 1} } \frac 1 {e^k} \lim_{r \mathop \to \infty} \frac {r^{r - k + \frac 1 2} } {\paren {r - k}^{r - k + \frac 1 2} } \times \frac {\paren {\frac 1 r}^{r - k + \frac 1 2} } {\paren {\frac 1 r}^{r - k + \frac 1 2} }\)





multiplying top and bottom by $\paren {\frac 1 r}^{r - k + \frac 1 2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {\map \Gamma {k + 1} } \frac 1 {e^k} \lim_{r \mathop \to \infty} \frac 1 {\paren {1 - k / r}^r \times \paren {1 - k / r}^{\frac 1 2 - k} }\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \frac 1 {\map \Gamma {k + 1} } \frac 1 {e^k} \frac 1 {e^{-k} }\)





Definition of Euler's Number $e^{-k} = \lim_{r \mathop \to \infty} \paren {1 - k / r}^r$














\(\ds \)

\(=\)







\(\ds \frac 1 {\map \Gamma {k + 1} }\)









$\blacksquare$

Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $45$




