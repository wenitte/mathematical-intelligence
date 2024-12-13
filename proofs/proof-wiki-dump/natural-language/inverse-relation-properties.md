# 

Source: https://proofwiki.org/wiki/Inverse_Relation_Properties



Theorem
Let $\RR$ be a relation on a set $S$.
If $\RR$ has any of the properties:

Reflexive
Antireflexive
Non-reflexive
Symmetric
Asymmetric
Antisymmetric
Non-symmetric
Transitive
Antitransitive
Non-transitive
then its inverse $\RR^{-1}$ has the same properties.


Proof
Reflexivity













\(\ds x\)

\(\in\)







\(\ds S\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x, x}\)

\(\in\)







\(\ds \RR\)





Definition of Reflexive Relation








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, x}\)

\(\in\)







\(\ds \RR^{-1}\)





Definition of Inverse Relation



Hence the result by definition of reflexive relation.
$\blacksquare$


Antireflexivity













\(\ds x\)

\(\in\)







\(\ds S\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x, x}\)

\(\notin\)







\(\ds \RR\)





Definition of Antireflexive Relation








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, x}\)

\(\notin\)







\(\ds \RR^{-1}\)





Definition of Inverse Relation



Hence the result by definition of antireflexive relation.
$\blacksquare$


Non-Reflexivity
Let $\RR$ be non-reflexive.

Then:










\(\ds \exists x \in S: \, \)



\(\ds \tuple {x, x}\)

\(\in\)







\(\ds \RR\)





as $\RR$ is not antireflexive








\(\ds \leadsto \ \ \)

\(\ds \exists x \in S: \, \)



\(\ds \tuple {x, x}\)

\(\in\)







\(\ds \RR^{-1}\)





Definition of Inverse Relation



Thus $\RR^{-1}$ is not antireflexive.

Also:










\(\ds \exists x \in S: \, \)



\(\ds \tuple {x, x}\)

\(\notin\)







\(\ds \RR\)





as $\RR$ is not reflexive








\(\ds \leadsto \ \ \)

\(\ds \exists x \in S: \, \)



\(\ds \tuple {x, x}\)

\(\notin\)







\(\ds \RR^{-1}\)





Definition of Inverse Relation



Thus $\RR^{-1}$ is not reflexive.

Hence the result, by definition of non-reflexive relation.
$\blacksquare$


Symmetry
Let $\RR$ be symmetric.
Then from Relation equals Inverse iff Symmetric it follows that $\RR^{-1}$ is also symmetric.
$\blacksquare$


Asymmetry
Let $\RR$ be asymmetric.
Let $\tuple {x, y} \in \RR^{-1}$.
Then:














\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}\)

\(\in\)







\(\ds \RR\)





Inverse of Inverse Relation








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\notin\)







\(\ds \RR\)





Definition of Asymmetric Relation








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}\)

\(\notin\)







\(\ds \RR^{-1}\)





Definition of Inverse Relation



Thus it follows that $\RR^{-1}$ is also asymmetric.
$\blacksquare$


Antisymmetry
Let $\RR$ be antisymmetric.
Then:

$\tuple {x, y} \land \tuple {y, x} \in \RR \implies x = y$
It follows that:

$\tuple {y, x} \land \tuple {x, y} \in \RR^{-1} \implies x = y$
Thus it follows that $\RR^{-1}$ is also antisymmetric.
$\blacksquare$


Non-Symmetry
Let $\RR$ be non-symmetric.
Then:

$\exists \tuple {x_1, y_1} \in \RR \implies \tuple {y_1, x_1} \in \RR$
and also:

$\exists \tuple {x_2, y_2} \in \RR \implies \tuple {y_2, x_2} \notin \RR$
Thus:

$\exists \tuple {y_1, x_1} \in \RR^{-1} \implies \tuple {x_1, y_1} \in \RR^{-1}$
and also:

$\exists \tuple {y_2, x_2} \in \RR^{-1} \implies \tuple {x_2, y_2} \notin \RR^{-1}$
and so $\RR^{-1}$ is non-symmetric.
$\blacksquare$


Transitivity
Let $\RR$ be a relation on a set $S$.
Let $\RR$ be transitive.

Then its inverse $\RR^{-1}$ is also transitive.


Antitransitivity
Let $\RR$ be antitransitive.
Then:

$\tuple {x, y}, \tuple {y, z} \in \RR \implies \tuple {x, z} \notin \RR$
Thus:

$\tuple {y, x}, \tuple {z, y} \in \RR^{-1} \implies \tuple {z, x} \notin \RR^{-1}$
and so $\RR^{-1}$ is antitransitive.
$\blacksquare$


Non-Transitivity
Let $\RR$ be non-transitive.
Then:

$\exists x_1, y_1, z_1 \in S: \tuple {x_1, y_1}, \tuple {y_1, z_1} \in \RR, \tuple {x_1, z_1} \in \RR$
$\exists x_2, y_2, z_2 \in S: \tuple {x_2, y_2}, \tuple {y_2, z_2} \in \RR, \tuple {x_2, z_2} \notin \RR$

So:

$\exists x_1, y_1, z_1 \in S: \tuple {y_1, x_1}, \tuple {z_1, y_1} \in \RR^{-1}, \tuple {z_1, x_1} \in \RR^{-1}$
$\exists x_2, y_2, z_2 \in S: \tuple {y_2, x_2}, \tuple {z_2, y_2} \in \RR^{-1}, \tuple {z_2, x_2} \notin \RR^{-1}$
So $\RR^{-1}$ is non-transitive.
$\blacksquare$





