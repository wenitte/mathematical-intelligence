# 

Source: https://proofwiki.org/wiki/Image_of_Inverse_Image

Theorem
Let $S, T$ be sets.
Let $f: S \to T$ be a mapping.
Let $X$ be a subset of $T$.

Then:

$f \sqbrk {f^{-1} \sqbrk X} \subseteq X$
where:

$f^{-1} \sqbrk X$ denotes the image of $X$ under the relation $f^{-1}$.


Proof
Let $x \in f \sqbrk {f^{-1} \sqbrk X}$.
By definition of image of set:

$\exists y \in S: y \in f^{-1} \sqbrk X \land x = \map f y$
By definition of image of set under relation:

$\map f y \in X$
Thus $x \in X$
$\blacksquare$


Sources
Mizar article FUNCT_1:75




