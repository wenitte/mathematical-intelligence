# 

Source: https://proofwiki.org/wiki/Limit_Inferior_of_Inclusion_Net_is_Supremum_of_Directed_Subset

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be an up-complete lattice.
Let $D \subseteq S$ be a directed subset of $S$.
Let $\struct {D, \preceq'}$ be a directed ordered subset of $L$.
Let $i_D: D \to S$, the inclusion mapping, be a net in $S$.

Then $\liminf i_D = \sup D$


Proof

This page has been identified as a candidate for refactoring of basic complexity.In particular: Extract lemmaUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
We will prove that:

(lemma): $\forall j \in D: \map {\inf_L} {\map {\preceq'} j} = j$
Let $j \in D$.
By definitions of image of element and upper closure of element:

$\map {\preceq'} j = j^{\succeq'}$
By Upper Closure in Ordered Subset is Intersection of Subset and Upper Closure:

$j^{\succeq'} = D \cap j^\succeq$
By Intersection is Subset:

$j^{\succeq'} \subseteq j^\succeq$
By Infimum of Subset and Infimum of Upper Closure of Element:

$j \preceq \map {\inf_L} {\map {\preceq'} j}$
By definition of reflexivity:

$j \preceq' j$
By definition of image of element:

$j \in \map {\preceq'} j$
By definitions of infimum and lower bound:

$\map {\inf_L} {\map {\preceq'} j} \preceq j$
Thus by definition of antisymmetry:

$\map {\inf_L} {\map {\preceq'} j} = j$
$\Box$

Thus














\(\ds \liminf i_D\)

\(=\)







\(\ds \sup_L \set {\map {\inf_L} {i_D \sqbrk {\map {\preceq'} j} }: j \in D}\)





Definition of Limit Inferior of Net














\(\ds \)

\(=\)







\(\ds \sup_L \set {\map {\inf_L} {\map {\preceq'} j}: j \in D}\)





Image under Inclusion Mapping














\(\ds \)

\(=\)







\(\ds \sup_L \set {j: j \in D}\)





(lemma)














\(\ds \)

\(=\)







\(\ds \sup_L D\)





Definition of Set Equality



$\blacksquare$


Sources
Mizar article WAYBEL17:10




