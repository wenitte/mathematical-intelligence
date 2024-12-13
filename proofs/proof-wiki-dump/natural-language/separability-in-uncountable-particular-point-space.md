# 

Source: https://proofwiki.org/wiki/Separability_in_Uncountable_Particular_Point_Space

Theorem
Let $T = \struct {S, \tau_p}$ be an uncountable particular point space.
Let $H = S \setminus \set p$ where $\setminus$ denotes set difference.

Then $H$ is not separable.


Proof
By definition, $H$ is separable if and only if there exists a countable subset of $S$ which is everywhere dense in $T$.

Let $V \subseteq H$ where $V$ is countable.
$V$ is not open in $T$ as it does not contain $p$.
From Subset of Particular Point Space is either Open or Closed it follows that $V$ is closed.
From Closed Set Equals its Closure, $V^- = V$.
But $V^- \ne H$ as $V$ is countable and $H$ is uncountable.
So whatever $V$ is, if it is countable it is not everywhere dense.
The result follows from definition of separable.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $10$. Uncountable Particular Point Topology: $6$




