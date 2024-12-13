# 

Source: https://proofwiki.org/wiki/Inner_Automorphism_Group_is_Isomorphic_to_Quotient_Group_with_Center

Theorem
Let $G$ be a group.
Let $\Inn G$ be the inner automorphism group of $G$.
Let $\map Z G$ be the center of $G$.
Let $G / \map Z G$ be the quotient group of $G$ by $\map Z G$.

Then $G / \map Z G \cong \Inn G$.


Proof
Let $G$ be a group.
Let the mapping $\kappa: G \to \Inn G$ be defined as:

$\map \kappa a = \kappa_a$
where $\kappa_a$ is the inner automorphism of $G$ given by $a$.

From Kernel of Inner Automorphism Group is Center:

$\map \ker \kappa = \map Z G$
and also that:

$\Img \kappa = \Inn G$
From the First Isomorphism Theorem:

$\Img \kappa \cong G / \map \ker \kappa$
Thus, as $\map \ker \kappa = \map Z G$ and $\Img \kappa = \Inn G$:

$G / \map Z G \cong \Inn G$
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $7$: Homomorphisms: Exercise $10$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 64 \beta$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $25$




