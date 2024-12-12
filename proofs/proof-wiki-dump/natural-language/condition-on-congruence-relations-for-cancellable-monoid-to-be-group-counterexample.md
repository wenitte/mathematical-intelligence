# 

Source: https://proofwiki.org/wiki/Condition_on_Congruence_Relations_for_Cancellable_Monoid_to_be_Group/Counterexample

Theorem
Let $\struct {S, \circ}$ be a monoid which is not cancellable.
Let every non-trivial congruence relation on $\struct {S, \circ}$ be induced by a normal subgroup of $\struct {S, \circ}$.

Then it is not necessarily the case that $\struct {S, \circ}$ is a group.


Proof

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Is all this necessary, considering we have Group is Cancellable Monoid?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Consider the Multiplicative Monoid of Integers Modulo $3$ $\struct {\Z_3, \times_3}$, defined by its Cayley table:

$\begin {array} {r|rrr} \struct {\Z_3, \times_3} & \eqclass 0 3 & \eqclass 1 3 & \eqclass 2 3 & \\ \hline \eqclass 0 3 & \eqclass 0 3 & \eqclass 0 3 & \eqclass 0 3\\\eqclass 1 3 & \eqclass 0 3 & \eqclass 1 3 & \eqclass 2 3 \\ \eqclass 2 3 & \eqclass 0 3 & \eqclass 2 3 & \eqclass 1 3 \\ \end {array}$
which can also be presented:

$\begin {array} {r|rrrrr} \times_3 & 0 & 1 & 2 \\ \hline 0 & 0 & 0 & 0 \\ 1 & 0 & 1 & 2 \\ 2 & 0 & 2 & 1 \end {array}$

It is noted that $\struct {\Z_3, \times_3}$ is not a cancellable monoid.
Indeed:

$0 \times_3 1 = 0$
$0 \times_3 2 = 0$
and so $\times_3$ is not cancellable for $0$.
Hence from Group is Cancellable Monoid:

$\struct {\Z_3, \times_3}$ is not a group.

We note that $\struct {\Z_3, \times_3}$ has an identity element $\eqclass 1 3$.

We list all the equivalence relations on $\struct {\Z_3, \times_3}$ by the partitions they induce:

$\set {\set 0, \set 1, \set 2}$ is induced by the diagonal relation
$\set {\set {0, 1, 2}}$ is induced by the trivial relation
$\set {\set {0, 1}, \set 2}$ is not a congruence relation because we have $0 \mathrel \RR 1$ and $2 \mathrel \RR 2$ but not $\paren {0 \times 2} \mathrel \RR \paren {1 \times 2}$
$\set {\set {0, 2}, \set 1}$ is not a congruence relation because we have $0 \mathrel \RR 2$ and $2 \mathrel \RR 2$ but not $\paren {0 \times 2} \mathrel \RR \paren {2 \times 2}$
$\set {\set 0, \set {1, 2}}$ is induced by the equivalence relation induced by the normal subgroup $\set 0$.

This article, or a section of it, needs explaining.In particular: Can a normal subgroup induce an equivalence relation when $S$ is not cancellable, since all cosets of $\set 0$ is $\set 0$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
We see that the first four relations are not non-trivial congruence relation on $\struct {S, \circ}$.
Therefore every non-trivial congruence relation on $\struct {S, \circ}$ is induced by a normal subgroup of $\struct {S, \circ}$.

But, a priori, $\struct {\Z_3, \times_3}$ is not a group.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.18 \ \text {(b)}$




