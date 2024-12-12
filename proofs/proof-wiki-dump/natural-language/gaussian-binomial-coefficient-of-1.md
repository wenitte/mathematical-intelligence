# 

Source: https://proofwiki.org/wiki/Gaussian_Binomial_Coefficient_of_1

Theorem
$\dbinom 1 m_q = \delta_{0 m} + \delta_{1 m}$
That is:

$\dbinom 1 m_q = \begin{cases} 1 & : m = 0 \text { or } m = 1 \\0 & : \text{otherwise} \end{cases}$
where $\dbinom 1 m_q$ denotes a Gaussian binomial coefficient.


Proof
By definition of Gaussian binomial coefficient:

$\dbinom 1 m_q = \ds \prod_{k \mathop = 0}^{m - 1} \dfrac {1 - q^{1 - k} } {1 - q^{k + 1} }$

When $m = 0$ the continued product on the right hand side is vacuous, and so:

$\dbinom 1 0_q = 1$

Let $m > 1$.
Then:














\(\ds \dbinom 1 m_q\)

\(=\)







\(\ds \prod_{k \mathop = 0}^{m - 1} \dfrac {1 - q^{1 - k} } {1 - q^{k + 1} }\)





Definition of Gaussian Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \paren {\dfrac {1 - q^{1 - 0} } {1 - q^{0 + 1} } } \paren {\dfrac {1 - q^{1 - 1} } {1 - q^{1 + 1} } } \paren {\dfrac {1 - q^{1 - 2} } {1 - q^{2 + 1} } } \cdots \paren {\dfrac {1 - q^{1 - \paren {m - 1} } } {1 - q^{\paren {m - 1} + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {\dfrac {1 - q} {1 - q} } \paren {\dfrac {1 - q^0} {1 - q^2} } \paren {\dfrac {1 - q^{-1} } {1 - q^3} } \cdots \paren {\dfrac {1 - q^{2 - m} } {1 - q^m} }\)









When $m > 1$ there exists a factor $1 - q^0 = 0$ in the numerator of the right hand side.
Hence when $m > 1$ we have that $\dbinom 1 m_q = 0$.

We are left with:














\(\ds \dbinom 1 1_q\)

\(=\)







\(\ds \prod_{k \mathop = 0}^0 \dfrac {1 - q^{1 - k} } {1 - q^{k + 1} }\)





Definition of Gaussian Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \dfrac {1 - q^{1 - 0} } {1 - q^{0 + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 - q} {1 - q}\)




















\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$





