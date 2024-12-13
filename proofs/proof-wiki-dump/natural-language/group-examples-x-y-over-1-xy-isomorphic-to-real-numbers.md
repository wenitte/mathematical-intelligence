# 

Source: https://proofwiki.org/wiki/Group/Examples/x%2By_over_1%2Bxy/Isomorphic_to_Real_Numbers



Theorem
Let $G = \set {x \in \R: -1 < x < 1}$ be the set of all real numbers whose absolute value is less than $1$.
Let $\circ: G \times G \to G$ be the binary operation defined as:

$\forall x, y \in G: x \circ y = \dfrac {x + y} {1 + x y}$
It has been established in Group Examples: $\dfrac {x + y} {1 + x y}$ that $\struct {G, \circ}$ forms a group.

$\struct {G, \circ}$ is isomorphic to the additive group of real numbers $\struct {\R, +}$.


Proof 1
To prove $G$ is isomorphic to $\struct {\R, +}$, we need to find a bijective homorphism $\phi: \openint {-1} 1 \to \R$:

$\forall x, y \in G: \map \phi {x \circ y} = \map \phi x + \map \phi y$
From Group Examples: $\dfrac {x + y} {1 + x y}$:

the identity element of $G$ is $0$
the inverse of $x$ in $G$ is $-x$.
This also holds for $\struct {\R, +}$.

This hints at the structure of a possible isomorphism, namely:

$(1): \quad$ that it is an odd function
$(2): \quad$ that it passes through $0$
$(3): \quad$ that it is defined on the open interval $\openint {-1} 1$.

One such function is the inverse hyperbolic arctangent function $\tanh^{-1}$, which is indeed defined on $\openint {-1} 1$ and has the above properties.
Hence:














\(\ds \map {\tanh^{-1} } x\)

\(=\)







\(\ds \frac 1 2 \map \ln {\frac {x + 1} {x - 1} }\)





Definition 2 of Inverse Hyperbolic Tangent








\(\ds \leadsto \ \ \)





\(\ds \map {\tanh^{-1} } {x \circ y}\)

\(=\)







\(\ds \frac 1 2 \map \ln {\frac {\frac {x + y} {1 + x y} + 1} {\frac {x + y} {1 + x y} - 1} }\)





Definition of $\struct {G, \circ}$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {\frac {x + y + 1 + x y} {x + y - 1 - x y} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {\frac {\paren {x + 1} \paren {y + 1} } {\paren {x - 1} \paren {y - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {\frac {x + 1} {x - 1} } + \frac 1 2 \map \ln {\frac {y + 1} {y - 1} }\)




















\(\ds \)

\(=\)







\(\ds \tanh^{-1} x + \tanh^{-1} y\)









This demonstrates the homorphism between $\struct {G, \circ}$ and $\struct {\R,  +}$.
We have that Real Inverse Hyperbolic Tangent Function is Strictly Increasing over $\openint {-1} 1$.
Hence from Strictly Monotone Real Function is Bijective, $\tanh^{-1}: \openint {-1} 1 \to \R$ is a bijection.
Hence the result that $\struct {G, \circ} \cong \struct {\R,  +}$.
$\blacksquare$


Proof 2
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


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 62 \epsilon$




