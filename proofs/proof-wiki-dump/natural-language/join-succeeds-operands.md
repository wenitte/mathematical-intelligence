# 

Source: https://proofwiki.org/wiki/Join_Succeeds_Operands

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $a, b \in S$ admit a join $a \vee b \in S$.

Then:

$a \preceq a \vee b$
$b \preceq a \vee b$
That is, $a \vee b$ succeeds its operands $a$ and $b$.


Proof
By definition of join:

$a \vee b = \sup \set {a, b}$
where $\sup$ denotes supremum.

Since a supremum is a fortiori an upper bound:

$a \preceq \sup \set {a, b}$
$b \preceq \sup \set {a, b}$
as desired.
$\blacksquare$


Also see
Meet Precedes Operands




