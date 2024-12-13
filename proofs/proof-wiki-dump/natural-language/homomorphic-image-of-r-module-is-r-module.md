# 

Source: https://proofwiki.org/wiki/Homomorphic_Image_of_R-Module_is_R-Module



Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {G, +_G, \circ_G}_R$ be an $R$-module.
Let $\struct {H, +_H, \circ_H}_R$ be an $R$-algebraic structure.
Let $\phi: G \to H$ be a homomorphism.

Then the homomorphic image of $\phi$ is an $R$-module.


Proof
Let us write $\phi \sqbrk G$ to denote the homomorphic image of $\phi$.
From Image of Group Homomorphism is Subgroup, $\phi \sqbrk G$ is a subgroup of $\struct {H, +_H}$.
For any $\map \phi g$ and $\map \phi {g'}$ in $\phi \sqbrk G$, we have:














\(\ds \map \phi g +_H \map \phi {g'}\)

\(=\)







\(\ds \map \phi {g +_G g'}\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \map \phi {g' +_G g'}\)





Definition of Abelian Group














\(\ds \)

\(=\)







\(\ds \map \phi {g'} +_H \map \phi g\)





Definition of Morphism Property



hence $\phi \sqbrk G$ is an abelian group.

Now we can turn to showing that $\phi \sqbrk G$ is an $R$-module.
To do this, we take the module axioms in turn.


Module Axiom $\text M 1$: Distributivity over Module Addition
It is to be shown that for all $\lambda \in R$ and $\map \phi g, \map \phi {g'} \in \phi \sqbrk G$:

$\lambda \circ_H \paren {\map \phi g +_H \map \phi {g'} } = \paren {\lambda \circ_H \map \phi g} +_H \paren {\lambda \circ_H \map \phi {g'} }$
Compute, using that $\phi$ is a homomorphism repetitively:














\(\ds \lambda \circ_H \paren {\map \phi g +_H \map \phi {g'} }\)

\(=\)







\(\ds \lambda \circ_H \map \phi {g +_G g'}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\lambda \circ_G \paren {g +_G} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\paren {\lambda \circ_G g} +_G \paren {\lambda \circ_G g'} }\)





$G$ is an $R$-module














\(\ds \)

\(=\)







\(\ds \map \phi {\lambda \circ_G g} +_H \map \phi {\lambda \circ_G g'}\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \paren {\lambda \circ_H \map \phi g} +_H \paren {\lambda \circ_H \map \phi {g'} }\)









$\Box$


Module Axiom $\text M 2$: Distributivity over Scalar Addition
It is to be shown that for all $\lambda, \mu \in R$ and $\map \phi g \in \phi \sqbrk G$:

$\paren {\lambda +_R \mu} \circ_H \map \phi g = \paren {\lambda \circ_H \map \phi g} +_H \paren {\mu \circ_H \map \phi g}$
Compute, using that $\phi$ is a homomorphism repetitively:














\(\ds \paren {\lambda +_R \mu} \circ_H \map \phi g\)

\(=\)







\(\ds \map \phi {\paren {\lambda +_R \mu} \circ_G g}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\paren {\lambda \circ_G g} +_G \paren {\mu \circ_G g} }\)





$G$ is an $R$-module














\(\ds \)

\(=\)







\(\ds \map \phi {\lambda \circ_G g} +_H \map \phi {\mu \circ_G g}\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \paren {\lambda \circ_H \map \phi g} +_H \paren {\mu \circ_H \map \phi g}\)









$\Box$


Module Axiom $\text M 3$: Associativity
It is to be shown that for all $\lambda, \mu \in R$ and $\map \phi g \in \phi \sqbrk G$:

$\paren {\lambda \times_R \mu} \circ_H \map \phi g = \lambda \circ_H \paren {\mu \circ_H \map \phi g}$
Compute, using that $\phi$ is a homomorphism repetitively:














\(\ds \paren {\lambda \times_R \mu} \circ_H \map \phi g\)

\(=\)







\(\ds \map \phi {\paren {\lambda \times_R \mu} \circ_G g}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\lambda \circ_G \paren {\mu \circ_G g} }\)





$G$ is an $R$-module














\(\ds \)

\(=\)







\(\ds \lambda \circ_H \map \phi {\mu \circ_G g}\)




















\(\ds \)

\(=\)







\(\ds \lambda \circ_H \paren {\mu \circ_H \map \phi g}\)









$\Box$

Having verified that $\phi \sqbrk G$ satisfies the three module axioms, we conclude it is an $R$-module.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations




