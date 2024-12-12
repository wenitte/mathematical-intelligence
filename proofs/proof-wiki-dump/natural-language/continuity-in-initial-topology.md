# 

Source: https://proofwiki.org/wiki/Continuity_in_Initial_Topology



Theorem
Let $\struct {Z, \tau}$ be a topological space. 
Let $X$ be a set.
Let $I$ be an indexing set.
Let $\family {\struct {Y_i, \tau_i} }_{i \mathop \in I}$ be an indexed family of topological spaces indexed by $I$.
Let $\family {f_i: X \to Y_i}_{i \mathop \in I}$ be an indexed family of mappings indexed by $I$.
Let $\tau'$ be the initial topology on $Y$ with respect to $\family {f_i \restriction_Y}_{i \mathop \in I}$.
Let $g : Z \to X$ be a mapping. 

Then $g$ is $\tuple {\tau, \tau'}$-continuous if and only if: 

$f_i \circ g : Z \to Y_i$ is $\tuple {\tau, \tau_i}$-continuous for each $i \in I$.


Proof
Necessary Condition
Suppose that: 

$g$ is $\tuple {\tau, \tau'}$-continuous.
From the definition of the initial topology:

$f_i$ is $\tuple {\tau', \tau_i}$-continuous for each $i \in I$.
From Composite of Continuous Mappings is Continuous:

$f_i \circ g$ is $\tuple {\tau, \tau_i}$-continuous for each $i \in I$.
$\Box$

Sufficient Condition
Suppose that: 

$f_i \circ g$ is $\tuple {\tau, \tau_i}$-continuous for each $i \in I$.
From the definition of the initial topology:

$\SS = \set {f_i^{-1} \sqbrk U : i \in I, \, U \in \tau_i}$
is a synthetic sub-basis for $\tau'$. 
From Continuity Test using Sub-Basis, it suffices to show that: 

$g^{-1} \sqbrk U \in \tau$ for $U \in \SS$.
Let $U \in \SS$.
Then there exists $i \in I$ and $V \in \tau_i$ such that $U = f_i^{-1} \sqbrk V$.
So:

$g^{-1} \sqbrk U = g^{-1} \sqbrk {f_i^{-1} \sqbrk V}$
From Preimage of Subset under Composite Mapping:

$g^{-1} \sqbrk {f_i^{-1} \sqbrk V} = \paren {f_i \circ g}^{-1} \sqbrk V$
From hypothesis, $f_i \circ g$ is $\struct {\tau, \tau_i}$-continuous, so since $V \in \tau_i$, we have: 

$\paren {f_i \circ g}^{-1} \sqbrk V \in \tau$
So, for each $U \in \SS$ we have: 

$g^{-1} \sqbrk U \in \tau$
So $g$ is $\tuple {\tau, \tau'}$-continuous from Continuity Test using Sub-Basis.
$\blacksquare$





