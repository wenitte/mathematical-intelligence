# 

Source: https://proofwiki.org/wiki/Continuous_Linear_Transformation_between_Topological_Vector_Spaces_is_Bounded

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ and $Y$ be topological vector spaces over $\GF$. 
Let $T : X \to Y$ be a continuous linear transformation.

Then $T$ is bounded.


Proof
Let $E$ be a von Neumann-bounded subset of $X$. 
We want to show that $T \sqbrk E$ is a von Neumann-bounded subset of $Y$. 
Let $W$ be a open neighborhood of ${\mathbf 0}_Y$ in $Y$.
Since $T$ is continuous, it is continuous at $\mathbf 0_X$.
Since $\map T {\mathbf 0_X} = \mathbf 0_Y$, there exists an open neighborhood $V$ of $\mathbf 0_X$ in $X$ such that: 

$T \sqbrk V \subseteq W$
Since $E$ is von Neumann-bounded subset, there exists $s > 0$ such that: 

$E \subseteq t V$ for $t > s$.
Then we have: 














\(\ds T \sqbrk E\)

\(\subseteq\)







\(\ds T \sqbrk {t V}\)





Image of Subset under Mapping is Subset of Image














\(\ds \)

\(=\)







\(\ds t T \sqbrk V\)





Image of Dilation of Set under Linear Transformation is Dilation of Image














\(\ds \)

\(\subseteq\)







\(\ds t W\)









for $t > s$. 
Since $W$ was an arbitrary open neighborhood of ${\mathbf 0}_Y$ in $Y$, we have that $T \sqbrk E$ is von Neumann-bounded.
So $T$ is bounded.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.32$: Theorem




