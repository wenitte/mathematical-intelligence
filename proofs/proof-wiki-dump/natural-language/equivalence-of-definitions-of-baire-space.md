# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Baire_Space


This page has been identified as a candidate for refactoring of medium complexity.In particular: Usual multi-definition transclusion technique, and also add Baire Space iff Open Sets are Non-Meager as a further definition.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Definition
Let $T = \struct {S, \tau}$ be a topological space.
The following definitions of the concept of Baire Space in the context of Topology are equivalent:

$T$ is a Baire space if and only if:

$(1): \quad$ The intersection of any countable set of open sets of $T$ which are everywhere dense is everywhere dense.
$(2): \quad$ The interior of the union of any countable set of closed sets of $T$ which are nowhere dense is empty.
$(3): \quad$ Whenever the union of any countable set of closed sets of $T$ has an interior point, then one of those closed sets must have an interior point.
$(4): \quad$ The union of any countable set of closed sets of $T$ whose interiors are empty also has an interior which is empty.


Proof
First, let:

$H^\circ$ denote the interior of any $H \subseteq S$
$H^-$ denote the closure of any $H \subseteq S$.


$(2) \iff (4)$
We have that a Closed Set Equals its Closure.
By definition, a subset $H$ is nowhere dense if and only if the interior of its closure is empty.
Hence we see that $(2)$ and $(4)$ are saying the same thing using different words.
$\Box$





$(4) \iff (3)$
$(4) \implies (3)$
Let $T$ be a topological space such that:

The union of any countable set of closed sets of $T$ whose interiors are empty also has an empty interior.
That is, let $(4)$ hold.
Let $\UU$ be a countable set of closed sets of $T$.
Let $\ds \bigcup \UU$ be their union.

Suppose $\exists U \in \UU$ such that $\ds \exists x \in \paren {\bigcup \UU}^\circ$.
That is, let $x$ be an interior point of $\ds \bigcup \UU$.
Then by hypothesis and the Rule of Transposition $\exists U \in \UU: x \in U^\circ$.
That is, $x$ is an interior point of $U$.
That is, $(3)$ holds.
$\Box$


$(3) \implies (4)$
Let $T$ be a topological space such that:

Whenever the union of any countable set of closed sets of $T$ has an interior point, then one of those closed sets must have an interior point.
That is, let $(3)$ hold.
Let $\UU$ a countable set of closed sets of $T$.

Suppose that $\forall U \in \UU: U^\circ = \O$.
Then by hypothesis and the Rule of Transposition  $\not \exists x \in \ds \bigcup \UU$.
That is, $\ds \bigcup \UU = \O$.
That is, $(4)$ holds.
$\Box$





$(4) \iff (1)$
$(4) \implies (1)$
Let $T$ be a topological space such that:

The union of any countable set of closed sets of $T$ whose interiors are empty also has an empty interior.
That is, let $(4)$ hold.

Let $\UU$ be a countable set of open sets of $T$ such that:

$\forall U \in \UU: U^- = S$
That is, all of $U$ are everywhere dense.

We have that:














\(\ds U^-\)

\(=\)







\(\ds S\)














\(\ds \leadstoandfrom \ \ \)





\(\ds S \setminus U^-\)

\(=\)







\(\ds \O\)





Relative Complement with Self is Empty Set








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {S \setminus U}^\circ\)

\(=\)







\(\ds \O\)





Complement of Interior equals Closure of Complement



That is, by definition, $S \setminus U$ is nowhere dense.
By definition of closed set we have that $S \setminus U$ is closed.

Now consider $\ds \bigcup_{U \mathop \in \UU} \paren {S \setminus U}$.
We have that:














\(\ds \paren {\bigcup_{U \mathop \in \UU} \paren {S \setminus U} }^\circ\)

\(=\)







\(\ds \O\)





as $T$ satisfies condition $(4)$








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {S \setminus \bigcap \UU}^\circ\)

\(=\)







\(\ds \O\)





De Morgan's Laws: Difference with Intersection








\(\ds \leadstoandfrom \ \ \)





\(\ds S \setminus \paren {\paren {\bigcap \UU}^-}\)

\(=\)







\(\ds \O\)





Complement of Interior equals Closure of Complement








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {\bigcap \UU}^-\)

\(=\)







\(\ds S\)





Relative Complement of Empty Set



That is, by definition, $\bigcap \UU$ is everywhere dense.
That is, $(1)$ holds.
$\Box$


$(1) \implies (4)$
Let $T$ be a topological space such that:

The intersection of any countable set of open sets of $T$ which are everywhere dense is everywhere dense.
That is, let $(1)$ hold.

Let $\VV$ be a countable set of closed sets of $T$ such that:

$\forall V \in \VV: V^\circ = \O$

Then:














\(\ds V^\circ\)

\(=\)







\(\ds \O\)














\(\ds \leadstoandfrom \ \ \)





\(\ds S \setminus V^\circ\)

\(=\)







\(\ds S\)





Relative Complement of Empty Set








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {S \setminus V}^-\)

\(=\)







\(\ds S\)





Complement of Interior equals Closure of Complement



That is, by definition, $S \setminus V$ is an open set of $T$ which is everywhere dense.

Now consider $\ds \bigcap_{V \mathop \in \VV} \paren {S \setminus V}$.
We have that:














\(\ds \paren {\bigcap_{V \mathop \in \VV} \paren {S \setminus V} }^-\)

\(=\)







\(\ds S\)





as $T$ satisfies condition $(1)$








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {S \setminus \bigcup \VV}^-\)

\(=\)







\(\ds S\)





De Morgan's Laws: Difference with Union








\(\ds \leadstoandfrom \ \ \)





\(\ds S \setminus \paren {\paren {\bigcup \VV}^\circ}\)

\(=\)







\(\ds S\)





Complement of Interior equals Closure of Complement








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {\bigcup \VV}^\circ\)

\(=\)







\(\ds \O\)





Relative Complement with Self is Empty Set




That is, $(4)$ holds.
$\Box$

All conditions have been shown to be equivalent.
$\blacksquare$





