# 

Source: https://proofwiki.org/wiki/Existence_of_Dedekind_Completion

Theorem
Let $\struct {S, \preceq}$ be an ordered set.

Then there exists a Dedekind completion of $S$.

That is, there exists a Dedekind complete ordered set $\tilde S$ and an order embedding $\phi: S \to \tilde S$ such that:

For all Dedekind complete ordered sets $X$, and for all order embeddings $f: S \to X$, there exists an order embedding $\tilde f: \tilde S \to X$ such that:
$\tilde f \circ \phi = f$


Proof
For all subsets $I \subseteq S$, define:

$\map {\operatorname U} I = \left\{{x \in S: x}\right.$ is an upper bound for $\left.{I}\right\}$
$\map {\operatorname L} I = \left\{{x \in S: x}\right.$ is a lower bound for $\left.{I}\right\}$
Note that, for all $I, J \subseteq S$:

$I \subseteq \map {\operatorname {LU} } I$
$I \subseteq J \implies \map {\operatorname {LU} } I \subseteq \map {\operatorname {LU} } J$
$\map {\operatorname {ULU} } I = \map {\operatorname U} I$
All of the above follow directly from the relevant definitions.

Let:

$\tilde S = \left\{{I \subseteq S: I = \map {\operatorname {LU} } I}\right.$, $I$ is non-empty and bounded above$\left.{}\right\}$
We have that $\struct {\tilde S, \subseteq}$ is an ordered set.

Let $A \subseteq \tilde S$ be non-empty and bounded above.
By Union is Smallest Superset: General Result, $\ds \bigcup A$ is non-empty and bounded above.
It follows that:

$\ds {\operatorname{LU} } {\bigcup A} \in \tilde S$
From Set is Subset of Union: General Result, it follows that $\ds \map {\operatorname{LU} } {\bigcup A}$ is an upper bound for $A$.
If $I \in \tilde S$ is an upper bound for $A$, then, by Union is Smallest Superset: General Result:

$\ds \bigcup A \subseteq I$
It follows that:

$\ds \map {\operatorname{LU} } {\bigcup A} \subseteq \map {\operatorname{LU} } I = I$
Hence:

$\ds \operatorname{LU} {\bigcup A} = \sup A$
By definition, $\struct {\tilde S, \subseteq}$ is Dedekind complete.

Let $\phi: S \to \tilde S$ be the order embedding defined as:

$\forall x \in S: \map \phi x = x^\preceq$
where $x^\preceq$ denotes the weak lower closure of $x$ (in $S$).

Let $\struct {X, \preccurlyeq}$ be a Dedekind complete ordered set, and let $f: S \to X$ be an order embedding.
Let $\tilde f: \tilde S \to X$ be the increasing mapping defined as:

$\forall I \in \tilde S: \map {\tilde f} I = \sup \map f I$
where $\map f I$ denotes the image of $I$ under $f$.
Then $\tilde f \circ \phi = f$.

Let $I, J \in \tilde S$ such that $\map {\tilde f} I \preccurlyeq \map {\tilde f} J$.
Then $\forall x \in I: \forall u \in \map {\operatorname U} J: \map f x \preccurlyeq \map {\tilde f} J \preccurlyeq \map f u$.
Since $f$ is an order embedding, it follows that $I \subseteq \map {\operatorname {LU} } J = J$.
Hence, $\tilde f$ is an order embedding.
$\blacksquare$


Also see
Dedekind Completion is Unique up to Isomorphism




