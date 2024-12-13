# 

Source: https://proofwiki.org/wiki/One_Succeeds_Zero_in_Well-Ordered_Integral_Domain

Theorem
Let $\struct {D, +, \times, \le}$ be a well-ordered integral domain.
Let $0$ and $1$ be the zero and unity respectively of $D$.

Then $0$ is the immediate predecessor of $1$:

$0 < 1$
$\neg \exists a \in D: 0 < a < 1$


Proof
Aiming for a contradiction, suppose there exists an element $a \in D$ such that $0 < a < 1$.
Let us create the set $S$ of all such elements:

$S = \set {x \in D: 0 < x < 1}$
We know $S$ is not empty because it has already been asserted that $a$ is in it.
And all the elements in $S$ are strictly positive by definition.
Because $D$ is well-ordered it follows that $S$ has a minimal element, which we will call $m$.
Thus we have $0 < m < 1$.
Then from Square of Element Less than Unity in Ordered Integral Domain we have:

$0 < m \times m < m$
Thus $m \times m \in S$ is an element of $S$ which is smaller than $m$.
But $m$ was supposed to be the minimal element of $S$.
From this contradiction we deduce that there can be no such element $a$ such that $0 < a < 1$.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Ordered and Well-Ordered Integral Domains: $\S 8$. Well-Order: Theorem $12$




