# 

Source: https://proofwiki.org/wiki/Quotient_Theorem_for_Group_Homomorphisms/Examples/Inner_Automorphism_by_Inverse_Element

Example of Use of Quotient Theorem for Group Homomorphisms
Let $G$ be a group.
Let $\Aut G$ denote the automorphism group of $G$.

Let $\phi: G \to \Aut G$ be the homomorphism defined as:

$\forall g \in G: \map \phi g = \kappa_{g^{-1} }$
where $\kappa_{g^{-1} }$ denotes the inner automorphism of $G$ by $g^{-1}$.

Then $\phi$ can be decomposed into the form:

$\phi = \alpha \beta \gamma$
in the following way:


$\alpha: \Inn G \to \Aut G$ is defined as:
$\forall \kappa \in \Inn G: \map \alpha \kappa = \kappa$
where $\Inn G$ denotes the inner automorphism group of $G$


$\beta: G / \map Z G \to \Inn G$ is defined as:
$\forall g \in G / \map Z G: \map \phi g = \kappa_{g^{-1} }$
where $G / \map Z G$ denotes the quotient group of $G$ by the center of $G$


$\gamma: G \to G / \map Z G$ is defined as:
$\forall g \in G: \map \gamma g = \map {q_{\map Z G} } g = g \, \map Z G$
where $q_{\map Z G}$ is the quotient epimorphism from $G$ to $G / \map Z G$.


Proof
By definition, $\phi$ is a homomorphism.

From Kernel of Inner Automorphism Group is Center, we have that:

$\map \ker \phi = \map Z G$
where $\map Z G$ is the center of $G$.

Thus, from the Quotient Theorem for Group Homomorphisms, $\phi$ can be decomposed into:

$\phi = \alpha \beta \gamma$
where:

$\alpha: \Inn G \to \Aut G$, which is a monomorphism
$\beta: G / \map Z G \to \Inn G$, which is an isomorphism
$\gamma: G \to G / \map Z G$, which is an epimorphism.

The result follows.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 67 \ \beta$




