# 

Source: https://proofwiki.org/wiki/Existence_of_Minimal_Uncountable_Well-Ordered_Set/Proof_Without_Using_Choice


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
There exists a minimal uncountable well-ordered set.
That is, there exists an uncountable well-ordered set $\Omega$ with the property that every initial segment in $\Omega$ is countable.


Proof
By the axiom of powers, there exists the power set $\powerset \N$, where $\N$ is the set of natural numbers.
By Power Set of Natural Numbers is not Countable, this set is uncountable.
Consider the set of ordered pairs:

$\AA = \set {\struct {A, \prec}: A \in \powerset \N}$
where:

the first coordinate is a (possibly empty) subset of $\N$
the second coordinate is a strict well-ordering on $A$.
There is at least one pair of this form for each $A \subseteq \N$, taking $\prec$ to be the usual (strict) ordering of the natural numbers.
The usual ordering is a well-ordering, from the Well-Ordering Principle.

Define the relation:

$\struct {A, \prec} \sim \struct {A', \prec'}$
if and only if:

$\struct {A, \prec}$ is order isomorphic to $\struct {A', \prec'}$.
By Order Isomorphism is Equivalence Relation, $\sim$ is an equivalence relation.
Let $E$ be the set of all equivalence classes $\eqclass {\struct {A, \prec} } {}$ defined by $\sim$ imposed on $\powerset \N$ 

Define the relation:

$\eqclass {\struct {A, \prec_A} } {} \ll \eqclass {\struct {B, \prec_B} } {}$
if and only if:

$\struct {A, \prec_A}$ is order isomorphic to an initial segment $S_b$ of $\struct {B, \prec_B}$.

We claim that $\struct {E, \ll} = \Omega$.
To see that $\ll$ is well-defined, we use a commutative diagram: 
$\xymatrix {
\struct {A, \prec_A} \ar[d]^f \ar[r]^{g_1} & \map {S_b} B \ar@{-->}[d]^{g_2 \circ f} \\
\struct {C, \prec_C} \ar[r]^{g_2} & \map {S_d} B}$
where $f$ is a mapping defining $\sim$, and $g_1, g_2$ are mappings defining $\ll$.
From Well-Ordered Class is not Isomorphic to Initial Segment, no equivalence class $\eqclass {\struct {A, \prec_A} } {}$ can bear $\ll$ to itself.
From Wosets are Isomorphic to Each Other or Initial Segments, $\ll$ is connected.
From the definition of an order isomorphism, $\ll$ is an ordering.
Thus $\ll$ is a strict total ordering.

The empty set $\O$ contains no elements that could define an initial segment in it.
Consider the empty mapping: $\nu: \O \to \O$.
Such a mapping $\nu$ is bijective, by Empty Mapping to Empty Set is Bijective.
But $\O$ is itself an initial segment of any non-empty set, from Initial Segment Determined by Smallest Element is Empty.
Thus there is an order-isomorphism from $\O$ to an initial segment in any non-empty $A$, as $\nu$ is vacuously order-preserving.
Thus $\eqclass {\struct {\O, \O} } {}$ is the smallest element of $E$.

Let $\alpha = \eqclass {\struct {A, \prec} } {}$ be an element of $E$.
We claim that $\struct {A, \prec}$ is order isomorphic to $\map {S_\alpha} E$, the initial segment of $E$ determined by $\alpha$.
To see this, define the mapping:

$f_\alpha: A \to E$:
$\map {f_\alpha} x = \eqclass {\struct {\map {S_x} A, {\prec \restriction_{\map {S_x} A} } } } {}$
where $\restriction$ denotes restriction.
This is a strict ordering for each $\prec \restriction_{\map {S_x} A}$, from Restriction of Strict Well-Ordering is Strict Well-Ordering.
Suppose $x \prec y$ in $A$.
Then $S_x$ is an initial segment of $S_y$.
From No Order Isomorphism Between Distinct Initial Segments of Woset, $S_x \ne S_y$.
Thus $\map {f_\alpha} x \ll \map {f_\alpha} y$.
Conclude that $f_\alpha$ is strictly increasing.
From Strictly Monotone Mapping with Totally Ordered Domain is Injective, $f_\alpha$ is therefore an injection.
For all $x \in A$, $\map {f_\alpha} x$ is an element of $E$.
Thus it is an element of $\map {S_\alpha} E$, by the construction of $f_\alpha$.
By the definition of image set:

$f \sqbrk A = \map {S_\alpha} E$
From Injection to Image is Bijection, there is a bijection from $A$ to $f \sqbrk A$.
That is, from $A$ to $\map {S_\alpha} E$.
As $f_\alpha$ was shown to be (strictly) increasing, there is an order isomorphism between $\struct {A, \prec}$ and $\map {S_\alpha} E$.
Recall that $E$ has a smallest element $\eqclass {\struct {\O, \O} } {}$.
Let $F$ be any non-empty proper subset of $E$
As it is non-empty, $F$ has some element in it.
Call the element $a$.
If such an $a$ precedes all elements in $F$, then $a$ is the smallest element of $F$.
Suppose $a$ is not the smallest element in $F$.
Then $F$ has at least two elements.
Then $a \in \map {S_a} E \cap F$.
From Inverse of Order Isomorphism is Order Isomorphism, $f^{-1}$ is also an isomorphism.
That means that $a$ is isomorphic to some $\struct {A, \prec} \in \AA$

But $A$ has a minimal element, by the definition of $\AA$.
From Order Isomorphism on Well-Ordered Set preserves Well-Ordering, $\map {S_a} E \cap F$ is a well-ordered set.
Thus it has a smallest element.
The smallest element in $\map {S_a} E$ is the smallest element of $E$, by the definition of initial segment.
We assumed that $a$ is not the smallest element in $F$, so the smallest element of $\map {S_a} E \cap F$ is the smallest element of $F$.
As $F$ was arbitrary, we can conclude that every non-empty subset of $E$ has a smallest element.
So $E$ is well ordered.

It remains to be proven that $E$ is uncountable and every initial segment of $E$ is countable.
Aiming for a contradiction, suppose that $E$ is countable.
Then there is a bijection:

$h: E \leftrightarrow \N$
From Order Isomorphism on Well-Ordered Set preserves Well-Ordering, we can define the strict ordering:

$\map f x \prec \map f y$ in $\N$
if and only if:

$x \ll y$ in $E$
From Composite of Order Isomorphisms is Order Isomorphism, we can consider the isomorphism $f_\alpha \circ h$, where $f_\alpha$ is the above isomorphism to some $\map {S_\alpha} E$ in $E$, which is isomorphic to some $\struct {A, \prec} \in \AA$.
Then $h^{-1} \sqbrk \N$ is order isomorphic to all of $\AA$.
Then there is a bijection between $\powerset \N$ and $\N$, contradicting Power Set of Natural Numbers is not Countable.
From this contradiction, $E$ cannot be countable.

Consider any initial segment $\map {S_\alpha} E$ 
We have shown that $\map {S_\alpha} E$ is order isomorphic to some $\tuple {A, \prec} \in \AA$.
But $A$ is a subset of the natural numbers.
From Subset of Countably Infinite Set is Countable, $A$ is countable.

We have shown that $\struct {E, \ll}$ is an uncountable well-ordered set, every initial segment of which is countable.
$\blacksquare$


This article needs proofreading.In particular: math and EnglishIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Sources
2000: James R. Munkres: Topology (2nd ed.) $\S 1.11$ Supplementary Exercise $8$




