# 

Source: https://proofwiki.org/wiki/Ore_Graph_is_Connected

Theorem
Let $G = \struct {V, E}$ be an Ore graph.
Then $G$ is connected.


Proof
Let $G$ be an Ore graph of order $n$.
Aiming for a contradiction, suppose $G$ is not connected.
Then it has at least two components.
Call these components $C_1$ and $C_2$.
Thus, there exist non-adjacent vertices $u$ and $v$ such that $u$ is in $C_1$ and $v$ is in $C_2$.
Let $m_1$ and $m_2$ be the number of vertices in $C_1$ and $C_2$ respectively.
It is clear that:

$m_1 + m_2 \le n$
By definition of Ore graph, $G$ is simple.
Thus it follows that:

$\map {\deg_G} u \le m_1 - 1$ and $\map {\deg_G} v \le m_2 - 1$
Thus:














\(\ds \map {\deg_G} u + \map {\deg_G} v\)

\(\le\)







\(\ds m_1 - 1 + m_2 - 1\)




















\(\ds \)

\(=\)







\(\ds m_1 + m_2 - 2\)




















\(\ds \)

\(<\)







\(\ds m_1 + m_2\)




















\(\ds \)

\(\le\)







\(\ds n\)









That is:

$\map {\deg_G} u + \map {\deg_G} v < n$
But by definition of Ore graph:

$\map {\deg_G} u + \map {\deg_G} v \ge n$
By Proof by Contradiction, it follows that our assumption that $G$ is not connected was false.
Hence the result.
$\blacksquare$


Also see
Ore's Theorem




