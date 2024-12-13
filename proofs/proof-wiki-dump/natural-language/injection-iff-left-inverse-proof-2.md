# 

Source: https://proofwiki.org/wiki/Injection_iff_Left_Inverse/Proof_2

Theorem
A mapping $f: S \to T, S \ne \O$ is an injection if and only if:

$\exists g: T \to S: g \circ f = I_S$
where $g$ is a mapping.

That is, if and only if $f$ has a left inverse.


Proof
Take the result Condition for Composite Mapping on Left:
Let $A, B, C$ be sets.
Let $f: A \to B$ and $g: A \to C$ be mappings.
Then:

$\forall x, y \in A: \map f x = \map f y \implies \map g x = \map g y$
if and only if:

$\exists h: B \to C$ such that $h$ is a mapping and $h \circ f = g$.

Let $C = A = S$, let $B = T$ and let $g = I_S$.
Then the above translates into:

$\exists h: T \to S$ such that $h$ is a mapping and $h \circ f = g$
if and only if:

$\forall x, y \in S: \map f x = \map f y \implies \map {I_S} x = \map {I_S} y$

But as $\map {I_S} x = x$ and $\map {I_S} y = y$ by definition of identity mapping, it follows that:

$\exists h: T \to S$ such that $h$ is a mapping and $h \circ f = g$
if and only if:

$\forall x, y \in S: \map f x = \map f y \implies x = y$
which is our result.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.4$




