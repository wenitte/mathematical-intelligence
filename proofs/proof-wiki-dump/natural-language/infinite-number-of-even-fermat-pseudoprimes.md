# 

Source: https://proofwiki.org/wiki/Infinite_Number_of_Even_Fermat_Pseudoprimes

Theorem
Despite their relative rarity, there exist an infinite number of even Fermat pseudoprimes.


Proof
In the context of Wells, Fermat pseudoprime probably means Fermat pseudoprimes to the base $2$.

Consider the equation:

$2^m - 2 \equiv 0 \pmod m$
Any $m$ satisfying the above equation is a Fermat pseudoprime.
We show that for each even $m$ satisfying the above equation, there exists a prime $p$ such that $m p$ also satisfies the equation.

Write $m = 2 n$.
Then $2^{2 n - 1} - 1 \equiv 0 \pmod n$.

By Zsigmondy's Theorem, there exists a prime $p$ such that:

$p \divides 2^{2 n - 1} - 1$
$p \nmid 2^k - 1$ for all $k < 2 n - 1$
By this we have $2^{2 n - 1} \equiv 1 \pmod p$.
By Fermat's Little Theorem $2^{p - 1} \equiv 1 \pmod p$.

Let $d = \gcd \set {2 n - 1, p - 1}$.
We have $d \le 2 n - 1$ and $2^d \equiv 1 \pmod p$.
This gives $d = 2 n - 1$ and thus $2 n - 1 \divides p - 1$.

Thus there exists $x \in \N$ such that:

$p = \paren {2 n - 1} x + 1 > n$
This shows that $p \perp n$.

From $2 p n - 1 = 2 n - 1 + 2 n \paren {p - 1} = \paren {2 n - 1} \paren {1 + 2 n x}$ we have:

$2^{m p - 1} = 2^{\paren {2 n - 1} \paren {1 + 2 n x}} \equiv 1 \pmod {n, p}$
By Chinese Remainder Theorem:

$2^{m p - 1} \equiv 1 \pmod {n p}$
By Congruence by Product of Moduli:

$2^{m p} \equiv 2 \pmod {m p}$
showing that $m p$ is also an even Fermat pseudoprime.

The first even Fermat pseudoprime is $161 \, 038$.
We can use the above method repeatedly to construct infinitely many even Fermat pseudoprimes, though it is impractical since these numbers grow exponentially.
$\blacksquare$


Sources
Oct. 1951: N.G.W.H. Beeger: On Even Numbers $m$ Dividing $2^m - 2$ (American Mathematical Monthly Vol. 58, no. 8: pp. 553 – 555)  www.jstor.org/stable/2306320
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $161,038$




