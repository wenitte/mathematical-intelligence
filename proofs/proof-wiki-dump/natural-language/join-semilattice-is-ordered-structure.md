# 

Source: https://proofwiki.org/wiki/Join_Semilattice_is_Ordered_Structure



Theorem
Let $\struct {S, \vee, \preceq}$ be a join semilattice.

Then $\struct {S, \vee, \preceq}$ is an ordered structure.
That is, $\preceq$ is compatible with $\vee$.


Proof 1
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


Proof 2
Let $a, b, c \in S$.
Let $a \preceq b$.
By the definition of join semilattice:

$a \vee b = b$
Thus:

$\paren {a \vee b} \vee c = b \vee c$
Since $\vee$ is associative, commutative, and idempotent:

$\paren {a \vee c} \vee \paren {b \vee c} = b \vee c$
Therefore, $a \vee c \preceq b \vee c$.
From Join is Commutative, we conclude that:

$c \vee a \preceq c \vee b$
$\blacksquare$


Also see
Meet Semilattice is Ordered Structure




