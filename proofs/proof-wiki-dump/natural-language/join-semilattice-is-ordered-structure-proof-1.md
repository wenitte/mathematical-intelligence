# 

Source: https://proofwiki.org/wiki/Join_Semilattice_is_Ordered_Structure/Proof_1

Theorem
Let $\struct {S, \vee, \preceq}$ be a join semilattice.

Then $\struct {S, \vee, \preceq}$ is an ordered structure.
That is, $\preceq$ is compatible with $\vee$.


Proof
For $\struct {S, \vee, \preceq}$ to be an ordered structure is equivalent to, for all $a, b, c \in S$:

$a \preceq b \implies a \vee c \preceq b \vee c$
$a \preceq b \implies c \vee a \preceq c \vee b$
Since Join is Commutative, it suffices to prove the first of these implications.

By definition of join:

$a \vee c = \sup \set {a, c}$
where $\sup$ denotes supremum.

By Join Succeeds Operands:

$b \preceq b \vee c$
$c \preceq b \vee c$
Now also $a \preceq b$, and by transitivity of $\preceq$ we find that:

$a \preceq b \vee c$
Thus $b \vee c$ is an upper bound for $\set {a, c}$.
Hence:

$a \vee c \preceq b \vee c$
by definition of supremum.
$\blacksquare$





