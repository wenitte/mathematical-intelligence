# 

Source: https://proofwiki.org/wiki/Inverse_in_Group_is_Unique/Proof_3

Theorem
Let $\struct {G, \circ}$ be a group.

Then every element $x \in G$ has exactly one inverse:

$\forall x \in G: \exists_1 x^{-1} \in G: x \circ x^{-1} = e^{-1} = x^{-1} \circ x$
where $e$ is the identity element of $\struct {G, \circ}$.


Proof
Let $x, y \in G$.
We already have, from the definition of inverse element, that:

$\forall x \in G: \exists x^{-1} \in G: x \circ x^{-1} = e = x^{-1} \circ x$
By Group has Latin Square Property, there exists exactly one $a \in G$ such that $a \circ x = y$.
Similarly, there exists exactly one $b \in G$ such that $x \circ b = y$.
Substituting $e$ for $y$, it follows that $x^{-1}$ as defined above is unique.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 2$: The Axioms of Group Theory
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.6$. Elementary theorems on groups: Theorem $\text{(i)}$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Proposition $3.3$: Remark $3$




