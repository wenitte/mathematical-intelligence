# 

Source: https://proofwiki.org/wiki/Group_Action_on_Coset_Space_is_Transitive

Theorem
Let $G$ be a group whose identity is $e$.
Let $H$ be a subgroup of $G$.

Let $*: G \times G / H \to G / H$ be the action on the (left) coset space:

$\forall g \in G, \forall g' H \in G / H: g * \paren {g' H} := \paren {g g'} H$
Then $G$ is a transitive group action.


Proof
It is established in Action of Group on Coset Space is Group Action that $*$ is a group action.
It remains to be shown that:

$\forall g' H \in G / H: \Orb {g' H} = G / H$
where $\Orb {g' H}$ denotes the orbit of $g' H \in G / H$ under $*$.

Let $a H, b H \in G / H$ such that $a H \ne b H$.
We have that:

$\exists x \in G: x a = b$
and so:

$x * a H = \paren {x a} H = b H$
and so:

$b H \in \Orb {a H}$
As both $a$ and $b$ are arbitrary, the result follows.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $6$: Cosets: Exercise $9$




