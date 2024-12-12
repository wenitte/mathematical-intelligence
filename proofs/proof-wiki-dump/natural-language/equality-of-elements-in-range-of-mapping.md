# 

Source: https://proofwiki.org/wiki/Equality_of_Elements_in_Range_of_Mapping



Theorem
Let $f: S \to T$ be a mapping.

Then:

$\exists y \in \Rng f: \tuple {x_1, y} \in f \land \tuple {x_2, y} \in f \iff \map f {x_1} = \map f {x_2}$


Proof
Necessary Condition
Let:

$\exists y \in \Rng f: \tuple {x_1, y} \in f \land \tuple {x_2, y} \in f$
Then:














\(\ds \)

\(\)







\(\ds \tuple {x_1, y} \in f \land \tuple {x_2, y} \in f\)




















\(\ds \)

\(\leadsto\)







\(\ds \map f {x_1} = y \land \map f {x_2} = y\)





Definition of Mapping














\(\ds \)

\(\leadsto\)







\(\ds \map f {x_1} = \map f {x_2}\)





Equality is Equivalence Relation



$\Box$


Sufficient Condition
Let:

$\map f {x_1} = \map f {x_2}$
Then:














\(\ds \)

\(\)







\(\ds \exists y \in \Rng f: \map f {x_1} = y = \map f {x_2}\)




















\(\ds \)

\(\leadsto\)







\(\ds \exists y \in \Rng f: \tuple {x_1, y} \in f \land \tuple {x_2, y} \in f\)





Definition of Mapping



$\Box$

The result follows from the definition of logical equivalence.
$\blacksquare$





