# 

Source: https://proofwiki.org/wiki/P%C3%A9pin%27s_Test



Theorem
Let $F_n = 2^{2^n} + 1$ be a Fermat number.

Then $F_n$ is prime if and only if:

$3^{\paren {F_n - 1} / 2} \equiv -1 \pmod {F_n}$


Proof
Sufficient Condition
Let this congruence hold:

$3^{\paren {F_n - 1} / 2} \equiv -1 \pmod {F_n}$
Then:

$3^{F_n - 1} \equiv 1 \pmod {F_n}$
Thus the multiplicative order of $3$ modulo $F_n$ is a divisor of $F_n - 1 = 2^{2^n}$.
This is a power of $2$.
On the other hand, the multiplicative order of $3$ modulo $F_n$ is not a divisor of $\dfrac {F_n - 1} 2$.
Therefore it must be equal to $F_n - 1$.
In particular, there are at least $F_n - 1$ numbers below $F_n$ which are coprime to $F_n<$.
This can happen only if $F_n$ is prime.
$\Box$


Necessary Condition
Let $F_n$ be prime.
By Euler's Criterion for Quadratic Residue:

$3^{\paren {F_n - 1} / 2} \equiv \paren {\dfrac 3 {F_n} } \pmod {F_n}$
$\paren {\dfrac 3 {F_n} }$ denotes the Legendre symbol.
By repeated squaring:

$2^{2^n} \equiv 1 \pmod 3$
Thus:

$F_n \equiv 2 \pmod 3$
and so:

$\paren {\dfrac {F_n} 3} = -1$
As $F_n \equiv 1 \pmod 4$, it follows from the Law of Quadratic Reciprocity that:

$\paren {\dfrac 3 {F_n} } = -1$
$\blacksquare$


Source of Name
This entry was named for Jean François Théophile Pépin.


Sources
1877: Théophile Pépin: Sur la formule $2^{2^n} + 1$ (C.R. Acad. Sci. Vol. 85: pp. 329 – 333)
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $257$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $257$




