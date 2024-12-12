# 

Source: https://proofwiki.org/wiki/Closure_Operator_from_Closed_Elements



Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $C \subseteq S$.
Suppose that $C$ is a subset of $S$ with the property that every element of $S$ has a smallest successor in $C$.
Let $\cl: S \to S$ be defined as follows:
For $x \in S$:

$\map \cl x = \map \min {C \cap x^\succeq}$
where $x^\succeq$ is the upper closure of $x$.
That is, let $\map \cl x$ be the smallest successor of $x$ in $C$.

Then:

$\cl$ is a closure operator on $S$
The closed elements of $\cl$ are precisely the elements of $C$.


Proof
Inflationary
$x$ is a lower bound of $x^\succeq$.
Hence by Lower Bound for Subset, $x$ is also a lower bound of $C \cap x^\succeq$.
By the definition of smallest element, $x \preceq \map \cl x$.
$\Box$


Order-Preserving
Suppose that $x \preceq y$.
Then:

$C \cap y^\succeq \subseteq C \cap x^\succeq$
By Smallest Element of Subset:

$\map \cl x \preceq \map \cl y$


Idempotent
Let $x \in S$.
For each $x \in S$:

$\map \cl x = \map \min {C \cap x^\succeq}$
Thus:

$\map \cl x \in \paren {C \cap x^\succeq} \subseteq C$
That is to say, $\map \cl x$ is its own smallest successor in $C$.
Thus:

$\map \cl x = \map \cl {\map \cl x}$
$\Box$

When $x \in C$, $x$ is the minimum of $C \cap x^\succeq$
Hence, elements of $C$ are closed elements with respect to $\cl$.
Suppose that $x$ is closed with respect to $\cl$.
Then:

$x = \map \min {C \cap x^\succeq}$
so in particular:

$x \in C$
$\blacksquare$





