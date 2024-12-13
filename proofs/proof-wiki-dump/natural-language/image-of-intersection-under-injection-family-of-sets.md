# 

Source: https://proofwiki.org/wiki/Image_of_Intersection_under_Injection/Family_of_Sets

Theorem
Let $S$ and $T$ be sets.
Let $\family {S_i}_{i \mathop \in I}$ be a family of subsets of $S$.
Let $f: S \to T$ be a mapping.

Then:

$\ds f \sqbrk {\bigcap_{i \mathop \in I} S_i} = \bigcap_{i \mathop \in I} f \sqbrk {S_i}$
if and only if $f$ is an injection.

This can be expressed in the language and notation of direct image mappings as:

$\ds \map {f^\to} {\bigcap_{i \mathop \in I} S_i} = \bigcap_{i \mathop \in I} \map {f^\to} {S_i}$


Proof
An injection is a type of one-to-one relation, and therefore also a one-to-many relation.

Therefore Image of Intersection under One-to-Many Relation: Family of Sets applies:

$\ds \RR \sqbrk {\bigcap_{i \mathop \in I} S_i} = \bigcap_{i \mathop \in I} \RR \sqbrk {S_i}$
if and only if $\RR$ is a one-to-many relation.

We have that $f$ is a mapping and therefore a many-to-one relation.
So $f$ is a one-to-many relation if and only if $f$ is also an injection.

It follows that:

$\ds f \sqbrk {\bigcap_{i \mathop \in I} S_i} = \bigcap_{i \mathop \in I} f \sqbrk {S_i}$
if and only if $f$ is an injection.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Exercise $1$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions: Exercise $3 \ \text{(c})$




