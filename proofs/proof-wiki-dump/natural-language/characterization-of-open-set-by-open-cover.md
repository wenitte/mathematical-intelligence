# 

Source: https://proofwiki.org/wiki/Characterization_of_Open_Set_by_Open_Cover


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct{S, \tau}$ be a topological space.

Let $\UU$ be an open cover of $T$.
For each $U \in \UU$, let $\tau_U$ denote the subspace topology on $U$.

Let $W \subseteq S$.

Then $W$ is open in $T$ if and only if:

$\forall U \in \UU: W \cap U$ is open in $\struct{U, \tau_U}$
Proof
Necessary Condition
This follows immediately from the definition of subspace topology.
$\Box$

Sufficient Condition
Let:

$W \cap U$ be open in $\struct{U, \tau_U}$ for each $U \in \UU$

From Open Set in Open Subspace:

$\forall U \in \UU : W \cap U$ is open in $T$

We have:














\(\ds W\)

\(=\)







\(\ds W \cap S\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds W \cap \paren{\bigcup \UU}\)





Definition of Open Cover














\(\ds \)

\(=\)







\(\ds \bigcup \set{W \cap U : U \in\UU}\)





Intersection Distributes over Union




By Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets:

$W$ is open in $T$
$\blacksquare$





