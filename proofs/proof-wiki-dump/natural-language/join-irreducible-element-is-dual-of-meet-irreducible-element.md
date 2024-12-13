# 

Source: https://proofwiki.org/wiki/Join_Irreducible_Element_is_Dual_of_Meet_Irreducible_Element


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $z \in S$.

The following are dual statements:

$z$ is a meet irreducible element of the meet semilattice $\struct {S, \wedge, \preceq}$
$z$ is a join irreducible element of the join semilattice $\struct {S, \vee, \preceq}$


Proof
By definition of meet irreducible element:

$z$ is the meet irreducible element of the meet semilattice $\struct {S, \wedge, \preceq}$
if and only if:

$\forall x, y \in S: \paren{z = x \wedge y} \implies \leftparen{z = x}$ or $\rightparen{z = y}$

By the duality principle, the dual of this statement is:

$\forall x, y \in S: \paren{z = x \vee y} \implies \leftparen{z = x}$ or $\rightparen{z = y}$

By definition of join irreducible element:

$z$ is the join irreducible element of the join semilattice $\struct {S, \vee, \preceq}$
$\blacksquare$


Also see
Duality Principle (Order Theory)




