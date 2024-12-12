# 

Source: https://proofwiki.org/wiki/Existence_of_Magma_with_no_Proper_Submagma

Theorem
Let $n \in \Z_{>0}$ be a strictly positive integer.
Let $S$ be a set of cardinality $n$:

$\card S = n$

Then there exists an operation $\circ$ on $S$ such that:

$\struct {S, \circ}$ is a magma
$\struct {S, \circ}$ has no submagma $\struct {T, \circ}$ such that $T$ is a non-empty proper subset of $S$.


Proof
For $n = 1$ the result follows trivially: there are no non-empty proper subsets of a singleton.

Let $S = \set {s_1, s_2, \ldots, s_n}$.
Let $\circ$ be defined on $S$ such that:

$\forall s_a \in S: s_a \circ s_a = \begin{cases} s_{a + 1} & : a < n \\ s_1 & : a = n \end{cases}$
For $a \ne b$ the operation $s_a \circ s_b$ can be arbitrary as long as $s_a \circ s_b \in S$.

Let $T$ be such that $\O \subsetneq T \subsetneq S$.
Then either:

$\exists s_k \in T: s_{k + 1} \notin T$
or:

$s_n \in T$ but $s_1 \notin T$
otherwise $T = S$.
Thus either:

$s_k \circ s_k \notin T$
or:

$s_n \circ s_n \notin T$
In either case, $\circ$ is not closed in $T$.
Thus by definition, $\struct {T, \circ}$ is not a submagma of $\struct {S, \circ}$.

As $T$ is arbitrary, the result follows.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $5$: Subgroups: Exercise $2$




