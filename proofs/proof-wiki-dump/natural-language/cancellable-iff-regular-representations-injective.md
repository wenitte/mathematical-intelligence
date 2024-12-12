# 

Source: https://proofwiki.org/wiki/Cancellable_iff_Regular_Representations_Injective



Theorem
Let $\struct {S, \circ}$ be an algebraic structure.

Then $a \in S$ is cancellable if and only if:

the left regular representation $\map {\lambda_a} x$ is injective
and:

the right regular representation $\map {\rho_a} x$ is injective.


Proof
Left Cancellable
Suppose $a \in S$ is left cancellable.
Then:

$a \circ x = a \circ y \implies x = y$
From the definition of the left regular representation:

$\map {\lambda_a} x = a \circ x$
Thus:

$\map {\lambda_a} x = \map {\lambda_a} y \implies x = y$
and so the left regular representation is injective.
$\Box$

Suppose $\map {\lambda_a} x$ is injective.
Then:

$\map {\lambda_a} x = \map {\lambda_a} y \implies x = y$
From the definition of the left regular representation:

$\map {\lambda_a} x = a \circ x$
Thus:

$a \circ x = a \circ y \implies x = y$
and so $a$ is left cancellable.
$\blacksquare$


Right Cancellable
Suppose $a \in S$ is right cancellable.
Then:

$x \circ a = y \circ a \implies x = y$
From the definition of the right regular representation:

$\map {\rho_a} x = x \circ a$
Thus:

$\map {\rho_a} x = \map {\rho_a} y \implies x = y$
and so the right regular representation is injective.
$\Box$

Suppose $\map {\rho_a} x$ is injective.
Then:

$\map {\rho_a} x = \map {\rho_a} y \implies x = y$
From the definition of the right regular representation:

$\map {\rho_a} x = x \circ a$
Thus:

$x \circ a = y \circ a \implies x = y$
and so $a$ is right cancellable.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups




