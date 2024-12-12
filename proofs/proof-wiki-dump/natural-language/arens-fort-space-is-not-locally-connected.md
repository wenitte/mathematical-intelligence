# 

Source: https://proofwiki.org/wiki/Arens-Fort_Space_is_not_Locally_Connected

Theorem
Let $T = \struct {S, \tau}$ be the Arens-Fort space.

Then $T$ is not a locally connected space.


Proof
Let $\UU_0$ be a local basis for $\tuple {0, 0}$.
Let $U \in \UU_0$.
By definition of local basis, $U$ is open in $T$.
From Clopen Points in Arens-Fort Space, $\set {\tuple {0, 0} }$ is not open in $T$.
So $U \ne \set {\tuple {0, 0} }$. 
Therefore:

$\exists p \in U: p \ne \tuple {0, 0}$
From Singleton of Element is Subset:

$\set p \subseteq U$
From Clopen Points in Arens-Fort Space it follows that $\set p$ is clopen.
As $U \in U_0$ it follows by definition of local basis that:

$\tuple {0, 0} \in U$
and so:

$U \ne \set p$
That is:

$\set p \subsetneq U$
From Connected iff no Proper Clopen Sets, the set $U$ is not connected.


This article, or a section of it, needs explaining.In particular: Re-establish the definition of Definition:Connected Topological Space as the current flow does not make it obvious that a connected subset has no proper clopen sets, only that this condition applies to the full space.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
It is deduced that any local basis is formed with disconnected sets.
Thus, by definition, $T$ is not locally connected.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $26$. Arens-Fort Space: $7$




