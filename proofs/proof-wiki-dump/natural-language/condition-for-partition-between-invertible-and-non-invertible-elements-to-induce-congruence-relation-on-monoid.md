# 

Source: https://proofwiki.org/wiki/Condition_for_Partition_between_Invertible_and_Non-Invertible_Elements_to_induce_Congruence_Relation_on_Monoid



Theorem
Let $\struct {S, \circ}$ be a monoid whose identity element is $e$ such that $\struct {S, \circ}$ is specifically not a group.
Let $\struct {H, \circ}$ be the subgroup of $\struct {S, \circ}$ consisting of its invertible elements.
Let $N$ be the set of non-invertible elements of $\struct {S, \circ}$.
Let $\RR$ be the equivalence relation induced by the partition $\set {N \mid H}$.

Let either:

$\circ$ be a cancellable operation
or:

$\circ$ be a commutative operation.

Then:

$\RR$ is a congruence relation on $\circ$
and:

the quotient structure $\struct {S / \RR, \circ_\RR}$ is isomorphic to $\struct {\Z_2, \times_2}$, the multiplicative monoid of integers modulo $2$.


Counterexample
Let $\circ$ be such that it is neither a cancellable operation nor a commutative operation.

Then it is not necessarily the case that either:

$\RR$ is a congruence relation on $\circ$
or:

the quotient structure $\struct {S / \RR, \circ_\RR}$ is isomorphic to $\struct {\Z_2, \times_2}$, the multiplicative monoid of integers modulo $2$.


Proof
First we confirm from Invertible Elements of Monoid form Subgroup that $\struct {H, \circ}$ is in fact a subgroup of $\struct {S, \circ}$.
Let $h_1, h_2 \in H$ and $n_1, n_2 \in N$.
Immediately we have by Group Axiom $\text G 0$: Closure:

$h_1 \circ h_2 \in H$

Aiming for a contradiction, suppose $h_1 \circ n_1 \in H$.
By Group Axiom $\text G 3$: Existence of Inverse Element:

${h_1}^{-1} \in H$
Hence by Group Axiom $\text G 0$: Closure:

${h_1}^{-1} \circ \paren {h_1 \circ n_1} = n_1 \in H$
This is a contradiction.
Therefore we must have $h_1 \circ n_1 \in N$.
Similarly, we must have $n_1 \circ h_1 \in N$.

Aiming for a contradiction, suppose $n_1 \circ n_2 \in H$.
Then by Group Axiom $\text G 3$: Existence of Inverse Element:

$\exists h \in H: h \circ \paren {n_1 \circ n_2} = \paren {n_1 \circ n_2} \circ h = e_H$
so $\paren {n_2 \circ h}$ is a right inverse of $n_1$.
If $\circ$ is cancellable, from:

$e_H \circ n_2 = n_2 \circ e_H = n_2 \circ \paren {h \circ n_1 \circ n_2}$
we would have:

$e_H = n_2 \circ h \circ n_1$
If $\circ$ is commutative:

$\paren {n_2 \circ h} \circ n_1 = n_1 \circ \paren {n_2 \circ h} = e_H$
In either case, we see that $\paren {n_2 \circ h} \circ n_1 = e_H$.
So $\paren {n_2 \circ h}$ is also a left inverse of $n_1$.
Thus $n_1$ is invertible, which is a contradiction.
Therefore we must have $n_1 \circ n_2 \in N$.

So far we have:

$h_1 \circ h_2 \in H$
$h_1 \circ n_1 \in N$
$n_1 \circ h_1 \in N$
$n_1 \circ n_2 \in N$
$\Box$


This article needs proofreading.In particular: The organization of the information belowIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Now we show that $\RR$ is a congruence relation on $\circ$.
By definition of $\RR$:

$x \mathrel \RR y \iff \set {x, y} \subseteq N \lor \set {x, y} \subseteq H$
and we need to show:

$\forall x_1, x_2, y_1, y_2 \in S: \paren {x_1 \mathrel \RR x_2} \land \paren {y_1 \mathrel \RR y_2} \implies \paren {x_1 \circ y_1} \mathrel \RR \paren {x_2 \circ y_2}$
There are $4$ cases:

$x_1, x_2, y_1, y_2 \in H$: then $x_1 \circ y_1, x_2 \circ y_2 \in H$, so $\paren {x_1 \circ y_1} \mathrel \RR \paren {x_2 \circ y_2}$
The remaining cases are:

$x_1, x_2 \in H, y_1, y_2 \in N$
$x_1, x_2 \in N, y_1, y_2 \in H$
$x_1, x_2, y_1, y_2 \in N$
In these cases we have:

$x_1 \circ y_1, x_2 \circ y_2 \in N$
so $\paren {x_1 \circ y_1} \mathrel \RR \paren {x_2 \circ y_2}$.
Since in each case we have $\paren {x_1 \circ y_1} \mathrel \RR \paren {x_2 \circ y_2}$, $\RR$ is a congruence relation on $\circ$.
$\Box$

Finally we show that the quotient structure $\struct {S / \RR, \circ_\RR}$ is isomorphic to $\struct {\Z_2, \times_2}$, the multiplicative monoid of integers modulo $2$.
We do this by defining a mapping $\phi: S / \RR \to \Z_2$ by:

$\map \phi N = 0, \map \phi H = 1$
It is clear that $\phi$ is a bijection.
By writing $H = \eqclass h {\RR}$ and $N = \eqclass n \RR$, where $h \in H$ and $n \in N$, we see that:

$H \circ_\RR H = \eqclass h {\RR} \circ_{\RR} \eqclass h {\RR} = \eqclass {h \circ h} {\RR} = H$
$H \circ_\RR N = \eqclass h {\RR} \circ_{\RR} \eqclass n {\RR} = \eqclass {h \circ n} {\RR} = N$
$N \circ_\RR H = \eqclass n {\RR} \circ_{\RR} \eqclass h {\RR} = \eqclass {n \circ h} {\RR} = N$
$N \circ_\RR N = \eqclass n {\RR} \circ_{\RR} \eqclass n {\RR} = \eqclass {n \circ n} {\RR} = N$
and hence:

$1 = \map \phi H = \map \phi {H \circ_\RR H} = \map \phi H \times \map \phi H = 1 \times 1$
$0 = \map \phi N = \map \phi {H \circ_\RR N} = \map \phi H \times \map \phi N = 1 \times 0$
$0 = \map \phi N = \map \phi {N \circ_\RR H} = \map \phi N \times \map \phi H = 0 \times 1$
$0 = \map \phi N = \map \phi {N \circ_\RR N} = \map \phi N \times \map \phi N = 0 \times 0$
Thus $\phi$ is an isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.17 \ \text {(a)}$




