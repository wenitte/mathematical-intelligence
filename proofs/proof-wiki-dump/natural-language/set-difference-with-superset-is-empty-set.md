# 

Source: https://proofwiki.org/wiki/Set_Difference_with_Superset_is_Empty_Set

Theorem
$S \subseteq T \iff S \setminus T = \O$

where:

$S \subseteq T$ denotes that $S$ is a subset of $T$
$S \setminus T$ denotes the set difference between $S$ and $T$
$\O$ denotes the empty set.


Proof













\(\ds \)

\(\)







\(\ds S \setminus T = \O\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds \neg \paren {\exists x: x \in S \land x \notin T}\)





Definition of Empty Set














\(\ds \)

\(\leadstoandfrom\)







\(\ds \forall x: \neg \paren {x \in S \land x \notin T}\)





De Morgan's Laws (Predicate Logic)














\(\ds \)

\(\leadstoandfrom\)







\(\ds \forall x: x \notin S \lor x \in T\)





De Morgan's Laws: Disjunction of Negations














\(\ds \)

\(\leadstoandfrom\)







\(\ds \forall x: x \in S \implies x \in T\)





Rule of Material Implication














\(\ds \)

\(\leadstoandfrom\)







\(\ds S \subseteq T\)





Definition of Subset



$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 5$: Complements and Powers
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 1.6$. Difference and complement: Example $19$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: The Notation and Terminology of Set Theory: $\S 8 \ \text{(a)}$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.5$: Complementation
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.2$: Boolean Operations: Problem $\text{A}.2.1$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): Appendix $\text{A}.2$: Theorem $\text{A}.11$




