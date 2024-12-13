# 

Source: https://proofwiki.org/wiki/Local_Basis_of_Open_Subspace_iff_Local_Basis


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let Let $T = \struct{S, \tau}$ be a topological space.

Let $U \subseteq S$ be an open subset
Let $\tau_U$ denote the subspace topology on $U$.

Let $s \in U$.
Let $\BB \subseteq \powerset U$.

Then:

$\BB$ is a local basis of $s$ in $\struct{U, \tau_U}$ if and only if $\BB$ is a local basis of $s$ in $\struct{S, \tau}$
Proof
Let $\map \BB s$ denote the set of open sets containing $s$ in $\struct{S, \tau}$
Let $\map \CC s$ denote the set of open sets containing $s$ in $\struct{U, \tau_U}$
From Open Set in Open Subspace:

$\BB \subseteq \map \BB s$ if and only if $\BB \subseteq \map \CC s$


Necessary Condition
Let $\BB$ be a local basis of $s$ in $\struct{U, \tau_U}$.

Let $W \in \map \BB s$.
By definition of subspace topology:

$W' = W \cap U \in \tau_U$
By definition of local basis:

$\exists V \in \BB : x \in V \subseteq W'$
From Subset Relation is Transitive:

$V \subseteq W$
We have:

$\exists V \in \BB : x \in V \subseteq W$
It follows that:

$\BB$ is a local basis of $s$ in $\struct{S, \tau}$
$\Box$


Sufficient Condition
Let $\BB$ be a local basis of $s$ in $\struct{S, \tau}$.

Let $W \in \map \CC s$.
From Open Set in Open Subspace:

$W \in \map \BB s$.
Hence:

$\exists V \in \BB : x \in V \subseteq W$
It follows that:

$\BB$ is a local basis of $s$ in $\struct{U, \tau_U}$
$\blacksquare$





