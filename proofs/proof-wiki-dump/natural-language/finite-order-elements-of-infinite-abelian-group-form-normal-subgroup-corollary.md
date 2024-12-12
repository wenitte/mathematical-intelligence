# 

Source: https://proofwiki.org/wiki/Finite_Order_Elements_of_Infinite_Abelian_Group_form_Normal_Subgroup/Corollary

Corollary to Finite Order Elements of Infinite Abelian Group form Normal Subgroup
Let $G$ be an infinite abelian group.
Let $H \subseteq G$ be the subset of $G$ defined as:

$H := \set {x \in G: x \text { is of finite order in } G}$

All the elements of the quotient group $G / H$ are of infinite order except the identity.


Proof
Let $e$ be the identity element of $G$.
From Finite Order Elements of Infinite Abelian Group form Normal Subgroup, $H$ forms a normal subgroup of $G$.
Hence $G / H$ is defined as the quotient group.

From Quotient Group is Group, $\order {e H} = H$ is the identity element of $G / H$.
From Identity is Only Group Element of Order 1, $\order {e H} = 1$.

Let $x H$ be of finite order in $G / H$, where $x \in G$.
Let $\order {x H} = m$.
Then $\paren {x H}^m = H$ by definition of finite order element.
Thus:

$\exists n \in \Z_{>0}: \paren {x^m}^n = e$
and so $x \in H$.
That is:

$x H = H$
and so $x H$ is the identity element of $G / H$.
Thus if $x H$ is of finite order in $G / H$, it has to be the identity element.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $14$




