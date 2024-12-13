# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Initial_Topology



Theorem
Let $X$ be a set.
Let $I$ be an indexing set.

Let $\family {\struct{Y_i, \tau_i}}_{i \mathop \in I}$ be an indexed family of topological spaces indexed by $I$.
Let $\family {f_i: X \to Y_i}_{i \mathop \in I}$ be an indexed family of mappings indexed by $I$.

The following definitions of the concept of Initial Topology are equivalent:

Definition 1
Let:

$\SS = \set {f_i^{-1} \sqbrk U: i \in I, U \in \tau_i}$
where $f_i^{-1} \sqbrk U$ denotes the preimage of $U$ under $f_i$.
The topology $\tau$ on $X$ generated by $\SS$ is called the initial topology on $X$ with respect to $\family {f_i}_{i \mathop \in I}$.

Definition 2
Let $\tau$ be the coarsest topology on $X$ such that each $f_i: X \to Y_i$ is $\tuple {\tau, \tau_i}$-continuous.
Then $\tau$ is known as the initial topology on $X$ with respect to $\family {f_i}_{i \mathop \in I}$.


Proof
Definition 1 Implies Definition 2
Let:

$\SS = \set{\map {f_i^{-1}} U: i \in I, U \in \tau_i} \subseteq \map \PP X$
where $\map {f_i^{-1}} U$ denotes the preimage of $U$ under $f_i$.
Let $\tau$ be the topology on $X$ generated by the subbase $\SS$.


Mappings are Continuous
Let $i \in I$.
Let $U \in \tau_i$.
Then $\map {f_i^{-1} } U$ is an element of the subbase $\SS$ of $X$, and is therefore trivially in $\tau$.
$\Box$


$\tau$ is the Coarsest such Topology
Let $\struct {X, \vartheta}$ be a topological space.
Let the mappings $\family {f_i: X \to Y_i}_{i \mathop \in I}$ be $\tuple {\vartheta, \tau_i}$-continuous.
Let $U \in \SS$.
Then for some $i \in I$ and some $V \in \tau_i$:

$U = \map {f_i^{-1} } V$
By definition of the continuity of $f_i$:

$U \in \vartheta$
From Equivalence of Definitions of Topology Generated by Synthetic Sub-Basis:

$\tau \in \vartheta$
That is, $\tau$ is coarser than $\vartheta$.
$\Box$


Definition 2 Implies Definition 1
Let $\tau$ be the coarsest topology on $X$ such that each $f_i: X \to Y_i$ is $\tuple{\tau, \tau_i}$-continuous.
Let:

$\SS = \set {\map {f_i^{-1} } U: i \in I, U \in \tau_i} \subseteq \map \PP X$
where $\map {f_i^{-1} } U$ denotes the preimage of $U$ under $f_i$.

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




