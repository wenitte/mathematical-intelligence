# 

Source: https://proofwiki.org/wiki/Doob%27s_Optional_Stopping_Theorem/Discrete_Time/Submartingale



Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \ge 0}, \Pr}$ be a filtered probability space.
Let $\sequence {X_n}_{n \ge 0}$ be an $\sequence {\FF_n}_{n \ge 0}$-submartingale.
Let $T$ be a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.
Let:

$\map {X_T} \omega = \map {X_{\map T \omega} } \omega \map {\chi_{\set {\omega \in \Omega : \map T \omega < \infty} } } \omega$
for each $\omega \in \Omega$.

Suppose one of the following conditions holds: 

$(1) \quad$ $T$ is bounded
$(2) \quad$ $T$ is finite almost surely, and there exists an integrable random variable $Y$ with $\size {X_n} \le Y$ for $n \in \Z_{\ge 0}$
$(3) \quad$ $T$ is integrable, and there exists a real number $M > 0$ such that for each $n \in \Z_{\ge 0}$ we have $\size {X_{n + 1} - X_n} \le M$ almost surely.
Then $X_T$ is integrable and:

$\expect {X_T} \ge \expect {X_0}$


Proof
From Adapted Stochastic Process is Supermartingale iff Negative is Submartingale:

$\sequence {-X_n}_{n \ge 0}$ is a $\sequence {\FF_n}_{n \ge 0}$-supermartingale.
Case $(1)$
Suppose that $T$ is bounded.
Then we apply Doob's Optional Stopping Theorem: Discrete Time: Supermartingale to obtain: 

$\expect {-X_T} \le \expect {-X_0}$
and:

$-X_T$ is integrable.
$\Box$

Case $(2)$
Suppose that:

$T$ is finite almost surely, and there exists an integrable random variable $Y$ with $\size {X_n} \le Y$ for $n \in \Z_{\ge 0}$
Then we have:

$T$ is finite almost surely, and there exists an integrable random variable $Y$ with $\size {-X_n} \le Y$ for $n \in \Z_{\ge 0}$
So applying Doob's Optional Stopping Theorem: Discrete Time: Supermartingale to $\sequence {-X_n}_{n \ge 0}$ we obtain:

$\expect {-X_T} \le \expect {-X_0}$
and:

$-X_T$ is integrable.
$\Box$

Case $(3)$
Suppose that: 

$T$ is integrable, and there exists a real number $M > 0$ such that for each $n \in \Z_{\ge 0}$ we have $\size {X_{n + 1} - X_n} \le M$ almost surely.
Then we have:

$T$ is integrable, and there exists a real number $M > 0$ such that for each $n \in \Z_{\ge 0}$ we have $\size {-X_{n + 1} - \paren {-X_n} } \le M$ almost surely.
So applying Doob's Optional Stopping Theorem: Discrete Time: Supermartingale to $\sequence {-X_n}_{n \ge 0}$ we obtain:

$\expect {-X_T} \le \expect {-X_0}$
and:

$-X_T$ is integrable.
$\Box$

In all three cases we have:

$\expect {-X_T} \le \expect {-X_0}$
and so, by Expectation is Linear:

$\expect {X_T} \ge \expect {X_0}$
We also have $-X_T$ is integrable in all three cases.
From Scalar Multiple of Integrable Function is Integrable Function, we then have that $X_T$ is integrable.
$\blacksquare$





