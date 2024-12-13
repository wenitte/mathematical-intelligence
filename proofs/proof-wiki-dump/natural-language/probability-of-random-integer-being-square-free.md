# 

Source: https://proofwiki.org/wiki/Probability_of_Random_Integer_being_Square-Free



Theorem
Let $a$ be an integer chosen at random.

The probability that $a$ is square-free is given by:

$\map \Pr {\neg \exists b \in \Z: b^2 \divides a} = \dfrac 1 {\map \zeta 2} = \dfrac 6 {\pi^2}$
where $\zeta$ denotes the zeta function.

The decimal expansion of $\dfrac 1 {\map \zeta 2}$ starts:

$\dfrac 1 {\map \zeta 2} = 0 \cdotp 60792 \, 71018 \, 54026 \, 6 \ldots$
This sequence is A059956 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
Let $a$ be an integer chosen at random.
For $a$ to be square-free, it is necessary and sufficient that for all prime numbers $p$, it is not the case that $p^2$ is a  divisor of $a$.
The probability that any particular integer is divisible by $p^2$ is $\dfrac 1 {p^2}$.
The probability that $a$ is not divisible by $p^2$ is therefore $1 - \dfrac 1 {p^2}$.

Whether or not $a$ is divisible by $p^2$ or divisible by $q^2$ for another prime number $q$ is independent of both $p$ and $q$.
Thus by the Product Rule for Probabilities, the probability that $a$ is not divisible by either $p^2$ or $q^2$ is $\paren {1 - \dfrac 1 {p^2} } \paren {1 - \dfrac 1 {q^2} }$.
This independence extends to all prime numbers.
That is, the probability that $a$ is not divisible by the square of any prime number is equal to the product of $1 - \dfrac 1 {p^2}$ over all prime numbers:

$\map \Pr {\neg \exists b \in \Z: b^2 \divides a} = \ds \prod_{\text {$p$ prime} } \paren {1 - \dfrac 1 {p^2} }$
From Sum of Reciprocals of Powers as Euler Product:

$\ds \map \zeta s = \prod_p \frac 1 {1 - p^{-s} }$
from which:

$\ds \dfrac 1 {\map \zeta 2} = \prod_{\text {$p$ prime} } \paren {1 - \dfrac 1 {p^2} }$
where $\map \zeta 2$ is the Riemann $\zeta$ (zeta) function evaluated at $2$.
The result follows from Riemann Zeta Function of 2.
$\blacksquare$


Also see
Probability of Two Random Integers having no Common Divisor‎, which is the same probability as this


Historical Note
According to François Le Lionnais and Jean Brette in their Les Nombres Remarquables of $1983$, this result is attributed to Ernesto Cesàro and James Joseph Sylvester in $1883$.
However, this has not been corroborated.


Sources
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables ... (previous) ... (next): $0,60792 71018 \ldots$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $0 \cdotp 607 \, 927 \, 101 \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $0 \cdotp 60792 \, 7101 \ldots$
Weisstein, Eric W. "Relatively Prime." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/RelativelyPrime.html




