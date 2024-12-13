# 

Source: https://proofwiki.org/wiki/Identity_is_Unique



Theorem
Let $\struct {S, \circ}$ be an algebraic structure that has an identity element $e \in S$.

Then $e$ is unique.


Proof 1
Suppose $e_1$ and $e_2$ are both identity elements of $\struct {S, \circ}$.
Then by the definition of identity element:

$\forall s \in S: s \circ e_1 = s = e_2 \circ s$
Then:

$e_1 = e_2 \circ e_1 = e_2$
So:

$e_1 = e_2$
and there is only one identity element after all.
$\blacksquare$


Proof 2
Let $e_S$ be an identity of $\struct {S, \circ}$.
Then by definition, $e_S$ is both a left identity and a right identity.
By More than one Left Identity then no Right Identity, if there is more than one of either, there cannot be one of the other.
So there can be only one of each.
By Left and Right Identity are the Same, they are one and the same thing.
$\blacksquare$


Also see
Identity of Monoid is Unique
Identity of Group is Unique




