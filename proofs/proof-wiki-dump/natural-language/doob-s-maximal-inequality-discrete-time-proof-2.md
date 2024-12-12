# 

Source: https://proofwiki.org/wiki/Doob%27s_Maximal_Inequality/Discrete_Time/Proof_2

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_n}_{n \mathop \ge 0}, \Pr}$ be a filtered probability space.
Let $\sequence {X_n}_{n \mathop \ge 0}$ be a non-negative $\sequence {\FF_n}_{n \mathop \ge 0}$-submartingale.
Let:

$\ds X_n^\ast = \max_{0 \mathop \le k \mathop \le n} X_k$
where $\max$ is the pointwise maximum. 
Let $\lambda > 0$.

Then:

$\lambda \map \Pr {X_n^\ast \ge \lambda} \le \expect {X_n}$


Proof
Let $\lambda > 0 $ and $n \ge 0$.
Let:

$E := \set {X^\ast _n \ge \lambda}$.
That is, $E$ is a disjoint union:

$(1):\quad \ds E = \bigsqcup _{0 \mathop \le k \mathop \le n} E_k$
where:

$\ds E_k := \set {X_k \ge \lambda} \cap \bigcap _{0 \mathop \le j \mathop \le k-1} \set {X_j < \lambda}$
By construction, we have:

$\forall k \in \set {0, \ldots, n} : E_k \in \FF_k$
In particular:














\(\ds \expect {X_n \chi_{E_k} \mid \FF_k }\)

\(=\)







\(\ds \expect {X_n \mid \FF_k } \chi_{E_k}\)





Rule for Extracting Random Variable from Conditional Expectation of Product




\(\text {(2)}: \quad\)









\(\ds \)

\(\ge\)







\(\ds X_k \chi_{E_k}\)





Definition of Submartingale



where $\chi_A$ denotes the characteristic function of $A \subseteq \Omega$.
Therefore:














\(\ds \expect {X_n}\)

\(\ge\)







\(\ds \expect {X_n \chi_E}\)





as $X_n \ge 0$














\(\ds \)

\(=\)







\(\ds \sum_{0 \mathop \le k \mathop \le n} \expect {X_n \chi_{E_k} }\)





by $(1)$














\(\ds \)

\(=\)







\(\ds \sum_{0 \mathop \le k \mathop \le n} \expect { \expect {X_n \chi_{E_k} \mid \FF_k } }\)





Tower Property of Conditional Expectation














\(\ds \)

\(\ge\)







\(\ds \sum_{0 \mathop \le k \mathop \le n} \expect { X_k \chi_{E_k} }\)





by $(2)$














\(\ds \)

\(\ge\)







\(\ds \sum_{0 \mathop \le k \mathop \le n} \expect { \lambda \chi_{E_k} }\)





as $X_k \ge \lambda$ on $E_k$














\(\ds \)

\(=\)







\(\ds \lambda \sum_{0 \mathop \le k \mathop \le n} \expect {\chi_{E_k} }\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds \lambda \sum_{0 \mathop \le k \mathop \le n} \map \Pr {E_k}\)





Integral of Characteristic Function














\(\ds \)

\(=\)







\(\ds \lambda \map \Pr E\)





by $(1)$



$\blacksquare$





