# 

Source: https://proofwiki.org/wiki/Equivalence_Relation/Examples/Even_Sum



Example of Equivalence Relation
Let $\Z$ denote the set of integers.
Let $\RR$ denote the relation on $\Z$ defined as:

$\forall x, y \in \Z: x \mathrel \RR y \iff x + y \text { is even}$
Then $\RR$ is an equivalence relation.
The equivalence classes are:

$\eqclass 0 \RR$
$\eqclass 1 \RR$


Proof
Checking in turn each of the criteria for equivalence:


Reflexivity
Let $x \in \Z$.
Then:

$x + x = 2 x$
and so $x + x$ is an even integer.
Thus:

$\forall x \in \Z: x \mathrel \RR x$
and $\RR$ is seen to be reflexive.
$\Box$


Symmetry













\(\ds x\)

\(\RR\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x + y\)

\(=\)







\(\ds 2 n\)





for some $n \in \Z$








\(\ds \leadsto \ \ \)





\(\ds y + x\)

\(=\)







\(\ds 2 n\)





for some $n \in \Z$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\RR\)







\(\ds y\)










Thus $\RR$ is seen to be symmetric.
$\Box$


Transitivity













\(\ds x\)

\(\RR\)







\(\ds y\)




















\(\ds y\)

\(\RR\)







\(\ds z\)














\(\ds \leadsto \ \ \)





\(\ds x + y\)

\(=\)







\(\ds 2 n\)





for some $n \in \Z$














\(\ds y + z\)

\(=\)







\(\ds 2 m\)





for some $m \in \Z$








\(\ds \leadsto \ \ \)





\(\ds \paren {x + y} + \paren {y + z}\)

\(=\)







\(\ds 2 n + 2 m\)





for some $m, n \in \Z$








\(\ds \leadsto \ \ \)





\(\ds \paren {x + 2 y + z} - 2 y\)

\(=\)







\(\ds 2 n + 2 m - 2 y\)





for some $m, n \in \Z$








\(\ds \leadsto \ \ \)





\(\ds \paren {x + z}\)

\(=\)







\(\ds 2 \paren {n + m - y}\)





for some $m, n \in \Z$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\RR\)







\(\ds z\)









Thus $\RR$ is seen to be transitive.
$\Box$

$\RR$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\Box$

We have that:

$x \mathrel \RR 0 \iff x \text { is even}$
$x \mathrel \RR 1 \iff x \text { is odd}$
and the equivalence classes of $\RR$ are $\eqclass 0 \RR$ and $\eqclass 1 \RR$ from the Fundamental Theorem on Equivalence Relations.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.3$: Equivalence Relations: Problem Set $\text{A}.3$: $19$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $2$: Maps and relations on sets: Exercise $4$




