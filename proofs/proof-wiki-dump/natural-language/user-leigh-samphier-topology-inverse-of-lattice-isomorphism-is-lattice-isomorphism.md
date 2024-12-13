# 

Source: https://proofwiki.org/wiki/User:Leigh.Samphier/Topology/Inverse_of_Lattice_Isomorphism_is_Lattice_Isomorphism


This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $L_1 = \struct {A_1, \vee_1, \wedge_1, \preceq_1}$ and $L_2 = \struct {A_2, \vee_2, \wedge_2, \preceq_2}$ be lattices.

Let $\phi: L_1 \to L_2$ be a lattice isomorphism.
Let $\phi^{-1} : A_2 \to A_1$ be the inverse of $\phi : A_1 \to A_2$.

Then:

$\phi^{-1} : L_2 \to L_1$ is a lattice isomorphism
Proof
From Inverse of Bijection is Bijection:

$\phi^{-1}$ is a bijection

By definition of lattice isomorphism it remains to show that $\phi^{-1}$ is a lattice homomorphism.

From Lattice Homomorphism is Both Meet and Join Semilattice Homomorphism:

$\phi : \struct {A_1, \vee_1, \preceq_1} \to \struct {A_2, \vee_2, \preceq_2}$ is a semilattice homomorphism

By definition of isomorphism:

$\phi : \struct {A_1, \vee_1, \preceq_1} \to \struct {A_2, \vee_2, \preceq_2}$ is a semilattice isomorphism

From Inverse of Algebraic Structure Isomorphism is Isomorphism:

$\phi^{-1} : \struct {A_2, \vee_2, \preceq_2} \to \struct {A_1, \vee_1, \preceq_1}$ is a semilattice isomorphism

By definition of isomorphism:

$(1):\quad \phi^{-1} : \struct {A_2, \vee_2, \preceq_2} \to \struct {A_1, \vee_1, \preceq_1}$ is a semilattice homomorphism

The dual statement of $(1)$ is:

$(2)\quad \phi^{-1} : \struct {A_2, \wedge_2, \preceq_2} \to \struct {A_1, \wedge_1, \preceq_1}$ is a semilattice homomorphism
by Dual Pairs (Order Theory).

We have $(2)$ holds from Duality Principle.

By definition of lattice homomorphism:

$\phi^{-1} : \struct {A_2, \vee_2, \wedge_2, \preceq_2} \to \struct {A_1, \vee_1, \wedge_2, \preceq_1}$ is a lattice isomorphism
$\blacksquare$





