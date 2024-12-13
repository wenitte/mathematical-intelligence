# 

Source: https://proofwiki.org/wiki/Probability_of_Three_Random_Integers_having_no_Common_Divisor



Theorem
Let $a, b$ and $c$ be integers chosen at random.

The probability that $a, b$ and $c$ have no common divisor:

$\map \Pr {\map \perp {a, b, c} } = \dfrac 1 {\map \zeta 3}$
where $\zeta$ denotes the zeta function:

$\map \zeta 3 = \dfrac 1 {1^3} + \dfrac 1 {2^3} + \dfrac 1 {3^3} + \dfrac 1 {4^3} + \cdots$

The decimal expansion of $\dfrac 1 {\map \zeta 3}$ starts:

$\dfrac 1 {\map \zeta 3} = 0 \cdotp 83190 \, 73725 \, 80707 \ldots$
This sequence is A088453 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
Let $a$, $b$ and $c$ be three integers chosen at random.
For $a$, $b$ and $c$ to be coprime, it is necessary and sufficient that no prime number divides all of them.
The probability that any particular integer is divisible by a prime number $p$ is $\dfrac 1 p$.
Hence the probability that $a$, $b$ and $c$ are divisible by $p$ is $\dfrac 1 {p^3}$.
The probability that at least one of $a$, $b$ and $c$ is not divisible by $p$ is therefore $1 - \dfrac 1 {p^3}$.

Whether or not $a$ is divisible by $p$ or divisible by another prime number $q$ is independent of both $p$ and $q$.
Thus by the Product Rule for Probabilities, the probability that $a$, $b$ and $c$ are not all divisible by either $p$ or $q$ is $\paren {1 - \dfrac 1 {p^3} } \paren {1 - \dfrac 1 {q^3} }$.
This independence extends to all prime numbers.
That is, the probability that $a$, $b$ and $c$ are not all divisible by any prime number is equal to the product of $1 - \dfrac 1 {p^3}$ over all prime numbers:

$\map \Pr {\map \perp {a, b, c} } = \ds \prod_{\text {$p$ prime} } \paren {1 - \dfrac 1 {p^3} }$
From Sum of Reciprocals of Powers as Euler Product:

$\ds \map \zeta s = \prod_p \frac 1 {1 - p^{-s} }$
from which:

$\ds \dfrac 1 {\map \zeta 3} = \prod_{\text {$p$ prime} } \paren {1 - \dfrac 1 {p^3} }$
where $\map \zeta 3$ is the Riemann $\zeta$ (zeta) function evaluated at $3$.
The result follows.
$\blacksquare$


Also see
Probability of Two Random Integers having no Common Divisor


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $0 \cdotp 831 \, 907 \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $0 \cdotp 83190 \, 7 \ldots$




