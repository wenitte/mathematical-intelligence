# 

Source: https://proofwiki.org/wiki/Polynomial_Forms_over_Field_form_Integral_Domain/Formulation_1

Theorem
Let $\struct {F, +, \circ}$ be a field whose zero is $0_F$ and whose unity is $1_F$.
Let $X$ be transcendental in $F$.
Let $F \sqbrk X$ be the ring of polynomial forms in $X$ over $F$.

Then $F \sqbrk X$ is an integral domain.


Proof 1
We already have from Ring of Polynomial Forms is Commutative Ring with Unity that $F \sqbrk X$ is a ring.
Suppose $f$ and $g$ are polynomials in $F \sqbrk X$ such that $f \ne 0_F, g \ne 0_F$.
If $\map \deg f = \map \deg g = 0$ then $f$ and $g$ are elements of $F$.
As $F$ is a field and a field is an integral domain, $f g \ne 0_f$.
Otherwise from Degree of Product of Polynomials over Integral Domain:

$\map \deg {f g} = \map \deg f + \map \deg g$
and so:

$\map \deg {f g} > 0$
which means:

$f g \ne 0_F$
Hence the result, by definition of integral domain.
$\blacksquare$


Proof 2
We have from Ring of Polynomial Forms is Commutative Ring with Unity that $F \sqbrk X$ is a commutative ring with unity.
The result follows from Ring of Polynomial Forms is Integral Domain.
$\blacksquare$





