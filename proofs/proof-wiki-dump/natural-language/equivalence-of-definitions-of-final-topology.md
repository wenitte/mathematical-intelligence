# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Final_Topology



Theorem
Let $X$ be a set.
Let $I$ be an indexing set.

Let $\family {\struct {Y_i, \tau_i} }_{i \mathop \in I}$ be an indexed family of topological spaces indexed by $I$.
Let $\family {f_i: Y_i \to X}_{i \mathop \in I}$ be an indexed family of mappings indexed by $I$.

The following definitions of the concept of Final Topology are equivalent:

Definition 1
The final topology on $X$ with respect to $\family {f_i}_{i \mathop \in I}$ is defined as:

$\tau = \set{U \subseteq X: \forall i \in I: \map {f_i^{-1}} U \in \tau_i} \subseteq \powerset X$
Definition 2
Let $\tau$ be the finest topology on $X$ such that each $f_i: Y_i \to X$ is $\tuple{\tau_i, \tau}$-continuous.
Then $\tau$ is known as the final topology on $X$ with respect to $\family{f_i}_{i \mathop \in I}$.


Proof
Definition 1 Implies Definition 2
Let:

$\tau = \set{U \subseteq X: \forall i \in I: \map {f_i^{-1}} U \in \tau_i} \subseteq \powerset X$
From Final Topology is Topology, $\tau$ is a topology.


Mappings are continuous
Let $U \in \tau$.
Let $i \in I$.
Then $\map {f_i^{-1}} {U} \in \tau_i$ by definition of $\tau$.
It follows that for each $i \in I$, $f_i: Y_i \to X$ is $\tuple {\tau_i, \tau}$-continuous.
$\Box$


$\tau$ is the finest such topology
Let $\struct{X, \vartheta}$ be a topological space.
Let the mappings $\family {f_i: Y_i \to X}_{i \mathop \in I}$ be $\tuple {\tau_i, \vartheta}$-continuous.
Let $U \in \vartheta$.
By definition of continuity, for every $i \in I$:

$\map {f_i^{-1} } U \in \tau_i$
Then by definition of $\tau$:

$U \in \tau$
It follows that:

$\vartheta \subseteq \tau$
That is, $\tau$ is finer than $\vartheta$.
$\Box$


Definition 2 Implies Definition 1
Let $\tau$ be the finest topology on $X$ such that each $f_i: Y_i \to X$ is $\tuple{\tau_i, \tau}$-continuous.
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





