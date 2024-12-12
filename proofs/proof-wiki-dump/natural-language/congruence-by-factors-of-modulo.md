# 

Source: https://proofwiki.org/wiki/Congruence_by_Factors_of_Modulo



Theorem
Let $a, b \in \Z$.
Let $r$ and $s$ be coprime integers.

Then:

$a \equiv b \pmod {r s}$ if and only if $a \equiv b \pmod r$ and $a \equiv b \pmod s$
where $a \equiv b \pmod r$ denotes that $a$ is congruent modulo $r$ to $b$.


Proof
Necessary Condition
This is proved in Congruence by Divisor of Modulus.
Note that for this result it is not required that $r \perp s$.
$\Box$


Sufficient Condition
Now suppose that $a \equiv b \pmod r$ and $a \equiv b \pmod s$.
We have by definition of congruence:

$a \equiv b \pmod r \implies \exists k \in \Z: a - b = k r$
From $a \equiv b \pmod s$ we also have that:

$k r \equiv 0 \pmod s$
As $r \perp s$, we have from Common Factor Cancelling in Congruence:

$k \equiv 0 \pmod s$
So:

$\exists q \in \Z: a - b = q s r$
Hence by definition of congruence:

$a \equiv b \pmod {r s}$
$\blacksquare$


Examples
$n \equiv 7 \pmod {12}$ implies $n \equiv 3 \pmod 4$
Let $n \equiv 7 \pmod {12}$.
Then:

$n \equiv 3 \pmod 4$


Warning
Let $r$ not be coprime to $s$.

Then it is not necessarily the case that:

$a \equiv b \pmod {r s}$ if and only if $a \equiv b \pmod r$ and $a \equiv b \pmod s$
where $a \equiv b \pmod r$ denotes that $a$ is congruent modulo $r$ to $b$.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Law $\text{D}$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $18$




