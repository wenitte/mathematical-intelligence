# 

Source: https://proofwiki.org/wiki/Non-Cancellable_Elements_of_Semigroup_form_Subsemigroup

Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $T \subseteq S$ be the subset of $S$ containing the elements of $S$ which are specifically not cancellable in $\struct {S, \circ}$.

Then $\struct {T, \circ}$ forms a subsemigroup of $S$.


Proof
Recall the definition of cancellable element:
An element $x \in \struct {S, \circ}$ is cancellable if and only if:

$\forall a, b \in S: x \circ a = x \circ b \implies a = b$
$\forall a, b \in S: a \circ x = b \circ x \implies a = b$

From the Subsemigroup Closure Test it is sufficient to demonstrate that:

$\forall x, y \in T: x \circ y \in T$

Let $x, y \in T$.
Then:

$\exists a, b \in S: a \circ y = b \circ y \text { but } a \ne b$
or:

$\exists a, b \in S: y \circ a = y \circ b \text { but } a \ne b$
Without loss of generality, suppose that:

$\exists a, b \in S: y \circ a = y \circ b \text { but } a \ne b$
Hence:














\(\ds y \circ a\)

\(=\)







\(\ds y \circ b\)














\(\ds \leadsto \ \ \)





\(\ds x \circ \paren {y \circ a}\)

\(=\)







\(\ds x \circ \paren {y \circ b}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ y} \circ a\)

\(=\)







\(\ds \paren {x \circ y} \circ b\)









So we have:

$\paren {x \circ y} \circ a = \paren {x \circ y} \circ b$
but $a \ne b$.
Hence $x \circ y$ is not cancellable.
As $x$ and $y$ are arbitrary, the result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Exercise $8.11$




