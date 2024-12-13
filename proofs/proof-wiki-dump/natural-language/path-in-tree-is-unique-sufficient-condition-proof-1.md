# 

Source: https://proofwiki.org/wiki/Path_in_Tree_is_Unique/Sufficient_Condition/Proof_1

Theorem
Let $T$ be a graph.
Let $T$ be such that between every pair of distinct vertices of $T$ there exists exactly one path.

Then $T$ is a tree.


Proof
Let $T$ be such that between every pair of distinct vertices of $T$ there exists exactly one path.
Then a priori $T$ is connected.

Suppose $T$ had a circuit, say $\tuple {u, u_1, u_2, \ldots, u_n, v, u}$.
Then there are two paths from $u$ to $v$:

$\tuple {u, u_1, u_2, \ldots, u_n, v}$
and

$\tuple {u, v}$
Hence, by Modus Tollendo Tollens, $T$ can have no circuits.
That is, by definition, $T$ is a tree.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 2.3.4.1$: Free Trees: Theorem $\mathrm A$




