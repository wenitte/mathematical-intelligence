# 

Source: https://proofwiki.org/wiki/Element_of_Finite_Group_is_of_Finite_Order



Theorem
In any finite group, each element has finite order.


Proof 1
Let $G$ be a group whose identity is $e$.
From Element has Idempotent Power in Finite Semigroup, for every element in a finite semigroup, there is a power of that element which is idempotent.
As $G$, being a group, is also a semigroup, the same applies to $G$.

That is:

$\forall x \in G: \exists n \in \N_{>0}: x^n \circ x^n = x^n$

From Identity is only Idempotent Element in Group, it follows that:

$x^n \circ x^n = x^n \implies x^n = e$

So $x$ has finite order.
$\blacksquare$


Proof 2
Follows as a direct corollary to the result Powers of Infinite Order Element.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $5$: Subgroups: Exercise $15$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Definition $3.9$: Remark $1$




