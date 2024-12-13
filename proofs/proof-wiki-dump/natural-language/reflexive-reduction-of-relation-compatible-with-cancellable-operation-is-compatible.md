# 

Source: https://proofwiki.org/wiki/Reflexive_Reduction_of_Relation_Compatible_with_Cancellable_Operation_is_Compatible

Theorem
Let $\struct {S, \circ}$ be an algebraic structure such that $\circ$ is a cancellable operation.
Let $\RR$ be a relation on $S$ which is compatible with $\circ$.
Let $\RR^\ne$ be the reflexive reduction of $\RR$.

Then $\RR^\ne$ is compatible with $\circ$.


Proof
Aiming for a contradiction, suppose $\RR^\ne$ is not compatible with $\circ$.
Let $x, y \in S$ such that:

$x \mathrel \RR y$
but:

$x \mathrel {\RR^\ne} y$
Then by definition of reflexive reduction:

$x \ne y$

Then as $\RR^\ne$ is not compatible with $\circ$:

$\exists z \in S: \lnot \paren {z \circ x \mathrel {\RR^\ne} z \circ y}$
But as $\RR$ is compatible with $\circ$:

$z \circ x \mathrel \RR z \circ y$
That means:

$z \circ x = z \circ y$
As $\circ$ is cancellable this leads to:

$x = y$
which is a contradiction.
Hence $\RR^\ne$ must be compatible with $\circ$.
$\blacksquare$





