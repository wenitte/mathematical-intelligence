# 

Source: https://proofwiki.org/wiki/Closure_of_Set_of_Condensation_Points_equals_Itself

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A$ be a subset of $S$.

Then:

$\paren {A^0}^- = A^0$
where

$A^0$ denotes the set of condensation points of $A$
$A^-$ denotes the closure of $A$


Proof
By Set is Subset of its Topological Closure:

$A^0 \subseteq \paren {A^0}^-$
To prove the equality by definition of set equality it suffices to show the inclusion:

$\paren {A^0}^- \subseteq A^0$
Let $x \in \paren {A^0}^-$.
We will prove that

$(1): \quad \forall U \in \tau: x \in U \implies A \cap U$ is uncountable
Let $U$ be an open subset of $S$ such that

$x \in U$
By Condition for Point being in Closure:

$A^0 \cap U \ne \O$
By definition of empty set:

$\exists y: y \in A^0 \cap U$
By definition of intersection:

$y \in A^0 \land y \in U$
By definition of set of condensation points:

$y$ is condensation point of $A$
Then by definition of condensation point:

$A \cap U$ is uncountable

We will prove that

$x$ is limit point of $A$
Let $U$ be an open subset of $S$ such that

$x \in U$
By $(1)$:

$A \cap U$ is uncountable
$A \cap \paren {U \setminus \set x}$ is uncountable
Thus:

$A \cap \paren {U \setminus \set x} \ne \O$

Then by definition and $(1)$:

$x$ is condensation point of $A$
Thus by definition of set of condensation points:

$x \in A^0$
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPGEN_4:51




