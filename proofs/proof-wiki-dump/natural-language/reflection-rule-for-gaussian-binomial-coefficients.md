# 

Source: https://proofwiki.org/wiki/Reflection_Rule_for_Gaussian_Binomial_Coefficients

Theorem
Let $q \in \R_{\ne 1}, n \in \Z_{>0}, k \in \Z$.
Then:

$\dbinom n k_q = q^{k \paren {n - k} } \dbinom n k_{q^{-1} }$
where $\dbinom n k_q$ is a Gaussian binomial coefficient.


Proof













\(\ds \dbinom n k_{q^{-1} }\)

\(=\)







\(\ds \prod_{j \mathop = 0}^{k - 1} \dfrac {1 - \paren {q^{-1} }^{n - j} } {1 - \paren {q^{-1} }^{j + 1} }\)





Definition of Gaussian Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{k - 1} \dfrac {\frac {q^{n - j} - 1} {q^{n - j} } } {\frac {q^{j + 1} - 1} {q^{j + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{k - 1} \dfrac {q^{j + 1} } {q^{n - j} } \dfrac {q^{n - j} - 1} {q^{j + 1} - 1}\)




















\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{k - 1} q^{1 - n + 2 j} \dfrac {1 - q^{n - j} } {1 - q^{j + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {q^{1 - n} }^k \prod_{j \mathop = 0}^{k - 1} q^{2 j} \dfrac {1 - q^{n - j} } {1 - q^{j + 1} }\)




















\(\ds \)

\(=\)







\(\ds q^{k - n k} q^{k \paren {k - 1} } \prod_{j \mathop = 0}^{k - 1} \dfrac {1 - q^{n - j} } {1 - q^{j + 1} }\)





Closed Form for Triangular Numbers: $\ds \sum_{j \mathop = 0}^{k - 1} 2 j = 2 \sum_{j \mathop = 1}^{k - 1} j = 2 \dfrac {\paren {k - 1} k} 2$














\(\ds \)

\(=\)







\(\ds q^{k^2 - n k} \prod_{j \mathop = 0}^{k - 1} \dfrac {1 - q^{n - j} } {1 - q^{j + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {q^{k \paren {n - k} } } \dbinom n k_q\)





Definition of Gaussian Binomial Coefficient



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $58$




