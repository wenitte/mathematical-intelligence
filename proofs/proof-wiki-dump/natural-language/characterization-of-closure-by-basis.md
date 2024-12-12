# 

Source: https://proofwiki.org/wiki/Characterization_of_Closure_by_Basis



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $\BB \subseteq \tau$ be a basis.
Let $A$ be a subset of $S$.
Let $x$ be a point of $S$.

Then $x \in A^-$ if and only if:

$\forall U \in \BB: x \in U \implies A \cap U \ne \O$
where:

$A^-$ denotes the closure of $A$


Proof
Sufficient Condition
Let $x \in A^-$.
Let $U \in \BB$.
By definition of basis, $U$ is an open set of $T$.
Thus from Condition for Point being in Closure:

if $x \in U$ then $A \cap U \ne \O$.
$\Box$


Necessary Condition
Let $x$ be such that for every $U \in \BB$:

if $x \in U$
then $A \cap U \ne \O$.
By Condition for Point being in Closure, to prove that $x \in \operatorname{Fr} A$ it is enough to prove
that:

for every open set $U$ of $T$:
if $x \in U$ then $A \cap U \ne \O$.
Let $U$ be an open set of $T$.
Let $x \in U$.
By definition of (analytic) basis, there exists $V \in \BB$ such that:

$x \in V \subseteq U$
By assumption:

$A \cap V \ne \O$
From the corollary to Set Intersection Preserves Subsets:

$A \cap V \subseteq A \cap U$
So:

$A \cap U \ne \O$
and hence the result.
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article YELLOW_9:37




