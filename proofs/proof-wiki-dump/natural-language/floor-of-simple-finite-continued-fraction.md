# 

Source: https://proofwiki.org/wiki/Floor_of_Simple_Finite_Continued_Fraction



Theorem
Let $\sequence {a_k}_{k \mathop \ge 0}$ be a simple finite continued fraction of length $n \ge 0$.
Let $x = [a_0, \ldots, a_n]$ be its value.

Then the floor of $x$ is the partial denominator $a_0$:

$\floor x = a_0$
unless $n = 1$ and $a_1 = 1$, in which case $x = \floor x = a_0 + 1$.


Proof
Length 0
If $n = 0$, we have $x = \sqbrk {a_0, \ldots, a_n} = a_0$ by definition of value.
By Real Number is Integer iff equals Floor:

$\floor x = \floor {a_0} = a_0$


Length 1
If $n = 1$, then:

$x = \sqbrk {a_0, a_1} = a_0 + \dfrac 1 {a_1}$
If $a_1 > 1$, then:

$a_0 < a_0 + \dfrac 1 {a_1} < a_0 + 1$
By definition of floor function:

$\floor x = a_0$
If $a_1 = 1$, then $x = a_0 + 1$.
By Real Number is Integer iff equals Floor:

$\floor x = a_0 + 1$


Length at least 2
By Value of Finite Continued Fraction of Real Numbers is at Least First Term:

$\sqbrk {a_0, \ldots, a_n} > a_0$
$\sqbrk {a_1, \ldots, a_n} > a_1 \ge 1$
Thus:

$a_0 < \sqbrk {a_0, \ldots, a_n} = a_0 + \dfrac 1 {\sqbrk {a_1, \ldots, a_n} } < a_0 + 1$
By definition of floor function:

$\floor x = a_0$
$\blacksquare$


Also see
Properties of Value of Finite Continued Fraction




