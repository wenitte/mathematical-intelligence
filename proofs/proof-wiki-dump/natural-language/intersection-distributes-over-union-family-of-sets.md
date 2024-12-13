# 

Source: https://proofwiki.org/wiki/Intersection_Distributes_over_Union/Family_of_Sets



Theorem
Let $I$ be an indexing set.
Let $\family {A_\alpha}_{\alpha \mathop \in I}$ be a indexed family of subsets of a set $S$.
Let $B \subseteq S$.

Then:

$\ds \map {\bigcup_{\alpha \mathop \in I} } {A_\alpha \cap B} = \paren {\bigcup_{\alpha \mathop \in I} A_\alpha} \cap B$
where $\ds \bigcup_{\alpha \mathop \in I} A_\alpha$ denotes the union of $\family {A_\alpha}_{\alpha \mathop \in I}$.


Corollary
Let $I$ and $J$ be indexing sets.
Let $\family {A_\alpha}_{\alpha \mathop \in I}$ and $\family {B_\beta}_{\beta \mathop \in J}$ be indexed families of subsets of a set $S$.

Then:

$\ds \bigcup_{\tuple {\alpha, \beta} \mathop \in I \times J} \paren {A_\alpha \cap B_\beta} = \paren {\bigcup_{\alpha \mathop \in I} A_\alpha} \cap \paren {\bigcup_{\beta \mathop \in J} B_\beta}$
where $\ds \bigcup_{\alpha \mathop \in I} A_\alpha$ denotes the union of $\family {A_\alpha}_{\alpha \mathop \in I}$.


Proof













\(\ds x\)

\(\in\)







\(\ds \bigcup_{\alpha \mathop \in I} \paren {A_\alpha \cap B}\)














\(\ds \leadsto \ \ \)

\(\ds \exists \alpha \in I: \, \)



\(\ds x\)

\(\in\)







\(\ds A_\alpha \cap B\)





Definition of Union of Family








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds A_\alpha\)





Definition of Set Intersection












\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds B\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \paren {\bigcup_{\alpha \mathop \in I} A_\alpha}\)





Set is Subset of Union of Family












\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds B\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \paren {\bigcup_{\alpha \mathop \in I} A_\alpha} \cap B\)





Definition of Set Intersection



By definition of subset:

$\ds \bigcup_{\alpha \mathop \in I} \paren {A_\alpha \cap B} \subseteq \paren {\bigcup_{\alpha \mathop \in I} A_\alpha} \cap B$
$\Box$















\(\ds x\)

\(\in\)







\(\ds \paren {\bigcup_{\alpha \mathop \in I} A_\alpha} \cap B\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \paren {\bigcup_{\alpha \mathop \in I} A_\alpha}\)





Definition of Set Intersection












\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds B\)














\(\ds \leadsto \ \ \)

\(\ds \exists \alpha \in I: \, \)



\(\ds x\)

\(\in\)







\(\ds A_\alpha\)





Definition of Union of Family












\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds B\)














\(\ds \leadsto \ \ \)

\(\ds \exists \alpha \in I: \, \)



\(\ds x\)

\(\in\)







\(\ds A_\alpha \cap B\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \bigcup_{\alpha \mathop \in I} \paren {A_\alpha \cap B}\)





Set is Subset of Union of Family



By definition of subset:

$\ds \paren {\bigcup_{\alpha \mathop \in I} A_\alpha} \cap B \subseteq \map {\bigcup_{\alpha \mathop \in I} } {A_\alpha \cap B}$
$\Box$

By definition of set equality:

$\ds\map {\bigcup_{\alpha \mathop \in I} } {A_\alpha \cap B} = \paren {\bigcup_{\alpha \mathop \in I} A_\alpha} \cap B$
$\blacksquare$


Also see
Union Distributes over Intersection of Family


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 9$: Families
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 4$: Indexed Families of Sets: Exercise $1 \ \text{(f)}$
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.4$: Sets of Sets: Exercise $1.4.4 \ \text{(v)}$




