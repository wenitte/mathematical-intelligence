# 

Source: https://proofwiki.org/wiki/Set_Intersection_Preserves_Subsets/Corollary



Theorem
Let $A, B, S$ be sets.
Then:

$A \subseteq B \implies A \cap S \subseteq B \cap S$


Proof 1
Let $A \subseteq B$, and let $S$ be any set.
From Set Intersection Preserves Subsets:

$A \subseteq B, \ S \subseteq T \implies A \cap S \subseteq B \cap T$
for arbitrary sets $S$ and $T$.
Substituting $S$ for $T$:

$A \subseteq B, \ S \subseteq S \implies A \cap S \subseteq B \cap S$
From Set is Subset of Itself, $S \subseteq S$ for all sets $S$.
Hence the result:

$A \subseteq B \implies A \cap S \subseteq B \cap S$
$\blacksquare$


Proof 2
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
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.6$: Set Identities and Other Set Relations: Exercise $1 \ \text{(a)}$




