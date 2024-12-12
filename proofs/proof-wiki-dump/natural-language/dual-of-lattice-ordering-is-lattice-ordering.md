# 

Source: https://proofwiki.org/wiki/Dual_of_Lattice_Ordering_is_Lattice_Ordering

Theorem
Let $\struct {S, \preccurlyeq}$ be a lattice.
Let $\preccurlyeq$ be the lattice ordering on $\struct {S, \preccurlyeq}$.

Then its dual ordering $\succcurlyeq$ is also a lattice ordering.


Proof
Let $\struct {S, \preccurlyeq}$ be a lattice.
It is to be shown that:

for all $x, y \in S$, the ordered set $\struct {\set {x, y}, \succcurlyeq}$ admits both a supremum and an infimum.

Let $x, y \in S$.
Then $\struct {\set {x, y}, \preccurlyeq}$ admits both a supremum and an infimum.

Let $c = \map \sup {\set {x, y}, \preccurlyeq}$.
Then by definition of supremum:

$\forall s \in \set {x, y}: s \preccurlyeq c$
$\forall d \in S: c \preccurlyeq d$
where $d$ is an upper bound of $\struct {\set {x, y}, \preccurlyeq} \subseteq S$.

Hence by definition of dual ordering:

$\forall s \in \set {x, y}: c \succcurlyeq s$
$\forall d \in S: d \succcurlyeq c$
where $d$ is an upper bound of $\struct {\set {x, y}, \preccurlyeq} \subseteq S$.
By Upper Bound is Lower Bound for Inverse Ordering, $d$ is a lower bound of $\struct {\set {x, y}, \succcurlyeq} \subseteq S$.

So by definition of infimum:

$c = \map \inf {\set {x, y}, \succcurlyeq}$
That is, $\struct {\set {x, y}, \succcurlyeq}$ admits an infimum.
$\Box$

Let $c = \map \inf {\set {x, y}, \preccurlyeq}$.
Then by definition of infimum:

$\forall s \in \set {x, y}: c \preccurlyeq s$
$\forall d \in S: d \preccurlyeq c$
where $d$ is a lower bound of $\struct {\set {x, y}, \preccurlyeq} \subseteq S$.

Hence by definition of dual ordering:

$\forall s \in \set{x, y}: s \succcurlyeq c$
$\forall d \in S: c \succcurlyeq d$
where $d$ is a lower bound of $\struct {\set {x, y}, \preccurlyeq} \subseteq S$.
By Lower Bound is Upper Bound for Inverse Ordering, $d$ is an upper bound of $\struct {\set {x, y}, \succcurlyeq} \subseteq S$.

So by definition of supremum:

$c = \map \sup {\set {x, y}, \succcurlyeq}$
That is, $\struct {\set {x, y}, \succcurlyeq}$ admits a supremum.
$\Box$

Hence $\struct {\set {x, y}, \succcurlyeq}$ admits both a supremum and an infimum.
That is, $\succcurlyeq$ is a lattice ordering.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Theorem $14.4$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.10$




