# 

Source: https://proofwiki.org/wiki/Discrete_Space_is_Complete_Metric_Space

Theorem
Let $T = \struct {S, \tau}$ be a discrete topological space.
Then $T$ is a complete metric space.


Proof
Let $d: S \times S \to \R$ be the standard discrete metric.
From Standard Discrete Metric induces Discrete Topology we have that $\struct {S, d}$ is a metric space whose induced topology is $\tau$.
Consider now a Cauchy sequence $\sequence {x_n}_{n \mathop \in \N}$ in $S$.
By the definition of Cauchy sequence:

$\forall \epsilon > 0: \exists N \in \N$ such that $\forall n, m > N: \map d {x_n, x_m} < \epsilon$
Take $\epsilon = \dfrac 1 2$.
Then:

$\exists N \in \N: \forall n, m > N: \map d {x_n, x_m} < \epsilon = \dfrac 1 2$
From the definition of standard discrete metric:

$\exists N \in \N: \forall n, m > N: \map d {x_n, x_m} = 0 \implies x_n = x_m$
Thus the sequence $\sequence {x_n}_{n \mathop \in \N}$ is constant from some $N \in \N$.
From Eventually Constant Sequence is Convergent:

$x_n \to x \in S$
Thus every Cauchy sequence in $S$ converges.
The result follows by definition of complete metric space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $1 \text { - } 3$. Discrete Topology: $9$




