# 

Source: https://proofwiki.org/wiki/Lower_Bound_is_Lower_Bound_for_Subset


It has been suggested that this page or section be merged into Lower Bound for Subset.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\struct {S, \preceq}$ be a preordered set.
Let $A, B$ be subsets of $S$ such that

$B \subseteq A$
Let $L$ be an element of $S$.
Let $L$ be a lower bound for $A$.

Then $L$ is a lower bound for $B$.


Proof
Let $L$ be a lower bound for $A$.
By definition of lower bound:

$\forall x \in A: L \preceq x$
By definition of subset:

$\forall x \in B: x \in A$
Hence:

$\forall x \in B: L \preceq x$
Thus by definition:

$L$ is a lower bound for $B$.
$\blacksquare$


Sources
Mizar article YELLOW_0:9




