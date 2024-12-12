# 

Source: https://proofwiki.org/wiki/Condition_for_Uniqueness_of_Increasing_Mappings_between_Tosets

Theorem
Let $\struct {S, \preceq}$ and $\struct {T, \preccurlyeq}$ be tosets.
Let $f: S \to T$ and $g: S \to T$ be increasing mappings from $S$ to $T$.
Let $H \subseteq S$ be a subset of $S$.
Let $f$ and $g$ agree on $H$.
Let $K = f \sqbrk H$ be the image set of $H$ under $f$.
Let the intersection of $K$ with every set of the form:

$\set {y \in T: u < y < v: u, v \in T, u < v}$
be non-empty.

Then $f = g$.


Proof
By hypothesis, let the intersection of $K$ with every set of the form:

$\set {y \in T: u \prec y \prec v: u, v \in T, u \prec v}$
be non-empty.

Aiming for a contradiction, suppose $f \ne g$.
Then:

$\exists x \in S: \map f x \ne \map g x$
Without loss of generality, suppose that $\map f x < \map g x$.
Let:

$a \in H$ such that $a \preceq x$
$b \in H$ such that $b \succeq x$
We have that $f$ and $g$ are increasing.
Thus:

$\map f a \preccurlyeq \map f x$
$\map g b \succcurlyeq \map g x$
Thus no element of $H$ maps to the set:

$\set {y \in T: \map f x \prec y \prec \map g x}$
That is, the intersection of $K$ with this set, which is of the form:

$\set {y \in T: u \prec y \prec v: u, v \in T, u \prec v}$
is empty.
This contradicts our hypothesis.
Thus, by Proof by Contradiction:

$f = g$
$\blacksquare$


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Orderings: Theorem $11$




