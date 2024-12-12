# 

Source: https://proofwiki.org/wiki/Content_of_Monic_Polynomial

Theorem
Let $f$ be a polynomial with rational coefficients.
Let $\cont f$ be the content of $f$.

If $f$ is monic, then $\cont f = \dfrac 1 n$ for some integer $n$.


Proof
Since $f$ is monic, it can be written as:

$f = X^r + \cdots + a_1 X + a_0$
Let $n = \inf \set {n \in \N : n f \in \Z \sqbrk X}$.
Let $d = \cont {n f}$.
Then by definition of content:

$d = \gcd \set {n, n a_{r - 1}, \ldots, n a_1, n a_0}$
Therefore, by definition of GCD, $d$ divides $n$.
So say $n = k d$ with $k \in \Z$.
Then: 

$\cont f = \dfrac d {k d} = \dfrac 1 k$
as required.
$\blacksquare$





