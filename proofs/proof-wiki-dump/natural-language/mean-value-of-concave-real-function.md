# 

Source: https://proofwiki.org/wiki/Mean_Value_of_Concave_Real_Function

Theorem
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$ and differentiable on the open interval $\openint a b$.
Let $f$ be concave on $\openint a b$.

Then:

$\forall \xi \in \openint a b: \map f x - \map f \xi \le \map {f'} \xi \paren {x - \xi}$


Proof
By the Mean Value Theorem:

$\exists \eta \in \openint x \xi: \map {f'} \eta = \dfrac {\map f x - \map f \xi} {x - \xi}$
From Real Function is Concave iff Derivative is Decreasing, the derivative of $f$ is decreasing.
Thus:

$x > \xi \implies \map {f'} \eta \le \map {f'} \xi$
$x < \xi \implies \map {f'} \eta \ge \map {f'} \xi$
Hence:

$\map f x - \map f \xi \le \map {f'} \xi \paren {x - \xi}$
$\blacksquare$


Also see
Mean Value of Convex Real Function




