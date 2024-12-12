# 

Source: https://proofwiki.org/wiki/Chu-Vandermonde_Identity/Proof_4



Theorem
$\ds \sum_{k \mathop = 0}^n \binom r k \binom s {n - k} = \binom {r + s} n$


Proof
From Sum over $k$ of $\dbinom {r - t k} k \dbinom {s - t \paren{n - k}} {n - k} \dfrac r {r - t k}$:

Let $r, s, t \in \R, n \in \Z$.
Then:

$\ds \sum_{k \mathop \ge 0} \binom {r - t k} k \binom {s - t \paren {n - k} } {n - k} \frac r {r - t k} = \binom {r + s - t n} n$

where $r, s, t \in \R, n \in \Z$.

Setting $t = 0$:

$\ds \sum_{k \mathop \ge 0} \binom r k \binom s {n - k} = \binom {r + s} n$
which is the result required.
$\blacksquare$


Source of Name
This entry was named for Chu Shih-chieh and Alexandre-Théophile Vandermonde.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $\text {I}$




