# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Compatible_Atlases



Theorem
Let $M$ be a topological space.
Let $\mathscr F, \mathscr G$ be $d$-dimensional atlases of class $C^k$ on $M$.

The following definitions of the concept of Compatible Atlases are equivalent:

Definition 1
$\mathscr F, \mathscr G$ are $C^k$-compatible if and only if their union $\mathscr F \cup \mathscr G$ is an atlas of class $C^k$.

Definition 2
$\mathscr F$ and $\mathscr G$ are $C^k$-compatible if and only if every pair of charts $\struct {U, \phi} \in \mathscr F$ and $\struct {V, \psi} \in \mathscr G$ are $C^k$-compatible.


Proof
Definition $1$ implies Definition $2$
Follows immediately from the definition of $C^k$-atlas.
$\Box$


Definition $2$ implies Definition $1$
Let $\struct {U, \phi}$ and $\struct {V, \psi}$ be charts in $\mathscr F \cup \mathscr G$.
If they are both in $\mathscr F$, they are $C^k$-compatible because $\mathscr F$ is a $C^k$-atlas.
If they are both in $\mathscr G$, they are $C^k$-compatible because $\mathscr G$ is a $C^k$-atlas.
If $\struct {U, \phi} \in \mathscr F$ and $\struct {V, \psi} \in \mathscr G$, they are $C^k$-compatible by hypothesis.
Thus $\mathscr F \cup \mathscr G$ is a $C^k$-atlas.
$\blacksquare$





