# 

Source: https://proofwiki.org/wiki/Mapping_Composed_with_Bijection_forming_Bijection_is_Bijection

Theorem
Let $A$, $B$ and $C$ be sets.
Let $f: A \to B$ and $g: B \to C$ be mappings.
Let the composite mapping $g \circ f$ be a bijection.

Let either $f$ or $g$ be a bijection.
Then both $f$ and $g$ are bijections.


Proof
We note that $g \circ f$ is both an injection and a surjection by definition of bijection.

We are given that:

$g \circ f$ is a bijection.
From Injection if Composite is Injection it follows that $f$ is an injection.
From Surjection if Composite is Surjection it follows that $g$ is a surjection.
$\Box$

First suppose that $g$ is a bijection.
We already have that $f$ is an injection.
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

Now suppose that $f$ is a bijection.
Aiming for a contradiction, suppose $g$ is not an injection.
Then:

$\exists y_1, y_2 \in B: \map g {y_1} = \map g {y_2}$
But then $f$ is a bijection and so:

$\exists x_1, x_2 \in A: y_1 = \map f {x_1} \ne \map f {x_2} = y_2$
and so:

$\exists x_1, x_2 \in A: \map g {\map f {x_1} } = \map g {\map f {x_2} }$
and so $g \circ f$ is not an injection.
This contradicts our assertion that $g \circ f$ is a bijection and so an injection.
Hence by Proof by Contradiction $g$ must be an injection.
So $g$ is both an injection and a surjection, and so a bijection.
$\Box$

Hence the result.
$\blacksquare$





