# 

Source: https://proofwiki.org/wiki/Meet_Semilattice_is_Ordered_Structure

Theorem
Let $\struct {S, \wedge, \preceq}$ be a meet semilattice.

Then $\struct {S, \wedge, \preceq}$ is an ordered structure.


Proof
For $\struct {S, \wedge, \preceq}$ to be an ordered structure is equivalent to, for all $a,b,c \in S$:

$a \preceq b \implies a \wedge c \preceq b \wedge c$
$a \preceq b \implies c \wedge a \preceq c \wedge b$
Since Meet is Commutative, it suffices to prove the first of these implications.

By definition of meet:

$b \wedge c = \inf \set {b, c}$
where $\inf$ denotes infimum.

By Meet Precedes Operands:

$a \wedge c \preceq a$
$a \wedge c \preceq c$
Now also $a \preceq b$, and by transitivity of $\preceq$ we find that:

$a \wedge c \preceq b$
Thus $a \wedge c$ is a lower bound for $\set {b, c}$.
Hence:

$a \wedge c \preceq b \wedge c$
by definition of infimum.
$\blacksquare$


Also see
Join Semilattice is Ordered Structure




