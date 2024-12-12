# 

Source: https://proofwiki.org/wiki/Constant_Function_is_Stopping_Time

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \ge 0}, \Pr}$ be a filtered probability space.
Let $T_\ast$ be an extended natural number.
Define $T : \Omega \to \Z_{\ge 0} \cup \set \infty$ by: 

$\map T \omega = T_\ast$
for each $\omega \in \Omega$.

Then $T$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.


Proof
First, if $T_\ast = \infty$, we have: 

$\set {\omega \in \Omega : \map T \omega \le t} = \O$
for all $t \in \Z_{\ge 0}$.
Since each $\FF_t$ is a $\sigma$-algebra we therefore have: 

$\set {\omega \in \Omega : \map T \omega \le t} \in \FF_t$
for all $t \in \Z_{\ge 0}$ in the case $T_\ast = \infty$. 
Now let $T_\ast < \infty$.
For $t < T_\ast$, we have: 

$\set {\omega \in \Omega : \map T \omega \le t} = \O$
and so:

$\set {\omega \in \Omega : \map T \omega \le t} \in \FF_t$
for all $t \in \Z_{\ge 0}$ again. 
For $t \ge T_\ast$, we have:

$\set {\omega \in \Omega : \map T \omega \le t} = \Omega$
Since each $\FF_t$ is a $\sigma$-algebra we therefore have: 

$\set {\omega \in \Omega : \map T \omega \le t} \in \FF_t$
for all $t \in \Z_{\ge 0}$.
So $T$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.
$\blacksquare$





