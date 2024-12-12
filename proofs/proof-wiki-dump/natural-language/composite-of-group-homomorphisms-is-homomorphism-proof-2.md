# 

Source: https://proofwiki.org/wiki/Composite_of_Group_Homomorphisms_is_Homomorphism/Proof_2

Theorem
Let:

$\struct {G_1, \circ}$
$\struct {G_2, *}$
$\struct {G_3, \oplus}$
be groups.
Let:

$\phi: \struct {G_1, \circ} \to \struct {G_2, *}$
$\psi: \struct {G_2, *} \to \struct {G_3, \oplus}$
be homomorphisms.

Then the composite of $\phi$ and $\psi$ is also a homomorphism.


Proof
So as to alleviate possible confusion over notation, let the composite of $\phi$ and $\psi$ be denoted $\psi \bullet \phi$ instead of the more usual $\psi \circ \phi$.
Then what we are trying to prove is denoted:

$\paren {\psi \bullet \phi}: \struct {G_1, \circ} \to \struct {G_3, \oplus}$ is a homomorphism.

To prove the above is the case, we need to demonstrate that the morphism property is held by $\circ$ under $\psi \bullet \phi$.

We take two elements $x, y \in G_1$, and put them through the following wringer:














\(\ds \map {\paren {\psi \bullet \phi} } {x \circ y}\)

\(=\)







\(\ds \map \psi {\map \phi {x \circ y} }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map \psi {\map \phi x * \map \phi y}\)





Definition of Morphism Property: applied to $\circ$ under $\phi$














\(\ds \)

\(=\)







\(\ds \map \psi {\map \phi x} \oplus \map \psi {\map \phi y}\)





Definition of Morphism Property: applied to $*$ under $\psi$














\(\ds \)

\(=\)







\(\ds \map {\paren {\psi \bullet \phi} } x \oplus \map {\paren {\psi \bullet \phi} } y\)





Definition of Composition of Mappings




Disentangling the confusing and tortuous expressions above, we (eventually) see that this shows that the morphism property is indeed held by $\circ$ under $\psi \bullet \phi$.

Thus $\paren {\psi \bullet \phi}: \struct {G_1, \circ} \to \struct {G_3, \oplus}$ is indeed a homomorphism.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.2$. Some lemmas on homomorphisms: Lemma $\text{(iv)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Factoring Morphisms
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 60$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $3 \ \text{(i)}$




