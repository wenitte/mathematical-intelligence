# 

Source: https://proofwiki.org/wiki/Ideal_is_Filter_in_Dual_Ordered_Set



Theorem
Let $P = \struct {S, \preceq}$ be an ordered set.
Let $X$ be a subset of $S$.

Then

$X$ is ideal in $P$
if and only if

$X$ is filter in $P^{-1}$
where $P^{-1} = \struct {S, \succeq}$ denotes the dual of $P$.


Proof
Sufficient Condition
Let $X$ be ideal in $P$.
By definition of ideal in ordered set:

$X$ is non-empty directed lower.
By definition of directed:

$\forall x, y \in X: \exists z \in X: x \preceq z \land y \preceq z$
Then

$\forall x, y \in X: \exists z \in X: z \succeq x \land z \succeq y$
By definition

$X$ is filtered in $P^{-1}$
By definition of lower section:

$\forall x \in X, y \in S: y \preceq x \implies y \in X$
Then

$\forall x \in X, y \in S: x \succeq y \implies y \in X$
By definition

$X$ is an upper section in $P^{-1}$.
Thus by definition of filter in ordered set

$X$ is a filter in $P^{-1}$.
$\Box$


Necessary Condition
Let $X$ be a filter in $P^{-1}$.
By definition of filter in ordered set

$X$ is non-empty, filtered in $P^{-1}$, and upper in $P^{-1}$.
By definition of filtered in $P^{-1}$: 

$\forall x, y \in X: \exists z \in X: z \succeq x \land z \succeq y$
Then

$\forall x, y \in X: \exists z \in X: x \preceq z \land y \preceq z$
By definition:

$X$ is directed.
By definition of upper section in $P^{-1}$:

$\forall x \in X, y \in S: x \succeq y \implies y \in X$
Then:

$\forall x \in X, y \in S: y \preceq x \implies y \in X$
By definition:

$X$ is a lower section.
Thus by definition of ideal in ordered set:

$X$ is an ideal in $P$.
$\blacksquare$


Sources
Mizar article YELLOW_7:28
Mizar article YELLOW_7:26




