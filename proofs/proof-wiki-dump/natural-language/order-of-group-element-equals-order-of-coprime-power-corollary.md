# 

Source: https://proofwiki.org/wiki/Order_of_Group_Element_equals_Order_of_Coprime_Power/Corollary

Corollary to Order of Group Element equals Order of Coprime Power
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $g \in G$ be an element of $g$.
Let $\order g$ denote the order of $g$ in $G$.

Let $H \le G$ be a subgroup of $G$.
Let $\order g = n$.
Let $g^m \in H$.
Let $m$ and $n$ be coprime.

Then $g \in H$.


Proof
From Order of Group Element equals Order of Coprime Power:

$m \perp n \iff \order {g^m} = \order g$
As $\order g = n$ and $n \perp m$, from Power of Generator of Cyclic Group is Generator iff Power is Coprime with Order:

$\gen g = \gen {g^m}$
Thus as $g^m \in H$ it follows that $\gen {g^m} \le H$
Hence $\gen g \le H$.
The result follows.
$\blacksquare$


Sources
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts: Exercise $12$




