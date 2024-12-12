# 

Source: https://proofwiki.org/wiki/Bijection_between_Specific_Elements



Lemma
Let $A$ and $B$ be sets.
Let $f: A \leftrightarrow B$ be a bijection.

Then given $a \in A$ and $b \in B$, there exists another bijection $g: A \leftrightarrow B$ such that $\map g a = b$.


Proof
Let $\map f a = b'$.
Since $f$ is surjective, there is $a' \in A$ such that $\map f {a'} = b$.
We define the mapping $g: A \to B$ as:

$\map g x = \begin {cases}
b & : x = a \\
b' & : x = a' \\
\map f x & : x \in A \setminus \set {a, a'} \end {cases}$


$g$ is Surjective
Let $y \in B \setminus \set {b, b'}$.
Then:

$\exists x \in A: \map f x = y$
and so by definition of $g$:

$\exists x \in A: \map g x = y$
Otherwise:

$y = b \implies b = \map g a$
$y = b' \implies b = \map g {a'}$
and so $y$ is seen to be surjective.


$g$ is Injective
Suppose $\map g x = \map g {x'}$.
If $\map g x, \map g {x'} \in B \setminus \set {b, b'}$ then $\map f x = \map f {x'}$.
As $f$ is bijective and so injective it follows that $x = x'$.

If $\map g x, \map g {x'} \in \set {b, b'}$ then either:

$\map g x = \map g {x'} = b$ and so $x = x' = a$
or

$\map g x = \map g {x'} = b'$ and so $x = x' = a'$

For the other two cases:

$\map g x \in \set {b, b'}, \map g {x'} \notin \set {b, b'}$
$\map g x \notin \set {b, b'}, \map g {x'} \in \set {b, b'}$
it is clear that $\map g x \ne \map g {x'}$.
So $g$ has been shown to be injective.


$g$ is Bijective
So $g$ is both injective and surjective, and so by definition a bijection.
$\blacksquare$


Motivation
What this means is that given any two equivalent sets, it is always possible to find a bijection that connects any given pair of elements, one in one set and one in the other.





