# 

Source: https://proofwiki.org/wiki/User:Leigh.Samphier/Topology/Lattice_Isomorphism_is_Isomorphism_in_Category_Lat


This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\mathbf{Lat}$ denote the category of lattices.

Let $f : L_1 \to L_2$ be a morphism of $\mathbf{Lat}$.

Then:

$f$ is an isomorphism of $\mathbf{Lat}$ if and only if $f$ is a lattice isomorphsm


Proof
Let $L_1$ and $L_2$ be the lattices $L_1 = \struct{A_1, \vee_1, \wedge_1, \preceq_1}$ and $L_2 = \struct{A_2, \vee_2, \wedge_2, \preceq_2}$ respectively.

By definition of category of lattices:

$f$ is a lattice homomorphisms

By definition of an isomorphism:

$f$ be an isomorphism of $\mathbf{Lat}$
if and only if:

$(1):$ there exists a morphism of $g : L_2 \to L_1$ of $\mathbf{Lat}$ such that:
$g \circ f = \operatorname{id}_{L_1}$ and $f \circ g = \operatorname{id}_{L_2}$
where $\operatorname{id}_{L_1}$ and $\operatorname{id}_{L_2}$ are identity morphisms.

By definition of category of lattices:

$f$ satisfies $(1)$
if and only if:

$(2):$ there exists a lattice homomorphism $g : L_2 \to L_1$ such that:
the standard compositions of mappings $g \circ f = \operatorname{id}_{A_1}$ and $f \circ g = \operatorname{id}_{A_2}$
where $\operatorname{id}_{A_1}$ and $\operatorname{id}_{A_2}$ are identity mappings.
Necessary Condition
Let $f$ be an isomorphism of $\mathbf{Lat}$.

Then $f$ satisfies $(2)$.

Hence $f$ is a bijection by definition.

It follows that $f$ is a lattice isomorphsm by definition.
$\Box$

Sufficient Condition
Let $f$ be a lattice isomorphsm.

By definition of lattice isomorphsm:

$f$ is a bijection

By definition of bijection:

there exists a mapping $g : A_2 \to A_1$ such that:
the standard compositions of mappings $g \circ f = \operatorname{id}_{A_1}$ and $f \circ g = \operatorname{id}_{A_2}$
where $\operatorname{id}_{A_1}$ and $\operatorname{id}_{A_2}$ are identity mappings.

From User:Leigh.Samphier/Topology/Inverse of Lattice Isomorphism is Lattice Isomorphism:

$g$ is a lattice homomorphism

Hence $f$ satisfies $(2)$.

It follows that $f$ is an isomorphism of $\mathbf{Lat}$. 
$\blacksquare$





