# 

Source: https://proofwiki.org/wiki/Same_Degrees_of_Vertices_does_not_imply_Graph_Isomorphism



Theorem
Let $G = \struct {\map V G, \map E G}$ and $H = \struct {\map V H, \map E H}$ be graphs such that:

$\card {\map V G} = \card {\map V H}$
where $\card {\map V G}$ denotes the order of $G$.

Let $\phi: G \to H$ be a mapping which preserves the degrees of the vertices:

$\forall v \in \map V G: \map {\deg_H} {\map \phi v} = \map {\deg_G} v$

Then it is not necessarily the case that $\phi$ is an isomorphism.


Proof
Proof by Counterexample:


Consider a bijection $\phi: \map V {G_1} \to \map V {G_2}$, where $G_1$ is the graph on the left and $G_2$ is the graph on the right.
The vertices $v_1$, $v_2$ and $v_5$ of $G_2$ are each adjacent to both of the others.
Because $\phi$ is a bijection, it must map $3$ vertices of $G_1$ to $v_1$, $v_2$ and $v_5$.
For $\phi$ to be an isomorphism, two of the vertices of $G_1$ are adjacent if and only if the two image vertices in $G_2$ udner $\phi$ are also adjacent.
So the $3$ vertices of $G_1$ which map to $v_1$, $v_2$ and $v_5$ of $G_2$ must also each be adjacent to both of the others.
But $G_1$ does not contain $3$ such vertices.
It follows that there is no such isomorphism from $\map V {G_1}$ to $\map V {G_2}$.
That is, $G_1$ and $G_2$ are not isomorphic.
$\blacksquare$


Also see
Vertex Condition for Isomorphic Graphs, where it is shown that if $\phi$ is an isomorphism then the degrees of the vertices are preserved.


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Chapter $2$: Elementary Concepts of Graph Theory: $\S 2.2$: Isomorphic Graphs




