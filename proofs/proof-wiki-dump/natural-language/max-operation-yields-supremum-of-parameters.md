# 

Source: https://proofwiki.org/wiki/Max_Operation_Yields_Supremum_of_Parameters



Theorem
Let $\struct {S, \preceq}$ be a totally ordered set. 
Let $x, y \in S$.
Then:

$\max \set {x, y} = \sup \set {x, y}$
where:

$\max$ denotes the max operation
$\sup$ denotes the supremum.


General Case
Let $x_1, x_2, \dotsc, x_n \in S$ for some $n \in \N_{>0}$.

Then:

$\max \set {x_1, x_2, \dotsc, x_n} = \sup \set {x_1, x_2, \dotsc, x_n}$


Proof
As $\struct {S, \preceq}$ be a totally ordered set, all elements of $S$ are $\preceq$-comparable.
Therefore there are two cases to consider:


Case 1: $x \preceq y$
In this case:

$\max \set {x, y} = y = \sup \set {x, y}$


Case 2: $y \preceq x$
In this case:

$\max \set {x, y} = x = \sup \set {x, y}$
In either case, the result holds.
$\blacksquare$


Warning
Note that it is considered abuse of notation to write

$\max = \sup$
This is because:

$\max: S \times S \to S$
while:

$\sup: \powerset S \to S$
where $\powerset S$ is the power set of $S$.


Also see
Min Operation Yields Infimum of Parameters




