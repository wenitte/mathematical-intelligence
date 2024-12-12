# 

Source: https://proofwiki.org/wiki/Disjoint_Compact_Set_and_Closed_Set_in_Topological_Vector_Space_separated_by_Open_Neighborhood/Corollary

Corollary
Let $F$ be a topological field.
Let $X$ be a topological vector space over $F$.
Let $V$ be an open neighborhood of ${\mathbf 0}_X$.

Then there exists an open neighborhood $W$ of ${\mathbf 0}_X$ such that: 

$W^- \subseteq V$
where $W^-$ denotes the closure of $W$.


Proof
From Finite Topological Space is Compact, we have: 

$\set { {\mathbf 0}_X}$ is compact.
Since $V$ is open, $X \setminus V$ is closed with: 

$\set { {\mathbf 0}_X} \cap \paren {X \setminus V} = \O$
So from Disjoint Compact Set and Closed Set in Topological Vector Space separated by Open Neighborhood, there exists an open neighborhood $W$ of ${\mathbf 0}_X$ such that: 

$\paren {\set { {\mathbf 0}_X} + W} \cap \paren {\paren {X \setminus V} + W} = \O$
That is: 

$W \cap \paren {\paren {X \setminus V} + W} = \O$
Since $W$ is open: 

$\paren {X \setminus V} + W$ is open
from Sum of Set and Open Set in Topological Vector Space is Open.
From Open Set Disjoint from Set is Disjoint from Closure: 

$W^- \cap \paren {\paren {X \setminus V} + W} = \O$
Since ${\mathbf 0}_X \in W$: 

$X \setminus V \subseteq \paren {X \setminus V} + W$
From Set Intersection Preserves Subsets: 

$W^- \cap \paren {X \setminus V} = \O$
From Empty Intersection iff Subset of Complement: 

$W^- \subseteq V$
$\blacksquare$





