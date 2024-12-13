# 

Source: https://proofwiki.org/wiki/Limit_Point_of_Subset_is_Limit_Point_of_Set

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A, B$ be subset of $S$ such that

$A \subseteq B$
Let $x$ be a point of $S$.

Then:

if $x$ is limit point of $A$, then $x$ is limit point of $B$.


Proof
Assume $x$ is limit point of $A$.
By definition of limit point it suffices to prove

$\forall U \in \tau: x \in U \implies B \cap \paren {U \setminus \set x} \ne \O$
Let $U \in \tau$ such that

$x \in U$
By definition of limit point:

$A \cap \paren {U \setminus \set x} \ne \O$
By Set Intersection Preserves Subsets/Corollary:

$A \cap \paren {U \setminus \set x} \subseteq B \cap \paren {U \setminus \set x}$
Thus:

$B \cap \paren {U \setminus \set x} \ne \O$
$\blacksquare$





