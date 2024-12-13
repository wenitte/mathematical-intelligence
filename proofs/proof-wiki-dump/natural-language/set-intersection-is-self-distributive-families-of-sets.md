# 

Source: https://proofwiki.org/wiki/Set_Intersection_is_Self-Distributive/Families_of_Sets

Theorem
Let $I$ be an indexing set.
Let $\family {A_\alpha}_{\alpha \mathop \in I}$ and $\family {B_\alpha}_{\alpha \mathop \in I}$ be indexed families of subsets of a set $S$.

Then:

$\ds \map {\bigcap_{\alpha \mathop \in I} } {A_\alpha \cap B_\alpha} = \paren {\bigcap_{\alpha \mathop \in I} A_\alpha} \cap \paren {\bigcap_{\alpha \mathop \in I} B_\alpha}$
where $\ds \bigcap_{\alpha \mathop \in I} A_\alpha$ denotes the intersection of $\family {A_\alpha}$.


Proof













\(\ds x\)

\(\in\)







\(\ds \map {\bigcap_{\alpha \mathop \in I} } {A_\alpha \cap B_\alpha}\)














\(\ds \leadsto \ \ \)

\(\ds \forall \alpha \in I: \, \)



\(\ds x\)

\(\in\)







\(\ds A_\alpha \cap B_\alpha\)





Definition of Intersection of Family








\(\ds \leadsto \ \ \)

\(\ds \forall \alpha \in I: \, \)



\(\ds x\)

\(\in\)







\(\ds A_\alpha\)





Definition of Set Intersection












\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds B_\alpha\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \bigcap_{\alpha \mathop \in I} A_\alpha\)





Definition of Intersection of Family












\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds \bigcap_{\alpha \mathop \in I} B_\alpha\)





Definition of Intersection of Family








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \paren {\bigcap_{\alpha \mathop \in I} A_\alpha} \cap \paren {\bigcap_{\alpha \mathop \in I} B_\alpha}\)





Definition of Set Intersection



Thus by definition of subset:

$\ds \map {\bigcap_{\alpha \mathop \in I} } {A_\alpha \cap B_\alpha} \subseteq \paren {\bigcap_{\alpha \mathop \in I} A_\alpha} \cap \paren {\bigcap_{\alpha \mathop \in I} B_\alpha}$
$\Box$















\(\ds x\)

\(\in\)







\(\ds \paren {\bigcap_{\alpha \mathop \in I} A_\alpha} \cap \paren {\bigcap_{\alpha \mathop \in I} B_\alpha}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \bigcap_{\alpha \mathop \in I} A_\alpha\)





Definition of Set Intersection












\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds \bigcap_{\alpha \mathop \in I} B_\alpha\)














\(\ds \leadsto \ \ \)

\(\ds \forall \alpha \in I: \, \)



\(\ds x\)

\(\in\)







\(\ds A_\alpha\)





Definition of Intersection of Family












\(\, \ds \land \, \)

\(\ds x\)

\(\in\)







\(\ds B_\alpha\)














\(\ds \leadsto \ \ \)

\(\ds \forall \alpha \in I: \, \)



\(\ds x\)

\(\in\)







\(\ds A_\alpha \cap B_\alpha\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \map {\bigcap_{\alpha \mathop \in I} } {A_\alpha \cap B_\alpha}\)





Definition of Intersection of Family



Thus by definition of subset:

$\ds \paren {\bigcap_{\alpha \mathop \in I} A_\alpha} \cap \paren {\bigcap_{\alpha \mathop \in I} B_\alpha} \subseteq \map {\bigcap_{\alpha \mathop \in I} } {A_\alpha \cap B_\alpha}$
$\Box$

By definition of set equality:

$\ds \map {\bigcap_{\alpha \mathop \in I} } {A_\alpha \cap B_\alpha} = \paren {\bigcap_{\alpha \mathop \in I} A_\alpha} \cap \paren {\bigcap_{\alpha \mathop \in I} B_\alpha}$
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 4$: Indexed Families of Sets: Exercise $1 \ \text{(d)}$
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.4$: Sets of Sets: Exercise $1.4.4 \ \text{(iv)}$




