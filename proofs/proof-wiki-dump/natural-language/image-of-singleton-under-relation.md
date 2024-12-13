# 

Source: https://proofwiki.org/wiki/Image_of_Singleton_under_Relation

Theorem
Let $\RR \subseteq S \times T$ be a relation.
Then the image of an element of $S$ is equal to the image of a singleton containing that element, the singleton being a subset of $S$:

$\forall s \in S: \map \RR s = \RR \sqbrk {\set s}$


Proof
We have the definitions:














\(\ds \map \RR s\)

\(=\)







\(\ds \set {t \in T: \tuple {s, t} \in \RR}\)





Definition of Image of Element under Relation














\(\ds \RR \sqbrk {\set s}\)

\(=\)







\(\ds \set {t \in T: \exists s \in \set s: \tuple {s, t} \in \RR}\)





Definition of Image of Subset under Relation


















\(\ds t\)

\(\in\)







\(\ds \map \RR s\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {s, t}\)

\(\in\)







\(\ds \RR\)














\(\ds \leadsto \ \ \)

\(\ds \exists s \in \set s: \, \)



\(\ds \tuple {s, t}\)

\(\in\)







\(\ds \RR\)





Definition of Singleton








\(\ds \leadsto \ \ \)





\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk {\set s}\)














\(\ds \leadsto \ \ \)





\(\ds \map \RR s\)

\(\subseteq\)







\(\ds \RR \sqbrk {\set s}\)





Definition of Subset


















\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk {\set s}\)














\(\ds \leadsto \ \ \)

\(\ds \exists s \in \set s: \, \)



\(\ds \tuple {s, t}\)

\(\in\)







\(\ds \RR\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {s, t}\)

\(\in\)







\(\ds \RR\)





as $r \in \set s \implies r = s$ by Singleton Equality








\(\ds \leadsto \ \ \)





\(\ds t\)

\(\in\)







\(\ds \map \RR s\)














\(\ds \leadsto \ \ \)





\(\ds \RR \sqbrk {\set s}\)

\(\subseteq\)







\(\ds \map \RR s\)










Finally:

$\map \RR s = \RR \sqbrk {\set s}$
by definition of set equality.
$\blacksquare$





