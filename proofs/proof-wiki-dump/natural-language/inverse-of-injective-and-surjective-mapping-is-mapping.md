# 

Source: https://proofwiki.org/wiki/Inverse_of_Injective_and_Surjective_Mapping_is_Mapping

Theorem
Let $f: S \to T$ be a mapping such that:

$(1): \quad f$ is an injection
$(2): \quad f$ is a surjection.

Then the inverse $f^{-1}$ of $f$ is itself a mapping.


Proof 1
Recall the definition of the inverse of $f$:
$f^{-1} \subseteq T \times S$ is the relation defined as:

$f^{-1} = \set {\tuple {t, s}: t = \map f s}$

Let $f: S \to T$ be a mapping such that:

$(1): \quad f$ is an injection
$(2): \quad f$ is a surjection.

By Inverse of Injection is Many-to-One Relation, $f^{-1}$ is many-to-one.
From Inverse of Surjection is Relation both Left-Total and Right-Total $\map {f^{-1} } y$ is left-total.

Thus $f^{-1}$ is:

many-to-one
and

left-total.

Hence, by definition, $f^{-1}$ is a mapping.
$\blacksquare$


Proof 2
Let $f: S \to T$ be a mapping such that:

$(1): \quad f$ is an injection
$(2): \quad f$ is a surjection.

Let $t \in T$.
Then as $f$ is a surjection:

$\exists s \in S: t = \map f s$
As $f$ is an injection, there is only one $s \in S$ such that $t = \map f s$.

Define $\map g t = s$.
As $t \in T$ is arbitrary, it follows that:

$\forall t \in T: \exists s \in S: \map g t = s$
such that $s$ is unique for a given $t$.
That is, $g: T \to S$ is a mapping.
By the definition of $g$:

$(1): \quad \forall t \in T: \map f {\map g t} = t$

Let $s \in S$.
Let:

$(2): \quad s' = \map g {\map f s}$
Then:














\(\ds \map f {s'}\)

\(=\)







\(\ds \map f {\map g {\map f s} }\)




















\(\ds \)

\(=\)







\(\ds \map f s\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds s\)

\(=\)







\(\ds s'\)





as $f$ is an injection














\(\ds \)

\(=\)







\(\ds \map g {\map f s}\)





from $(2)$



Thus $f: S \to T$ and $g: T \to S$ are inverse mappings of each other.
$\blacksquare$





