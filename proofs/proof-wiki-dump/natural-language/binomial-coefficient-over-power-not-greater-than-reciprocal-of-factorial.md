# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_over_Power_Not_Greater_than_Reciprocal_of_Factorial

Theorem
Let $r > 0$.
Let $k \in \N$ such that $k \le 2r + 1$.
Then:

$\dfrac {\dbinom r k} {r^k} \le \dfrac 1 {k!}$


Proof













\(\ds \frac {\binom r k} {r^k}\)

\(=\)







\(\ds \frac 1 {k !} \cdot \frac {r^{\underline k} } {r^k}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \frac 1 {k !} \prod_{j \mathop = 0}^{k - 1} \frac {r - j} r\)





Definition of Falling Factorial, Definition of Integer Power








\(\ds \leadsto \ \ \)





\(\ds \size {\frac {\binom r k} {r^k} }\)

\(=\)







\(\ds \frac 1 {k !} \prod_{j \mathop = 0}^{k - 1} \frac {\size {r - j} } r\)





Absolute Value Function is Completely Multiplicative



For each $j = 0, 1, \dotsc, k - 1$, we have:

$0 \le j \le 2r$
and thus:

$-r \le j - r \le r$
Hence:

$\dfrac {\size {r - j} } r \le 1$
Therefore, by Negative of Absolute Value:

$\dfrac {\binom r k} {r^k} \le \size {\dfrac {\binom r k} {r^k}} \le \dfrac 1 {k!}$
$\blacksquare$





