# 

Source: https://proofwiki.org/wiki/Pointwise_Operation_on_Distributive_Structure_is_Distributive

Theorem
Let $S$ be a set.
Let $\struct {T, +, \circ}$ be an algebraic structure with two operations $+$ and $\circ$.
Let $T^S$ be the set of all mappings from $S$ to $T$.
Let $\struct {T^S, +', \circ'}$ be the structure induced on $T^S$ by $+$ and $\circ$.
Let $\circ$ be distributive over $+$ in $T$.

Then $\circ'$ is distributive over $+'$ in $T$.


Proof
Let $f, g, h: S \to T$ be elements of $T^S$.

Suppose $S$ is the empty set.
Suppose $T^S$ is the set of all mappings from the empty set, $S$, to $T$.
Suppose $\struct {T^S, +', \circ'}$ is the structure induced on $T^S$ by $+$ and $\circ$.
Suppose $\circ$ is distributive over $+$ in $T$.


This needs considerable tedious hard slog to complete it.In particular: Prove that the statement is true when S is the empty setTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Then $\circ'$ is distributive over $+'$ in $T$, as required.

Suppose $S$ is non-empty.
Let $x \in S$.
Then:














\(\ds \map {\paren {f \circ' \paren {g +' h} } } x\)

\(=\)







\(\ds \map f x \circ \paren {\map g x + \map h x}\)





Definition of Induced Structure














\(\ds \)

\(=\)







\(\ds \paren {\map f x \circ \map g x} + \paren {\map f x \circ \map h x}\)





$\circ$ is distributive over $+$ on $T$














\(\ds \)

\(=\)







\(\ds \map {\paren {\paren {f \circ' g} +' \paren {f \circ' h} } } x\)





Definition of Induced Structure



Similarly:

$\map {\paren {\paren {g +' h} \circ' f} } x = \map {\paren {\paren {g \circ' f} +' \paren {h \circ' f} } } x$
Hence the result.
$\blacksquare$





