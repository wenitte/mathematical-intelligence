# 

Source: https://proofwiki.org/wiki/Inverse_of_Strictly_Decreasing_Strictly_Convex_Real_Function_is_Strictly_Convex

Theorem
Let $f$ be a real function which is strictly convex on the open interval $I$.
Let $J = f \sqbrk I$.

If $f$ be strictly decreasing on $I$, then $f^{-1}$ is strictly convex on $J$.


Proof
Let:

$X = \map f x \in J$
$Y = \map f y \in J$.
From the definition of strictly convex:

$\forall \alpha, \beta \in \R_{>0}, \alpha + \beta = 1: \map f {\alpha x + \beta y} < \alpha \map f x + \beta \map f y$

Let $f$ be strictly decreasing on $I$.
Then from Inverse of Strictly Monotone Function it follows that $f^{-1}$ is strictly decreasing on $J$.
Thus:

$\alpha \map {f^{-1} } X + \beta \map {f^{-1} } Y = \alpha x + \beta y < \map {f^{-1} } {\alpha X + \beta Y}$
Hence $f^{-1}$ is strictly convex on $J$.
$\blacksquare$


Also see
Inverse of Strictly Decreasing Convex Real Function is Convex
Inverse of Strictly Decreasing Concave Real Function is Concave
Inverse of Strictly Decreasing Strictly Concave Real Function is Strictly Concave
Inverse of Strictly Increasing Convex Real Function is Concave
Inverse of Strictly Increasing Strictly Convex Real Function is Strictly Concave
Inverse of Strictly Increasing Concave Real Function is Convex
Inverse of Strictly Increasing Strictly Concave Real Function is Strictly Convex




