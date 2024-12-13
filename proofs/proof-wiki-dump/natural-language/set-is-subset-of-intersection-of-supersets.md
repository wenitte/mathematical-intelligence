# 

Source: https://proofwiki.org/wiki/Set_is_Subset_of_Intersection_of_Supersets



Theorem
Let $S$, $T_1$ and $T_2$ be sets.
Let $S$ be a subset of both $T_1$ and $T_2$.

Then:

$S \subseteq T_1 \cap T_2$

That is:

$\paren {S \subseteq T_1} \land \paren {S \subseteq T_2} \implies S \subseteq \paren {T_1 \cap T_2}$


Set of Sets
Let $T$ be a set.
Let $\mathbb S$ be a set of sets.
Suppose that for each $S \in \mathbb S$, $T \subseteq S$.

Then:

$T \subseteq \ds \bigcap \mathbb S$


General Result
Let $\family {S_i}_{i \mathop \in I}$ be a family of sets indexed by $I$.
Let $X$ be a set such that:

$\forall i \in I: X \subseteq S_i$

Then:

$\ds X \subseteq \bigcap_{i \mathop \in I} S_i$
where $\ds \bigcap_{i \mathop \in I} S_i$ is the intersection of $\family {S_i}$.


Proof 1
Let $S \subseteq T_1 \land S \subseteq T_2$.

Then:














\(\ds x \in S\)

\(\leadsto\)







\(\ds x \in T_1 \land x \in T_2\)





Definition of Subset














\(\ds \)

\(\leadsto\)







\(\ds x \in T_1 \cap T_2\)





Definition of Set Intersection














\(\ds \)

\(\leadsto\)







\(\ds S \subseteq T_1 \cap T_2\)





Definition of Subset





Proof 2













\(\ds S\)

\(\subseteq\)







\(\ds T_1\)


















\(\, \ds \land \, \)

\(\ds S\)

\(\subseteq\)







\(\ds T_2\)














\(\ds \leadsto \ \ \)





\(\ds S \cap S\)

\(\subseteq\)







\(\ds S \cap T_2\)





Set Intersection Preserves Subsets








\(\ds \leadsto \ \ \)





\(\ds S\)

\(\subseteq\)







\(\ds T_1 \cap T_2\)





Set Intersection is Idempotent



$\blacksquare$


Also see
Union of Subsets is Subset


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Exercise $\text{B viii}$
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.2$: Operations on Sets: Exercise $1.2.1 \ \text{(iv)}$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.6$: Set Identities and Other Set Relations: Exercise $4$




