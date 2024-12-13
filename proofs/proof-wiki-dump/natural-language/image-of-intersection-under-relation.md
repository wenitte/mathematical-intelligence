# 

Source: https://proofwiki.org/wiki/Image_of_Intersection_under_Relation



Theorem
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation.
Let $S_1$ and $S_2$ be subsets of $S$.

Then:

$\RR \sqbrk {S_1 \cap S_2} \subseteq \RR \sqbrk {S_1} \cap \RR \sqbrk {S_2}$

That is, the image of the intersection of subsets of $S$ is a subset of the intersection of their images.


General Result
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation.
Let $\powerset S$ be the power set of $S$.
Let $\mathbb S \subseteq \powerset S$.

Then:

$\ds \RR \sqbrk {\bigcap \mathbb S} \subseteq \bigcap_{X \mathop \in \mathbb S} \RR \sqbrk X$


Family of Sets
Let $S$ and $T$ be sets.
Let $\family {S_i}_{i \mathop \in I}$ be a family of subsets of $S$.
Let $\RR \subseteq S \times T$ be a relation.

Then:

$\ds \RR \sqbrk {\bigcap_{i \mathop \in I} S_i} \subseteq \bigcap_{i \mathop \in I} \RR \sqbrk {S_i}$
where $\ds \bigcap_{i \mathop \in I} S_i$ denotes the intersection of $\family {S_i}_{i \mathop \in I}$.


Proof













\(\ds S_1 \cap S_2\)

\(\subseteq\)







\(\ds S_1\)





Intersection is Subset








\(\ds \leadsto \ \ \)





\(\ds \RR \sqbrk {S_1 \cap S_2}\)

\(\subseteq\)







\(\ds \RR \sqbrk {S_1}\)





Image of Subset is Subset of Image


















\(\ds S_1 \cap S_2\)

\(\subseteq\)







\(\ds S_2\)





Intersection is Subset








\(\ds \leadsto \ \ \)





\(\ds \RR \sqbrk {S_1 \cap S_2}\)

\(\subseteq\)







\(\ds \RR \sqbrk {S_2}\)





Image of Subset is Subset of Image












\(\ds \leadsto \ \ \)





\(\ds \RR \sqbrk {S_1 \cap S_2}\)

\(\subseteq\)







\(\ds \RR \sqbrk {S_1} \cap \RR \sqbrk {S_2}\)





Intersection is Largest Subset



$\blacksquare$


Also see
Image of Union under Relation
Preimage of Union under Relation
Preimage of Intersection under Relation


Also see
Image of Intersection under One-to-Many Relation, which shows that, for the general relation $\RR$, equality holds if and only if $\RR$ is one-to-many.


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Relations: Theorem $5 \ \text{(c)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Problem $\text{AA}$: Relations
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.12$: Set Inclusions for Image and Inverse Image Sets: Theorem $12.2 \ \text{(b)}$




