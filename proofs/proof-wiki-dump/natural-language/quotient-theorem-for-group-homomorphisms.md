# 

Source: https://proofwiki.org/wiki/Quotient_Theorem_for_Group_Homomorphisms



Theorem
Let $\phi: G \to G'$ be a (group) homomorphism between two groups $G$ and $G'$.
Then $\phi$ can be decomposed into the form:

$\phi = \alpha \beta \gamma$
where:

$\alpha: \Img \phi \to G'$ is a monomorphism
$\beta: G / \map \ker \phi \to \Img \phi$ is an isomorphism
$\gamma: G \to G / \map \ker \phi$ is an epimorphism.


Corollary 1
Let $\struct {G, \odot}$ and $\struct {H, *}$ be groups whose identities are $e_G$ and $e_H$ respectively.
Let $\phi: G \to H$ be a group homomorphism.
Let $K$ be the kernel of $\phi$.
Let $N$ be a normal subgroup of $G$.
Let $q_N: G \to \dfrac G N$ denote the quotient epimorphism from $G$ to the quotient group $\dfrac G N$.

Then:

$N \subseteq K$
if and only if:

there exists a group homomorphism $\psi: \dfrac G N \to H$ such that $\phi = \psi \circ q_N$


Corollary 2
Let $\struct {G, \odot}$ and $\struct {H, *}$ be groups whose identities are $e_G$ and $e_H$ respectively.
Let $\phi: G \to H$ be a group epimorphism.
Let $K$ be the kernel of $\phi$.
Let $N$ be a normal subgroup of $G$.
Let $q_N: G \to G / N$ denote the quotient epimorphism from $G$ to the quotient group $G / N$.

Then:

$N \subseteq K$
if and only if:

there exists a group epimorphism $\psi: G / N \to H$ such that $\phi = \psi \circ q_N$


Proof
Monomorphism
The mapping $\alpha$ is identified with the inclusion mapping $i: \Img \phi \to G'$ defined as:

$\forall x \in \Img \phi: \map i x = x$
From Inclusion Mapping is Monomorphism, it follows that $\alpha$ is a monomorphism.
$\Box$


Isomorphism
From the First Isomorphism Theorem for Groups:

$\Img \phi \cong G / \map \ker \phi$
for any homomorphism $\phi$.
That is, the image of $\phi$ is isomorphic to the quotient group of $G$ by the kernel of $\phi$.

Thus $\beta$ is such an isomorphism.
$\Box$


Epimorphism
The mapping $\gamma: G \to G / \map \ker \phi$ is given by:

$\forall a \in G: \map \gamma a = a \, \map \ker \phi$
where $a \, \map \ker \phi$ is the left coset of $\map \ker \phi$ by $a$.
This is justified by Kernel is Normal Subgroup of Domain.
By definition, each (left) coset of $\map \ker \phi$ is the (left) coset of each of its elements.
So $\gamma$ is a surjection.

By Group Axiom $\text G 0$: Closure, $G$ is closed under its group operation:

$\forall a, b \in G, a b \in G$
Hence:

$a b \in \Dom \gamma$

$\gamma$ is shown to be a homomorphism thus:














\(\ds \map \gamma {a b}\)

\(=\)







\(\ds \paren {a b} \, \map \ker \phi\)





Definition of $\gamma$














\(\ds \)

\(=\)







\(\ds \paren {a \, \map \ker \phi} \paren {b \, \map \ker \phi}\)





Definition of Coset Product














\(\ds \)

\(=\)







\(\ds \map \gamma a \map \gamma b\)





Definition of $\gamma$



thus demonstrating the morphism property.
A homomorphism which is surjective is an epimorphism.
$\Box$

Hence the result.
$\blacksquare$

This theorem can be illustrated by means of the following commutative diagram:
$\quad\quad \begin{xy}\xymatrix@L+2mu@+1em{
G \ar@{-->}[r]^*{\phi}
\ar[d]^*{\gamma}
&
G'
\\ 
G / \map \ker \phi \ar[r]_*{\beta}^*{\cong}
&
\Img \phi \ar[u]^*{\alpha}
}\end{xy}$


Also known as
The quotient theorem for group homomorphisms is also seen as quotient theorem for groups.


Examples
Real to Complex Numbers under $e^{2 \pi i x}$
Let $\struct {\R, +}$ denote the additive group of real numbers.
Let $\struct {\C_{\ne 0}, \times}$ denote the multiplicative group of complex numbers.
Let $\phi: \struct {\R, +} \to \struct {\C_{\ne 0}, \times}$ be the homomorphism defined as:

$\forall x \in \R: \map \phi x = e^{2 \pi i x}$

Then $\phi$ can be decomposed into the form:

$\phi = \alpha \beta \gamma$
in the following way:


$\alpha: \struct {K, \times} \to \struct {\C_{\ne 0}, \times}$ is defined as:
$\forall z \in K: \map \alpha z = z$
where $\struct {K, \times}$ denotes the circle group:
$K = \set {z \in \C: \cmod z = 1}$
$\times$ is the operation of complex multiplication


$\beta: \hointr 0 1 \to K$ is defined as:
$\forall x \in \hointr 0 1: \map \beta x = e^{2 \pi i x}$
where $\hointr 0 1$ denotes the right half-open real interval $\set {x \in \R: 0 \le x < 1}$


$\gamma: \R \to \hointr 0 1$ is defined as:
$\forall x \in \R: \map \gamma x = \fractpart x$
where $\fractpart x$ is the fractional part of $x$:
$\fractpart x := x - \floor x$


Inner Automorphism by Inverse Element
Let $G$ be a group.
Let $\Aut G$ denote the automorphism group of $G$.

Let $\phi: G \to \Aut G$ be the homomorphism defined as:

$\forall g \in G: \map \phi g = \kappa_{g^{-1} }$
where $\kappa_{g^{-1} }$ denotes the inner automorphism of $G$ by $g^{-1}$.

Then $\phi$ can be decomposed into the form:

$\phi = \alpha \beta \gamma$
in the following way:


$\alpha: \Inn G \to \Aut G$ is defined as:
$\forall \kappa \in \Inn G: \map \alpha \kappa = \kappa$
where $\Inn G$ denotes the inner automorphism group of $G$


$\beta: G / \map Z G \to \Inn G$ is defined as:
$\forall g \in G / \map Z G: \map \phi g = \kappa_{g^{-1} }$
where $G / \map Z G$ denotes the quotient group of $G$ by the center of $G$


$\gamma: G \to G / \map Z G$ is defined as:
$\forall g \in G: \map \gamma g = \map {q_{\map Z G} } g = g \, \map Z G$
where $q_{\map Z G}$ is the quotient epimorphism from $G$ to $G / \map Z G$.


Integers to Modulo Integers under Multiplication
Let $\struct {\Z, +}$ denote the additive group of integers.
Let $\struct {\Z_m, +}$ denote the additive group of integers modulo $m$.
Let $\phi: \struct {\Z, +} \to \struct {\Z_m, +}$ be the homomorphism defined as:

$\forall k \in \Z: \map \phi k = \eqclass {n k} m$
for some $n \in \Z$.

Let $d := \gcd \set {m, n}$, where $\gcd \set {m, n}$ denotes the GCD of $m$ and $n$.
Let $c := \dfrac m d = \dfrac m {\gcd \set {m, n} }$.

Then $\phi$ can be decomposed into the form:

$\phi = \alpha \beta \gamma$
in the following way:


$\alpha: \struct {d \, \Z_c, +} \to \struct {\Z_m, +}$ is defined as:
$\forall x \in d \, \Z_c: \map \alpha x = x$
where $d \, \Z_c := \set {0, d, 2 d, \ldots, \paren {c - 1} d}$


$\beta: \Z_c \to d \, \Z_c$ is defined as:
$\forall \eqclass x c \in \Z_c: \map \beta {\eqclass x c} = \eqclass {n x} m$


$\gamma: \Z \to \Z_c$ is defined as:
$\forall x \in \Z: \map \gamma x = \eqclass {x \bmod c} c$
where $\bmod$ denotes the modulo operation.


Integer Power on Circle Group
Let $K$ denote the circle group.

Let $\phi: K \to K$ be the homomorphism defined as:

$\forall z \in K: \map \phi z = z^n$
for some $n \in \Z_{>0}$.

Then $\phi$ can be decomposed into the form:

$\phi = \alpha \beta \gamma$
in the following way:


$\alpha: K \to K$ is defined as:
$\forall z \in K: \map \alpha z = z$
that is, $\alpha$ is the identity mapping


$\beta: S \to K$ is defined as:
$\forall z \in S: \map \phi z = z^n$
where $S$ denotes the set defined as:
$S := \set {z \in \C: z = e^{2 \pi i x}, 0 \le x < \dfrac 1 n}$


$\gamma: K \to S$ is defined as:
$\forall z \in K: \map \gamma z = z \bmod \dfrac 1 n$
where $\bmod$ denotes the modulo operation.


Also see
Quotient Theorem for Sets


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Factoring Morphisms: Theorem $4$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 67$




