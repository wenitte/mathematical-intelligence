# 

Source: https://proofwiki.org/wiki/Inverse_of_Strictly_Decreasing_Concave_Real_Function_is_Concave

Theorem
Let $f$ be a real function which is concave on the open interval $I$.
Let $J = f \left[{I}\right]$.

If $f$ be strictly decreasing on $I$, then $f^{-1}$ is concave on $J$.


Proof
Let:

$X = f \left({x}\right) \in J$
$Y = f \left({y}\right) \in J$.
From the definition of concave:

$\forall \alpha, \beta \in \R_{>0}, \alpha + \beta = 1: f \left({\alpha x + \beta y}\right) \ge \alpha f \left({x}\right) + \beta f \left({y}\right)$

Let $f$ be strictly decreasing on $I$.
From Inverse of Strictly Monotone Function, it follows that $f^{-1}$ is strictly decreasing on $J$.
Thus:

$\alpha f^{-1} \left({X}\right) + \beta f^{-1} \left({Y}\right) = \alpha x + \beta y \ge f^{-1} \left({\alpha X + \beta Y}\right)$
Hence $f^{-1}$ is concave on $J$.
$\blacksquare$


Also see
Inverse of Strictly Decreasing Strictly Concave Real Function is Strictly Concave
Inverse of Strictly Decreasing Convex Real Function is Convex
Inverse of Strictly Decreasing Strictly Convex Real Function is Strictly Convex
Inverse of Strictly Increasing Convex Real Function is Concave
Inverse of Strictly Increasing Strictly Convex Real Function is Strictly Concave
Inverse of Strictly Increasing Concave Real Function is Convex
Inverse of Strictly Increasing Strictly Concave Real Function is Strictly Convex




