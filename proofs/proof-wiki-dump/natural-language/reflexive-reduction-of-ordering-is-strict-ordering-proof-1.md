# 

Source: https://proofwiki.org/wiki/Reflexive_Reduction_of_Ordering_is_Strict_Ordering/Proof_1



Theorem
Let $\RR$ be an ordering on a set $S$.
Let $\RR^\ne$ be the reflexive reduction of $\RR$.

Then $\RR^\ne$ is a strict ordering on $S$.


Proof
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





