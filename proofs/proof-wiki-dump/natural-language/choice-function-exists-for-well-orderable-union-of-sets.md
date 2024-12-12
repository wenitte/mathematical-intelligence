# 

Source: https://proofwiki.org/wiki/Choice_Function_Exists_for_Well-Orderable_Union_of_Sets

Theorem
Let $\mathbb S$ be a set of sets such that:

$\forall S \in \mathbb S: S \ne \O$
that is, none of the sets in $\mathbb S$ may be empty.
Let the union $\bigcup \mathbb S$ be well-orderable.

Then there exists a choice function $f: \mathbb S \to \bigcup \mathbb S$ defined as:

$\forall S \in \mathbb S: \exists x \in S: \map f S = x$


Proof
Suppose $T = \bigcup \mathbb S$ is well-orderable.
Then we can create a well-ordering $\preceq$ on $T$ so as to make $\struct {T, \preceq}$ a well-ordered set.
From the definition of well-ordered set, every subset of $T$ is itself well-ordered.
From Set is Subset of Union we have that:

$\forall S \in \mathbb S: S \subseteq T$
So every $S \in \mathbb S$ is well-ordered and Choice Function Exists for Set of Well-Ordered Sets applies.

Indeed, if every element of $\mathbb S$ is well-ordered, then we can create a choice function $f$ defined as:

$\forall S \in \mathbb S: \map f S = \inf S$
It may be the case that we are making infinitely many choices, but we have a rule for doing so.
$\blacksquare$





