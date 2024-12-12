# 

Source: https://proofwiki.org/wiki/Closed_Elements_Uniquely_Determine_Closure_Operator

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $f, g: S \to S$ be closure operators on $S$.
Suppose that $f$ and $g$ have the same closed elements.

Then $f = g$.


Proof
Let $x \in S$.
Let $C$ be the set of closed elements of $S$ (with respect to either $f$ or $g$) that succeed $x$.
By Closure is Smallest Closed Successor, $\map f x$ and $\map g x$ are smallest closed successors of $x$.
That is, $\map f x$ and $\map g x$ are smallest elements of $C \cap x^\succeq$, where $x^\succeq$ denotes the upper closure of $x$.
By Smallest Element is Unique:

$\map f x = \map g x$
As $x \in S$ is arbitrary it follows that:

$\forall x \in S: \map f x = \map g x$
Hence by Equality of Mappings:

$f = g$
$\blacksquare$





