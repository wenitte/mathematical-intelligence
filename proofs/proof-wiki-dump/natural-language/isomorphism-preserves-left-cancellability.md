# 

Source: https://proofwiki.org/wiki/Isomorphism_Preserves_Left_Cancellability

Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an isomorphism.

Then:

$a \in S$ is left cancellable in $\struct {S, \circ}$
if and only if:

$\map \phi a \in T$ is left cancellable in $\struct {T, *}$.


Proof
Let $a$ be left cancellable in $\struct {S, \circ}$.
Let $x \in S$ and $y \in S$ be arbitrary.
Then:














\(\ds \map \phi a * \map \phi x\)

\(=\)







\(\ds \map \phi a * \map \phi y\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {a \circ x}\)

\(=\)







\(\ds \map \phi {a \circ y}\)





Morphism Property








\(\ds \leadsto \ \ \)





\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi y\)





as $a$ is left cancellable



That is, $\map \phi a$ is left cancellable in $\struct {T, *}$.

As $\phi$ is an isomorphism, then so is $\phi^{-1}$.

So the same proof works in reverse in exactly the same way.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.6$




