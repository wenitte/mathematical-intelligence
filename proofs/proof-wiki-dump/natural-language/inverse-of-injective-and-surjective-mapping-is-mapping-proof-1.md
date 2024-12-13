# 

Source: https://proofwiki.org/wiki/Inverse_of_Injective_and_Surjective_Mapping_is_Mapping/Proof_1

Theorem
Let $f: S \to T$ be a mapping such that:

$(1): \quad f$ is an injection
$(2): \quad f$ is a surjection.

Then the inverse $f^{-1}$ of $f$ is itself a mapping.


Proof
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





