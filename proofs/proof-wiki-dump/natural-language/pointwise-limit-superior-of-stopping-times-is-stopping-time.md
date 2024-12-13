# 

Source: https://proofwiki.org/wiki/Pointwise_Limit_Superior_of_Stopping_Times_is_Stopping_Time

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \ge 0}, \Pr}$ be a filtered probability space.
Let $\sequence {T_n}_{n \in \N}$ be a sequence of stopping times with respect to $\sequence {\FF_n}_{n \ge 0}$.
Let:

$\ds T = \limsup_{n \mathop \to \infty} T_n$
be the pointwise limit superior of the $\sequence {T_n}_{n \in \N}$.

Then $T$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.


Proof
From the definition of the limit superior we have:

$\ds \limsup_{n \mathop \to \infty} T_n = \inf_{n \in \N} \paren {\sup_{m \ge n} T_m}$
Writing:

$\ds \sup_{m \ge n} T_m = \sup_{m \in \N} T_{m + n - 1}$
From Pointwise Supremum of Stopping Times is Stopping Time, we have:

$\ds \sup_{m \ge n} T_m$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.
Then, from Pointwise Infimum of Stopping Times is Stopping Time:

$\ds \inf_{n \in \N} \paren {\sup_{m \ge n} T_m}$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.
That is:

$T$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.
$\blacksquare$





