# 

Source: https://proofwiki.org/wiki/Completely_Irreducible_implies_Meet_Irreducible

Theorem
Let $L = \struct {S, \wedge, \preceq}$ be a meet semilattice.
Let $p \in S$.

Then if $p$ is completely irreducible, then $p$ is meet irreducible.


Proof
Assume that

$p$ is completely irreducible.
By Completely Irreducible Element iff Exists Element that Strictly Succeeds First Element

$\exists q \in S: p \prec q \land \left({\forall s \in S: p \prec s \implies q \preceq s}\right) \land p^\succeq = \left\{ {p}\right\} \cup q^\succeq$
where $p^\succeq$ denotes the upper closure of $p$.
Let $a, b \in S$ such that

$p = a \wedge b$
Aiming for a contradiction, suppose

$a \ne p$ and $b \ne p$
By Meet Precedes Operands:

$p \preceq b$
By definition of strictly precede:

$p \prec b$
Then

$q \preceq b$
By definition of strictly precede:

$p \preceq q$
By Meet Precedes Operands:

$p \preceq a$
By definition of strictly precede:

$p \prec a$
Then

$q \preceq a$
By Meet Semilattice is Ordered Structure:

$q \preceq p$
By definition of antisymmetry:

$p = q$
Thus this contradicts $p \prec q$ by definition of strictly precede.
$\blacksquare$


Sources
Mizar article WAYBEL16:23




