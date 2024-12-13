# 

Source: https://proofwiki.org/wiki/Preimage_of_Upper_Section_under_Increasing_Mapping_is_Upper

Theorem
Let $\struct {S, \preceq}$, $\struct {T, \precsim}$ be preordered sets.
Let $f: S \to T$ be an increasing mapping.
Let $X \subseteq T$ be a upper subset of $T$.

Then $f^{-1} \sqbrk X$ is upper
where $f^{-1} \sqbrk X$ denotes the preimage of $X$ under $f$.


Proof
Let $x \in f^{-1} \sqbrk X$, $y \in S$ such that

$x \preceq y$
By definition of increasing mapping:

$\map f x \precsim \map f y$
By definition of preimage of set:

$\map f x \in X$
By definition of upper section:

$\map f y \in X$
Thus by definition of preimage of subset:

$y \in f^{-1} \sqbrk X$
$\blacksquare$


Sources
Mizar article WAYBEL17:2




