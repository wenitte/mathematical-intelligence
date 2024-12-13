# 

Source: https://proofwiki.org/wiki/Real_Function_with_Strictly_Positive_Derivative_is_Strictly_Increasing

Theorem
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$ and differentiable on the open interval $\openint a b$.

If $\forall x \in \openint a b: \map {f'} x > 0$, then $f$ is strictly increasing on $\closedint a b$.


Proof
Let $c, d \in \closedint a b$ such that $c < d$.
Then $f$ satisfies the conditions of the Mean Value Theorem on $\closedint c d$.
Hence:

$\exists \xi \in \openint c d: \map {f'} \xi = \dfrac {\map f d - \map f c} {d - c}$

Let $f$ be such that:

$\forall x \in \openint a b: \map {f'} x > 0$
Then:

$\map {f'} \xi > 0$
and hence:

$\map f d > \map f c$
Thus $f$ is strictly increasing on $\closedint a b$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 12.7 \ \text {(i)}$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): monotonic increasing function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): monotonic increasing function




