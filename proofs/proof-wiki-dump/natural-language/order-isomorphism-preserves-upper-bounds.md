# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_Preserves_Upper_Bounds



Theorem
Let $L = \struct {S, \preceq}$, $L' = \struct {S', \preceq'}$ be ordered sets.
Let $f: S \to S'$ be an order isomorphism between $L$ and $L'$.
Let $x \in S$, $X \subseteq S$.

Then:

$x$ is an upper bound for $X$
if and only if:

$\map f x$ is an upper bound for $f \sqbrk X$.


Proof
By definition of order isomorphism:

$f$ is an order embedding.


Sufficient Condition
Assume that

$x$ is upper bound for $X$.
By Order Embedding is Increasing Mapping:

$f$ is an increasing mapping.
Thus by Increasing Mapping Preserves Upper Bounds:

$\map f x$ is an upper bound for $f \sqbrk X$.
$\Box$


Necessary Condition
Assume that:

$\map f x$ is upper bound for $f \sqbrk X$.
Let $y \in X$.
By definition of image of set:

$\map f y \in f \sqbrk X$
By definition of upper bound:

$\map f x \preceq' \map f y$
Thus by definition of order embedding:

$x \preceq y$
$\blacksquare$


Sources
Mizar article WAYBEL13:19




