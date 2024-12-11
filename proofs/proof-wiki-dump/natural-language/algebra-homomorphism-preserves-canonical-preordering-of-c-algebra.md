# 

Source: https://proofwiki.org/wiki/*-Algebra_Homomorphism_preserves_Canonical_Preordering_of_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,}_A}$ and $\struct {B, \square, \norm {\, \cdot \,}_B}$ be $\text C^\ast$-algebras.
Let $\phi : A \to B$ be a $\ast$-algebra homomorphism.
Let $\le_A$ and $\le_B$ be the canonical preorderings on $A$ and $B$ respectively.
Let $x, y, z \in A$ be such that:

$x \le_A y \le_A z$

Then we have:

$\map \phi x \le_B \map \phi y \le_B \map \phi z$


Proof
Since $\phi$ is an algebra homomorphism, we aim to show that:

$\map \phi {y - x}$ is positive
and:

$\map \phi {z - y}$ is positive.
Since $y - x$ and $z - y$ are Hermitian and $\phi$ is a $\ast$-algebra homomorphism, we have that:

$\map \phi {y - x}$ and $\map \phi {z - y}$ are Hermitian.
Since $y - x$ are $z - y$ are positive, we have:

$\map {\sigma_A} {y - x} \subseteq \hointr 0 \infty$
and:

$\map {\sigma_A} {z - y} \subseteq \hointr 0 \infty$
Hence from Spectrum of Image of Element of Unital Algebra under Unital Algebra Homomorphism: Corollary, we have:

$\map {\sigma_B} {\map \phi {y - x} } \subseteq \map {\sigma_A} {y - x} \cup \set 0 \subseteq \hointr 0 \infty$
and:

$\map {\sigma_B} {\map \phi {z - y} } \subseteq \map {\sigma_A} {z - y} \cup \set 0 \subseteq \hointr 0 \infty$
Hence $\map \phi {y - x}$ and $\map \phi {z - y}$ are positive.
Hence $\map \phi y - \map \phi x$ and $\map \phi z - \map \phi y$ are positive.
Hence:

$\map \phi x \le_B \map \phi y \le_B \map \phi z$
$\blacksquare$





