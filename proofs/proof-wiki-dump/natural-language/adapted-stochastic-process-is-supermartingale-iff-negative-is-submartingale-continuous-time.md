# 

Source: https://proofwiki.org/wiki/Adapted_Stochastic_Process_is_Supermartingale_iff_Negative_is_Submartingale/Continuous_Time

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_t}_{t \ge 0}, \Pr}$ be a continuous-time filtered probability space.
Let $\sequence {X_t}_{t \ge 0}$ be a $\sequence {\FF_t}_{t \ge 0}$-adapted stochastic process.

Then $\sequence {X_t}_{t \ge 0}$ is a supermartingale if and only if $\sequence {-X_t}_{t \ge 0}$ is a submartingale.


Proof
Since $\sequence {X_t}_{t \ge 0}$ is a $\sequence {\FF_t}_{t \ge 0}$-adapted stochastic process:

$X_t$ is $\FF_t$-measurable for each $t \in \hointr 0 \infty$.
From Pointwise Scalar Multiple of Measurable Function is Measurable:

$-X_t$ is $\FF_t$-measurable for each $t \in \hointr 0 \infty$.
So $\sequence {-X_t}_{t \ge 0}$ is a $\sequence {\FF_t}_{t \ge 0}$-adapted stochastic process.
We then just need to check conditional expectations.
Let $s, t \in \hointr 0 \infty$ with $0 \le s < t$. 
From Conditional Expectation is Linear, we have: 

$\expect {X_t \mid \FF_s} \le X_s$ almost surely if and only if $\expect {-X_t \mid \FF_s} \ge -X_s$ almost surely.
That is: 

$\sequence {X_t}_{t \ge 0}$ is a supermartingale if and only if $\sequence {-X_t}_{t \ge 0}$ is a submartingale.
$\blacksquare$


Sources
2016: Jean-François Le Gall: Brownian Motion, Martingales, and Stochastic Calculus ... (previous) ... (next): $3.3$: Continuous Time Martingales and Supermartingales




