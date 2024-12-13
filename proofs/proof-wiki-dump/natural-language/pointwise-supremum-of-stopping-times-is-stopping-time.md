# 

Source: https://proofwiki.org/wiki/Pointwise_Supremum_of_Stopping_Times_is_Stopping_Time

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \ge 0}, \Pr}$ be a filtered probability space.
Let $\sequence {T_n}_{n \in \N}$ be a sequence of stopping times with respect to $\sequence {\FF_n}_{n \ge 0}$.
Let:

$\ds T = \sup_{n \in \N} T_n$
be the pointwise supremum of the $\sequence {T_n}_{n \in \N}$.

Then $T$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.


Proof
We have, for $t \in \Z_{\ge 0}$ and $\omega \in \Omega$: 

$\map T \omega \le t$ if and only if $\map {T_n} \omega \le t$ for all $n \in \N$.
That is: 

$\ds \set {\omega \in \Omega : \map T \omega \le t} = \bigcap_{n \in \N} \set {\omega \in \Omega : \map {T_n} \omega \le t}$
for each $t \in \Z_{\ge 0}$.
Now fix $t \in \Z_{\ge 0}$. 
Since each $T_n$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$, we have: 

$\set {\omega \in \Omega : \map {T_n} \omega \le t} \in \FF_t$
for each $n \in \N$.
Then, since $\FF_t$ is a $\sigma$-algebra and $\sigma$-algebras are closed under countable intersection, we have: 

$\ds \set {\omega \in \Omega : \map T \omega \le t} \in \FF_t$
So $T$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.
$\blacksquare$





