# 

Source: https://proofwiki.org/wiki/Domain_of_Relation_is_Subclass_of_Union_of_Union_of_Relation/Proof

Theorem
Let $V$ be a basic universe.
Let $\RR \subseteq V \times V$ be a relation.
Let $\Dom \RR$ denote the domain of $\RR$.

Then:

$\Dom \RR \subseteq \map \bigcup {\bigcup \RR}$
where $\bigcup \RR$ denotes the union of $\RR$.


Proof













\(\ds x\)

\(\in\)







\(\ds \Dom \RR\)





Definition of Domain of Relation (Class Theory)








\(\ds \leadsto \ \ \)

\(\ds \exists x: \, \)



\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)





Definition of Domain of Relation (Class Theory)








\(\ds \leadsto \ \ \)





\(\ds \set {\set x, \set {x, y} }\)

\(\in\)







\(\ds \RR\)





Definition of Ordered Pair




But then:














\(\ds \set x\)

\(\in\)







\(\ds \set {\set x, \set {x, y} }\)














\(\ds \leadsto \ \ \)





\(\ds \set x\)

\(\in\)







\(\ds \bigcup \RR\)





Definition of Union of Class








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \map \bigcup {\bigcup \RR}\)





Definition of Union of Class








\(\ds \leadsto \ \ \)





\(\ds \Dom \RR\)

\(\subseteq\)







\(\ds \map \bigcup {\bigcup \RR}\)





Definition of Subclass



$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 8$ Relations: Exercise $8.1$




