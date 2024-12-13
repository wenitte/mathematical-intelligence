# 

Source: https://proofwiki.org/wiki/Join_Prime_Element_is_Dual_of_Meet_Prime_Element


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $z \in S$.

The following are dual statements:

$z$ is the meet prime element of the meet semilattice $\struct {S, \wedge, \preceq}$
$z$ is the join prime element of the join semilattice $\struct {S, \vee, \preceq}$


Proof
By definition of meet prime element:

$z$ is the meet prime element of the meet semilattice $\struct {S, \wedge, \preceq}$
if and only if:

$\forall x, y \in S: \paren{x \wedge y \preceq z} \implies \leftparen{x \preceq z}$ or $\rightparen{y \preceq z}$

By the duality principle, the dual of this statement is:

$\forall x, y \in S: \paren{z \preceq x \vee y} \implies \leftparen{z \preceq z}$ or $\rightparen{z \preceq y}$

By definition of join prime element:

$z$ is the join prime element of the join semilattice $\struct {S, \vee, \preceq}$
$\blacksquare$


Also see
Duality Principle (Order Theory)




