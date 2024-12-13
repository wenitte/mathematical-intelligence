# 

Source: https://proofwiki.org/wiki/Relation_Isomorphism_is_Equivalence_Relation



Theorem
Relation isomorphism is an equivalence relation.


Proof
Let $\struct {S_1, \RR_1}$, $\struct {S_2, \RR_2}$ and $\struct {S_3, \RR_3}$ be relational structures.
Let $S \cong T$ denote the relation that $S$ is (relation) isomorphic to $T$.

Checking in turn each of the criteria for equivalence:


Reflexive
The fact that relation isomorphism is reflexive follows immediately from Identity Mapping is Relation Isomorphism.
$\Box$


Symmetric
Suppose $S_1 \cong S_2$.
Let $\phi: S_1 \to S_2$ be a relation isomorphism from $S_1$ to $S_2$.
Then by Inverse of Relation Isomorphism is Relation Isomorphism, $\phi^{-1}: S_2 \to S_1$ is also a relation isomorphism.
So $S_2 \cong S_1$ and so relation isomorphism is symmetric.
$\Box$


Transitive
Suppose $S_1 \cong S_2$ and $S_2 \cong S_3$.
Let:

$\alpha: S_1 \to S_2$ be a relation isomorphism from $S_1$ to $S_2$
$\beta: S_2 \to S_3$ be a relation isomorphism from $S_2$ to $S_3$.
From Composite of Relation Isomorphisms is Relation Isomorphism, the composite mapping $\beta \circ \alpha$ is also a relation isomorphism.
That is, $S_1 \cong S_3$.
So relation isomorphism is transitive.
$\blacksquare$





