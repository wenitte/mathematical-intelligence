# 

Source: https://proofwiki.org/wiki/Projection_is_Epimorphism



Theorem
Let $\struct {\SS, \circ}$ be the external direct product of the algebraic structures $\struct {S_1, \circ_1}$ and $\struct {S_2, \circ_2}$.

Then:

$\pr_1$ is an epimorphism from $\struct {\SS, \circ}$ to $\struct {S_1, \circ_1}$
$\pr_2$ is an epimorphism from $\struct {\SS, \circ}$ to $\struct {S_2, \circ_2}$
where $\pr_1$ and $\pr_2$ are the first and second projection respectively of $\struct {\SS, \circ}$.


General Result
Let $\struct {\SS, \circ}$ be the external direct product of the algebraic structures $\struct {S_1, \circ_1}, \struct {S_2, \circ_2}, \ldots, \struct {S_k, \circ_k}, \ldots, \struct {S_n, \circ_n}$.
Then:

for each $j \in \closedint 1 n$, $\pr_j$ is an epimorphism from $\struct {\SS, \circ}$ to $\struct {S_j, \circ_j}$
where $\pr_j: \struct {\SS, \circ} \to \struct {S_j, \circ_j}$ is the $j$th projection from $\struct {\SS, \circ}$ to $\struct {S_j, \circ_j}$.


Proof
From Projection is Surjection, $\pr_1$ and $\pr_2$ are surjections.
We now need to show they are homomorphisms.
Let $s, t \in \struct {\SS, \circ}$ where $s = \tuple {s_1, s_2}$ and $t = \tuple {t_1, t_2$.
Then:














\(\ds \map {\pr_1} {s \circ t}\)

\(=\)







\(\ds \map {\pr_1} {\tuple {s_1, s_2} \circ \tuple {t_1, t_2} }\)




















\(\ds \)

\(=\)







\(\ds \map {\pr_1} {\tuple {s_1 \circ_1 t_1, s_2 \circ_2 t_2} }\)




















\(\ds \)

\(=\)







\(\ds s_1 \circ_j t_1\)




















\(\ds \)

\(=\)







\(\ds \map {\pr_1} s \circ_1 \map {\pr_1} t\)
























\(\ds \map {\pr_2} {s \circ t}\)

\(=\)







\(\ds \map {\pr_2} {\tuple {s_1, s_2} \circ \tuple {t_1, t_2} }\)




















\(\ds \)

\(=\)







\(\ds \map {\pr_2} {\tuple {s_1 \circ_1 t_1, s_2 \circ_2 t_2} }\)




















\(\ds \)

\(=\)







\(\ds s_2 \circ_j t_2\)




















\(\ds \)

\(=\)







\(\ds \map {\pr_2} s \circ_2 \map {\pr_2} t\)









Thus the morphism property is demonstrated for both $\pr_1$ and $\pr_2$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Theorem $13.3$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.3$




