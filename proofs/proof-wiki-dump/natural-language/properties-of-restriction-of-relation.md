# 

Source: https://proofwiki.org/wiki/Properties_of_Restriction_of_Relation



Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be a relation on $S$.

Let $T \subseteq S$ be a subset of $S$.
Let $\RR {\restriction_T} \subseteq T \times T$ be the restriction of $\RR$ to $T$.

If $\RR$ on $S$ has any of the properties:

Reflexive
Antireflexive
Symmetric
Antisymmetric
Asymmetric
Transitive
Antitransitive
Connected
... then $\RR {\restriction_T}$ on $T$ has the same properties.


Proof
Reflexivity
Restriction of Reflexive Relation is Reflexive
Suppose $\RR$ is reflexive on $S$.
Then:

$\forall x \in S: \tuple {x, x} \in \RR$
So:

$\forall x \in T: \tuple {x, x} \in \RR {\restriction_T}$
Thus $\RR {\restriction_T}$ is reflexive on $T$.
$\blacksquare$


Restriction of Antireflexive Relation is Antireflexive
Suppose $\RR$ is antireflexive on $S$.
Then:

$\forall x \in S: \tuple {x, x} \notin \RR$
So:

$\forall x \in T: \tuple {x, x} \notin \RR \restriction_T$
Thus $\RR {\restriction_T}$ is antireflexive on $T$.
$\blacksquare$


Symmetry
Restriction of Symmetric Relation is Symmetric
Suppose $\RR$ is symmetric on $S$.

Then:














\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR {\restriction_T}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \paren {T \times T} \cap \RR\)





Definition of Restriction of Relation








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds T \times T\)


















\(\, \ds \land \, \)

\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}\)

\(\in\)







\(\ds T \times T\)


















\(\, \ds \land \, \)

\(\ds \tuple {y, x}\)

\(\in\)







\(\ds \RR\)





$\RR$ is symmetric on $S$








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}\)

\(\in\)







\(\ds \paren {T \times T} \cap \RR\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}\)

\(\in\)







\(\ds \RR {\restriction_T}\)





Definition of Restriction of Relation




and so $\RR {\restriction_T}$ is symmetric on $T$.
$\blacksquare$


Restriction of Asymmetric Relation is Asymmetric
Suppose $\RR$ is asymmetric on $S$.

Then:














\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR {\restriction_T}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \paren {T \times T} \cap \RR\)





Definition of Restriction of Relation








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)





Intersection is Subset








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}\)

\(\notin\)







\(\ds \RR\)





$\RR$ is asymmetric on $S$








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}\)

\(\notin\)







\(\ds \RR {\restriction_T}\)





Definition of Restriction of Relation




and so $\RR {\restriction_T}$ is asymmetric on $T$.
$\blacksquare$


Restriction of Antisymmetric Relation is Antisymmetric
Suppose $\RR$ is antisymmetric on $S$.
Then:














\(\ds \set {\tuple {x, y}, \tuple {y, x} }\)

\(\subseteq\)







\(\ds \RR {\restriction_T}\)














\(\ds \leadsto \ \ \)





\(\ds \set {\tuple {x, y}, \tuple {y, x} }\)

\(\subseteq\)







\(\ds \paren {T \times T} \cap \RR\)





Definition of Restriction of Relation








\(\ds \leadsto \ \ \)





\(\ds \set {\tuple {x, y}, \tuple {y, x} }\)

\(\subseteq\)







\(\ds \RR\)





Intersection is Subset








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





$\RR$ is Antisymmetric on $S$



Thus $\RR {\restriction_T}$ is antisymmetric on $T$.
$\blacksquare$


Transitivity
Restriction of Transitive Relation is Transitive
Suppose $\RR$ is transitive on $S$.
Then by definition:

$\set {\tuple {x, y}, \tuple {y, z} } \subseteq \RR \implies \tuple {x, z} \in \RR$

So:














\(\ds \set {\tuple {x, y}, \tuple {y, z} }\)

\(\subseteq\)







\(\ds \RR {\restriction_T}\)














\(\ds \leadsto \ \ \)





\(\ds \set {\tuple {x, y}, \tuple {y, z} }\)

\(\subseteq\)







\(\ds \paren {T \times T} \cap \RR\)





Definition of Restriction of Relation








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, z}\)

\(\in\)







\(\ds \paren {T \times T} \cap \RR\)





$\RR$ is transitive on $S$








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, z}\)

\(\in\)







\(\ds \RR {\restriction_T}\)





Definition of Restriction of Relation




Therefore, if $x, y, z \in T$, it follows that:

$\set {\tuple {x, y}, \tuple {y, z} } \subseteq \RR {\restriction_T} \implies \tuple {x, z} \in \RR {\restriction_T}$
and so by definition $\RR {\restriction_T}$ is a transitive relation on $T$.
$\blacksquare$


Restriction of Antitransitive Relation is Antitransitive
Suppose $\RR$ is antitransitive on $S$.
Then by definition:

$\set {\tuple {x, y}, \tuple {y, z} } \subseteq \RR \implies \tuple {x, z} \notin \RR$

So:














\(\ds \set {\tuple {x, y}, \tuple {y, z} }\)

\(\subseteq\)







\(\ds \RR {\restriction_T}\)














\(\ds \leadsto \ \ \)





\(\ds \set {\tuple {x, y}, \tuple {y, z} }\)

\(\subseteq\)







\(\ds \paren {T \times T} \cap \RR\)





Definition of Restriction of Relation








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, z}\)

\(\notin\)







\(\ds \paren {T \times T} \cap \RR\)





as $\RR$ is antitransitive on $S$








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, z}\)

\(\in\)







\(\ds \RR {\restriction_T}\)





Definition of Restriction of Relation




Therefore, if $x, y, z \in T$, it follows that:

$\set {\tuple {x, y}, \tuple {y, z} } \subseteq \RR {\restriction_T} \implies \tuple {x, z} \notin \RR {\restriction_T}$
and so by definition $\RR {\restriction_T}$ is an antitransitive relation on $T$.
$\blacksquare$


Connectedness
Restriction of Connected Relation is Connected
Suppose $\RR$ is connected on $S$.
That is:

$\forall a, b \in S: a \ne b \implies \tuple {a, b} \in \RR \lor \tuple {b, a} \in \RR$

So:














\(\ds a, b\)

\(\in\)







\(\ds T\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {a, b}\)

\(\in\)







\(\ds T \times T\)


















\(\, \ds \land \, \)

\(\ds \tuple {b, a}\)

\(\in\)







\(\ds T \times T\)





Definition of Ordered Pair and Definition of Cartesian Product








\(\ds \leadsto \ \ \)





\(\ds \tuple {a, b}\)

\(\in\)







\(\ds \paren {T \times T} \cap \RR\)


















\(\, \ds \lor \, \)

\(\ds \tuple {b, a}\)

\(\in\)







\(\ds \paren {T \times T} \cap \RR\)





as $\RR$ is connected on $S$








\(\ds \leadsto \ \ \)





\(\ds \tuple {a, b}\)

\(\in\)







\(\ds R \restriction_T\)


















\(\, \ds \lor \, \)

\(\ds \tuple {b, a}\)

\(\in\)







\(\ds R {\restriction_T}\)





Definition of Restriction of Relation




and so $\RR {\restriction_T}$ is connected on $T$.
$\blacksquare$


Also see
Properties of Relation Not Preserved by Restriction
If a relation is:

serial,
non-reflexive,
non-symmetric,
non-transitive or
non-connected
it is impossible to state without further information whether or not any restriction of that relation has the same properties.





