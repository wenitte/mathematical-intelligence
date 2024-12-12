# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Final_Topology/Definition_2_Implies_Definition_1



Theorem
Let $X$ be a set.
Let $I$ be an indexing set.

Let $\family {\struct{Y_i, \tau_i} }_{i \mathop \in I}$ be an indexed family of topological spaces indexed by $I$.
Let $\family {f_i: Y_i \to X}_{i \mathop \in I}$ be an indexed family of mappings indexed by $I$.
Let $\tau$ be the finest topology on $X$ such that each $f_i: Y_i \to X$ is $\tuple{\tau_i, \tau}$-continuous.

Then:

$\tau = \set{U \subseteq X: \forall i \in I: \map {f_i^{-1} } U \in \tau_i}$


Proof
Let $\tau' =  \set{U \subseteq X: \forall i \in I: \map {f_i^{-1} } U \in \tau_i}$.


$\tau'$ contains $\tau$
Let $U \in \tau$.
By definition of  $\tuple {\tau_i, \tau}$-continuity for each $i \in I$:

$\forall i \in I : \map {f_i^{-1} } U \in \tau_i$
So:

$U \in \tau'$
Since $U$ was arbitrary:

$\tau \subseteq \tau'$
$\Box$


$\tau$ contains $\tau'$
From Final Topology is Topology then $\tau'$ is a topology.
Let $U \in \tau'$.
Let $i \in I$.
Then $\map {f_i^{-1}} {U} \in \tau_i$ by definition of $\tau'$.
It follows that for each $i \in I$, $f_i: Y_i \to X$ is $\tuple{\tau_i, \tau'}$-continuous.
So $\tau'$ is a topology on $X$ such that each $f_i: Y_i \to X$ is $\tuple {\tau_i, \tau'}$-continuous.
Since $\tau$ is the finest topology on $X$ such that each $f_i: Y_i \to X$ is $\tuple {\tau_i, \tau}$-continuous then:

$\tau' \subseteq \tau$
By definition of set equality:

$\tau = \tau'$
$\blacksquare$





