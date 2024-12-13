# 

Source: https://proofwiki.org/wiki/Inverse_Image_Mapping_Induced_by_Projection

Theorem
Let $\family {S_i}_{i \mathop \in I}$ be a family of sets.
Let $\ds S = \prod_{i \mathop \in I} S_i$ be the Cartesian product of $\family {S_i}_{i \mathop \in I}$.
For each $j \in I$, let $\pr_j: S \to S_j$ denote the $j$-th projection.
For each $j \in I$ let $\pr_j^\gets: \powerset {S_i} \to \powerset S$ denote the inverse image mapping induced by $\pr_j$

Then for all $j \in I$, $\pr_j^\gets$ is the mapping defined by:

$\ds \forall T \subseteq S_i: \map {\pr_j^\gets} T = \prod_{i \mathop \in I} T_i$
where:

$T_i = \begin {cases} T & i = j \\ S_i & i \ne j \end {cases}$


Proof
Let $j \in I$.
Let $T \subseteq S_j$.
Let $\family {T_i}_{i \mathop \in I}$ be the family of sets defined by:

$T_i = \begin {cases} T & : i = j \\ S_i & : i \ne j \end {cases}$
Then:














\(\ds \map {\pr_j^\gets} T\)

\(=\)







\(\ds \set {x \in S: \map {\pr_j} x \in T}\)





Definition of Inverse Image Mapping of Mapping














\(\ds \)

\(=\)







\(\ds \set {x \in S: x_j \in T}\)





Definition of Projection on Family of Sets














\(\ds \)

\(=\)







\(\ds \set {x \in S: x_j \in T, \forall i \ne j: x_i \in S_i}\)





as $x \in S \implies \paren {\forall i \in I: x_i \in S_i}$














\(\ds \)

\(=\)







\(\ds \set {x \in S: \forall i \in I: x_i \in T_i}\)





Definition of $T_i$ for all $i \in I$














\(\ds \)

\(=\)







\(\ds \prod_{i \mathop \in I} T_i\)





Definition of Cartesian Product of Family



$\blacksquare$





