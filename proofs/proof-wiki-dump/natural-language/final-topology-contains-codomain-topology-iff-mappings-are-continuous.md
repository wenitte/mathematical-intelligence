# 

Source: https://proofwiki.org/wiki/Final_Topology_Contains_Codomain_Topology_iff_Mappings_are_Continuous



Theorem
Let $\struct{Y, \tau}$ be a topological space.
Let $\family {\struct{X_i, \tau_i}}_{i \mathop \in I}$ be a family of topological spaces.
Let $\family {f_i}_{i \mathop \in I}$ be a family of mappings $f_i : X_i \to Y$.
Let $\tau'$ be the final topology on $Y$ with respect to $\family {f_i}_{i \mathop \in I}$.

Then:

$\tau \subseteq \tau'$ if and only if $\forall i \in I : f_i: \struct{X_i, \tau_i} \to \struct{Y, \tau}$ is continuous.
Proof
Necessary Condition
Let $\tau \subseteq \tau'$.
From Equivalence of Definitions of Final Topology:

for each $i \in I$, $f_i: \struct{X_i, \tau_i} \to \struct{Y, \tau'}$ is $\tuple{\tau_i, \tau'}$-continuous
From Continuous Mapping on Finer Domain and Coarser Codomain Topologies is Continuous:

for each $i \in I$, $f_i: \struct{X_i, \tau_i} \to \struct{Y, \tau}$ is $\tuple{\tau_i, \tau}$-continuous
$\Box$

Sufficient Condition
For all $i \in I$, let $f_i: \struct{X_i, \tau_i} \to \struct{Y, \tau}$ be $\tuple{\tau, \tau_i}$-continuous.
From Equivalence of Definitions of Final Topology:

$\tau'$ is the finest topology on $Y$ such that each $f_i: \struct{X_i, \tau_i} \to \struct{Y, \tau'}$ is $\tuple{\tau_i, \tau'}$-continuous.
Then:

$\tau \subseteq \tau'$
$\blacksquare$





