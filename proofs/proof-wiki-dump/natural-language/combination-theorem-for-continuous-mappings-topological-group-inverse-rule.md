# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Mappings/Topological_Group/Inverse_Rule

Theorem
Let $\struct {S, \tau_S}$ be a topological space.
Let $\struct {G, *, \tau_G}$ be a topological group.

Let $g: \struct {S, \tau_S} \to \struct {G, \tau_G}$ be a continuous mapping.

Let $g^{-1}: S \to G$ be the mapping defined by:

$\forall x \in S: \map {\paren {g^{-1} } } x = \paren {\map g x}^{-1}$

Then:

$g^{-1}: \struct {S, \tau_S} \to \struct {G, \tau_G}$ is a continuous mapping.


Proof
By definition of a topological group:

$\phi: \struct {G, \tau_G} \to \struct {G, \tau_G}$ such that $\forall x \in G: \map \phi x = x^{-1}$ is a continuous mapping
From Composite of Continuous Mappings is Continuous:

the composition $\phi \circ g: \struct {S, \tau_S} \to \struct {G, \tau_G}$ is continuous.

Now:










\(\ds \forall x \in S: \, \)



\(\ds \map {\paren {g^{-1} } } x\)

\(=\)







\(\ds \paren {\map g x}^{-1}\)





Definition of $g^{-1}$














\(\ds \)

\(=\)







\(\ds \map \phi {\map g x}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \map {\paren {\phi \circ g} } x\)





Definition of Composition of Mappings



From Equality of Mappings:

$g^{-1} = \phi \circ g$
The result follows.
$\blacksquare$





