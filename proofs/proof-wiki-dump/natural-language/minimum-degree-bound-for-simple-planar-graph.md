# 

Source: https://proofwiki.org/wiki/Minimum_Degree_Bound_for_Simple_Planar_Graph

Theorem
Let $G$ be a simple connected planar graph.
Then: 

$\map \delta G \le 5$
where $\map \delta G$ denotes the minimum degree of vertices of $G$.


Proof
Aiming for a contradiction, suppose $G$ is a simple connected planar graph with $\map \delta G \ge 6$. 

Let $m$ and $n$ denote the number of edges and vertices respectively in $G$. 
Then by the Handshake Lemma: 














\(\ds 2 m\)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \map {\deg_G} {v_i}\)




















\(\ds \)

\(\ge\)







\(\ds \sum_{i \mathop = 0}^n 6\)




















\(\ds \)

\(=\)







\(\ds 6 n\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(\ge\)







\(\ds 3 n\)









This contradicts the Linear Bound Lemma:

$m \le 3 n - 6$

Hence $\map \delta G \le 5$.
$\blacksquare$





