# 

Source: https://proofwiki.org/wiki/Set_Intersection_Preserves_Subsets/Corollary/Proof_2

Corollary to Set Intersection Preserves Subsets
Let $A, B, S$ be sets.
Then:

$A \subseteq B \implies A \cap S \subseteq B \cap S$


Proof
Recall the Factor Principles, themselves a corollary of the Praeclarum Theorema:

$\paren {p \implies q} \vdash \paren {p \land r} \implies \paren {q \land r}$

This is applied as:














\(\ds \)

\(\)







\(\ds A \subseteq B\)




















\(\ds \)

\(\leadsto\)







\(\ds \paren {x \in A \implies x \in B}\)





Definition of Subset














\(\ds \)

\(\leadsto\)







\(\ds \paren {x \in A \land x \in S \implies x \in B \land x \in S}\)





Factor Principles














\(\ds \)

\(\leadsto\)







\(\ds \paren {x \in A \cap S \implies x \in B \cap S}\)





Definition of Set Intersection














\(\ds \)

\(\leadsto\)







\(\ds A \cap S \subseteq B \cap S\)





Definition of Subset



$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems: $\text{(e)}$




