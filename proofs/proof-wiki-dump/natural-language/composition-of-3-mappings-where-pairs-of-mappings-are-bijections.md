# 

Source: https://proofwiki.org/wiki/Composition_of_3_Mappings_where_Pairs_of_Mappings_are_Bijections

Theorem
Let $A$, $B$, $C$ and $D$ be sets.
Let:

$f: A \to B$
$g: B \to C$
$h: C \to D$
be mappings.
Let $g \circ f$ and $h \circ g$ be bijections.

Then $f$, $g$ and $h$ are all bijections.


Proof
We note that both $g \circ f$ and $h \circ g$ are both injections and surjections by definition of bijection.

First it is shown that $g$ is a bijection.
We are given that:

$g \circ f$ is a bijection.
From Injection if Composite is Injection it follows that $f$ is an injection.
From Surjection if Composite is Surjection it follows that $g$ is a surjection.

Similarly, we are given that:

$h \circ g$ is a bijection.
From Injection if Composite is Injection it follows that $g$ is an injection.
From Surjection if Composite is Surjection it follows that $h$ is a surjection.

Thus we have that $g$ is a bijection.
$\Box$

Next it is shown that $f$ is a bijection.
Aiming for a contradiction, suppose $f$ is not a surjection.
Then:

$\exists y \in B: \neg \exists x \in A: \map f x = y$
But then $g$ is a surjection and so:

$\forall z \in C: \exists y \in B: z = \map g y$
and so:

$\exists z \in C: \neg \exists x \in A: \map g {\map f x} = z$
and so $g \circ f$ is not a surjection.
This contradicts our assertion that $g \circ f$ is a bijection and so a surjection.
Hence by Proof by Contradiction $f$ must be a surjection
So $f$ is both an injection and a surjection, and so a bijection.
$\Box$

Next it is shown that $h$ is a bijection.
Aiming for a contradiction, suppose $h$ is not an injection.
Then:

$\exists y_1, y_2 \in C: \map h {y_1} = \map h {y_2}$
But then $g$ is a bijection and so:

$\exists x_1, x_2 \in B: y_1 = \map g {x_1} \ne \map g {x_2} = y_2$
and so:

$\exists x_1, x_2 \in B: \map h {\map g {x_1} } = \map h {\map g {x_2} }$
and so $h \circ g$ is not an injection.
This contradicts our assertion that $h \circ g$ is a bijection and so an injection.
Hence by Proof by Contradiction $h$ must be an injection
So $h$ is both an injection and a surjection, and so a bijection.
$\Box$

Hence the result.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Exercise $15$




