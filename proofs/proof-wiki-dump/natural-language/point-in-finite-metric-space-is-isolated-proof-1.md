# 

Source: https://proofwiki.org/wiki/Point_in_Finite_Metric_Space_is_Isolated/Proof_1

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $X \subseteq A$ such that $X$ is finite.
Let $x \in X$.

Then $x$ is isolated in $X$.


Proof
As $X$ is finite, its elements can be placed in one-to-one correspondence with the elements of $\N^*_n$ for some $n \in \N$.
So let $X = \left\{{x_1, x_2, \ldots, x_n}\right\}$.
Now let $\epsilon := \min \left\{{\forall i, j \in \N^*_n: i \ne j: d \left({x_i, x_j}\right)}\right\}$.
That is, $\epsilon$ is the minimum distance between any two elements of $X$.
We have that $\epsilon > 0$ from the definition of metric.
Let $N_\epsilon \left({x_k}\right)$ be the open $\epsilon$-ball of any $x_k \in X$.
By the method of construction of $\epsilon$, it is clear that $N_\epsilon \left({x_k}\right) = \left\{{x_k}\right\}$.
Hence $x_k$ is an isolated point.
$\blacksquare$





