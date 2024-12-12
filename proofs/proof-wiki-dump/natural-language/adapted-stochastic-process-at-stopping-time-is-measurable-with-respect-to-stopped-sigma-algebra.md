# 

Source: https://proofwiki.org/wiki/Adapted_Stochastic_Process_at_Stopping_Time_is_Measurable_with_respect_to_Stopped_Sigma-Algebra

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \ge 0}, \Pr}$ be a filtered probability space.
Let $\sequence {X_n}_{n \ge 0}$ be an $\sequence {\FF_n}_{n \ge 0}$-adapted stochastic process.
Let $T$ be a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.
Let $X_T$ be the adapted stochastic process $\sequence {X_n}_{n \ge 0}$ stopped at $T$.
Let $\FF_T$ be the stopped $\sigma$-algebra associated with $T$.

Then $X_T$ is $\FF_T$-measurable. 


Proof
We have that if $\map T \omega = t$ for $\omega \in \Omega$ and $t \in \Z_{\ge 0}$ then: 

$\map {X_T} \omega = \map {X_t} \omega$
We aim to show that for each Borel set $A \subseteq \R$:

$\ds \set {\omega \in \Omega : \map {X_T} \omega \in A} \in \FF_T$
That is, we want to show that:

$\set {\omega \in \Omega : \map {X_T} \omega \in A} \cap \set {\omega \in \Omega : \map T \omega \le t} \in \FF_t$
for $t \in \Z_{\ge 0}$.
Let $t \in \Z_{\ge 0}$. 
We have that:

$\ds \set {\omega \in \Omega : \map {X_T} \omega \in A} \cap \set {\omega \in \Omega : \map T \omega \le t} = \bigcup_{s \in \Z_{\ge 0}, \, 0 \le s \le t} \set {\omega \in \Omega : \map T \omega = s} \cap \set {\omega \in \Omega : \map {X_s} \omega \in A}$
Since $T$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$, we have:

$\set {\omega \in \Omega : \map T \omega = s} \in \FF_s$
Since $\sequence {\FF_n}_{n \ge 0}$ is a filtration of $\sigma$-algebra and $s \le t$:

$\set {\omega \in \Omega : \map T \omega = s} \in \FF_t$
Since $\sequence {X_n}_{n \ge 0}$ is $\sequence {\FF_n}_{n \ge 0}$-adapted, we have that $X_s$ is $\FF_s$-measurable.
So, we have:

$\set {\omega \in \Omega : \map {X_s} \omega \in A} \in \FF_s$
and so:

$\set {\omega \in \Omega : \map {X_s} \omega \in A} \in \FF_t$
Since $\FF_t$ is closed under finite intersection, we have:

$\set {\omega \in \Omega : \map T \omega = s} \cap \set {\omega \in \Omega : \map {X_s} \omega \in A} \in \FF_t$
Since $\FF_t$ is closed under finite union, we have:

$\ds \bigcup_{s \in \Z_{\ge 0}, \, 0 \le s \le t} \set {\omega \in \Omega : \map T \omega = s} \cap \set {\omega \in \Omega : \map {X_s} \omega \in A} \in \FF_t$
and so:

$\set {\omega \in \Omega : \map {X_T} \omega \in A} \cap \set {\omega \in \Omega : \map T \omega \le t} \in \FF_t$
for all $t \in \Z_{\ge 0}$. 
We therefore have: 

$\set {\omega \in \Omega : \map {X_T} \omega \in A} \in \FF_T$
So $X_T$ is $\FF_T$-measurable.
$\blacksquare$


Sources
2014: Achim Klenke: Probability Theory (2nd ed.) ... (previous) ... (next): Lemma $9.23$




