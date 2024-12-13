# 

Source: https://proofwiki.org/wiki/Open_Set_minus_Closed_Set_is_Open

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
For $A \subseteq S$ denote by $\relcomp S A$ the relative complement of $A$ in $S$.
Let $U \in \tau$ and $\relcomp S V \in \tau$.

Then:

$U \setminus V \in \tau$
and:

$\relcomp S {V \setminus U} \in \tau$


Proof
From Set Difference as Intersection with Relative Complement:

$U \setminus V = U \cap \relcomp S V$
Since $\tau$ is a topology:

$U, \relcomp S V \in \tau \implies U \cap \relcomp S V \in \tau \implies U \setminus V \in \tau$
The other statement follows mutatis mutandis.
$\blacksquare$


Sources
Mizar article FRECHET:4
Mizar article YELLOW_8:20




