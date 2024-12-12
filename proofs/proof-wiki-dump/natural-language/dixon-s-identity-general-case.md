# 

Source: https://proofwiki.org/wiki/Dixon%27s_Identity/General_Case



Theorem
For $l, m, n \in \Z_{\ge 0}$:

$\ds \sum_{k \mathop \in \Z} \paren {-1}^k \dbinom {l + m} {l + k} \dbinom {m + n} {m + k} \dbinom {n + l} {n + k} = \dfrac {\paren {l + m + n}!} {l! \, m! \, n!}$


Proof
From Sum over $k$ of $\dbinom {m - r + s} k$ by $\dbinom {n + r - s} {n - k}$ by $\dbinom {r + k} {m + n}$:

$\ds \sum_{k \mathop \in \Z} \binom {m - r + s} k \binom {n + r - s} {n - k} \binom {r + k} {m + n} = \binom r m \binom s n$

Setting $\tuple {m, n, r, s, k} \gets \tuple {m + k, l - k, m + n, n + l, j}$ into the equation above, we obtain:














\(\ds \binom r m \binom s n\)

\(=\)







\(\ds \sum_{j \mathop \in \Z} \binom {m - r + s} k \binom {n + r - s} {n - k} \binom {r + k} {m + n}\)





before substitution














\(\ds \binom {m + n} {m + k} \binom {n + l} {l - k}\)

\(=\)







\(\ds \sum_{j \mathop \in \Z} \binom {\paren {m + k} - \paren {m + n} + \paren {n + l} } j \binom {\paren {l - k} + \paren {m + n} - \paren {n + l} } {\paren {l - k} - j} \binom {\paren {m + n } + j} {\paren {m + k} + \paren {l - k} }\)





after substitution














\(\ds \binom {m + n} {m + k} \binom {n + l} {n + k}\)

\(=\)







\(\ds \sum_{j \mathop \in \Z} \binom {l + k} j \binom {m - k} {l - k - j} \binom {m + n + j} {m + l}\)





simplifying and Symmetry Rule for Binomial Coefficients



On the left hand side, we have:














\(\ds \sum_{k \mathop \in \Z} \paren {-1}^k \dbinom {l + m} {l + k} \dbinom {m + n} {m + k} \dbinom {n + l} {n + k}\)

\(=\)







\(\ds \sum_{k \mathop \in \Z} \paren {-1}^k \dbinom {l + m} {l + k} \paren {\sum_{j \mathop \in \Z} \binom {l + k} j \binom {m - k} {l - k - j} \binom {m + n + j} {m + l} }\)





substituting from above














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in \Z} \sum_{j \mathop \in \Z} \paren {-1}^k \dbinom {l + m} {l + k} \dbinom {l + k} j \dbinom {m - k} {l - k - j} \dbinom {m + n + j} {m + l}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in \Z} \sum_{j \mathop \in \Z} \paren {-1}^k \dfrac {\paren {l + m}!} {\paren {l + k}!\paren {m - k}!} \dfrac {\paren {l + k}!} {j!\paren {l - j + k}!} \dfrac {\paren {m - k}!} {\paren {l - j - k}!\paren {j - l + m}!} \dfrac {\paren {m + n + j}!} {\paren {m + l}!\paren {j - l + n}!}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in \Z} \sum_{j \mathop \in \Z} \paren {-1}^k \dfrac 1 {j!\paren {l - j + k}!} \dfrac 1 {\paren {l - j - k}!\paren {j - l + m}!} \dfrac {\paren {m + n + j}!} {\paren {j - l + n}!}\)





$\paren {l + m}!$, $\paren {l + k}!$ and $\paren {m - k}!$ cancel




Unless $j = l$ and $k = 0$ the sum on $k$ vanishes.
Therefore:

$\ds \sum_{k \mathop \in \Z} \paren {-1}^k \dbinom {l + m} {l + k} \dbinom {m + n} {m + k} \dbinom {n + l} {n + k} = \dfrac {\paren {l + m + n}!} {l! \, m! \, n!}$
$\blacksquare$


Source of Name
This entry was named for Alfred Cardew Dixon.


Sources
1903: A.C. Dixon: Summation of a certain Series (Proc. London Math. Soc. Vol. 35: pp. 285 – 289)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $62$




