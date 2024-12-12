# 

Source: https://proofwiki.org/wiki/Graph_Connectedness_is_Equivalence_Relation



Theorem
Let $G = \struct {V, E}$ be a graph.
Let $\to$ denote the relation is connected to on the set $V$.

Then $\to$ is an equivalence relation.


Proof
Let $u, v, w$ be arbitrary vertices of a graph $G$.

Checking in turn each of the criteria for equivalence:


Reflexive
By definition, all vertices are connected to themselves.
Hence $\to$ is reflexive.


Symmetric
Suppose $u \to v$.
By definition there exists a walk $W$ between $u$ and $v$.
Note that there is nothing in the definition of connectedness to insist that the walk has to be in a particular direction.
So by definition, if $u \to v$ then $v \to u$.
Hence $\to$ is symmetric.


Transitive
Suppose $u \to v$ and $v \to w$.
Let:

$W_1 = \tuple {u, u_1, u_2, \ldots, u_{k - 1}, u_k, v}$ be a walk from $u$ to $v$
$W_2 = \tuple {v, v_1, v_2, \ldots, v_{k - 1}, v_k, w}$ be a walk from $v$ to $w$.
Then $W = \tuple {u, u_1, u_2, \ldots, u_{k - 1}, u_k, v, v_1, v_2, \ldots, v_{k - 1}, v_k, w}$ is a walk from $u$ to $w$.
Hence $u \to w$, and so $\to$ is transitive.

Thus is connected to is an equivalence relation.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 2.3$: Connected Graphs: Problem $44$




