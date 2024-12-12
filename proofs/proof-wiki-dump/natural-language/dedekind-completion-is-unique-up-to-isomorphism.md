# 

Source: https://proofwiki.org/wiki/Dedekind_Completion_is_Unique_up_to_Isomorphism

Theorem
Let $S$ be an ordered set.
Let $\struct {X, f}$ and $\struct {Y, g}$ be Dedekind completions of $S$.

Then there exists a unique order isomorphism $\phi: X \to Y$ such that $\phi \circ f = g$.


Proof
By assumption, $\struct {X, f}$ is a Dedekind completion of $S$.
Also, $g: S \to Y$ is an order embedding and $Y$ is Dedekind complete.

Hence by definition of Dedekind completion, there exists a unique $\phi: X \to Y$ such that:

$\phi \circ f = g$

It only remains to show that $\psi$ is an order isomorphism.
By reversing the roles of $X$ and $Y$ in the above, we obtain a unique $\psi: Y \to X$ subject to:

$\psi \circ g = f$

Therefore:

$\psi \circ \phi \circ f = f$
$\phi \circ \psi \circ g = g$
By the uniqueness clause of the definition of Dedekind completion, it follows that:

$\psi \circ \phi = I_X$
$\phi \circ \psi = I_Y$
where $I_X$ and $I_Y$ are the identity mappings on $X$ and $Y$ respectively.

Hence $\psi$ is an order isomorphism.
$\blacksquare$


Also see
Existence of Dedekind Completion




