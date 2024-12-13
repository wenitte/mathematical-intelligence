# 

Source: https://proofwiki.org/wiki/Integers_Coprime_to_Zero

Theorem
The only integers which are coprime to zero are $1$ and $-1$.
That is:

$n \in \Z: n \perp 0 \iff n \in \set {1, -1}$

In particular, note that two integers which are coprime to each other cannot both be $0$.


Proof
Let $n \in \Z$ such that $n \perp 0$.
First we note that from Coprime Integers cannot Both be Zero, it cannot be the case that $n = 0$.

From the definition of coprime, we have:

$m \perp n \iff \gcd \set {m, n} = 1$
From the definition of greatest common divisor:

$\gcd \set {n, 0} = \size n$
where $\size n$ is the absolute value of $n$.

Let $n \in \set {1, -1}$.
Then:

$\gcd \set {n, 0} = \size n = 1$
and so $n \perp 0$.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $13$




