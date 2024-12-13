# 

Source: https://proofwiki.org/wiki/Doob%27s_Optional_Stopping_Theorem_for_Stopped_Sigma-Algebra_of_Bounded_Stopping_Time/Discrete_Time/Submartingale

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \ge 0}, \Pr}$ be a filtered probability space.
Let $\sequence {X_n}_{n \ge 0}$ be an $\sequence {\FF_n}_{n \ge 0}$-submartingale.
Let $S$ and $T$ be bounded stopping times with respect to $\sequence {\FF_n}_{n \ge 0}$ and $S \le T$. 
Let $\FF_S$ be the stopped $\sigma$-algebra associated with $S$. 
Let $X_T$ and $X_S$ be $X$ at the stopping times $T$ and $S$.

Then: 

$\expect {X_T \mid \FF_S} \ge X_S$ almost surely.


Proof
From Adapted Stochastic Process is Supermartingale iff Negative is Submartingale:

$\sequence {-X_n}_{n \ge 0}$ is a $\sequence {\FF_n}_{n \ge 0}$-supermartingale.
From Doob's Optional Stopping Theorem for Stopped Sigma-Algebra of Bounded Stopping Time: Discrete Time: Supermartingale:

$\expect {-X_T \mid \FF_S} \le -X_S$ almost surely.
From Expectation is Linear:

$\expect {X_T \mid \FF_S} \ge X_S$ almost surely.
$\blacksquare$




