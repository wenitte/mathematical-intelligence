# 

Source: https://proofwiki.org/wiki/Order_of_Group_Element_equals_Order_of_Coprime_Power/Proof_1

Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $g \in G$ be an element of $g$.
Let $\order g$ denote the order of $g$ in $G$.

Then:

$\forall m \in \Z: \order {g^m} = \order g \iff m \perp \order g$
where:

$g^m$ denotes the $m$th power of $g$ in $G$
$\perp$ denotes coprimality.


Proof
Let $\order g = n$.

Then from Order of Power of Group Element:

$\forall m \in \Z: \order {g^m} = \dfrac n {\gcd \set {m, n}}$
where $\gcd \set {m, n}$ denotes the greatest common divisor of $m$ and $n$.
Thus:

$\order {g^m} = \order g \iff \gcd \set {m, n} = 1$
The result follows by definition of coprime integers.
$\blacksquare$





