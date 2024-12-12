# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Stopping_Time_in_Discrete_Time



Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \ge 0}, \Pr}$ be a filtered probability space.
Let $T : \Omega \to \Z_{\ge 0} \cup \set {\infty}$ be a function.

The following definitions of the concept of Stopping Time are equivalent:

Definition 1
We say that $T$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$ if and only if:

$\set {\omega \in \Omega : \map T \omega \le t} \in \FF_t$
for all $t \in \Z_{\ge 0}$. 


Definition 2
We say that $T$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$ if and only if:

$\set {\omega \in \Omega : \map T \omega = t} \in \FF_t$
for all $t \in \Z_{\ge 0}$. 


Proof
Definition 1 implies Definition 2
Suppose that:

$\set {\omega \in \Omega : \map T \omega \le t} \in \FF_t$
for all $t \in \Z_{\ge 0}$.
Setting $t = 0$ this certainly implies:

$\set {\omega \in \Omega : \map T \omega = t} \in \FF_t$
Now take $t \ge 1$ a positive integer.
We have: 

$\set {\omega \in \Omega : \map T \omega = t} = \set {\omega \in \Omega : \map T \omega \le t} \setminus \set {\omega \in \Omega : \map T \omega \le t - 1}$
with:

$\set {\omega \in \Omega : \map T \omega \le t} \in \FF_t$
and:

$\set {\omega \in \Omega : \map T \omega \le t - 1} \in \FF_{t - 1}$
Since $\sequence {\FF_n}_{n \ge 0}$ is a filtration, we have:

$\FF_{t - 1} \subseteq \FF_t$
and so:

$\set {\omega \in \Omega : \map T \omega \le t - 1} \in \FF_t$
So from Sigma-Algebra Closed under Set Difference, we have:

$\set {\omega \in \Omega : \map T \omega = t} \in \FF_t$
$\Box$

Definition 2 implies Definition 1
Suppose that:

$\set {\omega \in \Omega : \map T \omega = t} \in \FF_t$
for all $t \in \Z_{\ge 0}$.
We can write: 

$\ds \set {\omega \in \Omega : \map T \omega \le t} = \bigcup_{0 \le s \le t, \, t \in \Z} \set {\omega \in \Omega : \map T \omega = s}$
We have from hypothesis:

$\set {\omega \in \Omega : \map T \omega = s} \in \FF_s$
for $0 \le s \le t$. 
Since $\sequence {\FF_n}_{n \ge 0}$ is a filtration, we have:

$\set {\omega \in \Omega : \map T \omega = s} \in \FF_t$
for $0 \le s \le t$. 
Since $\sigma$-algebras are closed under finite union, we have: 

$\set {\omega \in \Omega : \map T \omega \le t} \in \FF_t$
$\blacksquare$





