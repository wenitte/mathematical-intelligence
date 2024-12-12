# 

Source: https://proofwiki.org/wiki/Characterization_of_Prime_Element_in_Inclusion_Ordered_Set_of_Topology



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $L = \struct {\tau, \preceq}$  be an inclusion ordered set of $\tau$.
Let $Z \in \tau$.

Then $Z$ is prime element in $L$ if and only if:

$\forall X, Y \in \tau: X \cap Y \subseteq Z \implies X \subseteq Z \lor Y \subseteq Z$


Proof
Sufficient Condition
Assume that

$Z$ is prime element in $L$.
Let $X, T \in \tau$ such that:

$X \cap Y \subseteq Z$
By Join and Meet in Inclusion Ordered Set of Topology and definition of inclusion ordered set:

$X \wedge Y \preceq Z$
By definition of prime element:

$X \preceq Z$ or $Y \preceq Z$
Thus by definition of inclusion ordered set:

$X \subseteq Z$ or $Y \subseteq Z$
$\Box$


Necessary Condition
Assume that:
L$\forall X, Y \in \tau: X \cap Y \subseteq Z \implies X \subseteq Z \lor Y \subseteq Z$
Let $X, Y \in \tau$ such that:

$X \wedge Y \preceq Z$
By Join and Meet in Inclusion Ordered Set of Topology and definition of inclusion ordered set:

$X \cap Y \subseteq Z$
By assumption:

$X \subseteq Z$ or $Y \subseteq Z$
Thus by definition of inclusion ordered set:

$X \preceq Z$ or $Y \preceq Z$
$\blacksquare$


Sources
Mizar article WAYBEL14:19




