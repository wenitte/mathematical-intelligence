# 

Source: https://proofwiki.org/wiki/Reciprocal_as_Summation_of_Binomial_Coefficients_of_Reciprocals

Theorem
$\forall n \in \Z_{>0}: \dfrac 1 n = \ds \sum_{k \mathop = 0}^{n - 1} \paren {-1}^k \dbinom {n - 1} k \dfrac 1 {k + 1}$
where $\dbinom {n - 1} k$ denotes a binomial coefficient.

That is, for example:














\(\ds \dfrac 1 1\)

\(=\)







\(\ds 1\)




















\(\ds \dfrac 1 2\)

\(=\)







\(\ds 1 - \dfrac 1 2\)




















\(\ds \dfrac 1 3\)

\(=\)







\(\ds 1 - 2 \times \dfrac 1 2 + \dfrac 1 3\)




















\(\ds \dfrac 1 4\)

\(=\)







\(\ds 1 - 3 \times \dfrac 1 2 + 3 \times \dfrac 1 3 - \dfrac 1 4\)




















\(\ds \dfrac 1 5\)

\(=\)







\(\ds 1 - 4 \times \dfrac 1 2 + 6 \times \dfrac 1 3 - 4 \times \dfrac 1 4 + \dfrac 1 5\)











Proof













\(\ds \sum_{k \mathop = 0}^{n - 1} \paren {-1}^k \dbinom {n - 1} k \dfrac 1 {k + 1}\)

\(=\)







\(\ds \frac 1 n \sum_{k \mathop = 0}^{n - 1} \paren {-1}^k \binom n {k + 1}\)





Factors of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \frac 1 n \sum_{k \mathop = 1}^n \paren {-1}^{k + 1} \binom n k\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \frac 1 n \paren {\sum_{k \mathop = 0}^n \paren {-1}^{k + 1} \binom n k + 1}\)





$\paren {-1}^1 \dbinom n 0 = -1$














\(\ds \)

\(=\)







\(\ds \frac 1 n \paren {-\paren {1 - 1}^n + 1}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \frac 1 n\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $35$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $35$




