# 

Source: https://proofwiki.org/wiki/Addition_Rule_for_Gaussian_Binomial_Coefficients/Formulation_1

Theorem
Let $\dbinom n m_q$ denote a Gaussian binomial coefficient.

Then:

$\dbinom n m_q = \dbinom {n - 1} m_q + \dbinom {n - 1} {m - 1}_q q^{n - m}$


Proof
By definition of Gaussian binomial coefficient:














\(\ds \binom n m_q\)

\(:=\)







\(\ds \prod_{j \mathop = 0}^{m - 1} \dfrac {1 - q^{n - j} } {1 - q^{j + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 - q^n} \paren {1 - q^{n - 1} } \dotsm \paren {1 - q^{n - m + 1} } } {\paren {1 - q^m} \paren {1 - q^{m - 1} } \dotsm \paren {1 - q^1} }\)










Thus:














\(\ds \dbinom {n - 1} m_q + \dbinom {n - 1} {m - 1}_q q^{n - m}\)

\(=\)







\(\ds \prod_{j \mathop = 0}^{m - 1} \dfrac {1 - q^{n - 1 - j} } {1 - q^{j + 1} } + q^{n - m} \prod_{j \mathop = 0}^{m - 2} \dfrac {1 - q^{n - 1 - j} } {1 - q^{j + 1} }\)





Definition of Gaussian Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{m - 2} \dfrac {1 - q^{n - 1 - j} } {1 - q^{j + 1} } \paren {\dfrac {1 - q^{n - 1 - \paren {m - 1} } } {1 - q^{\paren {m - 1} + 1} } + q^{n - m} }\)





extracting $\ds \prod_{j \mathop = 0}^{m - 2} \dfrac {1 - q^{n - 1 - j} } {1 - q^{j + 1} }$ as a factor














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{m - 2} \dfrac {1 - q^{n - 1 - j} } {1 - q^{j + 1} } \paren {\dfrac {1 - q^{n - m} } {1 - q^m} + q^{n - m} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{m - 2} \dfrac {1 - q^{n - 1 - j} } {1 - q^{j + 1} } \paren {\dfrac {1 - q^{n - m} + q^{n - m} \paren {1 - q^m} } {1 - q^m} }\)





placing over a common denominator














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{m - 2} \dfrac {1 - q^{n - 1 - j} } {1 - q^{j + 1} } \paren {\dfrac {1 - q^{n - m} + q^{n - m} - q^{n - m} q^m} {1 - q^m} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{m - 2} \dfrac {1 - q^{n - 1 - j} } {1 - q^{j + 1} } \paren {\dfrac {1 - q^n} {1 - q^m} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{m - 1} \dfrac {1 - q^{n - 1 - j} } {1 - q^{j + 1} }\)




















\(\ds \)

\(=\)







\(\ds \binom n m_q\)





Definition of Gaussian Binomial Coefficient



$\blacksquare$


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): $q$-binomial
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): $q$-expansion
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $58$




