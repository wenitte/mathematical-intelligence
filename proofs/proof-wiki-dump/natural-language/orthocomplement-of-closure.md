# 

Source: https://proofwiki.org/wiki/Orthocomplement_of_Closure

Theorem
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space.
Let $S \subseteq V$ be non-empty.

Then:

$S^\bot = \map \cl S^\bot$
where $\bot$ denotes orthocomplementation.


Proof
From Orthocomplement Reverses Subset, we have:

$\map \cl S^\bot \subseteq S^\bot$
Conversely, let $y \in S^\bot$.
Let $x \in \map \cl S$.
Then there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $S$ such that $x_n \to x$.
Since $y \in S^\bot$, we have $\innerprod {x_n} y = 0$ for each $n \in \N$.
From Inner Product is Continuous, we have $\innerprod x y = 0$ taking $n \to \infty$.
Since $x \in \map \cl S$ was arbitrary we have $y \in \map \cl S^\bot$.
$\blacksquare$





