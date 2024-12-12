# 

Source: https://proofwiki.org/wiki/Characterization_of_Boundary_by_Open_Sets



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A$ be a subset of $T$.
Let $x$ be a point of $T$.

Then $x \in \partial A$ if and only if:

for every open set $U$ of $T$:
if $x \in U$
then $A \cap U \ne \O$ and $\relcomp S A \cap U \ne \O$
where:

$\relcomp S A = S \setminus A$ denotes the complement of $A$ in $S$
$\partial A$ denotes the boundary of $A$.


Proof
Sufficient Condition
Let $x \in \partial A$.
Then by Boundary is Intersection of Closure with Closure of Complement:

$x \in \paren {\relcomp S A}^-$ and $x \in A^-$
where $A^-$ denotes the closure of $A$.

Hence by Condition for Point being in Closure, for every open set $U$ of $T$:

$x \in U \implies A \cap U \ne \O$
and:

$x \in U \implies \relcomp S A \cap U \ne \O$


Necessary Condition
Let $x$ be such that for every open set $U$ of $T$:

if $x \in U$
then $A \cap U \ne \O$ and $\relcomp S A \cap U \ne \O$.
Then by Condition for Point being in Closure:

$x \in \paren {\relcomp S A}^-$ and $x \in A^-$.
Hence by Boundary is Intersection of Closure with Closure of Complement:

$x \in \partial A$
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPS_1:28




