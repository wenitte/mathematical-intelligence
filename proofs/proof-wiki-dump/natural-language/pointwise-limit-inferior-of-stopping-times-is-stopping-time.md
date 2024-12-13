# 

Source: https://proofwiki.org/wiki/Pointwise_Limit_Inferior_of_Stopping_Times_is_Stopping_Time

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \ge 0}, \Pr}$ be a filtered probability space.
Let $\sequence {T_n}_{n \in \N}$ be a sequence of stopping times with respect to $\sequence {\FF_n}_{n \ge 0}$.
Let:

$\ds T = \liminf_{n \mathop \to \infty} T_n$
be the pointwise limit inferior of the $\sequence {T_n}_{n \in \N}$.

Then $T$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.


Proof
From the definition of the limit inferior we have:

$\ds \liminf_{n \mathop \to \infty} T_n = \sup_{n \in \N} \paren {\inf_{m \ge n} T_m}$
Writing:

$\ds \inf_{m \ge n} T_m = \inf_{m \in \N} T_{m + n - 1}$
From Pointwise Infimum of Stopping Times is Stopping Time, we have:

$\ds \inf_{m \ge n} T_m$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.
Then, from Pointwise Supremum of Stopping Times is Stopping Time:

$\ds \sup_{n \in \N} \paren {\inf_{m \ge n} T_m}$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.
That is:

$T$ is a stopping time with respect to $\sequence {\FF_n}_{n \ge 0}$.
$\blacksquare$





