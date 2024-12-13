# 

Source: https://proofwiki.org/wiki/Set_Equivalence_Less_One_Element

Theorem
Let $S$ and $T$ be sets which are equivalent:

$S \sim T$

Let $a \in S$ and $b \in T$.

Then:

$S \setminus \set a \sim T \setminus \set b$
where $\setminus$ denotes set difference.


Proof
As $S \sim T$, there exists a bijection $f: S \to T$.
Let $g: \paren {S \setminus \set a} \to \paren {T \setminus \set b}$ be the mapping defined as follows:
$\forall x \in S \setminus \set a: \map g x =
\begin{cases}
\map f x: \map f x \ne b \\
\map f a: \map f x = b
\end{cases}$

First it is shown that $g$ is an injection.
Let $x, y \in S \setminus \set a$ and $x \ne y$.

The following cases apply:
$(1): \quad \map f x \ne b$ and $\map f y \ne b$
By definition of $g$:

$\map f x = \map g x$
and:

$\map f y = \map g y$
It follows from the injectivity of $f$ that:

$\map g x \ne \map g y$

$(2): \quad \map f x = b$
By definition of $g$:

$\map g x = \map f a$
We have that:

$y \in S \setminus \set a$
Therefore by definition of set difference:

$y \ne a$
So by the injectivity of $f$:

$\map f y \ne \map f a = \map g x$
Also by the injectivity of $f$:

$\map f y \ne b$
Thus, by the definition of $g$:

$\map g y = \map f y \ne \map f a = \map g x$
$(2): \quad \map f y = b$
The proof is the same as that of case $2$, with the roles of $x$ and $y$ reversed.
$\Box$

Next it is shown that $g$ is a surjection.
Let $y \in T \setminus \set b$.
By definition of surjectivity of $f$:

$\exists x \in S: \map f x = y$
It is to be shown that:

$\exists x' \in S, x \ne a: \map f {x'} = y$

$(1): \quad \map f a = b$
By hypothesis:

$\map f x = y \ne b$
Then by the rule of transposition:

$x \ne a$
so let:

$x' = x$

$(2): \quad \map f a \ne b$
By the rule of transposition:

$\map {f^{-1} } b \ne a$
where $\map {f^{-1} } b$ denotes the preimage of $b$ under $f$.


Case $(2.1): \quad \map f a = y$
By the definition of $g$:

$\map g {\map {f^{-1} } b} = y$
so let:

$x' = \map {f^{-1} } b$


Case $(2.2): \quad \map f a \ne y$
By hypothesis:

$\map f x = y \ne \map f a$
Then by the rule of transposition:

$x \ne a$
so let:

$x' = x$

Thus:

$\forall y \in T \setminus \set b: \exists x \in S \setminus \set a: \map g x = y$
and so $g$ is a surjection.
$\Box$

Thus $g$ is both an injection and a surjection, and is by definition a bijection.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 17$: Finite Sets: Theorem $17.2$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 6$: Finite Sets: Lemma $6.1$




