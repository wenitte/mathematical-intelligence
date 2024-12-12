# 

Source: https://proofwiki.org/wiki/Characterization_of_Boundary_by_Basis



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $\BB \subseteq \tau$ be a basis.
Let $A$ be a subset of $T$.
Let $x$ be a point of $T$.

Then $x \in \partial A$ if and only if:

for every $U \in \BB$:
if $x \in U$
then $A \cap U \ne \O$ and $\relcomp S A \cap U \ne \O$
where:

$\relcomp S A = S \setminus A$ denotes the complement of $A$ in $S$
$\partial A$ denotes the boundary of $A$ in $T$.


Proof
Sufficient Condition
Let $x \in \partial A$.
Let $U \in \BB$.
By definition of basis, $U$ is an open set of $T$.
Thus from Characterization of Boundary by Open Sets:

if $x \in U$
then $A \cap U \ne \O$ and $\relcomp S A \cap U \ne \O$.
$\Box$


Necessary Condition
Let $x$ be such that for every $U \in \BB$:

if $x \in U$
then $A \cap U \ne \O$ and $\relcomp S A \cap U \ne \O$.
By Characterization of Boundary by Open Sets, to prove that $x \in \partial A$ it is enough to prove
that:

for every open set $U$ of $T$:
if $x \in U$ then $A \cap U \ne \O$ and  $\relcomp S A \cap U \ne \O$.
Let $U$ be an open set of $T$.
Let $x \in U$.
By definition of (analytic) basis, there exists $V \in \BB$ such that:

$x \in V \subseteq U$
By assumption:

$A \cap V \ne \O$
and:

$\relcomp S A \cap V \ne \O$
From the corollary to Set Intersection Preserves Subsets:

$A \cap V \subseteq A \cap U$
and:

$\relcomp S A \cap V \subseteq \relcomp S A \cap U$
So:

$A \cap U \ne \O$ and $\relcomp S A \cap U \ne \O$
and hence the result.
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPGEN_1:10




