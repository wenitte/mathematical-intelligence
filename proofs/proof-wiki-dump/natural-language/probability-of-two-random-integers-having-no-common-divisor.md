# 

Source: https://proofwiki.org/wiki/Probability_of_Two_Random_Integers_having_no_Common_Divisor



Theorem
Let $a$ and $b$ be integers chosen at random.

The probability that $a$ and $b$ are coprime is given by:

$\map \Pr {a \perp b} = \dfrac 1 {\map \zeta 2} = \dfrac 6 {\pi^2}$
where $\zeta$ denotes the zeta function.

The decimal expansion of $\dfrac 1 {\map \zeta 2}$ starts:

$\dfrac 1 {\map \zeta 2} = 0 \cdotp 60792 \, 71018 \, 54026 \, 6 \ldots$
This sequence is A059956 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
Let $a$ and $b$ be two integers chosen at random.
For $a$ and $b$ to be coprime, it is necessary and sufficient that no prime number divides both of them.
The probability that any particular integer is divisible by a prime number $p$ is $\dfrac 1 p$.
Hence the probability that both $a$ and $b$ are divisible by $p$ is $\dfrac 1 {p^2}$.
The probability that either $a$ or $b$ or both is not divisible by $p$ is therefore $1 - \dfrac 1 {p^2}$.

Whether or not $a$ is divisible by $p$ or divisible by another prime number $q$ is independent of both $p$ and $q$.
Thus by the Product Rule for Probabilities, the probability that $a$ and $b$ are not both divisible by either $p$ or $q$ is $\paren {1 - \dfrac 1 {p^2} } \paren {1 - \dfrac 1 {q^2} }$.
This independence extends to all prime numbers.
That is, the probability that $a$ and $b$ are not both divisible by any prime number is equal to the product of $1 - \dfrac 1 {p^2}$ over all prime numbers:

$\map \Pr {a \perp b} = \ds \prod_{\text {$p$ prime} } \paren {1 - \dfrac 1 {p^2} }$
From Sum of Reciprocals of Powers as Euler Product:

$\ds \map \zeta s = \prod_p \frac 1 {1 - p^{-s} }$
from which:

$\ds \dfrac 1 {\map \zeta 2} = \prod_{\text {$p$ prime} } \paren {1 - \dfrac 1 {p^2} }$
where $\map \zeta 2$ is the Riemann $\zeta$ (zeta) function evaluated at $2$.
The result follows from Riemann Zeta Function of 2.
$\blacksquare$


Also see
Probability of Random Integer being Square-Free‎, which is the same probability as this


Historical Note
According to François Le Lionnais and Jean Brette in their Les Nombres Remarquables of $1983$, this result is attributed to Ernesto Cesàro and James Joseph Sylvester in $1883$.
However, this has not been corroborated.


Sources
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables ... (previous) ... (next): $0,60792 71018 \ldots$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $0 \cdotp 607 \, 927 \, 101 \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $0 \cdotp 60792 \, 7101 \ldots$
Weisstein, Eric W. "Relatively Prime." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/RelativelyPrime.html




