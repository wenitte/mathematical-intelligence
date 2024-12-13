# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_Preserves_Lower_Bounds



Theorem
Let $L = \struct {S, \preceq}$, $L' = \struct {S', \preceq'}$ be ordered sets.
Let $f: S \to S'$ be an order isomorphism between $L$ and $L'$.
Let $x \in S$, $X \subseteq S$.

Then $x$ is lower bound for $X$ if and only if $\map f x$ is lower bound for $f \sqbrk X$.


Proof
By definition of order isomorphism:

$f$ is an order embedding.


Sufficient Condition
Assume that

$x$ is lower bound for $X$.
By Order Embedding is Increasing Mapping:

$f$ is an increasing mapping.
Thus by Increasing Mapping Preserves Lower Bounds:

$\map f x$ is lower bound for $f \sqbrk X$.
$\Box$


Necessary Condition
Assume that

$\map f x$ is lower bound for $f \sqbrk X$.
Let $y \in X$.
By definition of image of set:

$\map f y \in f \sqbrk X$
By definition of lower bound:

$\map f y \preceq' \map f x$
Thus by definition of order embedding:

$y \preceq x$
$\blacksquare$


Sources
Mizar article WAYBEL13:18




