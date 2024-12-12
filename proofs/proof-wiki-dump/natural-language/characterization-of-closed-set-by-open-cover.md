# 

Source: https://proofwiki.org/wiki/Characterization_of_Closed_Set_by_Open_Cover


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct{S, \tau}$ be a topological space.

Let $\UU$ be an open cover of $T$.
For each $U \in \UU$, let $\tau_U$ denote the subspace topology on $U$.

Let $F \subseteq S$.

Then $F$ is closed in $T$ if and only if:

$\forall U \in \UU: F \cap U$ is closed in $\struct{U, \tau_U}$
Proof
Necessary Condition
This follows immediately from Closed Set in Topological Subspace.
$\Box$

Sufficient Condition
Let:

$F \cap U$ be closed in $\struct{U, \tau_U}$ for each $U \in \UU$

By definition of closed set:

$U \setminus \paren{F \cap U}$ is open in $\struct{U, \tau_U}$ for each $U \in \UU$

We have:










\(\ds \forall U \in \UU: \, \)



\(\ds U \setminus \paren{F \cap U}\)

\(=\)







\(\ds U \setminus F\)





Set Difference with Intersection














\(\ds \)

\(=\)







\(\ds \paren{U \cap S} \setminus F\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds U \cap \paren {S \setminus F}\)





Intersection with Set Difference is Set Difference with Intersection




Hence:

$\forall U \in \UU : U \cap \paren {S \setminus F}$ is open in $\struct{U, \tau_U}$ for each $U \in \UU$

From Characterization of Open Set by Open Cover:

$S \setminus F$ is open in $T$
By definition of closed set:

$F$ is closed in $T$
$\blacksquare$





