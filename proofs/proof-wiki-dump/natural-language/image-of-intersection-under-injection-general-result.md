# 

Source: https://proofwiki.org/wiki/Image_of_Intersection_under_Injection/General_Result

Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let $\powerset S$ be the power set of $S$.

Then:

$\ds \forall \mathbb S \subseteq \powerset S: f \sqbrk {\bigcap \mathbb S} = \bigcap_{X \mathop \in \mathbb S} f \sqbrk X$
if and only if $f$ is an injection.

This can be expressed in the language and notation of direct image mappings as:

$\ds \forall \mathbb S \subseteq \powerset S : \map {f^\to} {\bigcap \mathbb S} = \bigcap_{X \mathop \in \mathbb S} \map {f^\to} X$


Proof
An injection is a type of one-to-one relation, and therefore also a one-to-many relation.

Therefore Image of Intersection under One-to-Many Relation applies:

$\ds \forall \mathbb S \subseteq \powerset S: \RR \sqbrk {\bigcap \mathbb S} = \bigcap_{X \mathop \in \mathbb S} \RR \sqbrk {\mathbb S}$
if and only if $\RR$ is a one-to-many relation.

We have that $f$ is a mapping and therefore a many-to-one relation.
So $f$ is a one-to-many relation if and only if $f$ is also an injection.

It follows that:

$\ds \forall \mathbb S \subseteq \powerset S: f \sqbrk {\bigcap \mathbb S} = \bigcap_{X \mathop \in \mathbb S} f \sqbrk X$
if and only if $f$ is an injection.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $1$: Pairs, Relations, and Functions: Exercise $7 \ \text {(b)}$




