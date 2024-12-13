# 

Source: https://proofwiki.org/wiki/Join_Semilattice_has_Smallest_Element_iff_has_Identity


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct{S, \vee, \preceq}$ be a join semilattice.
Let $s \in S$.

Then:

$s$ is the smallest element of $S$
if and only if

$s$ is the identity in $\struct{S, \vee}$.


Proof
By definition of smallest element:

$s$ is the smallest element of $S$
if and only if:

$\forall t \in S : s \preceq t$

We have:










\(\ds \forall t \in S: \, \)



\(\ds s \preceq t\)

\(\iff\)







\(\ds t = s \vee t\)





Successor is Supremum














\(\ds \)

\(\iff\)







\(\ds t = t \vee s\)





Semilattice Axiom $\text {SL} 2$: Commutativity




By definition of identity:

$s$  is the identity in $\struct{S, \vee}$
if and only if

$\forall t \in S :s \vee t = t = t \vee s$

The result follows.
$\blacksquare$





