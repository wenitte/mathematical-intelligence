# 

Source: https://proofwiki.org/wiki/Condition_for_Edge_to_be_Bridge



Theorem
Let $G = \struct {V, E}$ be a connected graph.
Let $e \in E$ be an edge of $G$.

Then $e$ is a bridge if and only if $e$ does not lie on any circuit of $G$.


Proof
Let $G - e$ denote the edge deletion of $e$ from $G$.


Necessary Condition
We use a Proof by Contraposition.
To that end, suppose $e = u v$ such that $e$ lies on a circuit, say:

$C = \tuple {u, v, w, \ldots, x, u}$
Thus $G - e$ contains a $u - v$ path, that is, $\tuple {v, x, \ldots, w, u}$.
So $u$ is connected to $v$ in $G - e$.

Now we need to show that $G - e$ is connected.

Let $u_1, v_1 \in V$.
Since $G$ is connected, there is a $u_1 - v_1$ path $P$ in $G$.
If $e \notin P$, then $P$ is also a path in $G - e$ and $u_1$ is connected to $v_1$ in $G - e$.

On the other hand, suppose $e \notin P$.
Then $P$ can be expressed as $\tuple {u_1, \ldots, u, v, \ldots, v_1}$ or $\tuple {u_1, \ldots, v, u, \ldots, v_1}$.
In the first case, $u_1$ is connected to $u$ and $v$ is connected to $v_1$ in $G - e$.
In the second case, $u_1$ is connected to $v$ and $u$ is connected to $v_1$ in $G - e$.
But we have already established that $u$ is connected to $v$ in $G - e$.
From Graph Connectedness is Equivalence Relation it follows that $u_1$ is connected to $v_1$.

So, if $e$ lies on a circuit, then $G - e$ is connected.
Therefore $e$ is not a bridge.
From Rule of Transposition it follows that if $e$ is a bridge, it does not lie on a circuit.
$\Box$


Sufficient Condition
We use a Proof by Contraposition.
To that end, suppose $e = u v$ is not a bridge.
Then $G - e$ is connected, and thus there is a $u-v$ path $P$ in $G - e$.
But $P$ together with $e = u v$ produces a circuit containing $e$.
Thus $e$ lies on a circuit of $G$.
From Rule of Transposition it follows that if $e$ does not lie on a circuit, it is a bridge.
$\blacksquare$


Also presented as
This result is usually given that:

$e$ is a bridge if and only if $e$ does not lie on any cycle of $G$.
As a cycle is by definition a circuit, the result as given in this entry is slightly stronger.


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 2.4$: Cut-Vertices and Bridges: Theorem $2.5$




