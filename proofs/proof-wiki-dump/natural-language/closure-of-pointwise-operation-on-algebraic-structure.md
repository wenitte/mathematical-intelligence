# 

Source: https://proofwiki.org/wiki/Closure_of_Pointwise_Operation_on_Algebraic_Structure



Theorem
Let $S$ be a set such that $S \ne \O$.
Let $\struct {T, \circ}$ be an algebraic structure.
Let $T^S$ be the set of all mappings from $S$ to $T$.
Let $f, g \in T^S$, that is, let $f: S \to T$ and $g: S \to T$ be mappings.

Let $\oplus: T^S \to T^S$ be the pointwise operation on $T^S$ induced by $\circ$.

Then $\oplus$ is closed on $T^S$ if and only if $\struct {T, \circ}$ is closed.


Proof
Necessary Condition
Let $\struct {T, \circ}$ be closed.
Let $x \in S$ be arbitrary.
Then:










\(\ds \forall f, g \in T^S: \, \)



\(\ds \map {f \oplus g} x\)

\(=\)







\(\ds \map f x \circ \map g x\)





Definition of Pointwise Operation














\(\ds \)

\(\in\)







\(\ds T\)





as $\struct {T, \circ}$ is closed



So $\oplus$ is closed on $T^S$.
$\Box$


Sufficient Condition
Let $\oplus$ is closed on $T^S$.
Aiming for a contradiction, suppose $\struct {T, \circ}$ is not closed.
Then:

$(1): \quad \exists s, t \in T: s \circ t \notin T$

By definition, $T^S$ is the set of all mappings from $S$ \to $T$.
As $S \ne \O$ it follows that $\exists x \in S$.
Thus, let $x \in S$ be arbitrary.

Let $f, g \in T^S$ such that:

$(2): \quad \map f x = s, \map g x = t$
Then:














\(\ds \map {f \oplus g} x\)

\(=\)







\(\ds \map f x \circ \map g x\)





Definition of Pointwise Operation














\(\ds \)

\(=\)







\(\ds s \circ t\)





from $(2)$














\(\ds \)

\(\notin\)







\(\ds T\)





from $(1)$



That is, $\oplus$ is not closed on $T^S$.
From that contradiction it follows that $\struct {T, \circ}$ is closed.
$\blacksquare$





