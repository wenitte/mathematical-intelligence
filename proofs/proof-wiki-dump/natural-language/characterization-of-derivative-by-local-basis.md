# 

Source: https://proofwiki.org/wiki/Characterization_of_Derivative_by_Local_Basis



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A$ be a subset of $S$.
Let $x$ be a point of $T$.
Let $\BB \subseteq \tau$ be a local basis at $x$.

Then

$x \in A'$
if and only if:

for every $U \in \BB$, there exists a point $y$ of $T$ such that $y \in A \cap U$ and $x \ne y$
where:

$A'$ denotes the derivative of $A$.


Proof
Sufficient Condition
Let $x \in A'$.
By Characterization of Derivative by Open Sets:
For every open set $U$ of $T$:

if $x \in U$
then there exists a point $y$ of $T$ such that $y \in A \cap U$ and $x \ne y$

As the elements of $\BB$ are all open sets, it follows that:
For every open set $U \in \BB$:

if $x \in U$
then there exists a point $y$ of $T$ such that $y \in A \cap U$ and $x \ne y$
$\Box$


Necessary Condition
Let $x$ be such that:
$(1): \quad$ for every subset $U \in \BB$, there exists a point $y$ of $T$ such that $y \in A \cap U$ and $x \ne y$.
By Characterization of Derivative by Open Sets, to prove that $x \in A'$ it is enough to prove:

for every open set $U$ of $T$:
if $x \in U$
then there exists a point $y$ of $T$ such that $y \in A \cap U$ and $x \ne y$.

Let $U$ be an open set of $T$.
Let that $x \in U$.
Then by definition of local basis:

there exists $V \in \BB$ such that:
$x \in V \subseteq U$
By $(1)$:

there exists a point $y$ of $T$ such that $y \in A \cap V$ and $x \ne y$.
By the corollary to Set Intersection Preserves Subsets:

$A \cap V \subseteq A \cap U$
and so:

$y \in A \cap V \implies y \in A \cap U$
and so $y$ fulfils the conditions of the hypothesis.
$\blacksquare$


Sources
1977: Ryszard Engelking: General Topology
Mizar article TOPGEN_1:18




