# 

Source: https://proofwiki.org/wiki/Image_of_Union_under_Relation/General_Result

Theorem
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation.
Let $\powerset S$ be the power set of $S$.
Let $\mathbb S \subseteq \powerset S$.

Then:

$\ds \RR \sqbrk {\bigcup \mathbb S} = \bigcup_{X \mathop \in \mathbb S} \RR \sqbrk X$


Proof













\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk {\bigcup \mathbb S}\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists s \in \bigcup \mathbb S: \, \)



\(\ds t\)

\(\in\)







\(\ds \map \RR s\)





Image of Subset under Relation equals Union of Images of Elements








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists X \in \mathbb S: \exists s \in X: \, \)



\(\ds t\)

\(\in\)







\(\ds \map \RR s\)





Definition of Union of Set of Sets








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists X \in \mathbb S: \, \)



\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk X\)





Definition of Image of Subset under Relation








\(\ds \leadstoandfrom \ \ \)





\(\ds t\)

\(\in\)







\(\ds \bigcup_{X \mathop \in \mathbb S} \RR \sqbrk X\)





Definition of Union of Set of Sets



$\blacksquare$





