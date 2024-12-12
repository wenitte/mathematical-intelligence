# 

Source: https://proofwiki.org/wiki/Doob%27s_Optional_Stopping_Theorem/Discrete_Time/Martingale

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \ge 0}, \Pr}$ be a filtered probability space.
Let $\sequence {X_n}_{n \ge 0}$ be an $\sequence {\FF_n}_{n \ge 0}$-martingale.
Let $T$ be a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.
Let:

$\map {X_T} \omega = \map {X_{\map T \omega} } \omega \map {\chi_{\set {\omega \in \Omega : \map T \omega < \infty} } } \omega$
for each $\omega \in \Omega$.

Suppose one of the following conditions holds: 

$(1) \quad$ $T$ is bounded
$(2) \quad$ $T$ is finite almost surely, and there exists an integrable random variable $Y$ with $\size {X_n} \le Y$ for $n \in \Z_{\ge 0}$
$(3) \quad$ $T$ is integrable, and there exists a real number $M > 0$ such that for each $n \in \Z_{\ge 0}$ we have $\size {X_{n + 1} - X_n} \le M$ almost surely.
Then $X_T$ is integrable and in particular:

$\expect {X_T} = \expect {X_0}$


Proof
From Adapted Stochastic Process is Martingale iff Supermartingale and Submartingale:

$\sequence {X_n}_{n \ge 0}$ is a $\sequence {\FF_n}_{n \ge 0}$-supermartingale and $\sequence {\FF_n}_{n \ge 0}$-submartingale.
From Doob's Optional Stopping Theorem: Discrete Time: Supermartingale and Doob's Optional Stopping Theorem: Discrete Time: Submartingale:

$\expect {X_T} \le \expect {X_0}$
and:

$\expect {X_T} \ge \expect {X_0}$
respectively, with $X_T$ integrable.
So we have:

$\expect {X_T} = \expect {X_0}$
in any of the three cases.
$\blacksquare$


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $10.10$: Doob's Optional Stopping Theorem




