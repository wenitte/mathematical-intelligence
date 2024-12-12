# 

Source: https://proofwiki.org/wiki/Commutators_are_Identity_iff_Group_is_Abelian



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
For $g, h \in G$, let $\sqbrk {g, h}$ denote the commutator of $g$ and $h$.

Then $\struct {G, \circ}$ is abelian if and only if:

$\forall g, h \in G: \sqbrk {g, h} = e$


Proof
Necessary Condition
Let $\struct {G, \circ}$ be such that:

$\forall g, h \in G: \sqbrk {g, h} = e$
From Commutator is Identity iff Elements Commute:

$\forall g, h \in G: g \circ h = h \circ g$
Hence $\struct {G, \circ}$ is abelian by definition.
$\Box$


Sufficient Condition
Let $\struct {G, \circ}$ be an abelian group.
Then by definition:

$\forall g, h \in G: g \circ h = h \circ g$
From Commutator is Identity iff Elements Commute:

$\forall g, h \in G: \sqbrk {g, h} = e$
Hence the result.
$\blacksquare$


Sources
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): commutator




