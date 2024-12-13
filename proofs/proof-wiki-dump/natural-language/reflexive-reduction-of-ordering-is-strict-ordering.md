# 

Source: https://proofwiki.org/wiki/Reflexive_Reduction_of_Ordering_is_Strict_Ordering



Theorem
Let $\RR$ be an ordering on a set $S$.
Let $\RR^\ne$ be the reflexive reduction of $\RR$.

Then $\RR^\ne$ is a strict ordering on $S$.


Proof 1
Antireflexivity
Follows from Reflexive Reduction is Antireflexive.
$\Box$


Transitivity
Suppose $\tuple {x, y}, \tuple {y, z} \in \RR^\ne$.
By antireflexivity $x \ne y$ and $y \ne z$.

We consider the two remaining cases.


Case 1: $x = z$
If $x = z$ then:

$\tuple {x, y}, \tuple {y, x} \in \RR^\ne$
and so:

$\tuple {x, y}, \tuple {y, x} \in \RR$
Then by the antisymmetry of $\RR$:

$x = y$
and:

$\tuple {x, x} \in \RR^\ne$
which contradicts that $\RR^\ne$ is antireflexive.


Case 2: $x \ne z$
By the transitivity of $\RR$:

$\tuple {x, z} \in \RR$
and by $x$ and $z$ being distinct:

$\tuple {x, z} \notin \Delta_S$
It follows by the definition of reflexive reduction:

$\tuple {x, z} \in \RR^\ne$
Hence $\RR^\ne$ is transitive.
$\blacksquare$


Proof 2
By definition, an ordering is both antisymmetric and transitive.
The result then follows from Reflexive Reduction of Transitive Antisymmetric Relation is Strict Ordering.
$\blacksquare$


Also see
Reflexive Closure of Strict Ordering is Ordering


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings (passim)
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $1 \ \text {(b)}$




