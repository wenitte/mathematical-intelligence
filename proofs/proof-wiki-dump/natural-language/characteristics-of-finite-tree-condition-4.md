# 

Source: https://proofwiki.org/wiki/Characteristics_of_Finite_Tree/Condition_4



Theorem
Let $T$ be a finite simple graph of order $n$.
Then:

$T$ is a finite tree if and only if $T$ has no circuits, but adding one edge creates a cycle.


Proof
Sufficient Condition
Let $T = \struct {V, E}$ be a finite tree.
Then by definition $T$ is connected and has no circuits.
Let $u, v \in V$ be any two vertices of $T$.
Let $P = \tuple {u, u_1, u_2, \ldots, u_{n - 1}, v}$ be a path from $u$ to $v$.
Let a new edges $\set {u, v}$ be added.
Then $\tuple {u, u_1, u_2, \ldots, u_{n - 1}, v, u}$ is now a cycle, which is by definition also a circuit, in $T$.
Note that this applies even when $P = \tuple {u, v}$: $\tuple {u, v, u}$ is still a cycle in $T$, but now $T$ is a multigraph.
$\Box$


Necessary Condition
Suppose $T$ has no circuits, but adding one edge creates a cycle, which is by definition also a circuit.
If $T$ were disconnected, then it would be possible to add an edge $e$ to connect two components of $T$.
By definition, $e$ would be a bridge.
From Condition for Edge to be Bridge, it follows that $e$ does not lie on a circuit.
So, if the only way to add an edge to $T$ forms a cycle, it follows that $T$ must be connected.
So $T$ is connected and has no circuits.
Hence by definition $T$ is a tree.
Then as $T$ is a finite by hypothesis, $T$ is a finite tree.
$\blacksquare$





