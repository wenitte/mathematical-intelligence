# 

Source: https://proofwiki.org/wiki/Doob%27s_Maximal_Inequality/Discrete_Time/Proof_1

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \mathop \ge 0}, \Pr}$ be a filtered probability space.
Let $\sequence {X_n}_{n \mathop \ge 0}$ be a non-negative $\sequence {\FF_n}_{n \mathop \ge 0}$-submartingale.
Let:

$\ds X_n^\ast = \max_{0 \mathop \le k \mathop \le n} X_k$
where $\max$ is the pointwise maximum. 
Let $\lambda > 0$.

Then:

$\lambda \map \Pr {X_n^\ast \ge \lambda} \le \expect {X_n}$


Proof
Let:

$\map T \omega = \inf \set {k \ge 0 : \map {X_k} \omega \ge \lambda} \wedge n$
for each $\omega \in \Omega$. 
From:

Least Time at which Discrete-Time Adapted Stochastic Process equals or exceeds Real Number is Stopping Time
Constant Function is Stopping Time
Pointwise Minimum of Stopping Times is Stopping Time
we have: 

$T$ is a stopping time with respect to $\sequence {\FF_n}_{n \mathop \ge 0}$.

This article, or a section of it, needs explaining.In particular: Can the above be demonstrated in its own proof page? There's a lot to unpack.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Further:

$T \le n$
Note that $X_T \ge \lambda$ if and only if:

$X_k \ge \lambda$ for some $0 \le k \le n$.
This is equivalent to: 

$\ds \sup_{0 \mathop \le k \mathop \le n} X_k = X_n^\ast \ge \lambda$
Let $\FF_T$ be the stopped $\sigma$-algebra associated with $T$. 
By Doob's Optional Stopping Theorem for Stopped Sigma-Algebra of Bounded Stopping Time: Discrete Time: Submartingale, we have:

$\expect {X_n \mid \FF_T} \ge X_T$ almost surely.
From Adapted Stochastic Process at Stopping Time is Measurable with respect to Stopped Sigma-Algebra:

$X_T$ is $\FF_T$-measurable.
From Conditional Expectation of Measurable Random Variable, we have:

$X_T = \expect {X_T \mid \FF_T}$ almost surely.
So, by Conditional Expectation is Linear we have:

$\expect {X_n - X_T \mid \FF_T} \ge 0$ almost surely.
So from Condition for Conditional Expectation to be Almost Surely Non-Negative, we have:

$\expect {X_n \cdot \chi_A} \ge \expect {X_T \cdot \chi_A}$
for all $A \in \FF_T$.
We can now calculate: 














\(\ds \map \Pr {X_n^\ast \ge \lambda}\)

\(=\)







\(\ds \map \Pr {X_T \ge \lambda}\)




















\(\ds \)

\(=\)







\(\ds \expect {\chi_{\set {X_T \mathop \ge \lambda} } }\)





Integral of Characteristic Function














\(\ds \)

\(\le\)







\(\ds \expect {\frac {X_T} \lambda \chi_{\set {X_T \mathop \ge \lambda} } }\)





since if $X_T \ge \lambda$, we have $\dfrac {X_T} \lambda \ge 1$ and can apply Expectation is Monotone














\(\ds \)

\(=\)







\(\ds \frac 1 \lambda \expect {X_T \chi_{\set {X_T \mathop \ge \lambda} } }\)





Expectation is Linear














\(\ds \)

\(\le\)







\(\ds \frac 1 \lambda \expect {X_n \chi_{\set {X_T \mathop \ge \lambda} } }\)





since $X_T$ is $\FF_T$-measurable and so $\set {X_T \ge \lambda} \in \FF_T$














\(\ds \)

\(\le\)







\(\ds \frac 1 \lambda \expect {X_n}\)





Expectation is Monotone



Multiplying through $\lambda > 0$ allows us to conclude.
$\blacksquare$





