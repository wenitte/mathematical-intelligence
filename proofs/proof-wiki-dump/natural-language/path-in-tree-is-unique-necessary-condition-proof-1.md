# 

Source: https://proofwiki.org/wiki/Path_in_Tree_is_Unique/Necessary_Condition/Proof_1

Theorem
Let $T$ be a tree.
Let $u$ and $v$ be distinct vertices of $T$.
Then there is exactly one path between $u$ and $v$.


Proof
Let $T$ be a tree.
Aiming for a contradiction, suppose there exists a pair of distinct vertices $u$ and $v$ in $T$ such that there is not exactly one path between them.
If there is no path between $u$ and $v$, $T$ is not connected.
In this case, $T$ is certainly not a tree.

So, in keeping with our supposition, there is more than one path between $u$ and $v$.
Let two of these paths be:

$P_1 = \tuple {u, u_1, \ldots, u_i, r_1, r_2, \ldots, r_{j - 1}, r_j, u_{i + 1}, \ldots, v}$
$P_2 = \tuple {u, u_1, \ldots, u_i, s_1, s_2, \ldots, s_{k - 1}, s_k, u_{i + 1}, \ldots, v}$
Now consider the path:

$P_3 = \tuple {u_i, r_1, r_2, \ldots, r_{j - 1}, r_j, u_{i + 1}, s_k, s_{k - 1}, \ldots, s_2, s_1, u_i}$
It can be seen that $P_3$ is a circuit.
Thus by definition $T$ can not be a tree.
From Proof by Contradiction it follows that there is exactly one path between any pair of vertices.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 4.1$: The Minimal Connector Problem: An Introduction to Trees: Theorem $4.1$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 2.3.4.1$: Free Trees: Theorem $\mathrm A$




