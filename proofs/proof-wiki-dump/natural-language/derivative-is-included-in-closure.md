# 

Source: https://proofwiki.org/wiki/Derivative_is_Included_in_Closure

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A$ be a subset of $S$.

Then

$A' \subseteq A^-$
where

$A'$ denotes the derivative of $A$
$A^-$ denotes the closure of $A$.


Proof
Let $x \in A'$.
By Condition for Point being in Closure it is enough to prove that:

for every open set $G$ of $T$:
if $x \in G$
then $A \cap G \ne \O$.

Let $G$ be an open set of $T$.
Let $x \in G$.
Then by Characterization of Derivative by Open Sets:

there exists a point $\exists y \in S: y \in A \cap G \land x \ne y$.
Hence:

$A \cap G \ne \O$
Hence the result.
$\blacksquare$


Sources
1977: Ryszard Engelking: General Topology
Mizar article TOPGEN_1:29




