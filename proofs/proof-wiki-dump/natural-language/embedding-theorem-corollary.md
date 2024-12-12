# 

Source: https://proofwiki.org/wiki/Embedding_Theorem/Corollary

Corollary to Embedding Theorem
Let:

$(1): \quad \struct {T_2, \oplus_2, \otimes_2}$ be a submagma of $\struct {S_2, *_2, \star_2}$
$(2): \quad f: \struct {T_1, \oplus_1, \otimes_1} \to \struct {T_2, \oplus_2, \otimes_2}$ be an isomorphism
then there exists:

$(1): \quad$ a magma $\struct {S_1, *_1, \star_1}$ which algebraically contains $\struct {T_1, \oplus_1, \otimes_1}$
$(2): \quad g: \struct {S_1, *_1, \star_1} \to \struct {S_2, *_2, \star_2}$ where $g$ is an isomorphism which extends $f$.


Proof
By the Embedding Theorem, there exists:

a magma $\struct {S_1, *_1}$ which algebraically contains $\struct {T_1, \oplus_1}$
an isomorphism $g: \struct {S_1, *_1} \to \struct {S_2, *_2}$ which extends $f$.

Let $\star_1$ be the transplant of $\star_2$ under $g^{-1}$.
We have that:

$g^{-1}$ is an isomorphism from $\struct {S_2, \star_2}$ to $\struct {S_1, \star_1}$.
Hence:

$g$ is an isomorphism from $\struct {S_1, \star_1}$ to $\struct {S_2, \star_2}$.
It follows that:

$g$ is an isomorphism from $\struct {S_1, *_1, \star_1}$ to $\struct {S_2, *_2, \star_2}$.

It remains to be shown that:

$\struct {T_1, \otimes_1}$ is closed
and:

the operation induced on $T_1$ by $\star_1$ is $\otimes_1$.

Let $x, y \in T_1$.
Then:

$\map g x = \map f x$
and:

$\map g y = \map f y$
such that:

$\map g x, \map g y \in T_2$

So by definition of $\star_1$:














\(\ds x \star_1 y\)

\(=\)







\(\ds \map {g^{-1} } {\map g x \star_2 \map g y}\)





Transplanting Theorem














\(\ds \)

\(=\)







\(\ds \map {g^{-1} } {\map f x \otimes_2 \map f y}\)




















\(\ds \)

\(=\)







\(\ds \map {g^{-1} } {\map f {x \otimes_1 y} }\)




















\(\ds \)

\(=\)







\(\ds \map {f^{-1} } {\map f {x \otimes_1 y} }\)





as the restriction of $g^{-1}$ to $T_2$ is $f^{-1}$














\(\ds \)

\(=\)







\(\ds x \otimes_1 y\)





Transplanting Theorem, and because $\map f {x \otimes_1 y} \in T_2$




Hence $\struct {T_1, \oplus_1, \otimes_1}$ is embedded in $\struct {S_1, *_1, \star_1}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Theorem $8.1$




