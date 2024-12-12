# 

Source: https://proofwiki.org/wiki/Embedding_Theorem



Motivation
The following is a frequently occurring circumstance in the field of abstract algebra.

We have a magma $\struct {T_1, \circ}$.
$\struct {T_1, \circ}$ is isomorphic to another magma $\struct {T_2, *}$.
$\struct {T_2, *}$ is embedded in a magma $\struct {S_2, *}$.
We want to embed $\struct {T_1, \circ}$ in its own magma $\struct {S_1, \circ}$ such that $\struct {S_1, \circ} \cong \struct {S_2, *}$.

This can always be done, as the Embedding Theorem theorem shows.


Theorem
Let:

$(1): \quad \struct {T_2, \oplus_2}$ be a submagma of $\struct {S_2, *_2}$
$(2): \quad f: \struct {T_1, \oplus_1} \to \struct {T_2, \oplus_2}$ be an isomorphism
then there exists:

$(1): \quad$ a magma $\struct {S_1, *_1}$ which algebraically contains $\struct {T_1, \oplus_1}$
$(2): \quad g: \struct {S_1, *_1} \to \struct {S_2, *_2}$ where $g$ is an isomorphism which extends $f$.


Corollary
Let:

$(1): \quad \struct {T_2, \oplus_2, \otimes_2}$ be a submagma of $\struct {S_2, *_2, \star_2}$
$(2): \quad f: \struct {T_1, \oplus_1, \otimes_1} \to \struct {T_2, \oplus_2, \otimes_2}$ be an isomorphism
then there exists:

$(1): \quad$ a magma $\struct {S_1, *_1, \star_1}$ which algebraically contains $\struct {T_1, \oplus_1, \otimes_1}$
$(2): \quad g: \struct {S_1, *_1, \star_1} \to \struct {S_2, *_2, \star_2}$ where $g$ is an isomorphism which extends $f$.


Proof
There are two cases to consider: when $T_1$ and $S_2$ are disjoint, and when they are not.

Suppose $T_1$ and $S_2$ are disjoint.
Let $S_1$ be the set $T_1 \cup \paren {S_2 \setminus T_2}$.
Then we can define the mapping $h: S_2 \to S_1$ as:

$\forall x \in S_2: \map h x = \begin{cases}
x & : x \in S_2 \setminus T_2 \\
\map {f^{-1} } x & : x \in T_2
\end{cases}$
Because $T_1$ and $S_2$ are disjoint, $h$ can be seen to be a bijection.
What $h$ is doing is that it effectively "slots" $T_1$ into the gap in $S_2$ that was taken up by the removed $T_2$.

We are going to show that $\struct {T_1, \oplus_1}$ is embedded in $\struct {S_1, *_1}$.
The operation $*_1$ is defined as the transplant of $*_2$ under $h$.
Thus by the Transplanting Theorem:

$\forall x, y \in S_1: x *_1 y = \map h {\map {h^{-1} } x *_2 \map {h^{-1} } y}$

Let $x, y \in T_1$.
Then, from the definition of $h$ above:

$\map {h^{-1} } x = \paren {\map {f^{-1} } x}^{-1} = \map f x$
and similarly:

$\map {h^{-1} } y = \map f y$

So:














\(\ds x *_1 y\)

\(=\)







\(\ds \map h {\map f x *_2 \map f y}\)





Transplanting Theorem














\(\ds \)

\(=\)







\(\ds \map h {\map f x \oplus_2 \map f y}\)





as $*_2$ is embedded in $\oplus_2$














\(\ds \)

\(=\)







\(\ds \map h {\map f {x \oplus_1 y} }\)





Morphism Property of $\oplus_1$ under $f$














\(\ds \)

\(=\)







\(\ds \map {f^{-1} } {\map f {x \oplus_1 y} }\)





Definition of $h$ on elements of $T_1$














\(\ds \)

\(=\)







\(\ds x \oplus_1 y\)





Inverse of Inverse of Bijection




proving that $x \oplus_1 y$ is closed.
Thus:

$\struct {T_1, \oplus_1} \subseteq \struct {S_1, *_1}$
that is, $\struct {T_1, \oplus_1}$ is embedded in $\struct {S_1, *_1}$.

Now, let $g = h^{-1}$.
By the definition of $*_1$, $g$ is an isomorphism from $\struct {S_1, *_1}$ onto $\struct {S_2, *_2}$.
Then:














\(\ds x\)

\(\in\)







\(\ds T_1\)














\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(\in\)







\(\ds T_2\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds \map h {\map f x}\)

\(=\)







\(\ds \map {f^{-1} } {\map f x} = x\)





Definition of $h$




Thus:














\(\ds \map g x\)

\(=\)







\(\ds \map g {\map h {\map f x} }\)





from above














\(\ds \)

\(=\)







\(\ds \map {h^{-1} } {\map h {\map f x} }\)





Definition of $g$














\(\ds \)

\(=\)







\(\ds \map f x\)





Inverse of Inverse of Bijection




So $g$ is an extension of $f$.
We have therefore proved that the embedding theorem holds when $T_1$ and $S_2$ are disjoint.
$\Box$

Next, suppose $T_1$ and $S_2$ are not disjoint.
We can use Exists Bijection to a Disjoint Set to assume the existence of a bijection $k: S_2 \to S_3$ such that $S_3 \cap T = \O$.

Let $*'$ be the transplant of $*$ under $k$.
Let:

$T_3 = \set {\map k x: x \in T_2}$

Then:














\(\ds x, y\)

\(\in\)







\(\ds T_3\)














\(\ds \leadsto \ \ \)





\(\ds \map {k^{-1} } x, \map{k^{-1} } y\)

\(\in\)







\(\ds T_2\)





Definition of $k$








\(\ds \leadsto \ \ \)





\(\ds \map {k^{-1} } x * \map {k^{-1} } y\)

\(\in\)







\(\ds T_2\)





Definition of $*$ in $T_2$








\(\ds \leadsto \ \ \)





\(\ds x *' y = \map k {\map {k^{-1} } x * \map {k^{-1} } y}\)

\(\in\)







\(\ds T_3\)





Transplanting Theorem




So $T_3$ is closed under $*'$.

Let $*' {\restriction_{T_3} }$ be the operation on $T_3$ induced by $*'$.
Then $\struct {T_3, *' {\restriction_{T_3} } }$ is embedded in $\struct {S_3, *'}$.
Thus $k \circ f$ is an isomorphism from $\struct {T_1, \oplus_1}$ onto $\struct {T_3, *' {\restriction_{T_3} } }$.
$S_3$ has been constructed so as to be disjoint from $T_1$.
In such a case it has already been shown that the Embedding Theorem holds.
That is:

$(1): \quad$ there exists a magma $\struct {S_1, *_1}$ containing $\struct {T_1, \oplus_1}$ algebraically
$(2): \quad$ there exists an isomorphism $g_1$ from $\struct {S_1, *_1}$ to $\struct {S_3, \oplus_1}$ extending $k \circ f$
where $\circ$ denotes the composition of $k$ with $f$

Let $g = k^{-1} \circ g_1$.
Let $x \in T$.
Then:














\(\ds \map g x\)

\(=\)







\(\ds \map {k^{-1} } {\map {g_1} x}\)





Definition of $g$














\(\ds \)

\(=\)







\(\ds \map {k^{-1} } {\map k {\map f x} }\)





as $g_1$ extends $k \circ f$














\(\ds \)

\(=\)







\(\ds \map f x\)





Inverse of Inverse of Bijection



and so $g$ extends $f$.

As $k$ is an isomorphism from $\struct {S_2, *_2}$ onto $\struct {S_3, *'}$, then:

$(1): \quad g$ is an isomorphism from $\struct {S_1, *_1}$ onto $\struct {S_2, *_2}$
$(2): \quad g$ extends $f$.

Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Theorem $8.1$




