# 

Source: https://proofwiki.org/wiki/Isomorphism_Preserves_Right_Cancellability

Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an isomorphism.

Then:

$a \in S$ is right cancellable in $\struct {S, \circ}$ if and only if $\map \phi a \in T$ is right cancellable in $\struct {T, *}$.


Proof
Let $a$ be right cancellable in $\struct {S, \circ}$.
Let $x \in S$ and $y \in S$ be arbitrary.
Then:














\(\ds \map \phi x * \map \phi a\)

\(=\)







\(\ds \map \phi y * \map \phi a\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {x \circ a}\)

\(=\)







\(\ds \map \phi {y \circ a}\)





Morphism property








\(\ds \leadsto \ \ \)





\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi y\)





as $a$ is right cancellable



That is, $\map \phi a$ is right cancellable in $T$.

As $\phi$ is an isomorphism, then so is $\phi^{-1}$.

So the same proof works in reverse in exactly the same way.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.6$




