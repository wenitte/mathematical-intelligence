# 

Source: https://proofwiki.org/wiki/Even_Integer_with_Abundancy_Index_greater_than_9

Theorem
Let $n \in \Z_{>0}$ have an abundancy index greater than $9$.

Then $n$ has at least $35$ distinct prime factors.


Proof
As Divisor Sum Function is Multiplicative, it follows easily that abundancy index is multiplicative as well.
We have for any prime $p$ and positive integer $k$:














\(\ds \frac {\map {\sigma_1} {p^k} } {p^k}\)

\(=\)







\(\ds \frac {p^{k + 1} - 1} {p^k \paren {p - 1} }\)





Divisor Sum of Power of Prime














\(\ds \)

\(=\)







\(\ds \frac {p - p^{-k} } {p - 1}\)




















\(\ds \)

\(<\)







\(\ds \frac p {p - 1}\)





as $p^{-k} > 0$














\(\ds \)

\(=\)







\(\ds 1 + \frac 1 {p - 1}\)









In fact this is the limit of the abundancy index of a prime power.
The greater the prime, the smaller this value is.
Therefore finding the least number of prime factors a number needs to have its abundancy index exceed $9$ is to find the least $m$ such that:

$\ds \prod_{i \mathop = 1}^m \frac {p_i} {p_i - 1} > 9$
where $p_i$ is the $i$th prime ordered by size.
The result can be verified by direct computation.
$\blacksquare$


Sources
Apr. 1986: Richard Laatsch: Measuring the Abundancy of Integers (Math. Mag. Vol. 59, no. 2: pp. 84 – 92)  www.jstor.org/stable/2690424
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $55$




