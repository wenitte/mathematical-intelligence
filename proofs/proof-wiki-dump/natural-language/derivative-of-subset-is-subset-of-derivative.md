# 

Source: https://proofwiki.org/wiki/Derivative_of_Subset_is_Subset_of_Derivative

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A$, $B$ be subsets of $S$.

Then

$A \subseteq B \implies A' \subseteq B'$
where $A'$ denotes the derivative of $A$ in $T$.


Proof
Let $A \subseteq B$.
Let $x \in A'$.
By Characterization of Derivative by Open Sets it is enough to prove that:

for every open set $G$ of $T$:
if $x \in G$
then there exists $y$ such that $y \in B \cap G$ and $x \ne y$.

Let $G$ be an open set of $T$.
Let $x \in G$.
Then by Characterization of Derivative by Open Sets:

there exists a point $y$ of $T$ such that $y \in A \cap G$ and $x \ne y$.
By the corollary to Set Intersection Preserves Subsets:

$A \cap G \subseteq B \cap G$
Hence:

$y \in B \cap G$ and $x \ne y$.
The conditions of the hypothesis are thus fulfilled, and:

$x \in B'$
Thus by definition of subset:

$A' \subseteq B'$
$\blacksquare$


Sources
1977: Ryszard Engelking: General Topology
Mizar article TOPGEN_1:30




