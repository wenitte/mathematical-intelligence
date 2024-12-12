# 

Source: https://proofwiki.org/wiki/Convergent_Real_Sequence_is_Bounded



Theorem
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $l \in A$ such that $\ds \lim_{n \mathop \to \infty} x_n = l$.

Then $\sequence {x_n}$ is bounded.

That is, all convergent real sequences are bounded.


Proof 1
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


Proof 2
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $x_n \to l$ as $n \to \infty$.
To show that $\sequence {x_n}$ is bounded sequence, we need to find $K$ such that:

$\forall n \in \N: \size {x_n} \le K$
Because $\sequence {x_n}$ converges:

$\forall \epsilon > 0: \exists N: n > N \implies \size {x_n - l} < \epsilon$
In particular, this is true when $\epsilon = 1$.
That is:

$\exists N_1: \forall n > N_1: \size {x_n - l} < 1$
By Backwards Form of Triangle Inequality:

$\forall n > N_1: \size {x_n} - \size l \le \size {x_n - l} < 1$
That is:

$\size {x_n} < \size l + 1$
So we set:

$K = \max \set {\size {x_1}, \size {x_2}, \ldots, \size {x_{N_1} }, \size l + 1}$
and the result follows.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits: Exercise $4$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Check whether this citation belongs with the real, complex or metric space version of this.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1953: Walter Rudin: Principles of Mathematical Analysis: $3.2 \, \text{c}$




