# 

Source: https://proofwiki.org/wiki/Antireflexive_and_Transitive_Relation_is_Asymmetric



Theorem
Let $\RR \subseteq S \times S$ be a relation which is not null.
Let $\RR$ be antireflexive and transitive.

Then $\RR$ is also asymmetric.


Proof
Let $\RR \subseteq S \times S$ be antireflexive and transitive.

That is:














\(\ds \forall x \in S:\)

\(\)







\(\ds \tuple {x, x} \notin \RR\)





Definition of Antireflexive Relation














\(\ds \tuple {x, y} \in \RR \land \tuple {y, z} \in \RR\)

\(\implies\)







\(\ds \tuple {x, z} \in \RR\)





Definition of Transitive Relation




We have that $\RR$ is not null.
Aiming for a contradiction, suppose $\RR$ is not asymmetric.
So, by definition, $\exists \tuple {x, y} \in \RR: \tuple {y, x} \in \RR$.
Then from the transitivity of $\RR$ that would mean $\tuple {x, x} \in \RR$.
But that would contradict the antireflexivity of $\RR$.
Therefore:

$\tuple {x, y} \in \RR \implies \tuple {y, x} \notin \RR$
and $\RR$ has been shown to be asymmetric.
$\blacksquare$


Also see
Null Relation is Antireflexive, Symmetric and Transitive for the case where $\RR = \O$.


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $5$ Properties of Relations: $164$
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $1 \ \text {(a)}$




