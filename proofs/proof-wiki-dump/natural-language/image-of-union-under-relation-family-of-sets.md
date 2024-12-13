# 

Source: https://proofwiki.org/wiki/Image_of_Union_under_Relation/Family_of_Sets

Theorem
Let $S$ and $T$ be sets.
Let $\family {S_i}_{i \mathop \in I}$ be a family of subsets of $S$.
Let $\RR \subseteq S \times T$ be a relation.

Then:

$\ds \RR \sqbrk {\bigcup_{i \mathop \in I} S_i} = \bigcup_{i \mathop \in I} \RR \sqbrk {S_i}$
where $\ds \bigcup_{i \mathop \in I} S_i$ denotes the union of $\family {S_i}_{i \mathop \in I}$.


Proof













\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk {\bigcup_{i \mathop \in I} S_i}\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists s \in \bigcup_{i \mathop \in I} S_i: \, \)



\(\ds t\)

\(\in\)







\(\ds \map \RR s\)





Image of Subset under Relation equals Union of Images of Elements








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists i \in I: \exists s \in S_i: \, \)



\(\ds t\)

\(\in\)







\(\ds \map \RR s\)





Definition of Union of Family








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists i \in I: \, \)



\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk {S_i}\)





Definition of Image of Subset under Relation








\(\ds \leadstoandfrom \ \ \)





\(\ds t\)

\(\in\)







\(\ds \bigcup_{i \mathop \in I} \RR \sqbrk {S_i}\)





Definition of Union of Family



$\blacksquare$


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Relations: Theorem $5 \ \text{(d)}$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.12$: Set Inclusions for Image and Inverse Image Sets: Theorem $12.5 \ \text{(a)}$




