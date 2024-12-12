# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_of_Prime/Proof_2

Theorem
Let $p$ be a prime number.

Then:

$\forall k \in \Z: 0 < k < p: \dbinom p k \equiv 0 \pmod p$
where $\dbinom p k$ is defined as a binomial coefficient.


Proof
Lucas' Theorem gives:

$\dbinom n k \equiv \dbinom {\left \lfloor {n / p} \right \rfloor} {\left \lfloor {k / p} \right \rfloor} \dbinom {n \bmod p} {k \bmod p} \pmod p$
So, substituting $p$ for $n$:

$\dbinom p k \equiv \dbinom {\left \lfloor {p / p} \right \rfloor} {\left \lfloor {k / p} \right \rfloor} \dbinom {p \bmod p} {k \bmod p} \pmod p$

But $p \bmod p = 0$ by definition.
Hence, if $0 < k < p$, we have that:

$k \bmod p \ne 0$
and so:

$\dbinom {p \bmod p} {k \bmod p} = \dbinom 0 {k \bmod p} = 0$
by definition of binomial coefficients.
The result follows immediately.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $10 \ \text{(b)}$




