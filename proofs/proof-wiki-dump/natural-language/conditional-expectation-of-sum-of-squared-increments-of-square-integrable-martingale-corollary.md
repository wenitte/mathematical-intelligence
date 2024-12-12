# 

Source: https://proofwiki.org/wiki/Conditional_Expectation_of_Sum_of_Squared_Increments_of_Square-Integrable_Martingale/Corollary

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_t}_{t \ge 0}, \Pr}$ be a continuous-time filtered probability space.
Let $\sequence {X_t}_{t \ge 0}$ be a continuous-time martingale such that $\size {X_t}^2$ is integrable for each $t \in \hointr 0 \infty$.
Let $s, t \in \hointr 0 \infty$ be such that $0 \le s < t$. 
Let:

$s = t_0 < t_1 < \ldots < t_n = t$
be a finite subdivision of $\closedint s t$. 

Then: 

$\ds \expect {\sum_{i \mathop = 1}^n \paren {X_{t_i} - X_{t_{i - 1} } }^2} = \expect {X_t^2 - X_s^2} = \expect {\paren {X_t - X_s}^2}$


Proof
From Conditional Expectation of Sum of Squared Increments of Square-Integrable Martingale:

$\ds \expect {\sum_{i \mathop = 1}^n \paren {X_{t_i} - X_{t_{i - 1} } }^2 \mid \FF_s} = \expect {X_t^2 - X_s^2 \mid \FF_s} = \expect {\paren {X_t - X_s}^2 \mid \FF_s}$ almost surely.
From Expectation of Conditional Expectation, we then obtain: 

$\ds \expect {\sum_{i \mathop = 1}^n \paren {X_{t_i} - X_{t_{i - 1} } }^2} = \expect {X_t^2 - X_s^2} = \expect {\paren {X_t - X_s}^2}$
$\blacksquare$


Sources
2016: Jean-François Le Gall: Brownian Motion, Martingales, and Stochastic Calculus ... (previous) ... (next): Proposition $3.14$




