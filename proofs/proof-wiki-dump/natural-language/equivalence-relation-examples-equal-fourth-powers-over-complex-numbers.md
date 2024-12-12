# 

Source: https://proofwiki.org/wiki/Equivalence_Relation/Examples/Equal_Fourth_Powers_over_Complex_Numbers



Example of Equivalence Relation
Let $\C$ denote the set of complex numbers.
Let $\RR$ denote the relation on $\C$ defined as:

$\forall w, z \in \C: z \mathrel \RR w \iff z^4 = w^4$
Then $\RR$ is an equivalence relation.


Proof 1
Checking in turn each of the criteria for equivalence:


Reflexivity
Let $z \in \C$.
Then:

$z^4 = z^4$
Thus:

$\forall z \in \C: z \mathrel \RR z$
and $\RR$ is seen to be reflexive.
$\Box$


Symmetry













\(\ds z\)

\(\RR\)







\(\ds w\)














\(\ds \leadsto \ \ \)





\(\ds z^4\)

\(=\)







\(\ds w^4\)














\(\ds \leadsto \ \ \)





\(\ds w^4\)

\(=\)







\(\ds z^4\)














\(\ds \leadsto \ \ \)





\(\ds w\)

\(\RR\)







\(\ds z\)










Thus $\RR$ is seen to be symmetric.
$\Box$


Transitivity













\(\ds z_1\)

\(\RR\)







\(\ds z_2\)


















\(\, \ds \land \, \)

\(\ds z_2\)

\(\RR\)







\(\ds z_3\)














\(\ds \leadsto \ \ \)





\(\ds {z_1}^4\)

\(=\)







\(\ds {z_2}^4\)


















\(\, \ds \land \, \)

\(\ds {z_2}^4\)

\(=\)







\(\ds {z_3}^4\)














\(\ds \leadsto \ \ \)





\(\ds {z_1}^4\)

\(=\)







\(\ds {z_3}^4\)














\(\ds \leadsto \ \ \)





\(\ds z_1\)

\(\RR\)







\(\ds z_3\)









Thus $\RR$ is seen to be transitive.
$\Box$

$\RR$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Proof 2
We have that $\RR \subseteq \R \times \R$ is the relation induced by $z^4$:

$\tuple {z, w} \in \RR \iff z^4 = w^4$
The result follows from Relation Induced by Mapping is Equivalence Relation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.1 \ \text{(a)}$




