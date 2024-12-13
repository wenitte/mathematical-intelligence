# 

Source: https://proofwiki.org/wiki/Numerator_of_p-1th_Harmonic_Number_is_Divisible_by_Prime_p/Proof_2

Theorem
Let $p$ be an odd prime.
Consider the harmonic number $H_{p - 1}$ expressed in canonical form.

The numerator of $H_{p - 1}$ is divisible by $p$.


Proof
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


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: Exercise $17$




