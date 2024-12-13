# 

Source: https://proofwiki.org/wiki/Idempotent_Elements_form_Subsemigroup_of_Commutative_Semigroup

Theorem
Let $\struct {S, \circ}$ be a semigroup such that $\circ$ is commutative.
Let $I$ be the set of all elements of $S$ that are idempotent under $\circ$.
That is:

$I = \set {x \in S: x \circ x = x}$

Then $\struct {I, \circ}$ is a subsemigroup of $\struct {S, \circ}$.


Proof 1
By Subsemigroup Closure Test we need only show that:

For all $x, y \in I$: $x \circ y \in I$.
That is:

$\paren {x \circ y} \circ \paren {x \circ y} = x \circ y$
We reason as follows:














\(\ds \paren {x \circ y} \circ \paren {x \circ y}\)

\(=\)







\(\ds \paren {x \circ y} \circ \paren {y \circ x}\)





$\circ$ is commutative














\(\ds \)

\(=\)







\(\ds \paren {x \circ \paren {y \circ x} } \circ y\)





$\circ$ is associative














\(\ds \)

\(=\)







\(\ds \paren {x \circ \paren {x \circ y} } \circ y\)





$\circ$ is commutative














\(\ds \)

\(=\)







\(\ds \paren {x \circ x} \circ \paren {y \circ y}\)





$\circ$ is associative














\(\ds \)

\(=\)







\(\ds x \circ y\)





$x$ and $y$ are idempotent



Hence the result.
$\blacksquare$


Proof 2
By Subsemigroup Closure Test we need only show that:

For all $x, y \in I$: $x \circ y \in I$.

As $x, y \in I$, they are idempotent.
We have that $\circ$ is commutative.
Thus, by definition, $x$ and $y$ commute.
From Product of Commuting Idempotent Elements is Idempotent, $\left({x \circ y}\right)$ is idempotent.
That is:

$x \circ y \in I$
$\blacksquare$





