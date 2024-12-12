# 

Source: https://proofwiki.org/wiki/Equivalence_of_Mappings_between_Finite_Sets_of_Same_Cardinality

Theorem
Let $S$ and $T$ be finite sets such that $\card S = \card T$.
Let $f: S \to T$ be a mapping.

Then the following statements are equivalent:

$(1): \quad f$ is bijective
$(2): \quad f$ is injective
$(3): \quad f$ is surjective.


Proof
$(2)$ implies $(3)$:
Let $f$ be an injection.
Then by Cardinality of Image of Injection:

$\card S = \card {f \sqbrk S}$
where $f \sqbrk S$ denotes the image of $S$ under $f$.
Therefore the subset $f \sqbrk S$ of $T$ has the same number of elements as $T$.
Therefore:

$f \sqbrk S = T$
and so $f$ is a surjection.
$\Box$

$(3)$ implies $(1)$:
Let $f$ be surjective.
We have that $\card S = \card T$.
By Cardinality of Codomain of Surjection, $f$ is bijective.
$\Box$

$(1)$ implies $(2)$:
Let $f$ be a bijection.
By definition of bijection, $f$ is also an injection.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 17$: Finite Sets: Theorem $17.7$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 22.4$: Injections; bijections; inverse of a bijection
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.10$: Finite Sequences: Proposition $\text{A}.10.1: \ 3$
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $2$: 'And you do addition?': $\S 2.1$: Functions: Ponderable $2.1.6$




