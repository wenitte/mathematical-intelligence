# 

Source: https://proofwiki.org/wiki/Domain_Topology_Contains_Initial_Topology_iff_Mappings_are_Continuous



Theorem
Let $\struct{Y, \tau}$ be a topological space.
Let $\family {\struct{X_i, \tau_i}}_{i \mathop \in I}$ be a family of topological spaces.
Let $\family {f_i}_{i \mathop \in I}$ be a family of mappings $f_i : Y \to X_i$.
Let $\tau'$ be the initial topology on $Y$ with respect to $\family {f_i}_{i \mathop \in I}$.

Then:

$\tau' \subseteq \tau$ if and only if $\forall i \in I : f_i: \struct{Y, \tau} \to \struct{X_i, \tau_i}$ is $\tuple{\tau, \tau_i}$-continuous.


Proof
Necessary Condition
Let $\tau' \subseteq \tau$.
From Equivalence of Definitions of Initial Topology:

for each $i \in I$, $f_i: \struct{Y, \tau'} \to \struct{X_i, \tau_i}$ is $\tuple{\tau', \tau_i}$-continuous
From Continuous Mapping on Finer Domain and Coarser Codomain Topologies is Continuous:

for each $i \in I$, $f_i: \struct{Y, \tau} \to \struct{X_i, \tau_i}$ is $\tuple{\tau, \tau_i}$-continuous
$\Box$


Sufficient Condition
For all $i \in I$, let $f_i: \struct{Y, \tau} \to \struct{X_i, \tau_i}$ be $\tuple{\tau, \tau_i}$-continuous.
From Equivalence of Definitions of Initial Topology:

$\tau'$ is the coarsest topology on $Y$ such that each $f_i: Y \to X_i$ is $\tuple{\tau', \tau_i}$-continuous.
Then:

$\tau' \subseteq \tau$
$\blacksquare$





