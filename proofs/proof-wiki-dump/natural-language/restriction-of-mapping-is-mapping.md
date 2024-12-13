# 

Source: https://proofwiki.org/wiki/Restriction_of_Mapping_is_Mapping



Theorem
Let $f: S \to T$ be a mapping.
Let $X \subseteq S$.
Let $f \restriction_X$ be the restriction of $f$ to $X$.

Then $f \restriction_X: X \to T$ is a mapping:

whose domain is $X$
whose preimage is $X$.


General Result
Let $f: S \to T$ be a mapping.
Let $X \subseteq S$.
Let $f \sqbrk X \subseteq Y \subseteq T$.
Let $f \restriction_{X \times Y}$ be the restriction of $f$ to $X \times Y$.

Then $f \restriction_{X \times Y}: X \to Y$ is a mapping:

whose domain is $X$
whose preimage is $X$
whose codomain is $Y$.


Proof
As $f: S \to T$ is a mapping, we have that:

$\forall x \in S: \tuple {x, y_1} \in f \land \tuple {x, y_2} \in f \implies y_1 = y_2$
From the definition of a subset, $x \in X \implies x \in S$, and so:

$\forall x \in X: \tuple {x, y_1} \in f \restriction_X \land \tuple {x, y_2} \in f \restriction_X \implies y_1 = y_2$

Also from the definition of a mapping:

$\forall x \in S: \exists y \in T: \tuple {x, y} \in f$
Again from the definition of a subset, $x \in X \implies x \in S$, and so:

$\forall x \in X: \exists y \in T: \tuple {x, y} \in f \restriction_X$

So $f \restriction_X: X \to T$ is a mapping.

The fact that the domain of $f \restriction_X$ is $X$ follows from the definition of domain.
The fact that the preimage of $f \restriction_X$ is also $X$ follows from Preimage of Mapping equals Domain.
$\blacksquare$


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.): $\S 1.6$




