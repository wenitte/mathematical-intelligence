# 

Source: https://proofwiki.org/wiki/Expected_Value_of_Submartingale_is_Increasing_in_Time/Continuous_Time

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_t}_{t \ge 0}, \Pr}$ be a continuous-time filtered probability space.
Let $\sequence {X_t}_{t \ge 0}$ be a $\sequence {\FF_t}_{t \ge 0}$-submartingale.
Let $t, s \in \hointr 0 \infty$ with $0 \le s < t$.

Then, we have: 

$\expect {X_s} \le \expect {X_t}$


Proof
From the definition of a submartingale, we have: 

$\expect {X_t \mid \FF_s} \ge X_s$ almost surely.
From Expectation is Monotone, we have: 

$\expect {\expect {X_t \mid \FF_s} } \ge \expect {X_s}$
From Expectation of Conditional Expectation, we have: 

$\expect {X_s} \le \expect {X_t}$
$\blacksquare$


Sources
2016: Jean-François Le Gall: Brownian Motion, Martingales, and Stochastic Calculus ... (previous) ... (next): $3.3$: Continuous Time Martingales and Supermartingales




