# 

Source: https://proofwiki.org/wiki/Projection_is_Epimorphism/General_Result

Theorem
Let $\struct {\SS, \circ}$ be the external direct product of the algebraic structures $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \ldots, \struct {S_k, \circ_k}, \ldots, \struct {S_n, \circ_n}$.
Then:

for each $j \in \closedint 1 n$, $\pr_j$ is an epimorphism from $\struct {\SS, \circ}$ to $\struct {S_j, \circ_j}$
where $\pr_j: \struct {\SS, \circ} \to \struct {S_j, \circ_j}$ is the $j$th projection from $\struct {\SS, \circ}$ to $\struct {S_j, \circ_j}$.


Proof
From Projection is Surjection, $\pr_j$ is a surjection for all $j$.
We now need to show it is a homomorphism.
Let $\mathbf s, \mathbf t \in \struct {\SS, \circ}$ where $\mathbf s = \tuple {s_1, s_2, \ldots, s_j, \ldots, s_n}$ and $\mathbf t = \tuple {t_1, t_2, \ldots, t_j, \ldots, t_n}$.
Then:














\(\ds \map {\pr_j} {\mathbf s \circ \mathbf t}\)

\(=\)







\(\ds \map {\pr_j} {\tuple {s_1, s_2, \ldots, s_j, \ldots, s_n} \circ \tuple {t_1, t_2, \ldots, t_j, \ldots, t_n} }\)





Definition of $\mathbf s$ and $\mathbf t$














\(\ds \)

\(=\)







\(\ds \map {\pr_j} {\tuple {s_1 \circ_1 t_1, s_2 \circ_2 t_2, \ldots, s_j \circ_j t_j, \ldots, s_n \circ_n t_n} }\)




















\(\ds \)

\(=\)







\(\ds s_j \circ_j t_j\)




















\(\ds \)

\(=\)







\(\ds \map {\pr_j} {\mathbf s} \circ_j \map {\pr_j} {\mathbf t}\)









and thus the morphism property is demonstrated.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.12$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 3.1$: Direct sums




