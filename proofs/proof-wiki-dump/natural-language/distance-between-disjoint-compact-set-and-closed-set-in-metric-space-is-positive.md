# 

Source: https://proofwiki.org/wiki/Distance_between_Disjoint_Compact_Set_and_Closed_Set_in_Metric_Space_is_Positive

Theorem
Let $\struct {X, d}$ be a metric space.
Let $A$ and $B$ be disjoint subsets of $X$ such that $A$ is compact and $B$ is closed.

Then $\map d {A, B} > 0$, where $\map d {A, B}$ is the distance between $A$ and $B$. 


Proof
Define $f : X \to \R$ by: 

$\map f x = \map d {x, B}$
for each $x \in X$.
From the definition of the distance between $A$ and $B$, we have: 

$\ds \map d {A, B} = \inf_{a \mathop \in A} \map f a$
From Compact Subspace of Hausdorff Space is Closed and Metric Space is Hausdorff, $A$ is closed and hence contains all its limit points.
From Point at Zero Distance from Subset of Metric Space is Limit Point or Element we then have:

$\map f a > 0$
for each $a \in A$.
From Distance from Point to Subset is Continuous Function, $f$ is continuous.
From Restriction of Continuous Mapping is Continuous: Metric Spaces, the restriction $f \restriction_A$ is continuous.
From Continuous Image of Compact Space is Compact: Corollary 3, we have that $f$ attains its bounds. 
That is, there exists $\alpha \in A$ such that: 

$\ds \map d {\alpha, B} = \inf_{a \mathop \in A} \map f a$
giving:

$\ds \inf_{a \in A} \map f a > 0$
and so:

$\map d {A, B} > 0$
$\blacksquare$





