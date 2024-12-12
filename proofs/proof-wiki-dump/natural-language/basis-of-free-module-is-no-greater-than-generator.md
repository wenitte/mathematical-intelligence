# 

Source: https://proofwiki.org/wiki/Basis_of_Free_Module_is_No_Greater_than_Generator



Theorem
Let $R$ be a commutative ring with unity.
Let $M$ be a free $R$-module with basis $B$.
Let $S$ be a generating set for $M$.

Then:

$\size B \le \size S$.
That is, there exists an injection from $B$ to $S$.


Outline of Proof
Because $S$ is a spanning set, we can construct a surjective homomorphism $R^{\paren S} \to R^{\paren B}$.
Using Krull's Theorem we divide through by a maximal ideal of $R$ to reduce it to the case where $R$ is a division ring, that is, the case of vector spaces.
We then conclude by comparing cardinalities and using Basis of Vector Space Injects into Generator.


Proof
Because $S$ is a generating set, there is a surjective homomorphism

$\phi : R^{\paren S} \to M$
where $R^{\paren S}$ is the free $R$-module on $S$.
Because $B$ is a basis, there is an isomorphism

$\psi : R^{\paren B} \to M$
Thus $f = \psi^{-1} \circ \phi: R^{\paren S} \to R^{\paren B}$ is a surjective module homomorphism.

By Krull's Theorem, there exists a maximal ideal $M \subset R$.
By Maximal Ideal iff Quotient Ring is Field, $R / M$ is a field.
Let $k = R / M$.
Let $\pi: R \to k$ denote the quotient mapping.

By some universal properties, there exists a $k$-module homomorphism $\bar f: k^{\paren S} \to k^{\paren B}$ such that:

$\pi^B \circ f = \bar f \circ \pi^S$
Where $\pi^B$ denotes direct sum of module homomorphisms.
Because $\pi^B \circ f$ is surjective, so is $\bar f$.
Let:

$C$ be the canonical basis of $k^{\paren S}$
$D$ be the canonical basis of $k^{\paren S}$
Because $C$ is a generator of $k^{\paren S}$ and $\bar f$ is surjective, $\map {\bar f} C$ is a generator of $k^{\paren B}$.
We have:














\(\ds \size B\)

\(=\)







\(\ds \size D\)





Cardinality of Canonical Basis of Free Module on Set














\(\ds \)

\(\le\)







\(\ds \size {\map {\bar f} C}\)





Basis of Vector Space Injects into Generator














\(\ds \)

\(\le\)







\(\ds \size C\)





Cardinality of Image of Mapping not greater than Cardinality of Domain














\(\ds \)

\(=\)







\(\ds \size S\)





Cardinality of Canonical Basis of Free Module on Set



$\blacksquare$


This article, or a section of it, needs explaining.In particular: find those universal propertiesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Also see
Bases of Free Module have Equal Cardinality




