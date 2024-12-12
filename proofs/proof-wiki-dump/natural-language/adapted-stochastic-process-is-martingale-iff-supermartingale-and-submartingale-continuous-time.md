# 

Source: https://proofwiki.org/wiki/Adapted_Stochastic_Process_is_Martingale_iff_Supermartingale_and_Submartingale/Continuous_Time

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_t}_{t \ge 0}, \Pr}$ be a continuous-time filtered probability space.
Let $\sequence {X_t}_{t \ge 0}$ be a continuous-time $\sequence {\FF_t}_{t \ge 0}$-adapted stochastic process.

Then $\sequence {X_t}_{t \ge 0}$ is a $\sequence {\FF_t}_{t \ge 0}$-martingale if and only if it is a $\sequence {\FF_t}_{t \ge 0}$-supermartingale and a $\sequence {\FF_t}_{t \ge 0}$-submartingale. 


Proof
For each $t, s \in \hointr 0 \infty$ with $0 \le s < t$, we have: 

$\expect {X_t \mid \FF_s} = X_s$ almost surely
if and only if:

$\expect {X_t \mid \FF_s} \le X_s$ almost surely
and:

$\expect {X_t \mid \FF_s} \ge X_s$ almost surely.
That is: 

$\sequence {X_t}_{t \ge 0}$ is a $\sequence {\FF_t}_{t \ge 0}$-martingale if and only if it is a $\sequence {\FF_t}_{t \ge 0}$-supermartingale and a $\sequence {\FF_t}_{t \ge 0}$-submartingale.
$\blacksquare$





