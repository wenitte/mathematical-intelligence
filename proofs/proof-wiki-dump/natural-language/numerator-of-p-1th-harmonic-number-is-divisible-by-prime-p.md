# 

Source: https://proofwiki.org/wiki/Numerator_of_p-1th_Harmonic_Number_is_Divisible_by_Prime_p



Theorem
Let $p$ be an odd prime.
Consider the harmonic number $H_{p - 1}$ expressed in canonical form.

The numerator of $H_{p - 1}$ is divisible by $p$.


Proof 1
Add the terms of $H_{p - 1}$ using the definition of rational addition to obtain $\dfrac m n$.
Do not cancel common prime factors from $m$ and $n$.
It is seen that $n = \paren {p - 1}!$
Hence $p$ is not a divisor of $n$.

The numerator $m$ is seen to be:

$m = \dfrac {\paren {p - 1}!} 1 + \dfrac {\paren {p - 1}!} 2 + \cdots + \dfrac {\paren {p - 1}!} {p - 1}$
Thus it is sufficient to show that $m$ is a multiple of $p$.
Each term in this sum is an integer of the form $\dfrac {\paren {p - 1}!} k$.
For each $k \in \set {1, 2, \ldots, p - 1}$, define $k'= - \dfrac {\paren {p - 1}!} k \bmod p$.
By Wilson's Theorem

$k k' \equiv -\paren {p - 1}! \equiv 1 \pmod p$
Therefore

$k' \equiv k^{-1} \pmod p$
From the corollary to Reduced Residue System under Multiplication forms Abelian Group:

$\struct {\Z'_p, \times}$ is an abelian group.
Since Inverse in Group is Unique, the set:

$\set {1', 2', \ldots, \paren {p - 1}'}$
is merely the set:

$\set {1, 2, \ldots, p - 1}$
in a different order.
Thus 














\(\ds m\)

\(=\)







\(\ds \dfrac {\paren {p - 1}!} 1 + \dfrac {\paren {p - 1}!} 2 + \cdots + \dfrac {\paren {p - 1}!} {p - 1}\)




















\(\ds \)

\(\equiv\)







\(\ds 1 + 2 + \cdots + p - 1\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds \frac {p \paren {p - 1} } 2\)

\(\ds \pmod p\)



Closed Form for Triangular Numbers














\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)







$\blacksquare$


Proof 2
Note that for any integer $x$:














\(\ds x^p - x\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)



Corollary $1$ to Fermat's Little Theorem














\(\ds \)

\(\equiv\)







\(\ds x^{\overline p}\)

\(\ds \pmod p\)



Divisibility of Product of Consecutive Integers














\(\ds \)

\(\equiv\)







\(\ds \sum_k {p \brack k} x^k\)

\(\ds \pmod p\)



Sum over k of Unsigned Stirling Numbers of First Kind by x^k



By comparing coefficients:

$\ds {p \brack p} \equiv 1 \pmod p$
$\ds {p \brack 1} \equiv -1 \pmod p$
$\ds {p \brack k} \equiv 0 \pmod p$ for $k \ne 1, p$
or in a more compact form:

$\ds {p \brack k} \equiv \delta_{k p} - \delta _{k 1} \pmod p$
where:

$\ds {p \brack k}$ denotes an unsigned Stirling number of the first kind
$\delta$ is the Kronecker delta.
From Harmonic Number as Unsigned Stirling Number of First Kind over Factorial:

$\ds H_{p - 1} = \frac {p \brack 2} {\paren {p - 1}!}$
From the above we have:

$\ds p \divides {p \brack 2}$
By Prime iff Coprime to all Smaller Positive Integers we also have:

$p \nmid \paren {p - 1}!$
Hence the numerator of $H_{p - 1}$, when expressed in canonical form, is divisible by $p$.
$\blacksquare$


Historical Note
Donald E. Knuth reports in his The Art of Computer Programming: Volume 1: Fundamental Algorithms, 3rd ed. ($1997$) that this result was established by Edward Waring in $1782$, but he gives no further details.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: Exercise $17$




