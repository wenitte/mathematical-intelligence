# 

Source: https://proofwiki.org/wiki/Modified_Fort_Space_is_not_T2

Theorem
Let $T = \struct {S, \tau_{a, b} }$ be a modified Fort space.

Then $T$ is not a $T_2$ (Hausdorff) space.


Proof
Consider $U, V \in \tau_{a, b}$ such that $a \in U, b \in V$.
We have that both $U$ and $V$ are cofinite.
So $U$ and $V$ must be infinite.
Suppose $U \cap V = \O$.
Then from Intersection with Complement is Empty iff Subset it follows that $U \subseteq \relcomp S V$ and so $U$ is finite.
But this contradicts the fact that $U$ is infinite.
So $U \cap V \ne \O$.
Hence the result by definition of $T_2$ (Hausdorff) space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $27$. Modified Fort Space: $3$




