# 

Source: https://proofwiki.org/wiki/Order_Embedding_is_Injection

Theorem
Let $\struct {S, \preceq_1}$ and $\struct {T, \preceq_2}$ be ordered sets.
Let $\phi: S \to T$ be an order embedding.
That is:

$\forall x, y \in S: x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$

Then $\phi$ is an injection.


Proof
Suppose $\phi: S \to T$ is a mapping such that:

$\forall x, y \in S: x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$
Then, for all $x, y \in S$:














\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi y\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi x \preceq_2 \map \phi y\)

\(\land\)







\(\ds \map \phi y \preceq_2 \map \phi x\)





Ordering $\preceq_2$ is Reflexive








\(\ds \leadsto \ \ \)





\(\ds x \preceq_1 y\)

\(\land\)







\(\ds y \preceq_1 x\)





Definition of Order Embedding








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





Ordering $\preceq_1$ is Antisymmetric



So $\phi$ is an injection.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $19$




