# 

Source: https://proofwiki.org/wiki/Doob%27s_Optional_Stopping_Theorem/Discrete_Time/Supermartingale



Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \ge 0}, \Pr}$ be a filtered probability space.
Let $\sequence {X_n}_{n \ge 0}$ be an $\sequence {\FF_n}_{n \ge 0}$-supermartingale.
Let $T$ be a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.
Let:

$\map {X_T} \omega = \map {X_{\map T \omega} } \omega \map {\chi_{\set {\omega \in \Omega : \map T \omega < \infty} } } \omega$
for each $\omega \in \Omega$.

Suppose one of the following conditions holds: 

$(1): \quad$ $T$ is bounded
$(2): \quad$ $T$ is finite almost surely, and there exists an integrable random variable $Y$ with $\size {X_n} \le Y$ for $n \in \Z_{\ge 0}$
$(3): \quad$ $T$ is integrable, and there exists a real number $M > 0$ such that for each $n \in \Z_{\ge 0}$ we have $\size {X_{n + 1} - X_n} \le M$ almost surely.
Then $X_T$ is integrable and:

$\expect {X_T} \le \expect {X_0}$


Proof
We first show that if $T$ is finite almost surely, then: 

$\map {X_{n \wedge T} } \omega \to \map {X_T} \omega$
for almost all $\omega \in \Omega$.
Let $\omega \in \Omega$ be such that $\map T \omega = s < \infty$. 
Then for $n \ge s$, we have: 

$\map {X_{n \wedge T} } \omega = \map {X_s} \omega$
From Constant Sequence in Topological Space Converges, we have:

$\map {X_{n \wedge T} } \omega \to \map {X_s} \omega = \map {X_T} \omega$
for all $\omega \in \Omega$ such that $\map T \omega < \infty$.
Note that since $T$ is finite almost surely, we have that: 

$\map {X_{n \wedge T} } \omega \to \map {X_T} \omega$
for almost all $\omega \in \Omega$, as required.
So:

$X_{n \wedge T} \to X_T$
almost surely. 
We have from Stopped Supermartingale is Supermartingale: Corollary:

$X_{n \wedge T}$ is integrable for each $n \in \N$
and:

$\expect {X_{n \wedge T} } \le \expect {X_0}$
So from Expectation is Linear, and since $X_0$ is integrable, this is equivalent to:

$\expect {X_{n \wedge T} - X_0} \le 0$
We aim to show: 

$\ds \expect {X_T - X_0} = \lim_{n \mathop \to \infty} \expect {X_{n \wedge T} - X_0}$
in each of the three cases.
We then have half the result from Limits Preserve Inequalities.
We will then have to establish that $X_T$ is integrable. 

Case $(1)$
Suppose that $\map T \omega \le t$ for all $\omega \in \Omega$, with $t \in \Z_{\ge 0}$.
Then for $n > t$ we have: 

$X_{n \wedge T} = X_T$
That is, for $n > t$: 

$\expect {X_{n \wedge T} } = \expect {X_T}$
Since $X_{n \wedge T}$ is integrable, so is $X_T$.
Also:

$\expect {X_T - X_0} = \expect {X_{n \wedge T} - X_0} \le 0$
$\Box$

Case $(2)$
Note that if: 

$\size {X_n} \le Y$ for all $n \in \N_{\ge 0}$
then:

$\size {X_{n \wedge T} } \le Y$ for all $n \in \N_{\ge 0}$.
Then, by the Triangle Inequality, we have:

$\size {X_{n \wedge T} - X_0} \le \size {X_0} + Y$ for all $n \in \N_{\ge 0}$
Since:

$X_{n \wedge T} \to X_T$ almost surely
and $X_0$ and $Y$ are both integrable, we can apply Lebesgue's Dominated Convergence Theorem to obtain: 

$\ds \expect {X_T - X_0} = \lim_{n \mathop \to \infty} \expect {X_{n \wedge T} - X_0} \le 0$
and that $X_T$ is integrable.
$\Box$

Case $(3)$
From Integrable Function is A.E. Real-Valued, $T$ is again almost surely finite.
So we again have:

$X_{n \wedge T} \to X_T$ almost surely.
We can calculate:














\(\ds \size {X_{n \wedge T} - X_0}\)

\(=\)







\(\ds \size {\sum_{j \mathop = 0}^{n \wedge T - 1} \paren {X_{k + 1} - X_k} }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{j \mathop = 0}^{n \wedge T - 1} \size {X_{k + 1} - X_k}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(\le\)







\(\ds M \sum_{j \mathop = 0}^{n \wedge T - 1} 1\)





almost surely, by hypothesis














\(\ds \)

\(=\)







\(\ds M \paren {n \wedge T}\)




















\(\ds \)

\(\le\)







\(\ds M T\)





Definition of Pointwise Minimum of Extended Real-Valued Functions



almost surely.
Since $T$ is integrable, so is $M T$ from Scalar Multiple of Integrable Function is Integrable Function.
So we can again apply Lebesgue's Dominated Convergence Theorem to obtain:

$\ds \expect {X_T - X_0} = \lim_{n \mathop \to \infty} \expect {X_{n \wedge T} - X_0} \le 0$
and that $X_T$ is integrable.
$\blacksquare$


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $10.10$: Doob's Optional Stopping Theorem




