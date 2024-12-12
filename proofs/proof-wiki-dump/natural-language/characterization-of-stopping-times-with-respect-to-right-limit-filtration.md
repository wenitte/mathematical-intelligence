# 

Source: https://proofwiki.org/wiki/Characterization_of_Stopping_Times_with_respect_to_Right-Limit_Filtration



Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_t}_{t \ge 0}, \Pr}$ be a continuous-time filtered probability space.
Let $T : \Omega \to \closedint 0 \infty$ be a random variable.
Let $\sequence {\GG_t}_{t \ge 0}$ be the right-limit filtration associated with $\sequence {\FF_t}_{t \ge 0}$.

The following statements are equivalent:

$(1) \quad$ $T$ is a stopping time with respect to $\sequence {\GG_t}_{t \ge 0}$
$(2) \quad$ for each $t \in \hointr 0 \infty$, we have $\set {\omega \in \Omega : \map T \omega < t} \in \FF_t$
$(3) \quad$ for each $t \in \hointr 0 \infty$, the pointwise minimum $T \wedge t$ is $\FF_t$-measurable.


Proof
$(1)$ implies $(2)$
Suppose $T$ is a stopping time with respect to $\sequence {\GG_t}_{t \ge 0}$ and let $t \in \hointr 0 \infty$.
Then, for each $n \in \N$ we have: 

$\ds \set {\omega \in \Omega : \map T \omega \le t - \frac 1 n} \in \GG_{t - \frac 1 n}$
Since by the definition of the right-limit filtration, we have: 

$\ds \GG_{t - \frac 1 n} = \bigcap_{s > t - \frac 1 n} \FF_s$
we have: 

$\GG_{t - \frac 1 n} \subseteq \FF_s$ for all $\ds s > t - \frac 1 n$
and in particular:

$\GG_{t - \frac 1 n} \subseteq \FF_t$
and hence:

$\ds \set {\omega \in \Omega : \map T \omega \le t - \frac 1 n} \in \FF_t$
Note that: 

$\ds \set {\omega \in \Omega : \map T \omega < t} = \bigcup_{n \mathop = 1}^\infty \set {\omega \in \Omega : \map T \omega \le t - \frac 1 n}$
Since $\FF_t$ is closed under countable union, we have: 

$\ds \bigcup_{n \mathop = 1}^\infty \set {\omega \in \Omega : \map T \omega \le t - \frac 1 n} \in \FF_t$
and hence:

$\set {\omega \in \Omega : \map T \omega < t} \in \FF_t$
$\Box$

$(2)$ implies $(1)$
Suppose that for each $t \in \hointr 0 \infty$, we have $\set {\omega \in \Omega : \map T \omega < t} \in \FF_t$
Let $t \in \hointr 0 \infty$ and $s > t$. 
We have: 

$\ds \set {\omega \in \Omega : \map T \omega < t + \frac 1 n} \in \FF_{t + \frac 1 n}$
Since: 

$\ds t + \frac 1 n \to t$
and the sequence is decreasing, there exists $N_t \in \N$ such that: 

$\ds t + \frac 1 n < s$
for $n \ge N_t$. 
Then, for $n \ge N_t$, we have: 

$\ds \set {\omega \in \Omega : \map T \omega < t + \frac 1 n} \in \FF_s$
since $\sequence {\FF_t}_{t \ge 0}$ is a filtration. 
Now note that: 

$\ds \set {\omega \in \Omega : \map T \omega \le t} = \bigcap_{n \mathop = N_t}^\infty \set {\omega \in \Omega : \map T \omega < t + \frac 1 n}$
Since $\FF_s$ is closed under countable intersection, we have: 

$\ds \set {\omega \in \Omega : \map T \omega \le t} \in \FF_s$ for each $s > t$.
So, by the definition of the right-limit filtration, we have: 

$\ds \set {\omega \in \Omega : \map T \omega \le t} \in \GG_t$
So $T$ is a stopping time with respect to $\sequence {\GG_t}_{t \ge 0}$.
$\Box$

$(1)$ implies $(3)$
Suppose that $T$ is a stopping time with respect to $\sequence {\GG_t}_{t \ge 0}$.
Then for each $s < t$, we have: 

$\set {\omega \in \Omega : \map T \omega \le s} \in \GG_s$
and hence:

$\set {\omega \in \Omega : \map T \omega \le s} \in \FF_t$
since $\GG_s \subseteq \FF_t$ for $s < t$.
Now note that if $\map T \omega \le s$ for $s < t$, we have: 

$\min \set {\map T \omega, t} \le s$
Conversely, if: 

$\min \set {\map T \omega, t} \le s < t$
we must have $\map T \omega \le s$. 
So, we have: 

$\set {\omega \in \Omega : \map {\paren {T \wedge t} } \omega \le s} \in \FF_t$
If $s \ge t$, then: 

$\set {\omega \in \Omega : \map {\paren {T \wedge t} } \omega \le s} = \Omega \in \FF_t$
Since $\FF_t$ is a $\sigma$-algebra.
We conclude that $T \wedge t$ is $\FF_t$-measurable.
$\Box$

$(3)$ implies $(2)$
Suppose that for each $t \in \hointr 0 \infty$, the pointwise minimum $T \wedge t$ is $\FF_t$-measurable.
Fix $t \in \hointr 0 \infty$, we want to show that: 

$\set {\omega \in \Omega : \map T \omega < t} \in \FF_t$
We have:

$\set {\omega \in \Omega : \map {\paren {T \wedge t} } \omega \le s} \in \FF_t$
for all $s \in \hointr 0 \infty$.
That is: 

$\set {\omega \in \Omega : \map T \omega \le s} \in \FF_t$
for $s < t$, so that: 

$\ds \set {\omega \in \Omega : \map T \omega \le t - \frac 1 n} \in \FF_t$
for each $n \in \N$.
Since $\FF_t$ is closed under countable union, we have:

$\ds \bigcup_{n \mathop = 1}^\infty \set {\omega \in \Omega : \map T \omega \le t - \frac 1 n} \in \FF_t$
That is: 

$\set {\omega \in \Omega : \map T \omega < t} \in \FF_t$
$\blacksquare$


Sources
2016: Jean-François Le Gall: Brownian Motion, Martingales, and Stochastic Calculus ... (previous) ... (next): Proposition $3.6$




