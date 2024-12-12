# 

Source: https://proofwiki.org/wiki/Countable_Discrete_Space_is_not_Weakly_Countably_Compact

Theorem
Let $T = \struct {S, \tau}$ be a countable discrete space.
Then $T$ is not weakly countably compact.


Proof
Let $A \subseteq S$ be an infinite subset of $S$.
Then as Set in Discrete Topology is Clopen, $A$ is closed in $T$.
From Closed Set Equals its Closure, $A = A^-$ where $A^-$ is the closure of $A$.
From the definition, $x$ is a limit point of $A$ if it belongs to the closure of $A$ but is not an isolated point of $A$.
But then we have Topological Space is Discrete iff All Points are Isolated.
So $A$ has no limit points in $T$.
So $T$ is not weakly countably compact.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $5 \text { - } 7$. Partition Topology: $4$




