# 

Source: https://proofwiki.org/wiki/Intersection_with_Subset_is_Subset/Proof_1

Theorem
$S \subseteq T \iff S \cap T = S$


Proof
Let $S \cap T = S$.
Then by the definition of set equality, $S \subseteq S \cap T$.
Thus:














\(\ds S \cap T\)

\(\subseteq\)







\(\ds T\)





Intersection is Subset








\(\ds \leadsto \ \ \)





\(\ds S\)

\(\subseteq\)







\(\ds T\)





Subset Relation is Transitive




Now let $S \subseteq T$.
From Intersection is Subset we have $S \supseteq S \cap T$.
We also have:














\(\ds S\)

\(\subseteq\)







\(\ds T\)














\(\ds \leadsto \ \ \)





\(\ds S \cap S\)

\(\subseteq\)







\(\ds T \cap S\)





Set Intersection Preserves Subsets








\(\ds \leadsto \ \ \)





\(\ds S\)

\(\subseteq\)







\(\ds S \cap T\)





Set Intersection is Idempotent and Intersection is Commutative




So as we have:














\(\ds S \cap T\)

\(\subseteq\)







\(\ds S\)




















\(\ds S \cap T\)

\(\supseteq\)







\(\ds S\)









it follows from the definition of set equality that:

$S \cap T = S$

So we have:














\(\ds S \cap T = S\)

\(\implies\)







\(\ds S \subseteq T\)




















\(\ds S \subseteq T\)

\(\implies\)







\(\ds S \cap T = S\)









and so:

$S \subseteq T \iff S \cap T = S$
from the definition of equivalence.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems: $\text{(f)}$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): Appendix $\text{A}.2$: Theorem $\text{A}.11$




