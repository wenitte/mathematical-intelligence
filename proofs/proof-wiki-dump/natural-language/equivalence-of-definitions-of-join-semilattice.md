# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Join_Semilattice


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theoremm
The following definitions of the concept of Join Semilattice are equivalent:

Definition 1
Let $\struct {S, \preceq}$ be an ordered set.
Suppose that for all $a, b \in S$:

$a \vee b \in S$
where $a \vee b$ is the join of $a$ and $b$ with respect to $\preceq$.

Then the ordered structure $\struct {S, \vee, \preceq}$ is called a join semilattice.


Definition 2
Let $\struct {S, \vee}$ be a semilattice.
Let $\preceq$ be the ordering on $S$ defined by:

$a \preceq b \iff \paren {a \vee b} = b$

Then the ordered structure $\struct {S, \vee, \preceq}$ is called a join semilattice.


Proof
Definition 1 implies Definition 2
Let $\struct{S, \preceq}$ be an ordered set.
For all $a, b \in S$ let:

$a \vee b \in S$
where $a \vee b$ is the join of $a$ and $b$ with respect to $\preceq$.

We have by hypothesis, $\vee$ is closed.
The other defining properties for a semilattice follow respectively from:

Join is Commutative
Join is Associative
Join is Idempotent
Hence $\struct {S, \vee}$ is a semilattice.

From Successor is Supremum:

$\forall a, b \in S : a \preceq b \iff b = a \vee b$
$\Box$

Definition 2 implies Definition 1
Let $\struct{S, \vee}$ be a semilattice.
Let $\preceq$ be the relation on $S$ defined by:

$a \preceq b \iff \paren {a \vee b} = b$

From Semilattice has Unique Ordering such that Operation is Supremum:

$\preceq$ is the unique ordering on $S$ such that:
$\forall a, b \in S : a \vee b$ is the join of $a$ and $b$ with respect to $\preceq$
$\blacksquare$





