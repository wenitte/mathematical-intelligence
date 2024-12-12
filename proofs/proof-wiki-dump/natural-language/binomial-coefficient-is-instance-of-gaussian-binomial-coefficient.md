# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_is_instance_of_Gaussian_Binomial_Coefficient

Theorem
Let $\dbinom r m_q$ denote the Gaussian binomial coefficient:

Then:

$\ds \lim_{q \mathop \to 1^-} \dbinom r m_q = \dbinom r m$
where $\dbinom r m$ denotes the conventional binomial coefficient.


Proof
We have by definition of Gaussian binomial coefficient:

$\ds \dbinom r m_q = \prod_{k \mathop = 0}^{m - 1} \dfrac {1 - q^{r - k} } {1 - q^{k + 1} }$

Consider a typical factor of this continued product:














\(\ds \dfrac {1 - q^{r - k} } {1 - q^{k + 1} }\)

\(=\)







\(\ds \dfrac {\paren {1 - q^{r - k} } / \paren {1 - q} } {\paren {1 - q^{k + 1} } / \paren {1 - q} }\)





multiplying top and bottom by $1 - q$














\(\ds \)

\(=\)







\(\ds \dfrac {\sum_{j \mathop = 0}^{r - k - 1} q^j} {\sum_{j \mathop = 0}^k q^j}\)





Sum of Geometric Sequence








\(\ds \leadsto \ \ \)





\(\ds \lim_{q \mathop \to 1^-} \dfrac {1 - q^{r - k} } {1 - q^{k + 1} }\)

\(=\)







\(\ds \lim_{q \mathop \to 1^-} \dfrac {\sum_{j \mathop = 0}^{r - k - 1} q^j} {\sum_{j \mathop = 0}^k q^j}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\sum_{j \mathop = 0}^{r - k - 1} 1} {\sum_{j \mathop = 0}^k 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {r - k} {k + 1}\)










Thus:














\(\ds \lim_{q \mathop \to 1^-} \dbinom r k_q\)

\(=\)







\(\ds \prod_{k \mathop = 0}^{m - 1} \dfrac {r - k} {k + 1}\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 1}^m \dfrac {r + 1 - k} k\)





Translation of Index Variable of Product














\(\ds \)

\(=\)







\(\ds \dbinom r m\)





Definition of Binomial Coefficient



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients




