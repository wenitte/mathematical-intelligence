# 

Source: https://proofwiki.org/wiki/No_Group_has_Two_Order_2_Elements

Theorem
A group can not contain exactly two elements of order $2$.


Proof
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Suppose:

$s, t \in \struct {G, \circ}\: s \ne t, \order s = \order t = 2$
That is. they are self-inverse:

$s^2 = e = t^2$
The identity is of order $1$.
Hence $s$ nor $t$ is the identity
Hence, as $s \ne t$, then $s \circ t \in G$ is distinct from both $s$ and $t$.
Also $s \circ t \ne e$ because $s \ne t^{-1}$.

Suppose $s$ and $t$ commute.
Then $\paren {s \circ t}^2 = e$ from Self-Inverse Elements Commute iff Product is Self-Inverse.
Thus there is a third element (at least) in $G$ which is of order $2$.

Now suppose $s$ and $t$ do not commute.
Then from Commutation Property in Group, $s \circ t \circ s^{-1}$ is another element of $G$ distinct from both $s$ and $t$.
But from Order of Conjugate Element equals Order of Element:

$\order {s \circ t \circ s^{-1} } = \order t$
and thus $s \circ t \circ s^{-1}$ is another element of order $2$.
Thus there is a third element (at least) in $G$ which is of order $2$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $12 \ \text {(ii)}$




