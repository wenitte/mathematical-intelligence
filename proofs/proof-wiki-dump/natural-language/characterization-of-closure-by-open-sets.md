# 

Source: https://proofwiki.org/wiki/Characterization_of_Closure_by_Open_Sets



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A$ be a subset of $S$.
Let $x$ be a point of $T$.
Let $A^-$ denote the closure of $A$.

Then $x \in A^-$ if and only if:

for every open set $U$ of $T$:
$x \in U \implies A \cap U \ne \O$


Proof
Sufficient Condition
Let $x \in A^-$.
Aiming for a contradiction, suppose there exists an open set $U$ of $T$ such that:

$x \in U$ and $A \cap U = \O$

We have that $U$ is open in $T$.
So by definition of closed set, $\relcomp S U$ is closed in $T$.

Then:














\(\ds A \cap U\)

\(=\)







\(\ds \O\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(\subseteq\)







\(\ds \relcomp S U\)





Empty Intersection iff Subset of Complement








\(\ds \leadsto \ \ \)





\(\ds A^-\)

\(\subseteq\)







\(\ds \relcomp S U\)





Definition 3 of Closure (Topology): $\relcomp S U$ is closed








\(\ds \leadsto \ \ \)





\(\ds A^- \cap U\)

\(=\)







\(\ds \O\)





Empty Intersection iff Subset of Complement




But we have:

$x \in A^-$
and also:

$x \in U$
and thus by definition of set intersection:

$x \in A^- \cap U$
This contradicts $A^- \cap U = \O$
Hence by Proof by Contradiction the assumption that there exists an open set $U$ of $T$ such that $x \in U$ and $A \cap U = \O$ was false.
So for every open set $U$ of $T$:

$x \in U \implies A \cap U \ne \O$
$\Box$ 


Necessary Condition
Let $x$ be such that for every open set $U$ of $T$:

$x \in U \implies A \cap U \ne \O$

Aiming for a contradiction, suppose $x \notin A^-$.
Then:

$x \in \relcomp S {A^-}$
Then by assumption:

$A \cap \relcomp S {A^-} \ne \O$
as $\relcomp S {A^-}$ is open.

By definition of complement:

$A \cap \relcomp S {A^-} = \O$
So by Empty Intersection iff Subset of Complement:

$A \nsubseteq A^-$
From Set is Subset of its Topological Closure:

$A \subseteq A^-$
But from Set Complement inverts Subsets:

$\relcomp S {A^-} \subseteq \relcomp S A$
from which by Empty Intersection iff Subset of Complement:

$A \cap \relcomp S {A^-} = \O$
Hence by Proof by Contradiction the assumption that $x \notin A^-$ was false.
So $x \in A^-$.
$\blacksquare$


Sources
1977: Ryszard Engelking: General Topology
Mizar article TOPS_1:12




