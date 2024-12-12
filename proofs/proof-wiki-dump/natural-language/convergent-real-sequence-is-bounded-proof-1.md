# 

Source: https://proofwiki.org/wiki/Convergent_Real_Sequence_is_Bounded/Proof_1

Theorem
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $l \in A$ such that $\ds \lim_{n \mathop \to \infty} x_n = l$.

Then $\sequence {x_n}$ is bounded.


Proof
From Real Number Line is Metric Space, the set $\R$ under the usual metric is a metric space.
By Convergent Sequence in Metric Space is Bounded it follows that:

$\exists M > 0: \forall n, m \in \N: \size {x_n - x_m} \le M$
Then for $n \in \N$, by the Triangle Inequality for Real Numbers:














\(\ds \size {x_n}\)

\(=\)







\(\ds \size {x_n - x_1 + x_1}\)




















\(\ds \)

\(\le\)







\(\ds \size {x_n - x_1} + \size {x_1}\)




















\(\ds \)

\(\le\)







\(\ds M + \size {x_1}\)









Hence $\sequence {x_n}$ is bounded.
$\blacksquare$


Sources




