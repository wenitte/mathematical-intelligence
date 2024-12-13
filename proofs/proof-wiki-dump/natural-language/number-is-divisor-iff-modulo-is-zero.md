# 

Source: https://proofwiki.org/wiki/Number_is_Divisor_iff_Modulo_is_Zero



Theorem
Let $x, y \in \R$ be real numbers.
Let $x \bmod y$ denote the modulo operation:

$x \bmod y := \begin {cases}
x - y \floor {\dfrac x y} & : y \ne 0 \\
x & : y = 0
\end {cases}$
where $\floor {\dfrac x y}$ denotes the floor of $\dfrac x y$.

Then $x \bmod y = 0$ if and only if $x$ is an integer multiple of $y$.


Proof
Sufficient Condition
Let $x \bmod y = 0$.
From Number minus Modulo is Integer Multiple:

$x - \paren {x \bmod y}$
is an integer multiple of $y$.

As $x \bmod y = 0$ it follows that $x - 0 = x$ is an integer multiple of $y$.
$\Box$


Necessary Condition
If $y = 0$ it follows from Zero Divides Zero that $x = 0$.
Hence the result by definition of the modulo operation:

Otherwise, let $y \ne 0$.
Let $x$ be an integer multiple of $y$.
That is:

$\exists n \in \Z: x = n y$
Hence:

$\dfrac x y = n$
From Quotient of Modulo Operation with Modulus:

$\dfrac x y - \floor {\dfrac x y} = \dfrac {x \bmod y} y$
From Real Number is Integer iff equals Floor it follows that:

$\dfrac x y = \floor {\dfrac x y}$
Thus:

$\dfrac {x \bmod y} y = 0$
and so multiplying both sides by $y$ the result follows.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory




