# 

Source: https://proofwiki.org/wiki/Clopen_Sets_in_Modified_Fort_Space

Theorem
Let $T = \struct {S, \tau_{a, b} }$ be a modified Fort space.
Let $A \subseteq S$ be both closed and open in $T$.

If $a \in A$, then $b \in A$ as well.

That is, any clopen set of $T$ must contain both or neither of $a$ and $b$.


Proof
Let $A$ be both closed and open in $T$.
Let $S = A \mid B$ be a separation of $S$ into the open sets $A$ and $B$.
Then by definition $B$ is also both closed and open in $T$.

Let $a \in A$.
Suppose $b \in B$.
As $A$ is open it must contain all but a finite number of points of $S$.
Thus $A$ must itself be infinite.
But then $B$ can not be open, as $b \in B$ and there is more than a finite number of points in $A$.
So if $a \in A$ then $b \in A$ as well.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $27$. Modified Fort Space: $5$




