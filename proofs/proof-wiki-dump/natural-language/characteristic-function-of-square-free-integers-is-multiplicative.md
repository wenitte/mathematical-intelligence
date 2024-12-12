# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Square-Free_Integers_is_Multiplicative



Theorem
Let $S \subseteq \Z$ be the set of positive integers defined as:

$S := \set {n \in \Z: \forall k \in \Z_{>1}: k^2 \nmid n}$
That is, let $S$ be the set of all square-free positive integers.

Let $\chi_S: \N \to \Z$ denote the characteristic function of $S$:

$\forall n \in \Z: \map {\chi_S} n = \sqbrk {n \in S}$
where $\sqbrk {n \in S}$ is Iverson's convention.

Then $\chi_S$ is multiplicative.


Proof
Let $r, s \in \Z$ such that $r \perp s$.


Case 1: Either factor is not square-free
Let either $r \notin S$ or $s \notin S$ or both.
Then either:

$\exists k \in \Z_{>1}: k^2 \divides r$
or:

$\exists k \in \Z_{>1}: k^2 \divides s$
Thus either:

$\map {\chi_S} r = 0$
or:

$\map {\chi_S} s = 0$
and so:

$\map {\chi_S} r \, \map {\chi_S} s = 0$
But then:

$\exists k \in \Z_{>1}: k^2 \divides r s$
and so:

$\map {\chi_S} {r s} = 0$
demonstrating that:

$\map {\chi_S} r \, \map {\chi_S} s = \map {\chi_S} {r s}$
$\Box$


Case 1: Both factors are square-free
Let $r \in S$ and $s \in S$.
Thus:

$\nexists k \in \Z_{>1}: k^2 \divides r$
and:

$\nexists k \in \Z_{>1}: k^2 \divides s$
Hence:

$\map {\chi_S} r = 1$
and:

$\map {\chi_S} s = 1$
and so:

$\map {\chi_S} r \, \map {\chi_S} s = 1$
Because $r \perp s$:

$\nexists k \in \Z_{>1}: k \divides r, k \divides s$
Hence there can be no $k \in \Z_{>1}$ whose multiplicity in $r s$ is greater than $1$.
Thus:

$\nexists k \in \Z_{>1}: k^2 \divides {r s}$
and so:

$\map {\chi_S} {r s} = 1$
once more demonstrating that:

$\map {\chi_S} r \, \map {\chi_S} s = \map {\chi_S} {r s}$
$\Box$

In both cases:

$\map {\chi_S} r \, \map {\chi_S} s = \map {\chi_S} {r s}$
Hence the result, by definition of multiplicative function.
$\blacksquare$


Also see
Möbius Function is Multiplicative, a similar result.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $29 \ \text{(b)}$




