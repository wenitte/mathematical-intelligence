# 

Source: https://proofwiki.org/wiki/Isomorphism_Preserves_Cancellability

Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures.
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be an isomorphism.

Then:

$a \in S$ is cancellable in $\struct {S, \circ}$ if and only if $\map \phi a \in T$ is cancellable in $\struct {T, *}$.


Proof
Let $\struct {S, \circ}$ be an algebraic structure in which $a$ is cancellable.
From Isomorphism Preserves Left Cancellability and Isomorphism Preserves Right Cancellability:

$a \in S$ is left cancellable in $\struct {S, \circ}$ if and only if $\map \phi a \in T$ is left cancellable in $\struct {T, *}$
and

$a \in S$ is right cancellable in $\struct {S, \circ}$ if and only if $\map \phi a \in T$ is right cancellable in $\struct {T, *}$.

It follows that:

$a \in S$ is cancellable in $\struct {S, \circ}$
if and only if:

$\map \phi a \in T$ is cancellable in $\struct {T, *}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.6$




