# 

Source: https://proofwiki.org/wiki/Expected_Value_of_Martingale_is_Constant_in_Time/Continuous_Time

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_t}_{t \ge 0}, \Pr}$ be a continuous-time filtered probability space.
Let $\sequence {X_t}_{t \ge 0}$ be a $\sequence {\FF_t}_{t \ge 0}$-martingale.

Then: 

$\expect {X_t} = \expect {X_0}$
for each $t \in \hointr 0 \infty$. 


Proof
From the definition of a continuous-time martingale, we have: 

$\expect {X_t \mid \FF_0} = X_0$ almost surely
for each $t \in \hointr 0 \infty$. 
So:

$\expect {\expect {X_t \mid \FF_0} } = \expect {X_0}$
From Expectation of Conditional Expectation, we have:

$\expect {\expect {X_t \mid \FF_0} } = \expect {X_t}$
So we have: 

$\expect {X_t} = \expect {X_0}$
for each $t \in \hointr 0 \infty$.
$\blacksquare$


Sources
2016: Jean-François Le Gall: Brownian Motion, Martingales, and Stochastic Calculus ... (previous) ... (next): $3.3$: Continuous Time Martingales and Supermartingales




