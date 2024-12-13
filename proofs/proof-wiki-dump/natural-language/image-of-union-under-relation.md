# 

Source: https://proofwiki.org/wiki/Image_of_Union_under_Relation



Theorem
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation.
Let $S_1$ and $S_2$ be subsets of $S$.

Then:

$\RR \sqbrk {S_1 \cup S_2} = \RR \sqbrk {S_1} \cup \RR \sqbrk {S_2}$

That is, the image of the union of subsets of $S$ is equal to the union of their images.


General Result
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation.
Let $\powerset S$ be the power set of $S$.
Let $\mathbb S \subseteq \powerset S$.

Then:

$\ds \RR \sqbrk {\bigcup \mathbb S} = \bigcup_{X \mathop \in \mathbb S} \RR \sqbrk X$


Family of Sets
Let $S$ and $T$ be sets.
Let $\family {S_i}_{i \mathop \in I}$ be a family of subsets of $S$.
Let $\RR \subseteq S \times T$ be a relation.

Then:

$\ds \RR \sqbrk {\bigcup_{i \mathop \in I} S_i} = \bigcup_{i \mathop \in I} \RR \sqbrk {S_i}$
where $\ds \bigcup_{i \mathop \in I} S_i$ denotes the union of $\family {S_i}_{i \mathop \in I}$.


Proof













\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk {S_1 \cup S_2}\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists s \in S_1 \cup S_2: \, \)



\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk s\)





Definition of Image of Subset under Relation








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists s: s \in S_1 \lor s \in S_2: \, \)



\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk s\)





Definition of Set Union








\(\ds \leadstoandfrom \ \ \)





\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk {S_1}\)





Definition of Image of Subset under Relation












\(\, \ds \lor \, \)

\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk {S_2}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk {S_1} \cup \RR \sqbrk {S_2}\)





Definition of Set Union



$\blacksquare$


Also see
Image of Intersection under Relation
Preimage of Intersection under Relation
Preimage of Union under Relation


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Relations: Theorem $5 \ \text{(c)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Problem $\text{AA}$: Relations
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.12$: Set Inclusions for Image and Inverse Image Sets: Theorem $12.2 \ \text{(a)}$




