# 

Source: https://proofwiki.org/wiki/Closed_Set_iff_Lower_and_Closed_under_Directed_Suprema_in_Scott_Topological_Ordered_Set



Theorem
Let $T = \struct {S, \preceq, \tau}$ be a relational structure with Scott topology
where $\struct {S, \preceq}$ is an up-complete ordered set.
Let $A$ be a subset of $S$.

Then $A$ is closed if and only if $A$ is lower and closed under directed suprema.


Proof
Sufficient Condition
Assume that

$A$ is closed.
By definition of closed set:

$\relcomp S A \in \tau$
By definition of Scott topology:

$\relcomp S A$ is upper and inaccessible by directed suprema.
By Complement of Complement:

$\relcomp S {\relcomp S A} = A$
Thus by Complement of Upper Section is Lower Section:

$A$ is a lower section.
Thus by Complement of Inaccessible by Directed Suprema Subset is Closed under Directed Suprema:

$A$ is closed under directed suprema.
$\Box$


Necessary Condition
Assume that
$A$ is lower and closed under directed suprema.
By Complement of Lower Section is Upper Section and Complement of Closed under Directed Suprema Subset is Inaccessible by Directed Suprema:

$\relcomp S A$ is upper and inaccessible by directed suprema.
By definition of Scott topology:

$\relcomp S A \in \tau$
Thus by definition:

$A$ is closed set.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL11:7




