# 

Source: https://proofwiki.org/wiki/Order_of_Group_Element_equals_Order_of_Coprime_Power/Proof_2



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


Necessary Condition
Let $m \perp n$.
Then by Bézout's Identity:

$\exists x, y \in \Z: x m + y n = 1$
Let $h = g^m$.
Then:

$h^x = g^{m x} = g^{1 - y n} = g g^{- y n} = g e = g$
and so $g$ is also a power of $h$.
Hence from Order of Group Element not less than Order of Power:

$\order g \le \order h \le \order g$
and it follows that:

$\order g = \order h$
$\Box$


Sufficient Condition
We prove the contrapositive.
Suppose $m \not \perp n$.
Then:

$\exists d \in \Z_{>1}: \exists a, b \in \Z: m = a d \land n = b d$
Let $h = g^m$.
Then:

$h^b = \paren {g^m}^{n/d} = g^{a n} = \paren {g^n}^a = e^a = e$
Hence:

$\order h \le b < n$
and it follows that:

$\order g \ne \order h$
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 8$: The Order (Period) of an Element: $\text{(iv)}$




