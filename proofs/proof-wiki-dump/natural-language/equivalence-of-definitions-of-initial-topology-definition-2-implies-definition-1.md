# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Initial_Topology/Definition_2_Implies_Definition_1



Theorem
Let $X$ be a set.
Let $I$ be an indexing set.

Let $\family {\struct{Y_i, \tau_i} }_{i \mathop \in I}$ be an indexed family of topological spaces indexed by $I$.
Let $\family {f_i: X \to Y_i}_{i \mathop \in I}$ be an indexed family of mappings indexed by $I$.
Let $\tau$ be the coarsest topology on $X$ such that each $f_i: X \to Y_i$ is $\tuple{\tau, \tau_i}$-continuous.
Let:

$\SS = \set {\map {f_i^{-1} } U: i \in I, U \in \tau_i} \subseteq \map \PP X$
where $\map {f_i^{-1} } U$ denotes the preimage of $U$ under $f_i$.

Then:

$\tau$ is the topology on $X$ generated  by the subbase $\SS$.


Proof
Let $\map \tau \SS$ be the topology on $X$ generated  by the subbase $\SS$.


$\tau$ contains Topology Generated by $\SS$
Let $i \in I$ and $U \in \tau_i$.
By definition of $\tuple{\tau, \tau_i}$-continuity:

$\map {f_i^{-1} } U \in \tau$
Since $i \in I$ and $U \in \tau_i$ were arbitrary, then $\SS \subseteq \tau$.
From Equivalence of Definitions of Topology Generated by Synthetic Sub-Basis:

$\map \tau \SS \subseteq \tau$
$\Box$


Topology Generated by $\SS$ Contains $\tau$
Let $i \in I$.
Let $U \in \tau_i$.
Then $\map {f_i^{-1} } U$ is an element of the subbase $\SS$ of $X$, and is therefore trivially in $\map \tau \SS$.
By definition of $\tuple{\map \tau \SS, \tau_i}$-continuity:

each $f_i: X \to Y_i$ is $\tuple{\map \tau \SS, \tau_i}$-continuous
Because $\tau$ is the coarsest topology on $X$ such that each $f_i: X \to Y_i$ is $\tuple{\tau, \tau_i}$-continuous:

$\tau \subseteq \map \tau \SS$
By definition of set equality:

$\tau = \map \tau \SS$
$\blacksquare$




