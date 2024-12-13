# 

Source: https://proofwiki.org/wiki/Least_Time_at_which_Discrete-Time_Adapted_Stochastic_Process_equals_or_exceeds_Real_Number_is_Stopping_Time

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \ge 0}, \Pr}$ be a filtered probability space.
Let $\sequence {X_n}_{n \ge 0}$ be a discrete-time $\sequence {\FF_n}_{n \ge 0}$-adapted stochastic process.
Let $\lambda \in \R$. 
Let:

$T = \inf \set {n \in \Z_{\ge 0} : X_n \ge \lambda}$

Then $T$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$. 


Proof
Note that for $t \in \Z_{\ge 0}$ and $\omega \in \Omega$, we have: 

$\inf \set {n \in \Z_{\ge 0} : \map {X_n} \omega \ge \lambda} \le t$
if and only if:

$\map {X_s} \omega \ge \lambda$ for some $s \le t$.
That is, we have: 

$\ds \set {\omega \in \Omega : \inf \set {n \in \Z_{\ge 0} : \map {X_n} \omega \ge \lambda} \le t} = \bigcup_{s \in \Z_{\ge 0}, \, 0 \le s \le t} \set {\omega \in \Omega : \map {X_s} \omega \ge \lambda}$
Since $\sequence {X_n}_{n \ge 0}$ is $\sequence {\FF_n}_{n \ge 0}$-adapted, we have:

$\set {\omega \in \Omega : \map {X_s} \omega \ge \lambda} \in \FF_s$ for each $0 \le s \le t$.
Since $\sequence {\FF_n}_{n \ge 0}$ is a filtration, we have: 

$\FF_s \subseteq \FF_t$
So:

$\set {\omega \in \Omega : \map {X_s} \omega \ge \lambda} \in \FF_t$ for each $s \in \Z_{\ge 0}$ with $0 \le s \le t$.
So since $\FF_t$ is closed under finite union, we conclude:

$\set {\omega \in \Omega : \inf \set {n \in \Z_{\ge 0} : \map {X_n} \omega \ge \lambda} \le t} \in \FF_t$
for each $t \in \Z_{\ge 0}$.
So $T$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.
$\blacksquare$





