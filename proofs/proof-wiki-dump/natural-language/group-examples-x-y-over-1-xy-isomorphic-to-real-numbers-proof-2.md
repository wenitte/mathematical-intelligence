# 

Source: https://proofwiki.org/wiki/Group/Examples/x%2By_over_1%2Bxy/Isomorphic_to_Real_Numbers/Proof_2

Theorem
Let $G := \set {x \in \R: -1 < x < 1}$ be the set of all real numbers whose absolute value is less than $1$.
Let $\circ: G \times G \to G$ be the binary operation defined as:

$\forall x, y \in G: x \circ y = \dfrac {x + y} {1 + x y}$

$\struct {G, \circ}$ is isomorphic to the additive group of real numbers $\struct {\R, +}$.


Proof
To prove $G$ is isomorphic to $\struct {\R, +}$, it is sufficient to find a bijective homorphism $\phi: \to \R \to G$:

$\forall x, y \in G: \map \phi {x + y} = \map \phi x \circ \map \phi y$
From Group Examples: $\dfrac {x + y} {1 + x y}$:

the identity element of $G$ is $0$
the inverse of $x$ in $G$ is $-x$.
This also holds for $\struct {\R, +}$.

This hints at the structure of a possible such $\phi$:

$(1): \quad$ that it is an odd function
$(2): \quad$ that it passes through $0$
$(3): \quad$ that its image is the open interval $\openint {-1} 1$.

One such function is the hyperbolic tangent function $\tanh$, which indeed has the above properties on $\R$.
Then we have that:














\(\ds \map {\tanh } {x + y}\)

\(=\)







\(\ds \dfrac {\tanh x + \tanh y} {1 + \tanh x \tanh y}\)





Hyperbolic Tangent of Sum














\(\ds \)

\(=\)







\(\ds \tanh x \circ \tanh y\)









This demonstrates the homorphism between $\struct {\R,  +}$ and $\struct {G, \circ}$.
We have that Real Hyperbolic Tangent Function is Strictly Increasing over $\R$.
Hence from Strictly Monotone Real Function is Bijective, $\tanh: \R \to \openint {-1} 1$ is a bijection.
Hence the result that $\struct {\R,  +} \cong \struct {G, \circ}$.
$\blacksquare$





