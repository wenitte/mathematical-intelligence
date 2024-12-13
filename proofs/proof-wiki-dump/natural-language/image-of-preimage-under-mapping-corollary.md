# 

Source: https://proofwiki.org/wiki/Image_of_Preimage_under_Mapping/Corollary

Corollary to Image of Preimage under Mapping
Let $f: S \to T$ be a mapping.

Then:

$B \subseteq \Img f \implies \paren {f \circ f^{-1} } \sqbrk B = B$
where:

$f \sqbrk X$ denotes the image of $X$ under $f$
$f^{-1} \sqbrk X$ denotes the preimage of $X$ under $f$
$f \circ f^{-1}$ denotes composition of $f$ and $f^{-1}$
$\Img f$ denotes the image set of $f$.


Proof
From Preimage of Subset is Subset of Preimage:

$B \subseteq \Img f \implies f^{-1} \sqbrk B \subseteq f^{-1} \sqbrk {\Img f}$
and from Intersection with Subset is Subset:

$f^{-1} \sqbrk B \subseteq f^{-1} \sqbrk {\Img f} \implies f^{-1} \sqbrk B \cap f^{-1} \sqbrk {\Img f} = f^{-1} \sqbrk B$
Hence the result.
$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.2$: Homomorphisms: $\text{(i)}$




