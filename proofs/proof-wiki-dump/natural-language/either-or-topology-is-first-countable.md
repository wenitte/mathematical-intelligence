# 

Source: https://proofwiki.org/wiki/Either-Or_Topology_is_First-Countable

Theorem
Let $T = \struct {S, \tau}$ be the either-or space.

Then $T$ is a first-countable space.


Proof
Let $x \in S$ such that $x \ne 0$.
Then $\set x$ is open in $T$ and so on its own forms a local basis of $x$ which is (trivially) countable.

Let $x = 0$.
Let $U \in \tau$ be open in $T$ such that $x \in U$.
Then by definition of the either-or space, $U$ contains the open set $\openint {-1} 1$.
So $\openint {-1} 1$ forms a local basis of $0$ which is (trivially) countable.

Hence the result by definition of first-countable space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $17$. Either-Or Topology: $3$




