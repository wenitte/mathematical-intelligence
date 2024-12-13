# 

Source: https://proofwiki.org/wiki/Lower_Closure_of_Subset_is_Subset_of_Lower_Closure

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $X, Y$ be subsets of $S$.

Then

$X \subseteq Y \implies X^\preceq \subseteq Y^\preceq$
where $X^\preceq$ is the lower closure of $X$.


Proof
Let $X \subseteq Y$.
Let $x \in X^\preceq$.
By definition of lower closure of subset:

$\exists y \in X: x \preceq y$
By definition of subset:

$y \in Y$
Thus by definition of lower closure of subset:

$x \in Y^\preceq$
$\blacksquare$


Sources
Mizar article YELLOW_3:6




