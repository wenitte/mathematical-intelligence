# 

Source: https://proofwiki.org/wiki/Repunit_19_is_Unique_Period_Prime_with_Period_19

Theorem
The repunit prime $R_{19}$ is a unique period prime whose reciprocal has a period of $19$:

$\dfrac 1 {1 \, 111 \, 111 \, 111 \, 111 \, 111 \, 111} = 0 \cdotp \dot 00000 \, 00000 \, 00000 \, 000 \dot 9$


Proof
The reciprocal of a repunit $R_n$ is of the form:

$\dfrac 1 {R_n} = 0 \cdotp \underbrace{\dot 000 \ldots 000}_{n - 1} \dot 9$

A particular theorem is missing.In particular: Prove the aboveYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding the theorem.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{TheoremWanted}} from the code.
Thus $\dfrac 1 {R_{19} }$ has a period of $19$.

From Period of Reciprocal of Prime, for prime numbers such that:

$p \nmid 10$
we have that the period of such a prime is the order of $10$ modulo $p$.
That is, the smallest integer $d$ such that:

$10^d \equiv 1 \pmod p$

The only other possible primes $p$ whose reciprocals might have a period of $19$ must also satisfy:

$10^{19} \equiv 1 \pmod p$
that is:

$p \divides \paren {10^{19} - 1} = 9 \times R_{19}$
Therefore the only other possible prime whose reciprocal might have a period of $19$ is $3$.

Trivially:

$\dfrac 1 3 = 0 \cdotp \dot 3$
which has a period of $1$.
Hence the result.
$\blacksquare$





