# 

Source: https://proofwiki.org/wiki/Bertrand-Chebyshev_Theorem/Lemma_4

Lemma
For all $n \ge 1$:

$\dbinom {2 n} n \ge \dfrac {2^{2 n}} {2 n}$
where $\dbinom {2 n} n$ denotes a binomial coefficient.


Proof
From Sequence of Binomial Coefficients is Strictly Increasing to Half Upper Index, $\dbinom n k$ increases for $k < \dfrac n 2$.
From Sequence of Binomial Coefficients is Strictly Decreasing from Half Upper Index, $\dbinom n k$ decreases for $k > \dfrac n 2$.
Hence for all $0 \le k \le n$:

$\dbinom n k \le \dbinom n {\floor {n / 2} }$
where $\floor {n / 2}$ denotes the floor function.

So, for all $0 \le k \le 2 n$:

$(1): \quad \dbinom {2 n} k \le \dbinom {2 n} n$

Hence:














\(\ds 2^{2 n}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{2 n} \binom {2 n} k\)





Sum of Binomial Coefficients over Lower Index














\(\ds \)

\(=\)







\(\ds \binom {2 n} 0 + \sum_{k \mathop = 1}^{2 n - 1} \binom {2 n} k + \binom {2 n} {2 n}\)




















\(\ds \)

\(=\)







\(\ds 2 + \sum_{k \mathop = 1}^{2 n - 1} \binom {2 n} k\)





Binomial Coefficient with Zero, Binomial Coefficient with Self














\(\ds \)

\(\le\)







\(\ds \binom {2 n} n + \sum_{k \mathop = 1}^{2 n - 1} \binom {2 n} n\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 2 n \binom {2 n} n\)














\(\ds \leadsto \ \ \)





\(\ds \dbinom {2 n} n\)

\(\ge\)







\(\ds \dfrac {2^{2 n} } {2 n}\)









$\blacksquare$





