# 

Source: https://proofwiki.org/wiki/Characterization_of_Analytic_Basis_by_Local_Bases

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $P$ be a set of subsets of $S$ such that

$P \subseteq \tau$
and

for all $p \in S$: there exists local basis $B$ at $p: B \subseteq P$

Then $P$ is basis of $T$.


Proof
By assumption:

$P \subseteq \tau$
Let $U$ be an open subset of $S$.
Define:

$X := \set {V \in P: V \subseteq U}$
By definition of subset:

$X \subseteq P$
We will prove that:

$\forall u \in S: u \in U \iff \exists Z \in X: u \in Z$
Let $u \in S$.
We will prove that:

$u \in U \implies \exists Z \in X: u \in Z$
Assume that:

$u \in U$
By assumption:

there exists local basis $B$ at $u: B \subseteq P$.
By definition of local basis:

$\exists V \in B: V \subseteq U$
Thus by definitions of subset and $X$:

$V \in X$
Thus by definition of local basis:

$u \in V$
$\Box$

Assume that:

$\exists Z \in X: u \in Z$
By definition of $X$:

$Z \subseteq U$
Thus by definition of subset:

$u \in U$
$\Box$

Thus by definition of union:

$U = \bigcup X$
Hence $P$ is basis of $L$.
$\blacksquare$


Sources
Mizar article YELLOW_8:14




