# 

Source: https://proofwiki.org/wiki/Equality_to_Initial_Segment_Imposes_Well-Ordering

Theorem
Let $X$ be a set.
Let $\AA$ be the set of all ordered pairs $\struct {A, <}$ such that $A$ is a subset of $X$ and $<$ is a strict well-ordering of $A$.
Define $\prec$ as:

$\struct {A, <} \prec \struct {A', <'}$
if and only if 

$\struct {A, <}$ equals an initial segment of $\struct {A', <'}$.
Let $\BB$ be a set of ordered pairs in $\AA$ such that $\BB$ is ordered by $\prec$.
Let $B'$ be the union of the sets $B$ for all $\struct {B, <} \in \BB$.
Let $<'$ be the union of the relations $<$ for all $\struct {B, <}$.

Then $\struct {B', <'}$ is strictly well-ordered set.


Proof
If the set $X$ considered is empty or a singleton, the lemma holds vacuously or trivially.
Thus assume $X$ contains at least two elements.

We first prove that $\prec$ is a strict partial ordering on $\AA$.
From the definition of initial segment, no $\struct {A, <}$ can equal an initial segment of itself.
Thus $\prec$ is antireflexive.
Suppose $\struct {A, <_A}$ equals an initial segment of $\struct {B, <_B}$ and $\struct {B, <_B}$ equals an initial segment of $\struct {C, <_C}$.
Then $\struct {A, <_A}$ equals an initial segment of $\struct {C, <'}$ from Equality is Transitive.
Thus $\prec$ is a strict partial ordering on $\AA$.

We then prove that any $\struct {B', <'}$ is a strictly well-ordered set.
Let $x_1,x_2 \in B'$.
That is, let $x_i \in \struct {A_i, <_i}$ for $i = 1, 2$.
Suppose $x_2 \prec x_1$.
That is, $\struct {A_2, <_2}$ equals an initial segment in $\struct {A_1, <_1}$
By the definition of initial segment, both $x_1$ and $x_2$ are in $\struct {A_1, <_1}$.
Thus $<'$ is connected, as all $<_i$ are strict well-orderings by hypothesis.

For any $x_i \in \struct {A_i, <_i}$, $x_i \nprec x_i$ as all $<_i$ are strict well-orderings by hypothesis.
Thus $<'$ is antireflexive.

To show that $<'$ is transitive, consider $x_i \in \struct {B', <'}$ for $i = 1, 2, 3$.
Suppose $x_1 <' x_2 <' x_3$.
Then $x_1 <_1 x_2$ and $x_2 <_2 x_3$, from the definition of $<'$ as a union of relations $<_i$.
Then $\struct {A_j, <_j}$ is an initial segment of $\struct {A_i, <_i}$ for $j  = 1, 2; j < i$
Thus $x_1 <_i x_2 <_i x_3$.
Then $x_1 <_i x_3$, as all $<_i$ as all $<_i$ are strict well-orderings by hypothesis.
Conclude that $<'$ is itself a strict ordering.

It remains to be shown that $<'$ is a well-ordering.
Let $A$ be an arbitrary non-empty subset of $B'$.
Let $x \in A$ and $x \in \struct {B, <}$ for $\struct {B, <} \in \BB$.
Then for all $y \in A$, $y <' x$ if and only if $y < x$ and $y \in B$.
As $<$ is a well-ordering, $\struct {B \cap A, <}$ has a smallest element $b$.
This $b$ is then a smallest element of $<'$ in $A$.
Conclude that $<'$ is a strict well-ordering on $B'$.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): Supplementary Exercises $1.5$




