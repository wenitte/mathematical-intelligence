# 

Source: https://proofwiki.org/wiki/Event_of_Stopping_Time_Equal_to_Infinity_is_Measurable_in_Limit_of_Filtration/Continuous_Time

Theorem
Let $\struct {X, \Sigma}$ be a measurable space. 
Let $\sequence {\FF_t}_{t \ge 0}$ be a continuous-time filtration of $\Sigma$.
Let $T$ be a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.
Let $\FF_\infty$ be the limit of the filtration $\sequence {\FF_t}_{t \ge 0}$.

Then:

$\set {\omega \in \Omega : \map T \omega = \infty} \in \FF_\infty$


Proof
Note that we have $\map T \omega < \infty$ if and only if $\map T \omega \le N$ for some $N \in \N$. 
So, we have: 

$\ds \set {\omega \in \Omega : \map T \omega < \infty} = \bigcup_{N \in \N} \set {\omega \in \Omega : \map T \omega \le N}$
Since $T$ is a stopping time, we have: 

$\set {\omega \in \Omega : \map T \omega \le N} \in \FF_N$
For each $N \in \N$, we have: 

$\ds \FF_N \subseteq \bigcup_{t \in \hointl 0 \infty} \FF_t$
from Set is Subset of Union, so that:

$\FF_N \subseteq \FF_\infty$
from the definition of the $\sigma$-algebra generated by collection of subsets.
Now, since $\sigma$-algebras are closed under countable union, we have:

$\ds \bigcup_{N \in \N} \set {\omega \in \Omega : \map T \omega \le N} \in \FF_\infty$
So:

$\set {\omega \in \Omega : \map T \omega < \infty} \in \FF_\infty$
Then since $\FF_\infty$ is closed under relative complement, we have: 

$\set {\omega \in \Omega : \map T \omega = \infty} \in \FF_\infty$
$\blacksquare$


Sources
2016: Jean-François Le Gall: Brownian Motion, Martingales, and Stochastic Calculus ... (previous) ... (next): $3.2$: Stopping Times and Associated $\sigma$-Fields



