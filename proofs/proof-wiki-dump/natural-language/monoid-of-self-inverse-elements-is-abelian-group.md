# 

Source: https://proofwiki.org/wiki/Monoid_of_Self-Inverse_Elements_is_Abelian_Group

Theorem
Let $\struct {S, \circ}$ be a monoid such that:

$\forall x \in S: x \circ x = e$
where $e$ is the identity element of $\struct {S, \circ}$.

Then $\struct {S, \circ}$ is an abelian group.


Proof
From Equivalence of Definitions of Self-Inverse, $x \circ x = e \implies x = x^{-1}$.
From Inverse in Monoid is Unique, it follows that every element of $\struct {S, \circ}$ has a unique inverse.
So by definition, $\struct {S, \circ}$ is a group.

From All Elements Self-Inverse then Abelian, it follows that $\struct {S, \circ}$ is an abelian group.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.10$




