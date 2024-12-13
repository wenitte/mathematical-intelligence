# 

Source: https://proofwiki.org/wiki/Intersection_of_Family/Examples/Size_of_y-1_lt_n_and_Size_of_y%2B1_gt_1_over_n

Example of Intersection of Family
Let $I$ be the indexing set $I = \set {1, 2, 3, \ldots}$
Let $\family {T_n}$ be the indexed family of subsets of the set of real numbers $\R$, defined as:

$T_n = \set {y: \size {y - 1} < n \land \size {y + 1} > \dfrac 1 n}$
Then:

$\ds \bigcap_{n \mathop \in I} T_n = \openint 0 2$


Proof
From Size of y-1 lt n and Size of y+1 gt 1 over n:

$T_n = \openint {1 - n} {-1 - \dfrac 1 n} \cup \openint {-1 + \dfrac 1 n} {1 + n}$

We have that:

$\paren {\openint {1 - n} {-1 - \dfrac 1 n} \cup \openint {-1 + \dfrac 1 n} {1 + n} } \subseteq \paren {\openint {1 - \paren {n + 1} } {-1 - \dfrac 1 {n + 1} } \cup \openint {-1 + \dfrac 1 {n + 1} } {1 + \paren {n + 1} } }$
That is:

$T_n \subseteq T_{n + 1}$
and so:

$\ds \bigcap_{n \mathop \in I} T_n = T_1$
Hence:














\(\ds \bigcap_{n \mathop \in I} T_n\)

\(=\)







\(\ds T_1\)




















\(\ds \)

\(=\)







\(\ds \openint {1 - 1} {-1 - \dfrac 1 1} \cup \openint {-1 + \dfrac 1 1} {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds \openint 0 {-2} \cup \openint 0 2\)




















\(\ds \)

\(=\)







\(\ds \O \cup \openint 0 2\)




















\(\ds \)

\(=\)







\(\ds \openint 0 2\)









$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Exercise $\text {A}$




