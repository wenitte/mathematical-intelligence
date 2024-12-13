# 

Source: https://proofwiki.org/wiki/Power_of_Prime_is_Deficient

Theorem
Let $n \in \Z_{>0}$ be a power of a prime number $p$:

$n = p^k$
for some $k \in \Z_{>0}$.

Then $n$ is deficient.


Proof
From Divisor Sum of Power of Prime:

$\map {\sigma_1} n = \dfrac {p^{k + 1} - 1} {p - 1}$
Thus:














\(\ds \map A n\)

\(=\)







\(\ds \map {\sigma_1} n - 2 n\)





Definition of Abundance














\(\ds \)

\(=\)







\(\ds \dfrac {p^{k + 1} - 1} {p - 1} - 2 p^k\)




















\(\ds \)

\(=\)







\(\ds \dfrac {p^{k + 1} - 1 - \paren {2 p^{k + 1} - 2 p^k} } {p - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 p^k - p^{k + 1} - 1} {p - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {p^k \paren {2 - p} - 1} {p - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {p^k - 1} {p - 1} - p^k\)




















\(\ds \)

\(=\)







\(\ds \dfrac {p^k} {p - 1} - p^k - \dfrac 1 {p - 1}\)









If $p = 2$ then $\dfrac {p^k} {p - 1} - p^k = 0$ and so:

$\dfrac {p^k} {p - 1} - p^k - \dfrac 1 {p - 1} = - \dfrac 1 {p - 1} < 0$

If $p > 2$ then $\dfrac {p^k} {p - 1} < p^k$ and so:

$\dfrac {p^k} {p - 1} - p^k - \dfrac 1 {p - 1} < 0$
Thus in all cases:

$\map A n < 0$
and so $n = p^k$ is deficient by definition.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $2$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $12$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $2$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $12$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): deficient number




