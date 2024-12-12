# 

Source: https://proofwiki.org/wiki/Conjugate_of_Subgroup_is_Subgroup/Proof_2

Theorem
Let $G$ be a group.
Let $H \le G$ be a subgroup of $G$.

Then the conjugate of $H$ by $a$ is a subgroup of $G$:

$\forall H \le G, a \in G: H^a \le G$


Proof
Let $*: G \times G / H \to G / H$ be the group action on the (left) coset space:

$\forall g \in G, \forall g' H \in G / H: g * \paren {g' H} := \paren {g g'} H$
It is established in Action of Group on Coset Space is Group Action that $*$ is a group action.

Then from Stabilizer of Coset under Group Action on Coset Space:

$\Stab {a H} = a H a^{-1}$
where $\Stab {a H}$ the stabilizer of $a H$ under $*$.

The result follows from Stabilizer is Subgroup.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $6$: Cosets: Exercise $9$




