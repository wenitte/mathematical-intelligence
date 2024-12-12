# 

Source: https://proofwiki.org/wiki/Correspondence_Between_Group_Actions_and_Permutation_Representations

Theorem
Let $G$ be a group.
Let $X$ be a set.
There is a one-to-one correspondence between group actions of $G$ on $X$ and permutation representations of $G$ in $X$, as follows:

Let $\phi : G \times X \to X$ be a group action.
Let $\rho : G \to \struct {\map \Gamma X, \circ}$ be a permutation representation.

The following are equivalent:

$(1): \quad \rho$ is the permutation representation associated to $\phi$
$(2): \quad \phi$ is the group action associated to $\rho$


Proof
For $g\in G$, define the mapping $\phi_g : X \to X$ as:

$\map {\phi_g} x = \map \phi {g, x}$

Then $\rho$ is the permutation representation associated to $\phi$ if and only if:

$\forall g \in G : \map \rho g  = \phi_g$
By Equality of Mappings, this is equivalent to:

$\forall g \in G : \forall x \in X : \map {\map \rho g} x = \map {\phi_g} x$
$\phi$ is the group action associated to $\rho$ if and only if:

$\forall g \in G : \forall x \in X : \map \phi {g, x} = \map {\map \rho g} x$.

Because $\map {\phi_g} x = \map \phi {g, x}$, they are equivalent.
$\blacksquare$





