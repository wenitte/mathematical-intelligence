# 

Source: https://proofwiki.org/wiki/Join_of_Sets_of_Integer_Multiples_is_Set_of_Integer_Multiples_of_GCD

Theorem
Let $m, n \in \Z$.
Let $m \Z$ denote the set of integer multiples of $m$
Let $r \in \Z$ such that:

$m \Z \subseteq r \Z$
and:

$n \Z \subseteq r \Z$

Then:

$\gcd \set {m, n} \Z \subseteq r \Z$
where $\gcd$ denotes greatest common divisor.


Proof
From Set of Integer Multiples is Integral Ideal, each of $m \Z$, $n \Z$, $r \Z$ and $\gcd \set {m, n} \Z$ are integral ideals.

Let $c \in \gcd \set {m, n} \Z$.
By definition of integral ideal:

$\gcd \set {m, n} \divides c$
By Set of Integer Combinations equals Set of Multiples of GCD:

$\exists x, y \in \Z: c = x m + y n$
But as $m \Z \subseteq r \Z$ and $n \Z \subseteq r \Z$:

$m \in r \Z$ and $n \in \r Z$
Thus by definition of integral ideal:

$x m + y n \in r \Z$

So:

$c \in \gcd \set {m, n} \Z \implies c \in r \Z$
and the result follows by definition of subset.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-2}$ Divisibility: Exercise $11$




