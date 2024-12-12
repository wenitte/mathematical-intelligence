# 

Source: https://proofwiki.org/wiki/Dixon%27s_Identity



Theorem
For $n \in \Z_{\ge 0}$:

$\ds \sum_{k \mathop \in \Z} \paren {-1}^k \binom {2 n} {n + k}^3 = \dfrac {\paren {3 n}!} {\paren {n!}^3}$


General Case
For $l, m, n \in \Z_{\ge 0}$:

$\ds \sum_{k \mathop \in \Z} \paren {-1}^k \dbinom {l + m} {l + k} \dbinom {m + n} {m + k} \dbinom {n + l} {n + k} = \dfrac {\paren {l + m + n}!} {l! \, m! \, n!}$


Gaussian Binomial Form
For $l, m, n \in \Z_{\ge 0}$:

$\ds \sum_{k \mathop \in \Z} \paren {-1}^k \dbinom {m - r - s} k_q \dbinom {n + r - s} {n - k}_q \dbinom {r + k} {m + n}_q = \dbinom r m_q \dbinom s n_q$
where $\dbinom r m_q$ denotes a Gaussian binomial coefficient


Proof
Follows directly from Dixon's Identity/General Case:

$\ds \sum_{k \mathop \in \Z} \paren {-1}^k \dbinom {l + m} {l + k} \dbinom {m + n} {m + k} \dbinom {n + l} {n + k} = \dfrac {\paren {l + m + n}!} {l! \, m! \, n!}$
setting $l = m = n$.
$\blacksquare$


Source of Name
This entry was named for Alfred Cardew Dixon.


Sources
1891: A.C. Dixon: On the Sum of the Cubes of the Coefficients in a certain Expansion by the Binomial Theorem (Messenger Math. Vol. 20: pp. 79 – 80)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $62$




