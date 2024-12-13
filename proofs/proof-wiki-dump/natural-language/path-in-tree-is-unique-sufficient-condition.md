# 

Source: https://proofwiki.org/wiki/Path_in_Tree_is_Unique/Sufficient_Condition

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
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 4.1$: The Minimal Connector Problem: An Introduction to Trees: Problem $4$




