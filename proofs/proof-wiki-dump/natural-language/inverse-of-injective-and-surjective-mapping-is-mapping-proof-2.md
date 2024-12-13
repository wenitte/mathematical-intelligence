# 

Source: https://proofwiki.org/wiki/Inverse_of_Injective_and_Surjective_Mapping_is_Mapping/Proof_2

Theorem
Let $f: S \to T$ be a mapping such that:

$(1): \quad f$ is an injection
$(2): \quad f$ is a surjection.

Then the inverse $f^{-1}$ of $f$ is itself a mapping.


Proof
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


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 9$: Inverse Functions, Extensions, and Restrictions




