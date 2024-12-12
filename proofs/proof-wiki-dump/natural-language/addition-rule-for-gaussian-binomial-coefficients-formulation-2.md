# 

Source: https://proofwiki.org/wiki/Addition_Rule_for_Gaussian_Binomial_Coefficients/Formulation_2

Theorem
Let $\dbinom n m_q$ denote a Gaussian binomial coefficient.

Then:

$\dbinom n m_q = \dbinom {n - 1} m_q q^m + \dbinom {n - 1} {m - 1}_q$


Proof
By definition of Gaussian binomial coefficient:














\(\ds \binom n m_q\)

\(:=\)







\(\ds \prod_{j \mathop = 0}^{m - 1} \dfrac {1 - q^{n - j} } {1 - q^{j + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 - q^n} \paren {1 - q^{n - 1} } \dotsm \paren {1 - q^{n - m + 1} } } {\paren {1 - q^m} \paren {1 - q^{m - 1} } \dotsm \paren {1 - q^1} }\)










Thus:














\(\ds \dbinom {n - 1} m_q q^m + \dbinom {n - 1} {m - 1}_q\)

\(=\)







\(\ds q^m \prod_{j \mathop = 0}^{m - 1} \dfrac {1 - q^{n - 1 - j} } {1 - q^{j + 1} } + \prod_{j \mathop = 0}^{m - 2} \dfrac {1 - q^{n - 1 - j} } {1 - q^{j + 1} }\)





Definition of Gaussian Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{m - 2} \dfrac {1 - q^{n - 1 - j} } {1 - q^{j + 1} } \paren {q^m \dfrac {1 - q^{n - 1 - \paren {m - 1} } } {1 - q^{\paren {m - 1} + 1} } + 1}\)





extracting $\ds \prod_{j \mathop = 0}^{m - 2} \dfrac {1 - q^{n - 1 - j} } {1 - q^{j + 1} }$ as a factor














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{m - 2} \dfrac {1 - q^{n - 1 - j} } {1 - q^{j + 1} } \paren {q^m \dfrac {1 - q^{n - m} } {1 - q^m} + 1}\)





simplifying














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{m - 2} \dfrac {1 - q^{n - 1 - j} } {1 - q^{j + 1} } \paren {\dfrac {q^m \paren {1 - q^{n - m} } + \paren {1 - q^m} } {1 - q^m} }\)





placing over a common denominator














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{m - 2} \dfrac {1 - q^{n - 1 - j} } {1 - q^{j + 1} } \paren {\dfrac {q^m - q^n + 1 - q^m} {1 - q^m} }\)




















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
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $58$




