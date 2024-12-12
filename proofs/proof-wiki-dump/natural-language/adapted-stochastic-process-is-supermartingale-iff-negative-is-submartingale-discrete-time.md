# 

Source: https://proofwiki.org/wiki/Adapted_Stochastic_Process_is_Supermartingale_iff_Negative_is_Submartingale/Discrete_Time

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \ge 0}, \Pr}$ be a discrete-time filtered probability space.
Let $\sequence {X_n}_{n \ge 0}$ be a discrete-time $\sequence {\FF_n}_{n \ge 0}$-adapted stochastic process.

Then $\sequence {X_n}_{n \ge 0}$ is a supermartingale if and only if $\sequence {-X_n}_{n \ge 0}$ is a submartingale.


Proof
Since $\sequence {X_n}_{n \ge 0}$ is a discrete-time $\sequence {\FF_n}_{n \ge 0}$-adapted stochastic process:

$X_n$ is $\FF_n$-measurable for each $n \in \N$.
From Pointwise Scalar Multiple of Measurable Function is Measurable:

$-X_n$ is $\FF_n$-measurable for each $n \in \N$.
So $\sequence {-X_n}_{n \ge 0}$ is a discrete-time $\sequence {\FF_n}_{n \ge 0}$-adapted stochastic process.
We then just need to check conditional expectations.
From Conditional Expectation is Linear, we have: 

$\expect {X_{n + 1} \mid \FF_n} \le X_n$ almost surely if and only if $\expect {-X_{n + 1} \mid \FF_n} \ge -X_n$ almost surely.
That is: 

$\sequence {X_n}_{n \ge 0}$ is a supermartingale if and only if $\sequence {-X_n}_{n \ge 0}$ is a submartingale.
$\blacksquare$


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $10.3$: Martingale, supermartingale, submartingale




