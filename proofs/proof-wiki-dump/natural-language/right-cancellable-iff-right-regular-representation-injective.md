# 

Source: https://proofwiki.org/wiki/Right_Cancellable_iff_Right_Regular_Representation_Injective



Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Then $a \in S$ is right cancellable if and only if the right regular representation $\map {\rho_a} x$ is injective.


Proof
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


Also see
Left Cancellable iff Left Regular Representation Injective
Cancellable iff Regular Representations Injective


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.6$




