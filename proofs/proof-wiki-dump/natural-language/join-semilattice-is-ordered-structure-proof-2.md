# 

Source: https://proofwiki.org/wiki/Join_Semilattice_is_Ordered_Structure/Proof_2

Theorem
Let $\struct {S, \vee, \preceq}$ be a join semilattice.

Then $\struct {S, \vee, \preceq}$ is an ordered structure.
That is, $\preceq$ is compatible with $\vee$.


Proof
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





