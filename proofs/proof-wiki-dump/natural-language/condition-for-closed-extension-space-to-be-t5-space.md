# 

Source: https://proofwiki.org/wiki/Condition_for_Closed_Extension_Space_to_be_T5_Space



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T^*_p = \struct {S^*_p, \tau^*_p}$ be the closed extension space of $T$.

Then:

$T^*_p$ is a $T_5$ space if and only if $T$ is a $T_5$ space vacuously
and $T^*_p$ in this case is also a $T_5$ space vacuously.


Proof
Sufficient Condition
Let $T^*_p$ be a $T_5$ space.
Then for any two separated sets $A, B \subseteq S$ there exist disjoint open sets $U, V \in \tau^*_p$ containing $A$ and $B$ respectively.
However, for any non-empty set $U \in \tau^*_p$, $p \in U$.
Hence no non-empty open sets in $T^*_p$ are separated.
Therefore $T^*_p$ is a $T_5$ space vacuously: there do not exist two separated sets.
$\Box$


Necessary Condition
Let $A, B \in \tau^*_p$.
By Closure of Open Set of Closed Extension Space, we have that:

$\forall U \in \tau^*_p: U \ne \O \implies U^- = S$
where $U^-$ is the closure of $U$.
Thus for all $A, B \ne \O$ it cannot be the case that $A^- \cap B = A \cap B^- = \O$.
Therefore $T^*_p$ does not contain two separated sets if and only if $T$ does not contain two separated sets.
Hence $T^*_p$ is a $T_5$ space vacuously if and only if $T$ is a $T_5$ space vacuously.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $12$. Closed Extension Topology: $21$




