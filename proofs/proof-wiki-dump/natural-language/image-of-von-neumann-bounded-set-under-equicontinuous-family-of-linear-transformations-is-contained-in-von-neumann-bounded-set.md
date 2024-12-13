# 

Source: https://proofwiki.org/wiki/Image_of_von_Neumann-Bounded_Set_under_Equicontinuous_Family_of_Linear_Transformations_is_Contained_in_von_Neumann-Bounded_Set

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ and $Y$ be a topological vector space over $\GF$. 
Let $\family {T_\alpha}_{\alpha \in I}$ be an equicontinuous family of linear transformations. 
Let $E \subseteq X$ be von Neumann-bounded. 

Then there exists a von Neumann-bounded set $F \subseteq Y$ such that: 

$T_\alpha \sqbrk E \subseteq F$ for each $\alpha \in I$.


Proof
Let:

$\ds F = \bigcup_{\alpha \mathop \in I} T_\alpha \sqbrk E$
Then $T_\alpha \sqbrk E \subseteq F$ for each $\alpha \in I$.
It is enough to show that $F$ is von Neumann-bounded.
Let $W$ be an open neighborhood of $\mathbf 0_Y$.
Since $\family {T_\alpha}_{\alpha \in I}$ is equicontinuous, there exists an open neighborhood $V$ of $\mathbf 0_X$ such that: 

$T_\alpha \sqbrk V \subseteq W$ for each $\alpha \in I$.
Since $E$ is von Neumann-bounded, there exists $s > 0$ such that for all $t > s$ we have $E \subseteq t W$. 
Then for each $t > s$ and $\alpha \in I$, we have:














\(\ds T_\alpha \sqbrk E\)

\(\subseteq\)







\(\ds T_\alpha \sqbrk {t V}\)




















\(\ds \)

\(=\)







\(\ds t T_\alpha \sqbrk V\)





Image of Dilation of Set under Linear Transformation is Dilation of Image














\(\ds \)

\(\subseteq\)







\(\ds t W\)









So, from Union of Subsets is Subset:

$\ds F = \bigcup_{\alpha \in I} T_\alpha \sqbrk E \subseteq t W$
for $t > s$.
So $F$ is von Neumann-bounded.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $2.4$: Equicontinuity




