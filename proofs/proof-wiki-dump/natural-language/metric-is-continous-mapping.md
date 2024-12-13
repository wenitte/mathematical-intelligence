# 

Source: https://proofwiki.org/wiki/Metric_is_Continous_Mapping

Theorem
Let $M = \struct {A, d}$ be a metric space.
Consider the distance function:

$d: A \times A \to \R$
Then $\R$ is a continuous function.


Proof
Let $\epsilon > 0$.
Let $\tuple {x_1, x_2} \in A \times A$.
Let $\delta = \dfrac \epsilon 2$.
Then $U = \map {B_\delta} {x_1} \times \map {B_\delta} {x_2}$ is a neighborhood of $\tuple {x_1, x_2}$ in $X \times X$ such that:

$d \sqbrk U \subseteq \openint {\map d {x_1, x_2} - \epsilon} {\map d {x_1, x_2} + \epsilon}$
Therefore $d: X \times X \to \mathbb R$ is a continuous function.
$\blacksquare$





