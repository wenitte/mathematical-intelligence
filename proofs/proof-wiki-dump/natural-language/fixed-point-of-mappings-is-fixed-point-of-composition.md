# 

Source: https://proofwiki.org/wiki/Fixed_Point_of_Mappings_is_Fixed_Point_of_Composition

Theorem
Let $S$ be a set.
Let $f, g: S \to S$ be mappings.
Let $x \in S$ be a fixed point of both $f$ and $g$.

Then $x$ is also a fixed point of $f \circ g$, the composition of $f$ and $g$.


General Result
Let $S$ be a set.
Let $n \in \N$ be a strictly positive integer.
Let $\N_n$ be the initial segment of $n$ in $\N$.
That is, let $\N_n = \set {0, 1, \dots, n-1}$.
For each $i \in \N_n$, let $f_i: S \to S$ be a mapping.
Let $x \in S$ be a fixed point of $f_i$ for each $i \in \N_n$.
Let $g = f_0 \circ f_1 \circ \dots \circ f_{n-1}$ be the composition of all the $f_i$s.

Then $x$ is a fixed point of $g$.


Proof
Since $x$ is a fixed point of $g$:

$\map g x = x$
Thus:

$\map f {\map g x} = \map f x$
Since $x$ is a fixed point of $f$:

$\map f x = x$
It follows that:

$\map {\paren {f \circ g} } x = \map f {\map g x} = x$
Thus $x$ is a fixed point of $f \circ g$.
$\blacksquare$





