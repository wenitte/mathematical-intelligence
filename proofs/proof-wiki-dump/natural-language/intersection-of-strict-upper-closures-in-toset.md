# 

Source: https://proofwiki.org/wiki/Intersection_of_Strict_Upper_Closures_in_Toset

Theorem
Let $\struct {S, \preceq}$ be a totally ordered set.
Let $a, b \in S$.

Then:

$a^\succ \cap b^\succ = \paren {\map \max {a, b} }^\succ$
where:

$a^\succ$ denotes strict upper closure of $a$
$\max$ denotes the max operation.


Proof
As $\struct {S, \preceq}$ is a totally ordered set, have either $a \preceq b$ or $b \preceq a$.
Both sides are seen to be invariant upon interchanging $a$ and $b$.
Without loss of generality, then, let $a \preceq b$.
Then it follows by definition of $\max$ that:

$\map \max {a, b} = b$

Thus, from Intersection with Subset is Subset, it suffices to show that $b^\succ \subseteq a^\succ$.
By definition of strict upper closure, this comes down to showing that:

$\forall c \in S: b \prec c \implies a \prec c$

So let $c \in S$ with $b \prec c$, and recall that $a \preceq b$.
By Strictly Precedes is Strict Ordering, $a \prec c$.
$\blacksquare$


Also see
Intersection of Strict Lower Closures in Toset




