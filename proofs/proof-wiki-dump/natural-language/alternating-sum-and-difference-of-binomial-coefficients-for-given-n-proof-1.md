# 

Source: https://proofwiki.org/wiki/Alternating_Sum_and_Difference_of_Binomial_Coefficients_for_Given_n/Proof_1

Theorem
$\ds \forall n \in \Z_{\geq 0}: \sum_{i \mathop = 0}^n \paren {-1}^i \binom n i = \delta_{n 0}$


Proof
Lemma
$\ds \sum_{i \mathop = 0}^0 \binom 0 0 = 1$
$\Box$

For $n > 0$:














\(\ds \sum_{i \mathop = 0}^n \paren{-1}^i \binom n i\)

\(=\)







\(\ds \binom n 0 + \sum_{i \mathop = 1}^{n - 1} \paren{-1}^i \binom n i + \paren{-1}^n \binom n n\)




















\(\ds \)

\(=\)







\(\ds \binom n 0 + \sum_{i \mathop = 1}^{n - 1} \paren{-1}^i \paren{\binom {n - 1} {i - 1} + \binom {n - 1} i} + \paren{-1}^n \binom n n\)





Pascal's Rule














\(\ds \)

\(=\)







\(\ds \binom n 0 - \sum_{i \mathop = 1}^{n - 1} \paren{\paren{-1}^{i-1} \binom {n - 1} {i - 1} - \paren{-1}^i \binom {n - 1} i} + \paren{-1}^n \binom n n\)




















\(\ds \)

\(=\)







\(\ds \binom n 0 - \paren{-1}^{1 - 1} \binom {n - 1} {1 - 1} + \paren{-1}^{n - 1} \binom {n - 1} {n - 1} + \paren{-1}^n \binom n n\)





Telescoping Series/Example 1














\(\ds \)

\(=\)







\(\ds 1 - 1 + \paren{-1}^{n - 1} - \paren{-1}^{n - 1}\)





Binomial Coefficient with Zero, Binomial Coefficient with Self














\(\ds \)

\(=\)







\(\ds 0\)









Hence the result.
$\blacksquare$





