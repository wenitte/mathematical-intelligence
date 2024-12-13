# 

Source: https://proofwiki.org/wiki/Relation_Isomorphism_Preserves_Equivalence_Relations

Theorem
Let $\struct {S, \RR_1}$ and $\struct {T, \RR_2}$ be relational structures.
Let $\struct {S, \RR_1}$ and $\struct {T, \RR_2}$ be (relationally) isomorphic.

Then $\RR_1$ is an equivalence relation if and only if $\RR_2$ is also an equivalence relation.


Proof
Let $\phi: S \to T$ be a relation isomorphism.
By Inverse of Relation Isomorphism is Relation Isomorphism it follows that $\phi^{-1}: T \to S$ is also a relation isomorphism.
Without loss of generality, it thus is necessary to prove only that if $\RR_1$ is an equivalence relation then $\RR_2$ is an equivalence relation.
So, suppose $\RR_1$ is an equivalence relation.
By definition:

$(1): \quad \RR_1$ is reflexive
$(2): \quad \RR_1$ is symmetric
$(3): \quad \RR_1$ is transitive.

It follows that:

From Relation Isomorphism Preserves Reflexivity, $\RR_2$ is reflexive.
From Relation Isomorphism Preserves Symmetry, $\RR_2$ is symmetric.
From Relation Isomorphism Preserves Transitivity, $\RR_2$ is transitive.

So by definition $\RR_2$ is an equivalence relation.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.9 \ \text{(c)}$




