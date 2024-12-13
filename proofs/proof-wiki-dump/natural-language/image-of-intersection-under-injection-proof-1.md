# 

Source: https://proofwiki.org/wiki/Image_of_Intersection_under_Injection/Proof_1

Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.

Then:

$\forall A, B \subseteq S: f \sqbrk {A \cap B} = f \sqbrk A \cap f \sqbrk B$
if and only if $f$ is an injection.

This can be expressed in the language and notation of direct image mappings as:

$\forall A, B \subseteq S: \map {f^\to} {A \cap B} = \map {f^\to} A \cap \map {f^\to} B$


Proof
An injection is a type of one-to-one relation, and therefore also a one-to-many relation.

Therefore Image of Intersection under One-to-Many Relation applies:

$\forall A, B \subseteq S: \RR \sqbrk {A \cap B} = \RR \sqbrk A \cap \RR \sqbrk B$
if and only if $\RR$ is a one-to-many relation.

We have that $f$ is a mapping and therefore a many-to-one relation.
So $f$ is a one-to-many relation if and only if $f$ is also an injection.

It follows that:

$\forall A, B \subseteq S: f \sqbrk {A \cap B} = f \sqbrk A \cap f \sqbrk B$
if and only if $f$ is an injection.
$\blacksquare$





