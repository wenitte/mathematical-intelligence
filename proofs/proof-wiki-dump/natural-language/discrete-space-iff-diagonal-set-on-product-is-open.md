# 

Source: https://proofwiki.org/wiki/Discrete_Space_iff_Diagonal_Set_on_Product_is_Open



Theorem
Let $\struct {X, \tau}$ be a topological space.
Endow $X \times X$ with the product topology.
Let: 

$\Delta = \set {\tuple {x, x} : x \in X}$

Then: 

$\tau = \powerset X$
if and only if:

$\Delta$ is open in $X$.
That is:

the topology on $X$ is discrete if and only if $\Delta$ is open in $X$.


Proof
Sufficient Condition
Suppose that $\tau = \powerset X$. 
Then for each $x \in X$, the set:

$\set {\tuple {x, x} }$
is open.
Note that we can write: 

$\ds \Delta = \bigcup_{x \in X} \set {\tuple {x, x} }$
This is the union of open sets, so from the definition of a topology we have that: 

$\Delta$ is open.
$\Box$


Necessary Condition
Suppose that $\Delta$ is open. 
Let $x \in X$ so that $\tuple {x, x} \in \Delta$.
From the definition of the product topology:

there exists open sets $S, R \subseteq X$ such that $\tuple {x, x} \in S \times R \subseteq \Delta$.
We want to conclude that:

$S = R = \set x$
Certainly: 

$\set x \subseteq S$
and:

$\set x \subseteq R$
Suppose that:

$S \ne \set x$
then:

there exists some $y \in S$ with $y \ne x$.
But then: 

$\tuple {y, x} \in S \times R$
while, since $y \ne x$, we have: 

$\tuple {y, x} \not\in \Delta$
This contradicts:

$S \times R \subseteq \Delta$
So we must have: 

$S = \set x$
So, since $x$ was arbitrary:

for each $x \in X$, the set $\set x$ is open.
So, from Topology is Discrete iff All Singletons are Open, we have that: 

the topology on $X$ is discrete.
$\blacksquare$





