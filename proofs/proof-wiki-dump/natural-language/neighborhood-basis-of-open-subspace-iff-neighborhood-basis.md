# 

Source: https://proofwiki.org/wiki/Neighborhood_Basis_of_Open_Subspace_iff_Neighborhood_Basis


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct{S, \tau}$ be a topological space.

Let $U \subseteq S$ be an open subset
Let $\tau_U$ denote the subspace topology on $U$.

Let $s \in U$.
Let $\NN \subseteq \powerset U$.

Then:

$\NN$ is a neighborhood basis of $s$ in $\struct{U, \tau_U}$ if and only if $\NN$ is a neighborhood basis of $s$ in $\struct{S, \tau}$


Proof
Let $\map \NN s$ denote the set of neighborhoods of $s$ in $\struct{S, \tau}$
Let $\map \MM s$ denote the set of neighborhoods of $s$ in $\struct{U, \tau_U}$
From Neighborhood in Open Subspace:

$\NN \subseteq \map \NN s$ if and only if $\NN \subseteq \map \MM s$


Necessary Condition
Let $\NN$ be a neighborhood basis of $s$ in $\struct{U, \tau_U}$.

Let $K \in \map \NN s$.
By definition of neighborhood:

$\exists W \in \tau : s \in W \subseteq K$
By definition of subspace topology:

$V = W \cap U \in \tau_U$
From Set is Open iff Neighborhood of all its Points:

$V \in \map \MM s$
By definition of neighborhood basis:

$\exists N \in \NN : x \in N \subseteq V$
From Subset Relation is Transitive:

$N \subseteq K$
We have:

$\exists N \in \NN : x \in N \subseteq K$
It follows that:

$\NN$ is a neighborhood basis of $s$ in $\struct{S, \tau}$
$\Box$


Sufficient Condition
Let $\NN$ be a neighborhood basis of $s$ in $\struct{S, \tau}$.

Let $K \in \map \MM s$.
From Neighborhood in Open Subspace:

$K \in \map \NN s$.
Hence:

$\exists N \in \NN : x \in N \subseteq K$
It follows that:

$\NN$ is a neighborhood basis of $s$ in $\struct{U, \tau_U}$
$\blacksquare$





