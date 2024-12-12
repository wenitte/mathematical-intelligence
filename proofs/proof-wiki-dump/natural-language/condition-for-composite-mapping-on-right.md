# 

Source: https://proofwiki.org/wiki/Condition_for_Composite_Mapping_on_Right



Theorem
Let $A, B, C$ be sets.
Let $f: B \to A$ and $g: C \to A$ be mappings.

Let $\RR: C \to B$ be a relation such that $g = f \circ \RR$ is the composite of $\RR$ and $f$.
Then $\RR$ may be a mapping if and only if:

$\Img g \subseteq \Img f$

That is:

$\Img g \subseteq \Img f$
if and only if:

$\exists h: C \to B$ such that $h$ is a mapping and $f \circ h = g$


Proof
Sufficient Condition
Suppose $\Img g \subseteq \Img f$.
That is:

$\forall x \in C: \map g x \in \Img f$
and so:

$\forall x \in C: \exists y \in B: \map g x = \map f y$

Take any $x \in C$.
Consider the set $Y_x = \set {y \in B: \map g x = \map f y}$.
We know from above that $Y_x \ne \O$.
So, using the Axiom of Choice, for each $x$ we may select some $y_x \in Y_x$.
Then we may define the mapping $h: C \to B$ such that:

$\forall x \in C: \map h x = y_x$

We then see that:










\(\ds \forall x \in C: \, \)



\(\ds \map {\paren {f \circ h} } x\)

\(=\)







\(\ds \map f {\map h x}\)




















\(\ds \)

\(=\)







\(\ds \map f {y_x}\)




















\(\ds \)

\(=\)







\(\ds \map g x\)










Thus we have constructed a mapping $h$ such that $f \circ h = g$, as required.


Necessary Condition
Suppose there exists some mapping $h: C \to B$ such that $f \circ h = g$.
Let $y \in \Img g$.
Then we have:














\(\ds y\)

\(\in\)







\(\ds \Img g\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in C: \, \)



\(\ds \map g x\)

\(=\)







\(\ds y\)





Definition of Image of Mapping








\(\ds \leadsto \ \ \)





\(\ds \map {\paren {f \circ h} } x\)

\(=\)







\(\ds y\)





Definition of $g$








\(\ds \leadsto \ \ \)





\(\ds \map f {\map h x}\)

\(=\)







\(\ds y\)





Definition of Composition of Mappings








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \Img f\)





Definition of Image of Mapping




Hence by definition of subset, $\Img g \subseteq \Img f$.
$\blacksquare$


Comment
Hence we have a necessary and sufficient condition for determining whether the composition of mappings actually exists as a mapping.
Note that this is different from being given two mappings and creating their composition.


Axiom of Choice
This theorem depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.5$




