# 

Source: https://proofwiki.org/wiki/Period_of_Reciprocal_of_Repunit_1031_is_1031

Theorem
The decimal expansion of the reciprocal of the repunit prime $R_{1031}$ has a period of $1031$.

$\dfrac 1 {R_{1031}} = 0 \cdotp \underbrace{\dot 000 \ldots 000}_{1030} \dot 9$

This page has been identified as a candidate for refactoring.In particular: Extract the fact that this is a unique period prime into another pageUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
This is the only prime number to have a period of exactly $1031$.


Proof
The reciprocal of a repunit $R_n$ is of the form:

$\dfrac 1 {R_n} = 0 \cdotp \underbrace{\dot 000 \ldots 000}_{n - 1} \dot 9$
Thus $\dfrac 1 {R_{1031}}$ has a period of $1031$.

From Period of Reciprocal of Prime, for prime numbers such that:

$p \nmid 10$
we have that the period of such a prime is the order of $10$ modulo $p$.
That is, the smallest integer $d$ such that:

$10^d \equiv 1 \pmod p$

The only other possible primes $p$ whose reciprocals might have a period of $1031$ must also satisfy:

$10^{1031} \equiv 1 \pmod p$
that is:

$p \divides \paren {10^{1031} - 1} = 9 \times R_{1031}$

Therefore the only other possible prime whose reciprocal might have a period of $1031$ is $3$.

Trivially:

$\dfrac 1 3 = 0 \cdotp \dot 3$
which has a period of $1$.
Hence the result.
$\blacksquare$


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1111 \ldots 111111$




