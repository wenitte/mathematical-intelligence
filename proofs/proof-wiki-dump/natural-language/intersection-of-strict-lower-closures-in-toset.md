# 

Source: https://proofwiki.org/wiki/Intersection_of_Strict_Lower_Closures_in_Toset

Theorem
Let $\left({S, \preceq}\right)$ be a totally ordered set.
Let $a,b \in S$.

Then:

$a^\prec \cap b^\prec = \left({\min \left({a, b}\right)}\right)^\prec$
where:

$a^\prec$ denotes strict lower closure of $a$
$\min$ denotes the min operation.


Proof
As $\left({S, \preceq}\right)$ is a totally ordered set, have either $a \preceq b$ or $b \preceq a$.
Since both sides are seen to be invariant upon interchanging $a$ and $b$, let WLOG $b \preceq a$.
Then it follows by definition of $\min$ that $\min \left({a, b}\right) = b$.

Thus, from Intersection with Subset is Subset, it suffices to show that $b^\prec \subseteq a^\prec$.
By the definition of strict lower closure, this comes down to showing that:

$\forall c \in S: c \prec b \implies c \prec a$

So let $c \in S$ with $c \prec b$, and recall that $b \preceq a$.
By Strictly Precedes is Strict Ordering, $c \prec a$.
$\blacksquare$


Also see
Intersection of Strict Upper Closures in Toset




