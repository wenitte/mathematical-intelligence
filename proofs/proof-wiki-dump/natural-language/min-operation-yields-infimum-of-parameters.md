# 

Source: https://proofwiki.org/wiki/Min_Operation_Yields_Infimum_of_Parameters



Theorem
Let $\struct {S, \preceq}$ be a totally ordered set. 
Let $x, y \in S$.
Then:

$\map \min {x, y} = \map \inf {\set {x, y} }$
where:

$\min$ denotes the min operation
$\inf$ denotes the infimum.


General Case
Let $x_1, x_2, \dots ,x_n \in S$ for some $n \in \N_{>0}$.

Then:

$\min \set {x_1, x_2, \dotsc, x_n} = \inf \set {x_1, x_2, \dotsc, x_n}$


Proof
As $\struct {S, \preceq}$ be a totally ordered set, all elements of $S$ are $\preceq$-comparable.
Therefore there are two cases to consider:


Case 1: $x \preceq y$
In this case:

$\map \min {x, y} = x = \map \inf {\set {x, y} }$


Case 2: $y \preceq x$
In this case:

$\map \min {x, y} = y = \map \inf {\set {x, y} }$
In either case, the result holds.
$\blacksquare$


Warning
Note that it is considered abuse of notation to write

$\min = \inf$
This is because

$\min: S \times S \to S$
while

$\inf: \powerset S \to S$
where $\powerset S$ is the power set of $S$.


Also see
Max Operation Yields Supremum of Parameters




