# 

Source: https://proofwiki.org/wiki/Equivalence_Relation/Examples/Equal_Sine_of_pi_x_over_6_on_Integers



Example of Equivalence Relation
Let $\Z$ denote the set of integers.
Let $\RR$ denote the relation on $\Z$ defined as:

$\forall x, y \in \Z: x \mathrel \RR y \iff \sin \dfrac {\pi x} 6 = \sin \dfrac {\pi y} 6$
Then $\RR$ is an equivalence relation.


Proof 1
Checking in turn each of the criteria for equivalence:


Reflexivity
Let $x \in \Z$.
Then:

$\sin \dfrac {\pi x} 6 = \sin \dfrac {\pi x} 6$
Thus:

$\forall x \in \Z: x \mathrel \RR x$
and $\RR$ is seen to be reflexive.
$\Box$


Symmetry













\(\ds x\)

\(\RR\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds \sin \dfrac {\pi x} 6\)

\(=\)







\(\ds \sin \dfrac {\pi y} 6\)














\(\ds \leadsto \ \ \)





\(\ds \sin \dfrac {\pi y} 6\)

\(=\)







\(\ds \sin \dfrac {\pi x} 6\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\RR\)







\(\ds x\)










Thus $\RR$ is seen to be symmetric.
$\Box$


Transitivity













\(\ds x\)

\(\RR\)







\(\ds y\)


















\(\, \ds \land \, \)

\(\ds y\)

\(\RR\)







\(\ds z\)














\(\ds \leadsto \ \ \)





\(\ds \sin \dfrac {\pi x} 6\)

\(=\)







\(\ds \sin \dfrac {\pi y} 6\)


















\(\, \ds \land \, \)

\(\ds \sin \dfrac {\pi y} 6\)

\(=\)







\(\ds \sin \dfrac {\pi z} 6\)














\(\ds \leadsto \ \ \)





\(\ds \sin \dfrac {\pi x} 6\)

\(=\)







\(\ds \sin \dfrac {\pi z} 6\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\RR\)







\(\ds z\)









Thus $\RR$ is seen to be transitive.
$\Box$

$\RR$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Proof 2
We have that $\RR \subseteq \R \times \R$ is the relation induced by $\sin \dfrac {x \pi} 6$:

$\tuple {x, y} \in \RR \iff \sin \dfrac {x \pi} 6 = \sin \dfrac {y \pi} 6$
The result follows from Relation Induced by Mapping is Equivalence Relation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.1 \ \text{(b)}$




