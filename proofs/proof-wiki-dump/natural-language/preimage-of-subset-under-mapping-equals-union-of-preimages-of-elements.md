# 

Source: https://proofwiki.org/wiki/Preimage_of_Subset_under_Mapping_equals_Union_of_Preimages_of_Elements

Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping from $S$ to $T$.
Let $f^{-1} \subseteq T \times S$ be the inverse of $f$, defined as:

$f^{-1} = \set {\tuple {t, s}: \map f s = t}$

Let $Y \subseteq T$ be a subset of $T$.

Then:

$\ds f^{-1} \sqbrk Y = \bigcup_{y \mathop \in Y} \map {f^{-1} } y$
where:

$f^{-1} \sqbrk Y$ is the preimage of the subset $Y$ under $f$
$\map {f^{-1} } y$ is the preimage of the element $y$ under $f$.


Proof
By definition, $f^{-1} \subseteq T \times S$ is a relation on $T \times S$.
Thus Image of Subset under Relation equals Union of Images of Elements can be applied directly.
$\blacksquare$





