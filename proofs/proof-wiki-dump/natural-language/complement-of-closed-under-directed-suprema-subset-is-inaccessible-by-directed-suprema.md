# 

Source: https://proofwiki.org/wiki/Complement_of_Closed_under_Directed_Suprema_Subset_is_Inaccessible_by_Directed_Suprema



Theorem
Let $L = \struct {S, \preceq}$ be an up-complete ordered set.
Let $X$ be a closed under directed suprema subset of $S$.

Then $\relcomp S X$ is inaccessible by directed suprema.


Proof
Let $D$ be a directed subset of $S$ such that

$\sup D \in \relcomp S X$
By definition of relative complement:

$\sup D \notin X$
By definition of closed under directed suprema:

$D \nsubseteq X$
By Complement of Complement:

$D \nsubseteq \relcomp S {\relcomp S X}$
Thus by Empty Intersection iff Subset of Relative Complement:

$D \cap \relcomp S X \ne \O$
$\blacksquare$


Also See
Complement of Inaccessible by Directed Suprema Subset is Closed under Directed Suprema
Sources
Mizar article WAYBEL11:funcreg 4




