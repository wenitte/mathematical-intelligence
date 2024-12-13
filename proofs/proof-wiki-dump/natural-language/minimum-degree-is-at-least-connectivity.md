# 

Source: https://proofwiki.org/wiki/Minimum_Degree_is_at_Least_Connectivity


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $G = \struct {V, E}$ be a simple graph.
Then:

$\map \delta G \ge \map \kappa G$
That is, the minimum degree of $G$ is at least its connectivity.


Proof
Pick a vertex $v \in G$ with $\map {\deg_G} v = \map \delta G$, that is, a vertex with minimum degree.
Recall that $\map {\Gamma_G} v$ is the neighborhood of $v$ in $G$.

Suppose that $V = \map {\Gamma_G} v \cup \set v$.
That is, that $v$ is adjacent to all other vertices of $G$.
Then:

$\card V = \card {\map {\Gamma_G} v} + 1 = \map \delta G + 1$
By definition, $\map \kappa G < \card V$, so $\map \kappa G \le \map \delta G$.

Otherwise, there is at least one vertex of $G$ not adjacent to $v$.
So, deleting $\map {\Gamma_G} v$ from $G$ leaves $v$ isolated.
Thus $\map {\Gamma_G} v$ is a vertex cut of size $\map \delta G$. 
Since $G$ has a vertex cut of size $\map \delta G$, it follows that $\map \kappa G \le \map \delta G$.
$\blacksquare$


Notes
This bound is not necessarily tight:


In this example, the minimum degree of the graph is $2$, yet $C$ is a cut-vertex and so this graph has connectivity $1$.





