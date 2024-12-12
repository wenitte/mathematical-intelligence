# 

Source: https://proofwiki.org/wiki/Commutative_and_Associative_Product_on_Space_of_Distributions_does_not_Exist

Theorem
Let $\map {\DD'} \R$ be the distribution space.
Let $\alpha \in \map {C^\infty} \R$ be a smooth function.
Let $\circ$ be a product operation on $\map {\DD'} \R$.
Suppose:

$\forall T \in \map {\DD'} \R : \forall \alpha \in \map {C^\infty} \R : \alpha \circ T := \alpha \cdot T$
where $\cdot$ stands for multiplication of distribution by a smooth function.
Suppose $\circ$ is commutative and associative.

Then $\circ$ does not exist.


Proof
Aiming for a contradiction, suppose there is such a product.
Let $\delta \in \map {\DD'} \R$ be the Dirac delta distribution.
We also have that $\ds \PV \frac 1 x$ is a distribution.
Let $\phi, \psi \in \map \DD \R$ be test functions.
Then:














\(\ds x \cdot \map {\paren { \PV \frac 1 x} } \phi\)

\(=\)







\(\ds \map {\paren {\PV \frac 1 x} } {x \phi}\)




















\(\ds \)

\(=\)







\(\ds \lim_{\epsilon \mathop \to 0} \int_{\size x \mathop > \epsilon} \frac {x \map \phi x} x \rd x\)




















\(\ds \)

\(=\)







\(\ds \lim_{\epsilon \mathop \to 0} \int_{\size x \mathop > \epsilon} \map \phi x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{- \infty}^\infty \map \phi x \rd x\)





Definition of Test Function














\(\ds \)

\(=\)







\(\ds \map {\bf 1} \phi\)




















\(\ds \)

\(=\)







\(\ds c\)





$c \in \R$



Here $\mathbf 1$ is the distribution associated to the real function defined by:

$\mathbf 1 : \R \to 1$

Consider the product $\ds \delta \cdot x \cdot \PV \frac 1 x$ in the distributional sense, where $\delta$ and $\PV \frac 1 x$ are distributions, and $x$ is a smooth function.














\(\ds \paren{\map \delta \psi \circ x} \circ \map {\paren{\PV \frac 1 x} } \phi\)

\(=\)







\(\ds \paren{x \circ \map \delta \psi} \circ \map {\paren{\PV \frac 1 x} } \phi\)





Commutativity in the first pair














\(\ds \)

\(=\)







\(\ds \paren{x \cdot \map \delta \psi} \circ \map {\paren{\PV \frac 1 x} } \phi\)




















\(\ds \)

\(=\)







\(\ds \map \delta {x \psi} \circ \map {\paren{\PV \frac 1 x} } \phi\)





Definition of Multiplication of Distribution by Smooth Function














\(\ds \)

\(=\)







\(\ds 0 \circ \map {\paren{\PV \frac 1 x} } \phi\)





Definition of Dirac Delta Distribution














\(\ds \)

\(=\)







\(\ds 0 \cdot \map {\paren{\PV \frac 1 x} } \phi\)




















\(\ds \)

\(=\)







\(\ds 0\)






















\(\ds \map \delta \psi \circ \paren {x \circ \map {\paren{\PV \frac 1 x} } \phi}\)

\(=\)







\(\ds \map \delta \psi \circ \paren {x \cdot \map {\paren{\PV \frac 1 x} } \phi}\)




















\(\ds \)

\(=\)







\(\ds \map \delta \psi \circ \map {\mathbf 1} \phi\)




















\(\ds \)

\(=\)







\(\ds \map {\mathbf 1} \phi \circ \map \delta \psi\)





Commutativity














\(\ds \)

\(=\)







\(\ds c \circ \map \delta \psi\)




















\(\ds \)

\(=\)







\(\ds c \cdot \map \delta \psi\)




















\(\ds \)

\(=\)







\(\ds \map \delta {c \psi}\)





Definition of Multiplication of Distribution by Smooth Function














\(\ds \)

\(\ne\)







\(\ds 0\)









Altogether, we have that:

$\ds \paren {\delta \circ x} \circ \PV \frac 1 x \ne \delta \circ \paren {x \circ \PV \frac 1 x}$
Hence, the associativity is violated, and we have reached a contradiction.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.4$: A glimpse of distribution theory. Multiplication by $C^\infty$ functions




