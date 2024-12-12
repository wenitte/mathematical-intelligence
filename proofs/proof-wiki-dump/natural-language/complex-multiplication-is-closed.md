# 

Source: https://proofwiki.org/wiki/Complex_Multiplication_is_Closed



Theorem
The set of complex numbers $\C$ is closed under multiplication:

$\forall z, w \in \C: z \times w \in \C$


Proof from Informal Definition
From the informal definition of complex numbers, we define the following:

$z = x_1 + i y_1$
$w = x_2 + i y_2$
where $i = \sqrt {-1}$ and $x_1, x_2, y_1, y_2 \in \R$.
Then from the definition of complex multiplication:

$z w = \paren {x_1 x_2 - y_1 y_2} + i \paren {x_1 y_2 + x_2 y_1}$
From Real Numbers form Field:

$x_1 x_2 - y_1 y_2 \in \R$
and:

$x_1 y_2 + x_2 y_1 \in \R$

Hence the result.
$\blacksquare$


Proof from Formal Definition
From the formal definition of complex numbers, we define the following:

$z = \tuple {x_1, y_1}$
$w = \tuple {x_2, y_2}$

Then from the definition of complex multiplication:

$z w = \tuple {x_1 x_2 - y_1 y_2, x_1 y_2 + x_2 y_1}$
From Real Numbers form Field:

$x_1 x_2 - y_1 y_2 \in \R$
and:

$x_1 y_2 + x_2 y_1 \in \R$

Hence the result.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $1$: Integral Domains: $\S 2$. Operations: Example $1$




