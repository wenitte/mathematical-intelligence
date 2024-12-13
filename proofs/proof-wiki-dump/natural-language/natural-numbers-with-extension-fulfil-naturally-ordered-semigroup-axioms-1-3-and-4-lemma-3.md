# 

Source: https://proofwiki.org/wiki/Natural_Numbers_with_Extension_fulfil_Naturally_Ordered_Semigroup_Axioms_1,_3_and_4/Lemma_3



Lemma for Natural Numbers with Extension fulfil Naturally Ordered Semigroup Axioms 1, 3 and 4
Construction
Let $\N$ denote the set of natural numbers.
Let $\beta$ be an object such that $\beta \notin \N$
Let $M = \N \cup \set \beta$.
Let us extend the operation of natural number addition from $\N$ to $M$ by defining:














\(\ds 0 + \beta\)

\(=\)







\(\ds \beta + 0 = \beta\)




















\(\ds \beta + \beta\)

\(=\)







\(\ds \beta\)




















\(\ds n + \beta\)

\(=\)







\(\ds \beta + n = n\)










The algebraic structure:

$\struct {M, +}$
is not isomorphic to $\struct {\N, +}$.


Proof
Aiming for a contradiction, suppose there exists a (semigroup) isomorphism $\phi$ from $\struct {M, +}$ to $\struct {\N, +}$.
By definition of isomorphism:

$\phi$ is a homomorphism
$\phi$ is a bijection.

As $\phi$ is a fortiori a surjection, $\phi$ is also an epimorphism.
Hence from Epimorphism Preserves Identity:

$\map \phi 0 = 0$

Let $a \in M$ such that $a \ne \beta$ and $a \ne 0$.
Then:














\(\ds \map \phi a\)

\(=\)







\(\ds \map \phi {a + \beta}\)





Definition of $\beta$














\(\ds \)

\(=\)







\(\ds \map \phi a + \map \phi \beta\)





Definition of Semigroup Homomorphism








\(\ds \leadsto \ \ \)





\(\ds \map \phi \beta\)

\(=\)







\(\ds 0\)





as $0$ is the identity of $\N$



But then:

$\map \phi \beta = \map \phi 0$
and so $\phi$ is not injective.
Hence, by definition, $\phi$ is not a bijection.
This contradicts our assertion that $\phi$ is an isomorphism.
Hence there can be no such semigroup isomorphism between $\struct {M, +}$ and $\struct {\N, +}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.2 \ \text{(d)}$




