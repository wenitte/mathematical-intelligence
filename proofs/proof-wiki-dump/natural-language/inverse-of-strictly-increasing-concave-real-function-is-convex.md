# 

Source: https://proofwiki.org/wiki/Inverse_of_Strictly_Increasing_Concave_Real_Function_is_Convex

Theorem
Let $f$ be a real function which is concave on the open interval $I$.
Let $J = f \sqbrk I$.

If $f$ is strictly increasing on $I$, then $f^{-1}$ is convex on $J$.


Proof
Let $X = \map f x \in J, Y = \map f y \in J$.
From the definition of concave:

$\forall \alpha, \beta \in \R_{>0}, \alpha + \beta = 1: \map f {\alpha x + \beta y} \ge \alpha \map f x + \beta \map f y$

Let $f$ be strictly increasing on $I$.
From Inverse of Strictly Monotone Function, it follows that $f^{-1}$ is strictly increasing on $J$.
Thus:

$\alpha \map {f^{-1} } X + \beta \map {f^{-1} } Y = \alpha x + \beta y \ge \map {f^{-1} } {\alpha X + \beta Y}$
Hence $f^{-1}$ is convex on $J$.
$\blacksquare$


Also see
Inverse of Strictly Increasing Strictly Concave Real Function is Strictly Convex
Inverse of Strictly Increasing Convex Real Function is Concave
Inverse of Strictly Increasing Strictly Convex Real Function is Strictly Concave
Inverse of Strictly Decreasing Concave Real Function is Concave
Inverse of Strictly Decreasing Strictly Concave Real Function is Strictly Concave
Inverse of Strictly Decreasing Convex Real Function is Convex
Inverse of Strictly Decreasing Strictly Convex Real Function is Strictly Convex




