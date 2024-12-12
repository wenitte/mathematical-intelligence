# 

Source: https://proofwiki.org/wiki/Complement_of_Reflexive_Relation

Theorem
Let $\RR \subseteq S \times S$ be a relation.
Then $\RR$ is reflexive if and only if its complement $\relcomp {S \times S} \RR \subseteq S \times S$ is antireflexive.
Likewise, $\RR$ is antireflexive if and only if its complement $\relcomp {S \times S} \RR \subseteq S \times S$ is reflexive.


Proof
Let $\RR \subseteq S \times T$ be reflexive.
Then:

$\forall x \in S: \tuple {x, x} \in \RR$
By the definition of complement of $\RR$:

$\tuple {x, y} \in \RR \implies \tuple {x, y} \notin \relcomp {S \times S} \RR$
The same applies to $\tuple {x, x}$, and thus:

$\forall x \in S: \tuple {x, x} \notin \relcomp {S \times S} \RR$
Thus $\relcomp {S \times S} \RR$ is antireflexive.

Similarly, by definition:

$\forall x \in S: \tuple {x, x} \notin \RR \implies \neg \tuple {x, x} \notin \relcomp {S \times S} \RR$
By Double Negation it follows that:

$\tuple {x, x} \in \relcomp {S \times S} \RR$

The converses of these results follow from the fact that:

$\relcomp {S \times S} {\relcomp {S \times S} \RR} = \RR$
by Relative Complement of Relative Complement.
$\blacksquare$





