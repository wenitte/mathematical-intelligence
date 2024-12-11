# 

Source: https://proofwiki.org/wiki/Absolute_Value_of_Martingale_is_Submartingale

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_t}_{t \ge 0}, \Pr}$ be a continuous-time filtered probability space.
Let $\sequence {X_t}_{t \ge 0}$ be a $\sequence {\FF_t}_{t \ge 0}$-martingale.

Then $\sequence {\size {X_t} }_{t \ge 0}$ is a $\sequence {\FF_t}_{t \ge 0}$-submartingale.


Proof
From Characterization of Integrable Functions:

$\size {X_t}$ is integrable for each $t \in \hointr 0 \infty$.
From Absolute Value Function is Convex, $x \mapsto \size x$ is a convex function.
From Martingale Composed with Convex Function is Submartingale, we have: 

$\sequence {\size {X_t} }_{t \ge 0}$ is a $\sequence {\FF_t}_{t \ge 0}$-submartingale.
$\blacksquare$


Sources
2016: Jean-François Le Gall: Brownian Motion, Martingales, and Stochastic Calculus ... (previous) ... (next): $3.3$: Continuous Time Martingales and Supermartingales




