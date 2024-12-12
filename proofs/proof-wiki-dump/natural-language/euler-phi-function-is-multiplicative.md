# 

Source: https://proofwiki.org/wiki/Euler_Phi_Function_is_Multiplicative



Theorem
The Euler $\phi$ function is a multiplicative function:

$m \perp n \implies \map \phi {m n} = \map \phi m \map \phi n$
where $m, n \in \Z_{>0}$.


Proof 1
Let $R = \set {r_1, r_2, \ldots, r_{\map \phi m} }$ and $S = \set {s_1, s_2, \ldots, s_{\map \phi n} }$ be the reduced residue systems for the respective moduli $m$ and $n$.
We are to show that the set of $\map \phi m \map \phi n$ integers:

$T = \set {n r + m s: r \in R, s \in S}$
is a reduced residue system for modulus $m n$.
We need to establish the following:

Each integer in $T$ is prime to $m n$
No two integers in $T$ is congruent modulo $m n$
Each integer prime to $m n$ is congruent modulo $m n$ to one of these integers in $T$.

We prove each in turn:
Aiming for a contradiction, suppose $p$ is a prime divisor of $\gcd \set {n r + m s, m n}$ where $r \in R, s \in S$.
We have that $p$ divides $m n$ but $m \perp n$.
Hence from Divisors of Product of Coprime Integers, $p$ either divides $m$ or $n$ but not both.
Without loss of generality, suppose $p \divides m$.
Then as $p \divides n r + m s$, we have $p \divides n r$ and hence $p \divides r$.
But then $p \divides \gcd \set {m, r} = 1$ which is a contradiction.
Similarly if $p \divides n$.
So there is no such prime and hence $n r + m s \perp m n$.
$\Box$

Let $n r + m s = n r' + m s' \pmod {m n}$, where $r, r' \in R, s, s' \in S$.
Then:

$n \paren {r - r'} + m \paren {s - s'} = k \paren {m n}$ for some $k \in \Z$.
As $m$ divides two of these terms it must divide the third, so:

$m \divides n \paren {r - r'}$
Now $m \perp n$ so by Euclid's Lemma:

$m \divides \paren {r - r'}$
or:

$r \equiv r' \pmod m$
But $r$ and $r'$ are part of the same reduced residue system modulo $m$, so:

$r = r'$
Similarly for $n$: we get:

$s = s'$
Hence distinct elements of $T$ can not be congruent modulo $m n$.
$\Box$

Let $k \in \Z: k \perp m n$.
Since $m \perp n$, from Set of Integer Combinations equals Set of Multiples of GCD we can write $k = n r' + m s'$ for some $r', s' \in \Z$.
Suppose there exists some prime number $p$ such that $p \divides m$ and $p \divides r'$.
Such a prime would be a common divisor of both $k$ and $m n$, contradicting $k \perp m n$.
Hence $r' \perp m$ and so is congruent modulo $m $ to one of these integers in $R$.
By the same argument, $s' \perp n$ and so is congruent modulo $n$ to one of these integers in $S$.
Writing $r' = r + a m, \, s' = s + b n$ we have:

$k = n r' + m s' = n r + m s + m n \paren {a + b} \equiv n r + m s \pmod {m n}$

Hence the result.
$\blacksquare$


Proof 2
From Euler Phi Function of Product, we have:

$\map \phi {m n} = \map \phi m \map \phi n \paren {\dfrac {\map \gcd {m, n} } {\map \phi {\map \gcd {m, n} } } }$
From hypothesis, we have:

$\map \gcd {m, n} = 1$
From Euler Phi Function of 1, we have $\map \phi 1 = 1$, giving the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $30$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): phi function (totient function)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): arithmetic function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Euler's phi function (phi function, totient function)

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: these have proofs which are as yet not documented hereIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 25$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.3$: Congruences




