# 

Source: https://proofwiki.org/wiki/Non-Null_Cauchy_Sequence_in_Non-Archimedean_Norm_is_Eventually_Stationary



Theorem
Let $\struct {R, \norm{\,\cdot\,} }$ be a non-Archimedean normed division ring with zero $0_R$
Let $\sequence {x_n}$ be a Cauchy sequence such that $\sequence {x_n}$ does not converge to $0_R$.
Then:

$\exists N \in \N: \forall n, m \ge N: \norm {x_n} = \norm {x_m}$


Corollary
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\sequence {x_n}$ be a Cauchy sequence such that $\sequence {x_n}$ does not converge to $0$.
Then:

$\exists N \in \N: \forall n, m \ge N: \norm {x_n}_p = \norm {x_m}_p$


Proof
By Cauchy Sequence Is Eventually Bounded Away From Non-Limit then:

$\exists N_1 \in \N$ and $C \in \R_{\gt 0}: \forall n \ge N_1: \norm {x_n} \gt C$
Since $\sequence {x_n}$ is a Cauchy sequence then:

$\exists N_2 \in \N: \forall n, m \ge N_2: \norm {x_n - x_m} < C$
Let $N = \max \set {N_1, N_2}$.
Let $n, m \ge N$.
Then:

$\norm {x_n - x_m} < C < \norm {x_n}$
By Corollary to Three Points in Ultrametric Space have Two Equal Distances then:

$\norm {x_n} = \norm {x_m}$
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.2$ Completions: Lemma $3.2.10$




