# 

Source: https://proofwiki.org/wiki/Open_iff_Upper_and_with_Property_(S)_in_Scott_Topological_Lattice



Theorem
Let $T = \struct {S, \preceq, \tau}$ be an up-complete topological lattice.
Let $A$ be a subset of $S$.

Then $A$ is open if and only if $A$ is upper and with property (S).


Proof
Sufficient Condition
Let $A$ be open.
Thus by definition of Scott topology:

$A$ is an upper section.
Let $D$ be a directed subset of $S$ such that

$\sup D \in A$
By definition of Scott topology:

$A$ is inaccessible by directed suprema.
By definition of inaccessible by directed suprema:

$A \cap D \ne \O$
By definition of non-empty:

$\exists y: y \in A \cap D$
By definition of intersection:

$y \in A$ and $y \in D$
Thus $y \in D$.
Thus by definition of upper section:

$\forall x \in D: y \preceq x \implies x \in A$
$\Box$


Necessary Condition
Assume that

$A$ is upper and with property (S).
According to the definition of Scott topology it should be proved that

$A$ is upper and inaccessible by directed suprema.
Thus by assumption:

$A$ is upper.
Let $D$ be a directed subset of $S$ such that

$\sup D \in A$
By definition of property (S):

$\exists y \in D: \forall x \in D: y \preceq x \implies x \in A$
By definition of reflexivity:

$y \preceq y$
Then

$y \in A$
By definition of intersection:

$y \in A \cap D$
Thus by definition of non-empty:

$A \cap D \ne \O$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL11:15




