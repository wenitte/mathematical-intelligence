# 

Source: https://proofwiki.org/wiki/Complement_of_Inaccessible_by_Directed_Suprema_Subset_is_Closed_under_Directed_Suprema



Theorem
Let $L = \struct {S, \preceq}$ be an up-complete ordered set.
Let $X$ be an inaccessible by directed suprema subset of $S$.

Then $\relcomp S X$ is closed under directed suprema.


Proof
Let $D$ be a directed subset of $S$ such that

$D \subseteq \relcomp S X$
By Empty Intersection iff Subset of Relative Complement:

$D \cap X = \O$
By definition of inaccessible by directed suprema:

$\sup D \notin X$
Thus by definition of relative complement:

$\sup D \in \relcomp S X$
$\blacksquare$


Also see
Complement of Closed under Directed Suprema Subset is Inaccessible by Directed Suprema


Sources
Mizar article WAYBEL11:funcreg 3




