# 

Source: https://proofwiki.org/wiki/Meet_Precedes_Operands

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $a, b \in S$ admit a meet $a \wedge b \in S$.

Then:

$a \wedge b \preceq a$
$a \wedge b \preceq b$
That is, $a \wedge b$ precedes its operands $a$ and $b$.


Proof
By definition of meet:

$a \wedge b = \inf \set {a, b}$
where $\inf$ denotes infimum.

Since an infimum is a fortiori a lower bound:

$\inf \set {a, b} \preceq a$
$\inf \set {a, b} \preceq b$
as desired.
$\blacksquare$





