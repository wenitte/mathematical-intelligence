# 

Source: https://proofwiki.org/wiki/Hausdorff%27s_Maximal_Principle_implies_Zermelo%27s_Well-Ordering_Theorem



Theorem
Let Hausdorff's Maximal Principle hold.

Then Zermelo's Well-Ordering Theorem holds.


Proof

This article needs to be tidied.In particular: Work in progressPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Let $X$ be a non-empty set.
Let $X$ contain at least two elements; otherwise, $X$ can be trivially well-ordered.
We use Hausdorff's Maximal Principle to construct a well-ordering on $X$.
We note that there exists at least the following strict well-orderings on subsets of $X$: 
For any singleton $\set x$, $x$ is vacuously well-ordered with respect to every other element in the subset, of which there are none.


This article, or a section of it, needs explaining.In particular: Can you describe an element of a set as being well-ordered? A well-ordering applies to a set, not an element in it. Recommend the above statement about singletons be extracted into a result about the triviality of imposing an ordering upon a singleton.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Any doubleton $\set {y, z}$ can be strictly well-ordered by defining $x < y$ and $y \not < x$.


This article, or a section of it, needs explaining.In particular: Again, the above can be extracted into a result about doubletons. In fact, I believe we may be able to cut through a lot of this by using Finite Totally Ordered Set is Well-Ordered.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\AA$ be the set of all ordered pairs $\struct {A, <}$ such that $A$ is a subset of $X$ and $<$ is a strict well-ordering of $A$.
Define $\prec$ as:

$\struct {A, <} \prec \struct {A', <'}$
if and only if 

$\struct {A, <}$ equals an initial segment of $\struct {A', <'}$.
Let $\BB$ be a set of ordered pairs in $\AA$ such that $\BB$ is ordered by $\prec$.
Let $B'$ be the union of the sets $B$ for all $\struct {B, <} \in \BB$.
Let $<'$ be the union of the relations $<$ for all $\struct {B, <}$.
By Equality to Initial Segment Imposes Well-Ordering, $\struct {B', <'}$ is strictly well-ordered set.
By Hausdorff's Maximal Principle, there exists a maximal chain defined by $<'$ imposed on a maximal subset of $X$.
We claim that this maximal chain is imposed on the entirety of $X$.
Aiming for a contradiction, suppose that $\struct {B', <'}$ is a maximal chain but $B' \ne X$.
Then consider $B' \cup \set x$, with $x \in X \setminus B'$, with the extension of $<'$ such that:

$\forall a \in B': a <' x$.
Then $B' = S_x$, the initial segment in $B' \cup \set x$ determined by $x$.
But by the definition of $\prec$, we then have:

$\struct {B' \cup \set x, \text {extension of } <'} \prec \struct {B', <'}$
But then by the definition of $B'$, we would have $B' \cup \set x \subseteq B'$, contrary to the assumption that $x \in X \setminus B'$.
From this contradiction infer that $B' = X$.
That is, all of $X$ can be well-ordered.
$\blacksquare$


Also see
Zermelo's Well-Ordering Theorem implies Hausdorff's Maximal Principle


Sources
2000: James R. Munkres: Topology (2nd ed.) $\S 1.11$ Supplementary Exercise $6$




