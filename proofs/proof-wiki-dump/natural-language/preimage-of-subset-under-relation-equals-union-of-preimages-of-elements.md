# 

Source: https://proofwiki.org/wiki/Preimage_of_Subset_under_Relation_equals_Union_of_Preimages_of_Elements

Theorem
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation on $S \times T$.
Let $\RR^{-1} \subseteq T \times S$ be the inverse relation to $\RR$

Let $Y \subseteq T$ be a subset of $T$.

Then:

$\RR^{-1} \sqbrk Y = \ds \bigcup_{y \mathop \in Y} \map {\RR^{-1} } y$
where:

$\RR^{-1} \sqbrk Y$ is the preimage of the subset $Y$ under $\RR$
$\RR^{-1} \sqbrk Y$ is the preimage of the element $y$ under $\RR$.


Proof
By definition, $\RR^{-1} \subseteq T \times S$ is a relation on $T \times S$.
Thus Image of Subset under Relation equals Union of Images of Elements can be applied directly.
$\blacksquare$





