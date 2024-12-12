# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Order_Complete_Set



Theorem
Let $\struct {S, \preceq}$ be an ordered set.

The following definitions of the concept of Order Complete Set are equivalent:

Definition 1
$\struct {S, \preceq}$ is order complete if and only if:

Each non-empty subset $H \subseteq S$ which has an upper bound admits a supremum.
Definition 2
$\struct {S, \preceq}$ is order complete if and only if:

Each non-empty subset $H \subseteq S$ which has a lower bound admits an infimum.


Proof
Definition 1 implies Definition 2
Let $\struct {S, \preceq}$ be an order complete set by definition 1.
Let $H \subseteq S$ have a lower bound.
Let $K$ be the set of all lower bounds of $H$.
Then $K \ne \O$.
By definition of lower bound:

$\forall x \in K: \forall y \in H: x \le y$
and so all elements of $H$ are upper bounds of $K$.
Thus by hypothesis $K$ admits a supremum.
Let $k = \map \sup K$.
By definition of supremum, $k$ precedes every upper bound of $K$.
In particular, $k$ precedes every element of $H$.
Thus $k$ is a lower bound of $H$.
But we have that $k$ is an upper bound of $K$.
That is, $k$ succeeds every lower bound of $H$.
That is, $k$ is an infimum of $H$.

Thus $\struct {S, \preceq}$ is an order complete set by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $\struct {S, \preceq}$ be an order complete set by definition 2.
Let $H \subseteq S$ have an upper bound.
Let $K$ be the set of all upper bounds of $H$.
Then $K \ne \O$.
By definition of upper bound:

$\forall x \in K: \forall y \in H: y \le x$
and so all elements of $H$ are lower bounds of $K$.
Thus by hypothesis $K$ admits an infimum.
Let $k = \map \inf K$.
By definition of infimum, $k$ succeeds every lower bound of $K$.
In particular, $k$ succeeds every element of $H$.
Thus $k$ is an upper bound of $H$.
But we have that $k$ is a lower bound of $K$.
That is, $k$ precedes every upper bound of $H$.
That is, $k$ is a supremum of $H$.

Thus $\struct {S, \preceq}$ is an order complete set by definition 1.
$\blacksquare$


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Orderings: Theorem $9$




