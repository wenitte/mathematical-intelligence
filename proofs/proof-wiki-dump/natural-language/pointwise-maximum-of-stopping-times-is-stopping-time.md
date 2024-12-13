# 

Source: https://proofwiki.org/wiki/Pointwise_Maximum_of_Stopping_Times_is_Stopping_Time

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \ge 0}, \Pr}$ be a filtered probability space.
Let $T$ and $S$ be stopping times with respect to $\sequence {\FF_n}_{n \ge 0}$.
Let $S \vee T$ be the pointwise maximum of $S$ and $T$.

Then $S \vee T$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.


Proof
We have, for $t \in \Z_{\ge 0}$ and $\omega \in \Omega$: 

$\map {\paren {S \vee T} } \omega \le t$ if and only if $\map S \omega \le t$ and $\map T \omega \le t$
That is: 

$\set {\omega \in \Omega : \map {\paren {S \vee T} } \omega \le t} = \set {\omega \in \Omega : \map S \omega \le t} \cap \set {\omega \in \Omega : \map T \omega \le t}$
Since $S$ and $T$ are stopping times with respect to $\sequence {\FF_n}_{n \ge 0}$, we have:

$\set {\omega \in \Omega : \map S \omega \le t} \in \FF_t$
and:

$\set {\omega \in \Omega : \map T \omega \le t} \in \FF_t$
So, since $\FF_t$ is closed under finite union, we have: 

$\set {\omega \in \Omega : \map {\paren {S \vee T} } \omega \le t} \in \FF_t$
$\blacksquare$





