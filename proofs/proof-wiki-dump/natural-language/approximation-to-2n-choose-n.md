# 

Source: https://proofwiki.org/wiki/Approximation_to_2n_Choose_n

Theorem
$\ds \lim_{n \mathop \to \infty} \dbinom {2 n} n = \dfrac {4^n} {\sqrt {n \pi} }$


Proof
From Approximation to $\dbinom {x + y} y$:

$\ds \lim_{x, y \mathop \to \infty} \dbinom {x + y} y = \sqrt {\dfrac 1 {2 \pi} \paren {\frac 1 x + \frac 1 y} } \paren {1 + \dfrac y x}^x \paren {1 + \dfrac x y}^y$
Thus:















\(\ds \lim_{n \mathop \to \infty} \dbinom {2 n} n\)

\(=\)







\(\ds \sqrt {\dfrac 1 {2 \pi} \paren {\frac 1 n + \frac 1 n} } \paren {1 + \dfrac n n}^n \paren {1 + \dfrac n n}^n\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac 1 {2 \pi} \paren {\frac 2 n} } \paren {1 + 1}^n \paren {1 + 1}^n\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac 1 {n \pi} } 2^{2 n}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {4^n} {\sqrt {n \pi} }\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $46$




