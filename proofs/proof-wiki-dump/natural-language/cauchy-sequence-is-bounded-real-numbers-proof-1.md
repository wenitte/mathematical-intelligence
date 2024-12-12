# 

Source: https://proofwiki.org/wiki/Cauchy_Sequence_is_Bounded/Real_Numbers/Proof_1

Theorem
Every Cauchy sequence in $\R$ is bounded.


Proof
Let $\sequence {a_n}$ be a Cauchy sequence in $\R$.
Then there exists $N \in \N$ such that:

$\size {a_m - a_n} < 1$
for all $m, n \ge N$.

In particular, by the Triangle Inequality, for all $m \ge N$:














\(\ds \size {a_m}\)

\(=\)







\(\ds \size {a_N + a_m - a_N}\)




















\(\ds \)

\(\le\)







\(\ds \size {a_N} + \size {a_m - a_N}\)




















\(\ds \)

\(\le\)







\(\ds \size {a_N} + 1\)









So $\sequence {a_n}$ is bounded, as claimed.
$\blacksquare$





