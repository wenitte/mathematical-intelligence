# 

Source: https://proofwiki.org/wiki/Closure_of_von_Neumann-Bounded_Subset_of_Topological_Vector_Space_is_von_Neumann-Bounded

Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $X$ be a topological vector space over $\Bbb F$.
Let $E$ be a von Neumann-bounded subset of $X$.

Then the closure $E^-$ of $E$ is von Neumann-bounded.


Proof
Let $V$ be an open neighborhood of ${\mathbf 0}_X$.
From Disjoint Compact Set and Closed Set in Topological Vector Space separated by Open Neighborhood: Corollary, there exists an open neighborhood $W$ of ${\mathbf 0}_X$ such that: 

$W^- \subseteq V$
Since $E$ is von Neumann-bounded, there exists $s > 0$ such that: 

$E \subseteq t W$ for $t \in \Bbb F$ with $t > s$.
From Topological Closure of Subset is Subset of Topological Closure, we have: 

$E^- \subseteq \paren {t W}^-$ for $t \in \Bbb F$ with $t > s$.
From Dilation of Closure of Set in Topological Vector Space is Closure of Dilation we have: 

$\paren {t W}^- = t W^-$
Then we have: 

$E^- \subseteq t W^- \subseteq t V$ for $t \in \Bbb F$ with $t > s$.
Since $V$ was arbitrary, we have that $E^-$ is von Neumann-bounded.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.13$: Theorem




