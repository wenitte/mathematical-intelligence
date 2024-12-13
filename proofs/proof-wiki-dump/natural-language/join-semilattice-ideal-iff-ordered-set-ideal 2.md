# 

Source: https://proofwiki.org/wiki/Join_Semilattice_Ideal_iff_Ordered_Set_Ideal



Theorem
Let $\struct {S, \vee, \preceq}$ be a join semilattice.
Let $I \subseteq S$ be a non-empty subset of $S$.

Then:

$I$ is a join semilattice ideal of $\struct {S, \vee, \preceq}$ if and only if $I$ is an ordered set ideal of $\struct {S, \preceq}$.


Proof
Necessary Condition
Let $I$ be a join semilattice ideal of $\struct {S, \vee, \preceq}$.
To show that $I$ is an ordered set ideal of $\struct {S, \preceq}$ it is sufficient to show:










$I$ is a directed subset of $S$:   

  \(\ds \forall x, y \in I: \exists z \in I:\)

\(\ds x \preceq z \text{ and } y \preceq z \)   







  


Let $x, y \in I$.
Let $z = x \vee y$.
By definition of join semilattice ideal, $I$ is a subsemilattice, so:

$z \in I$
By definition of join:

$x \preceq z \text{ and } y \preceq z$
The result follows.
$\Box$


Sufficient Condition
Let $I$ be an ordered set ideal of $\struct {S, \preceq}$.
To show that $I$ is a join semilattice ideal of $\struct {S, \vee, \preceq}$ it is sufficient to show:




\((\text {JSI 2})\)  

$:$  



$I$ is a subsemilattice of $S$:   

  \(\ds \forall x, y \in I:\)

\(\ds x \vee y \in I \)   







  


Let $x, y \in I$.
By definition of ordered set ideal, $I$ is a directed subset, so:

$\exists z \in I : x \preceq z \text{ and } y \preceq z$
By definition of join:

$x \vee y \preceq z$
By definition of ordered set ideal, $I$ is a lower section, so:

$x \vee y \in I$
The result follows.
$\blacksquare$





