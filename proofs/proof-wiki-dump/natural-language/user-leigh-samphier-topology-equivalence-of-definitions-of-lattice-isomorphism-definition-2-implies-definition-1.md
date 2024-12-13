# 

Source: https://proofwiki.org/wiki/User:Leigh.Samphier/Topology/Equivalence_of_Definitions_of_Lattice_Isomorphism/Definition_2_Implies_Definition_1


This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $L1 = \struct {A_1, \vee_1, \wedge_1, \preceq_1}$ and $L2 = \struct {A_2, \vee_2, \wedge_2, \preceq_2}$ be lattices.

Let $\phi : \struct{A_1, \preceq_1} \to \struct{A_2, \preceq_2}$ be an order isomorphism.

Then:

$\phi$ is a bijective lattice homomorphism


Proof
By definition of order isomorphism:

$\phi : \struct{A_1, \preceq_1} \to \struct{A_2, \preceq_2}$ is an order-preserving bijection

Let $\phi^{-1} : A_2 \to A_1$ be the inverse of $\phi : A_1 \to A_2$.
From Inverse of Order Isomorphism is Order Isomorphism:

$\phi^{-1} :  \struct{A_2, \preceq_2} \to \struct{A_1, \preceq_1}$ is an order isomorphism


$\phi$ Satisfies Join Morphism Property
Let:

$x, y \in A_1$

We have:














\(\ds x, y\)

\(\le\)







\(\ds x \vee_1 y\)





Definition of Supremum








\(\ds \leadsto \ \ \)





\(\ds \map \phi x, \map \phi y\)

\(\le\)







\(\ds \map \phi {x \vee_1 y}\)





Definition of Order-Preserving Mapping








\(\ds \leadsto \ \ \)





\(\ds \map \phi x \vee_2 \map \phi y\)

\(\le\)







\(\ds \map \phi {x \vee_1 y}\)





Definition of Supremum








\(\ds \leadsto \ \ \)





\(\ds \map {\phi^{-1} } {\map \phi x \vee_2 \map \phi y}\)

\(\le\)







\(\ds \map {\phi^{-1} } {\map \phi {x \vee_1 y} }\)





Definition of Order-Preserving Mapping




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map {\phi^{-1} } {\map \phi x \vee_2 \map \phi y}\)

\(\le\)







\(\ds x \vee_1 y\)





Definition of Inverse Mapping




Also we have:














\(\ds \map \phi x, \map \phi y\)

\(\le\)







\(\ds \map \phi x \vee_2 \map \phi y\)





Definition of Supremum








\(\ds \leadsto \ \ \)





\(\ds \map {\phi^{-1} } {\map \phi x}, \map {\phi^{-1} } {\map \phi y}\)

\(\le\)







\(\ds \map {\phi^{-1} } {\map \phi x \vee_2 \map \phi y}\)





Definition of Order-Preserving Mapping








\(\ds \leadsto \ \ \)





\(\ds x, y\)

\(\le\)







\(\ds \map {\phi^{-1} } {\map \phi x \vee_2 \map \phi y}\)





Definition of Inverse Mapping




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds x \vee_1 y\)

\(\le\)







\(\ds \map {\phi^{-1} } {\map \phi x \vee_2 \map \phi y}\)





Definition of Supremum




Hence:














\(\ds x \vee_1 y\)

\(=\)







\(\ds \map {\phi^{-1} } {\map \phi x \vee_2 \map \phi y}\)





Ordering Axiom $(3)$: Antisymmetry applied to $(1)$ and $(2)$














\(\ds \map \phi {x \vee_1 y}\)

\(=\)







\(\ds \map \phi {\map {\phi^{-1} } {\map \phi x \vee_2 \map \phi y} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi x \vee_2 \map \phi y\)





Definition of Inverse Mapping




It follows:

$(3):\quad \forall x, y \in A_1 : \map \phi {x \vee_1 y} = \map \phi x \vee_2 \map \phi y$
That is, $\phi$ satisfies the join morphism property.
$\Box$


$\phi$ Satisfies Meet Morphism Property
The dual statement of $(3)$ is:

$(4):\quad \forall x, y \in A_1 : \map \phi {x \wedge_1 y} = \map \phi x \wedge_2 \map \phi y$
by Dual Pairs (Order Theory).

We have $(4)$ holds from Duality Principle.

That is, $\phi$ satisfies the meet morphism property. 
$\Box$

It follows that $\phi$ is a bijective lattice homomorphism by definition.
$\blacksquare$





