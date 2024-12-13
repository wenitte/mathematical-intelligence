# 

Source: https://proofwiki.org/wiki/Image_of_Relation_is_Subclass_of_Union_of_Union_of_Relation

Theorem
Let $V$ be a basic universe.
Let $\RR \subseteq V \times V$ be a relation.
Let $\Img \RR$ denote the image of $\RR$.

Then:

$\Img \RR \subseteq \map \bigcup {\bigcup \RR}$
where $\bigcup \RR$ denotes the union of $\RR$.


Proof













\(\ds y\)

\(\in\)







\(\ds \Img \RR\)





Definition of Image of Relation (Class Theory)








\(\ds \leadsto \ \ \)

\(\ds \exists x: \, \)



\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)





Definition of Image of Relation (Class Theory)








\(\ds \leadsto \ \ \)





\(\ds \set {\set x, \set {x, y} }\)

\(\in\)







\(\ds \RR\)





Definition of Ordered Pair




But then:














\(\ds \set {x, y}\)

\(\in\)







\(\ds \set {\set x, \set {x, y} }\)














\(\ds \leadsto \ \ \)





\(\ds \set {x, y}\)

\(\in\)







\(\ds \bigcup \RR\)





Definition of Union of Class




Also:














\(\ds y\)

\(\in\)







\(\ds \set {x, y}\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \map \bigcup {\bigcup \RR}\)





Definition of Union of Class








\(\ds \leadsto \ \ \)





\(\ds \Img \RR\)

\(\subseteq\)







\(\ds \map \bigcup {\bigcup \RR}\)





Definition of Subclass



$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 8$ Relations: Lemma $8.1$: $(2)$




