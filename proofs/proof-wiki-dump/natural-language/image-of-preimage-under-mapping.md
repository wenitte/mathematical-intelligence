# 

Source: https://proofwiki.org/wiki/Image_of_Preimage_under_Mapping



Theorem
Let $f: S \to T$ be a mapping.

Then:

$B \subseteq T \implies \paren {f \circ f^{-1} } \sqbrk B = B \cap f \sqbrk S$
where:

$f \sqbrk S$ denotes the image of $S$ under $f$
$f^{-1} \sqbrk B$ denotes the preimage of $B$ under $f$
$f \circ f^{-1}$ denotes composition of $f$ and $f^{-1}$.


Corollary
$B \subseteq \Img f \implies \paren {f \circ f^{-1} } \sqbrk B = B$


Proof
As $f$ is a mapping it follows by definition that $f$ is also a relation
Applying Image of Preimage under Relation is Subset directly:

$B \subseteq T \implies \paren {f \circ f^{-1} } \sqbrk B \subseteq B \implies f \sqbrk {f^{-1} \sqbrk B} \subseteq B$
From Preimage of Subset is Subset of Preimage:

$B \subseteq T \implies f^{-1} \sqbrk B \subseteq f^{-1} \sqbrk T$
From Preimage of Mapping equals Domain:

$f^{-1} \sqbrk T = S$
and so:

$B \subseteq T \implies f^{-1} \sqbrk B \subseteq S$
Applying Image of Subset under Mapping is Subset of Image:

$f^{-1} \sqbrk B \subseteq S \implies f \sqbrk {f^{-1} \sqbrk B} \subseteq f \sqbrk S$
From Intersection is Largest Subset:

$B \subseteq T \implies \paren {f \circ f^{-1} } \sqbrk B \subseteq B \cap f \sqbrk S$

Now suppose $y \in B \cap f \sqbrk S$.
Then:

$f^{-1} \sqbrk y \subseteq f^{-1} \sqbrk B$ and $f^{-1} \sqbrk y \subseteq f^{-1} \sqbrk {f \sqbrk S}$
and in particular:

$f^{-1} \sqbrk y \subseteq f^{-1} \sqbrk B$
Applying Image of Subset under Mapping is Subset of Image again:

$f \sqbrk {f^{-1} \sqbrk y} \subseteq f \sqbrk {f^{-1} \sqbrk B}$
But as $f$ is many-to-one:

$f \sqbrk {f^{-1} \sqbrk y} = y$
and so:

$y \in f \sqbrk {f^{-1} \sqbrk B} = \paren {f \circ f^{-1} } \sqbrk B$
So we have that:

$B \cap f \sqbrk S \subseteq \paren {f \circ f^{-1} } \sqbrk B$
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.13 \ \text{(d)}$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.12$: Set Inclusions for Image and Inverse Image Sets: Theorem $12.7 \ \text{(d)}$




