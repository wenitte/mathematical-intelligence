# 

Source: https://proofwiki.org/wiki/Element_of_Finite_Group_is_of_Finite_Order/Proof_1

Theorem
In any finite group, each element has finite order.


Proof
Let $G$ be a group whose identity is $e$.
From Element has Idempotent Power in Finite Semigroup, for every element in a finite semigroup, there is a power of that element which is idempotent.
As $G$, being a group, is also a semigroup, the same applies to $G$.

That is:

$\forall x \in G: \exists n \in \N_{>0}: x^n \circ x^n = x^n$

From Identity is only Idempotent Element in Group, it follows that:

$x^n \circ x^n = x^n \implies x^n = e$

So $x$ has finite order.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 8$: The Order (Period) of an Element




