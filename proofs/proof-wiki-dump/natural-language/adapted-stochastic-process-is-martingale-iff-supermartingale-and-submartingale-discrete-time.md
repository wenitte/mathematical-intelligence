# 

Source: https://proofwiki.org/wiki/Adapted_Stochastic_Process_is_Martingale_iff_Supermartingale_and_Submartingale/Discrete_Time

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \mathop \ge 0}, \Pr}$ be a discrete-time filtered probability space.
Let $\sequence {X_n}_{n \mathop \ge 0}$ be a discrete-time $\sequence {\FF_n}_{n \mathop \ge 0}$-adapted stochastic process.

Then $\sequence {X_n}_{n \mathop \ge 0}$ is a $\sequence {\FF_n}_{n \mathop \ge 0}$-martingale if and only if it is a $\sequence {\FF_n}_{n \mathop \ge 0}$-supermartingale and a $\sequence {\FF_n}_{n \mathop \ge 0}$-submartingale. 


Proof
For each $n \in \Z_{\ge 0}$, we have: 

$\expect {X_{n + 1} \mid \FF_n} = X_n$ almost surely
if and only if:

$\expect {X_{n + 1} \mid \FF_n} \le X_n$ almost surely
and:

$\expect {X_{n + 1} \mid \FF_n} \ge X_n$ almost surely.
That is: 

$\sequence {X_n}_{n \ge 0}$ is a $\sequence {\FF_n}_{n \mathop \ge 0}$-martingale if and only if it is a $\sequence {\FF_n}_{n \mathop \ge 0}$-supermartingale and a $\sequence {\FF_n}_{n \mathop \ge 0}$-submartingale.
$\blacksquare$


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $10.3$: Martingale, supermartingale, submartingale




