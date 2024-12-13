# 

Source: https://proofwiki.org/wiki/Group_Action_on_Subgroup_by_Right_Regular_Representation_is_not_Transitive

Theorem
Let $G$ be a group.
Let $H$ be a proper subgroup of $G$.

Let $*: H \times G \to G$ be the group action defined as:

$\forall \tuple {h, g} \in H \times G: h * g = \map {\rho_{h^{-1} } } g$
where $\map {\rho_{h^{-1} } } g$ is the right regular representation of $g$ by $h^{-1}$.
Then $*$ is not transitive.


Proof
From Group Action on Subgroup by Right Regular Representation it is established that $*$ is a group action.
From Orbit of Group Action on Subgroup by Right Regular Representation is Right Coset:

$\forall x \in G: \Orb x = H x$
where $H x$ is the right coset of $H$ by $x$.
From Right Coset Space forms Partition it is apparent that $H x \ne G$ unless $H = G$.
Thus $\Orb x \ne G$ and the result follows by definition of transitive group action.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions




