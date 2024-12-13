# 

Source: https://proofwiki.org/wiki/Multiplicative_Ordering_on_Integers

Theorem
Let $x, y, z \in \Z$ such that $z > 0$.

Then:

$x < y \iff z x < z y$
$x \le y \iff z x \le z y$


Proof
Let $z > 0$.
Let $M_z: \Z \to \Z$ be the mapping defined as:

$\forall x \in \Z: \map {M_z} x = z x$

It is sufficient to show that $M_z$ is an order embedding from $\struct {\Z, +, \le}$ to itself.
By Monomorphism from Total Ordering, it is sufficient to show that:

$x < y \implies z x < z y$

Let $x < y$.
Then:

$0 < y - x$
So $z \in \N$.
Hence by Natural Numbers are Non-Negative Integers:

$y - x \in \N$
Thus by Ordering on Natural Numbers is Compatible with Multiplication:

$z \paren {y - x} \in \N$
Therefore:

$0 < z \paren {y - x} = z y - z x$
That is:

$z x < z y$
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 5$: The system of integers
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.10: 1^\circ, 2^\circ$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: $\mathbf Z. \, 8$
1994: H.E. Rose: A Course in Number Theory (2nd ed.) ... (previous) ... (next): $1$ Divisibility: $1.1$ The Euclidean algorithm and unique factorization




