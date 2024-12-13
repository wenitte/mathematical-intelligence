# 

Source: https://proofwiki.org/wiki/Sequence_of_Binomial_Coefficients_is_Strictly_Decreasing_from_Half_Upper_Index

Corollary to Sequence of Binomial Coefficients is Strictly Increasing to Half Upper Index
Let $n \in \Z_{>0}$ be a strictly positive integer.
Let $\dbinom n k$ be the binomial coefficient of $n$ over $k$ for a positive integer $k \in \Z_{\ge 0}$.
Let $S_n = \left\langle{x_k}\right\rangle$ be the sequence defined as:

$x_k = \dbinom n k$

Then $S_n$ is strictly decreasing exactly where $\dfrac n 2 < k \le n$.


Proof
If $k > \dfrac n 2$ then it follows that $n - k < \dfrac n 2$.

Thus:














\(\ds \binom n {k + 1}\)

\(=\)







\(\ds \binom n {n - \left({k + 1}\right)}\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \binom n {n - k - 1}\)




















\(\ds \)

\(<\)







\(\ds \binom n {n - k}\)





Sequence of Binomial Coefficients is Strictly Increasing to Half Upper Index














\(\ds \)

\(=\)







\(\ds \binom n k\)





Symmetry Rule for Binomial Coefficients



Hence the result.
$\blacksquare$





