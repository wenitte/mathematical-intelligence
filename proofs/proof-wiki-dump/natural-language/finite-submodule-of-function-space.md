# 

Source: https://proofwiki.org/wiki/Finite_Submodule_of_Function_Space

Theorem
Let $\struct {G, +}$ be a group whose identity is $e$.
Let $R$ be a ring.
Let $\struct {G, +, \circ}_R$ be an $R$-module.

Let $S$ be a set.
Let $G^S$ the set of all mappings $f: S \to G$.
Let $G^{\paren S}$ be the set of all mappings $f: S \to G$ such that $\map f x = e$ for all but finitely many elements $x$ of $S$.

Then:

$\struct {G^{\paren S}, +', \circ}_R$ is a submodule of $\struct {G^S, +, \circ}_R$
where $+'$ is the operation induced on $G^{\paren S}$ by $+$.


Proof
Let $\struct {G, +, \circ}_R$ be an $R$-module and $S$ be a set.
We need to show that $\struct {G^{\paren S}, +'}$ is a group.

Let $f, g \in G^{\paren S}$.
Let:

$F = \set {x \in S: \map f x \ne e}$
$G = \set {x \in S: \map g x \ne e}$
From the definition of $f$ and $g$, both $F$ and $G$ are finite.

Since $e + e = e$ by definition of identity element, it follows that if:

$\map f x + \map g x \ne e$
then necessarily $\map f x \ne e$ or $\map g x \ne e$.
That is:

$\map {\paren {f +' g} } x = \map f x + \map g x \ne e \implies x \in F \cup G$

But as $F$ and $G$ are both finite, it follows that $F \cup G$ is also finite.
Hence $f +' g \in G^{\paren S}$ and $\struct {G^{\paren S}, +'}$ is closed.

Now let $f \in G^{\paren S}$.
Let $f^*$ be the pointwise inverse of $f$.
Thus:

$\map {f^*} x = -\paren {\map f x}$
Again, let $F = \set {x \in S: \map f x \ne e}$.
It follows directly that:

$x \in S \setminus F \implies \map {f^*} x = e$
Hence:

$\map {f^*} x \ne e \implies x \in F$
and hence:

$f^* \in G^{\paren S}$

So by the Two-Step Subgroup Test, it follows that $\struct {G^{\paren S}, +'}$ is a subgroup of $\struct {G^S, +}$.
Hence $\struct {G^{\paren S}, +', \circ}_R$ is an $R$-module.
The result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 27$. Subspaces and Bases: Example $27.3$




