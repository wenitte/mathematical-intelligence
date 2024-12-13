# 

Source: https://proofwiki.org/wiki/Power_of_Absolute_Value_is_Convex_Real_Function

Theorem
Let $p \ge 1$ be a real number.
Define $f : \R \to \R$ by: 

$\map f x = {\size x}^p$
for each $x \in \R$. 

Then $f$ is a convex function.


Proof
From Absolute Value Function is Convex:

$x \mapsto \size x$ is a convex function.
Note now that: 

$x \mapsto x^p$ is increasing on $\hointr 0 \infty$
From Power Function is Convex Real Function, we also have: 

$x \mapsto x^p$ is convex.
Since $f$ is the composition of the maps $x \mapsto \size x$ and $x \mapsto x^p$, we have:

$f$ is convex
by Convex Real Function Composed with Increasing Convex Real Function is Convex.
$\blacksquare$





