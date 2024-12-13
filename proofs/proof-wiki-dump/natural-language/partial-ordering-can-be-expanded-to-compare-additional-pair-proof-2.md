# 

Source: https://proofwiki.org/wiki/Partial_Ordering_can_be_Expanded_to_compare_Additional_Pair/Proof_2

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $a$ and $b$ be non-comparable elements of $S$.
That is, let:

$a \not\preceq b$
and:

$b \not\preceq a$

Let ${\preceq'} = {\preceq} \cup \set {\tuple {a, b} }$.
Let $\preceq'^+$ be the transitive closure of $\preceq'$.

Then:

$\preceq'^+$ is an ordering.

$\preceq'^+$ can be defined by letting $p \preceq'^+ q$ if and only if:

$p \preceq q$ or
$p \preceq a$ and $b \preceq q$.


Proof
Let $\prec$ be the reflexive reduction of $\preceq$.
Let $\prec' = {\prec} \cup \set {\tuple {a, b} }$.
By Reflexive Reduction of Ordering is Strict Ordering, $\prec$ is a strict ordering.
Define a relation $\prec'_2$ by letting $p \prec'_2 q$ if and only if:

$p \prec q$ or
$p \preceq a$ and $b \preceq q$
By Strict Ordering can be Expanded to Compare Additional Pair, $\prec'_2$ is a strict ordering and is the transitive closure of $\prec'$.
Then the reflexive closure of $\prec'_2$, ${\prec'_2}^=$ is the transitive reflexive closure of $\prec'$.
From Equivalence of Definitions of Reflexive Transitive Closure, ${\prec'_2}^=$ is the transitive closure of the reflexive closure of $\prec'$.
The reflexive closure of $\prec'$ is $\preceq'$, so ${\prec'_2}^=$ is the transitive closure of $\preceq'$.
But ${\prec'_2}^=$ is clearly the relation defined by the two conditions in the theorem statement.
$\blacksquare$





