# 

Source: https://proofwiki.org/wiki/Mean_Value_Theorem/Proof_3

Theorem
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$ and differentiable on the open interval $\openint a b$.

Then:

$\exists \xi \in \openint a b: \map {f'} \xi = \dfrac {\map f b - \map f a} {b - a}$


Proof
Recall the Cauchy Mean Value Theorem:
Let $f$ and $g$ be real functions which are continuous on the closed interval $\closedint a b$ and differentiable on the open interval $\openint a b$.
Suppose:

$\forall x \in \openint a b: \map {g'} x \ne 0$

Then:

$\exists \xi \in \openint a b: \dfrac {\map {f'} \xi} {\map {g'} \xi} = \dfrac {\map f b - \map f a} {\map g b - \map g a}$

The result follows by setting $\map g x = x$ for all $x \in \R$.
$\blacksquare$


Sources
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Cauchy's mean value theorem




