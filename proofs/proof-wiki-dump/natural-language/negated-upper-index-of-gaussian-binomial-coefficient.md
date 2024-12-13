# 

Source: https://proofwiki.org/wiki/Negated_Upper_Index_of_Gaussian_Binomial_Coefficient

Theorem
Let $q \in \R_{\ne 1}, r \in \R, k \in \Z$.
Then:

$\dbinom r k_q = \paren {-1}^k \dbinom {k - r - 1} k_q q^{k r - k \paren {k - 1} / 2}$
where $\dbinom r k_q$ is a binomial coefficient.


Proof
First note that:














\(\ds 1 - q^t\)

\(=\)







\(\ds q^{-t} \dfrac {1 - q^t} {q^{-t} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {q^{-t} - 1} {q^{-t} }\)




















\(\ds \)

\(=\)







\(\ds q^t \paren {q^{-t} - 1}\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds -q^t \paren {1 - q^{-t} }\)










Then:














\(\ds \binom r k_q\)

\(=\)







\(\ds \prod_{j \mathop = 0}^{k - 1} \dfrac {1 - q^{r - j} } {1 - q^{j + 1} }\)





Definition of Gaussian Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{k - 1} \dfrac {-q^{r - j} \paren {1 - q^{-\paren {r - j} } } } {1 - q^{j + 1} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \paren {-1}^k \prod_{j \mathop = 0}^{k - 1} \dfrac {q^{r - j} \paren {1 - q^{-\paren {r - j} } } } {1 - q^{j + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^k \prod_{j \mathop = 0}^{k - 1} \dfrac {q^{-\paren {j - r} } \paren {1 - q^{j - r} } } {1 - q^{j + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^k \prod_{j \mathop = 0}^{k - 1} \dfrac {q^{-\paren {\paren {k - 1} - j - r} } \paren {1 - q^{\paren {k - 1} - j - r} } } {1 - q^{j + 1} }\)





Permutation of Indices of Product














\(\ds \)

\(=\)







\(\ds \paren {-1}^k \prod_{j \mathop = 0}^{k - 1} \dfrac {1 - q^{\paren {k - r - 1} - j} } {1 - q^{j + 1} } \prod_{j \mathop = 0}^{k - 1} q^{-\paren {\paren {k - 1} - j - r} }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^k \prod_{j \mathop = 0}^{k - 1} \dfrac {1 - q^{\paren {k - r - 1} - j} } {1 - q^{j + 1} } \prod_{j \mathop = 1}^k q^j \prod_{j \mathop = 0}^{k - 1} q^{r - k}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {-1}^k \prod_{j \mathop = 0}^{k - 1} \dfrac {1 - q^{k - r - 1 - j} } {1 - q^{j + 1} } } q^{k r - k \paren {k - 1} / 2}\)





Closed Form for Triangular Numbers and algebra














\(\ds \)

\(=\)







\(\ds \paren {-1}^k \dbinom {k - r - 1} k_q q^{k r - k \paren {k - 1} / 2}\)





Definition of Gaussian Binomial Coefficient



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $58$




