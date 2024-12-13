# 

Source: https://proofwiki.org/wiki/Left_Cancellable_iff_Left_Regular_Representation_Injective



Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Then $a \in S$ is left cancellable if and only if the left regular representation $\map {\lambda_a} x$ is injective.


Proof
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


Also see
Right Cancellable iff Right Regular Representation Injective
Cancellable iff Regular Representations Injective


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.6$




