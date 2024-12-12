# 

Source: https://proofwiki.org/wiki/Characterization_of_Join_Irreducible_Element


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct{S, \vee, \preceq}$ be a join semilattice.
Let $z \in S$.

Then:

$z$ is join-irreducible
if and only if

$\forall x, y \in S : \leftparen{x \prec z}$ and $\rightparen{y \prec z} \implies \paren{x \vee y \prec z}$
where $x \prec z$ denotes that $x \preceq z$ and $x \neq z$. 

Proof
By Dual Pairs (Order Theory):

join semilattice is dual to meet semilattice.
join irreducible element is dual to meet irreducible element.
join is dual to meet.
succeeds is dual to precedes.
Thus the theorem holds by the duality principle applied to Characterization of Meet Irreducible Element.
$\blacksquare$





