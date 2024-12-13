# 

Source: https://proofwiki.org/wiki/Internal_Direct_Product_Theorem



Theorem
The following definitions of the concept of Internal Group Direct Product are equivalent:

Definition by Isomorphism
The group $\struct {G, \circ}$ is the internal group direct product of $H$ and $K$ if and only if the mapping $\phi: H \times K \to G$ defined as:

$\forall h \in H, k \in K: \map \phi {h, k} = h \circ k$
is a group isomorphism from the (external) group direct product $\struct {H, \circ {\restriction_H} } \times \struct {K, \circ {\restriction_K} }$ onto $\struct {G, \circ}$.

Definition by Subset Product
The group $\struct {G, \circ}$ is the internal group direct product of $H$ and $K$ if and only if:

$(1): \quad \struct {H, \circ {\restriction_H} }$ and $\struct {K, \circ {\restriction_K} }$ are both normal subgroups of $\struct {G, \circ}$
$(2): \quad G$ is the subset product of $H$ and $K$, that is: $G = H \circ K$
$(3): \quad$ $H \cap K = \set e$ where $e$ is the identity element of $G$.


General Result
Let $G$ be a group whose identity is $e$.
Let $\sequence {H_k}_{1 \mathop \le k \mathop \le n}$ be a sequence of subgroups of $G$.

Then $G$ is the internal group direct product of $\sequence {H_k}_{1 \mathop \le k \mathop \le n}$ if and only if:

$(1): \quad G = H_1 H_2 \cdots H_n$
$(2): \quad \sequence {H_k}_{1 \mathop \le k \mathop \le n}$ is a sequence of independent subgroups
$(3): \quad \forall k \in \set {1, 2, \ldots, n}: H_k \lhd G$
where $H_k \lhd G$ denotes that $H_k$ is a normal subgroup of $G$.


Proof 1
From Conditions for Internal Group Direct Product it is sufficient to show that if:

$\quad G = H \circ K$
and:

$\quad H \cap K = \set e$
then:

$\struct {H, \circ {\restriction_H} }$ and $\struct {H_2, \circ {\restriction_K} }$ are both normal subgroups of $\struct {G, \circ}$
if and only if

$\forall \tuple {h, k} \in H \times K: h \circ k = k \circ h$


Sufficient Condition
Let $\struct {H, \circ {\restriction_H} }$ and $\struct {H_2, \circ {\restriction_K} }$ both be normal subgroups of $\struct {G, \circ}$.
Let $x \in H$ and $y \in K$.
Then:














\(\ds x^{-1}\)

\(\in\)







\(\ds H\)





Two-Step Subgroup Test








\(\ds \leadsto \ \ \)





\(\ds y \circ x^{-1} \circ y^{-1}\)

\(\in\)







\(\ds H\)





Definition of Normal Subgroup














\(\ds x \circ y \circ x^{-1}\)

\(\in\)







\(\ds K\)





Definition of Normal Subgroup








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ y \circ x^{-1} } \circ y^{-1}\)

\(\in\)







\(\ds K\)





Group Axiom $\text G 0$: Closure












\(\, \ds \land \, \)

\(\ds x \circ \paren {y \circ x^{-1} \circ y^{-1} }\)

\(\in\)







\(\ds H\)





Group Axiom $\text G 0$: Closure








\(\ds \leadsto \ \ \)





\(\ds x \circ y \circ x^{-1} \circ y^{-1}\)

\(\in\)







\(\ds H \cap K\)





Group Axiom $\text G 1$: Associativity, Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ y} \circ \paren {x^{-1} \circ y^{-1} }\)

\(=\)







\(\ds e\)





a priori: $H \cap K = \set e$








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ y} \circ \paren {y \circ x}^{-1}\)

\(=\)







\(\ds e\)





Inverse of Group Product








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ y} \circ \paren {y \circ x}^{-1} \circ \paren {y \circ x}\)

\(=\)







\(\ds y \circ x\)














\(\ds \leadsto \ \ \)





\(\ds x \circ y\)

\(=\)







\(\ds y \circ x\)









$x$ and $y$ are arbitrary, so:

$\forall \tuple {h, k} \in H \times K: h \circ k = k \circ h$
$\Box$


Necessary Condition
Let:

$\forall \tuple {h, k} \in H \times K: h \circ k = k \circ h$
Let $z = G$.
We have:










\(\ds \exists h \in H, k \in K: \, \)



\(\ds z\)

\(=\)







\(\ds h \circ k\)





a priori: $G = H \circ K$








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds k \circ h\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds k \circ H\)

\(=\)







\(\ds H \circ k\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds h \circ K\)

\(=\)







\(\ds K \circ h\)





by hypothesis




Then we have:














\(\ds z \circ H \circ z^{-1}\)

\(=\)







\(\ds \paren {k \circ h} \circ H \circ \paren {h^{-1} \circ k^{-1} }\)





by hypothesis














\(\ds \)

\(=\)







\(\ds k \circ \paren {h \circ H \circ h^{-1} } \circ k^{-1}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(\subseteq\)







\(\ds k \circ H \circ k^{-1}\)




















\(\ds \)

\(=\)







\(\ds H \circ k \circ k^{-1}\)





a priori














\(\ds \)

\(=\)







\(\ds H \circ e\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds H\)










Similarly:














\(\ds z \circ K \circ z^{-1}\)

\(=\)







\(\ds \paren {h \circ k} \circ K \circ \paren {k^{-1} \circ h^{-1} }\)





by hypothesis














\(\ds \)

\(=\)







\(\ds h \circ \paren {k \circ K \circ k^{-1} } \circ h^{-1}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(\subseteq\)







\(\ds h \circ K \circ h^{-1}\)




















\(\ds \)

\(=\)







\(\ds K \circ h \circ h^{-1}\)





a priori














\(\ds \)

\(=\)







\(\ds K \circ e\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds K\)









Thus, by definition, $H$ and $K$ are both $\struct {H, \circ {\restriction_H} }$ and $\struct {H_2, \circ {\restriction_K} }$ are both normal subgroups of $\struct {G, \circ}$.
$\blacksquare$


Proof 2
Sufficient Condition
Let $\phi: H \times K \to G$ be the mapping defined as:

$\forall \tuple {h, k} \in H \times K: \map \phi {h, k} = h \circ k$

Let $\phi$ be an isomorphism.

$(1): \quad$ From Codomain of Internal Direct Isomorphism is Subset Product of Factors, $G = H \circ K$.
$(2): \quad$ From Internal Group Direct Product is Injective, $H$ and $K$ are independent subgroups of $G$.
$(3): \quad$ From Internal Group Direct Product Isomorphism, $H$ and $K$ are normal subgroups of $G$.
$\Box$


Necessary Condition
Let $\phi: H \times K \to G$ be the mapping defined as:

$\forall \tuple {h, k} \in H \times K: \map \phi {h, k} = h \circ k$

Suppose the three conditions hold.

$(1): \quad$ From $G = H \circ K$, $\phi$ is surjective.
$(2): \quad$ From Internal Group Direct Product is Injective, $\phi$ is injective.
$(3): \quad$ From Internal Group Direct Product of Normal Subgroups, $\phi$ is a group homomorphism.

Putting these together, we see that $\phi$ is a bijective homomorphism, and therefore an isomorphism.
So by definition, $G$ is the internal group direct product of $H$ and $K$.
$\blacksquare$


Proof 3
A specific instance of the general result, with $n = 2$.
$\blacksquare$


Examples
Symmetry Group of Rectangle
Consider the symmetry group of the rectangle $D_2$:
Let $\RR = ABCD$ be a (non-square) rectangle.


The various symmetries of $\RR$ are:

The identity mapping $e$
The rotation $r$ (in either direction) of $180^\circ$
The reflections $h$ and $v$ in the indicated axes.

The symmetries of $\RR$ form the dihedral group $D_2$.

Let $H := \set {e, r}$.
Let $K := \set {e, h}$.
Then $H$ and $K$ are subgroups of $D_2$ which fulfil the conditions of the Internal Direct Product Theorem, as:

$r \circ h = v = h \circ r$
Thus $D_2$ is the internal group direct product of $H$ and $K$.
Both $H$ and $K$ are isomorphic to $\struct {\Z_2, +_2}$, the additive group of integers modulo $2$.
Hence by Isomorphism of External Direct Products:

$D_2$ is isomorphic to $\struct {\Z_2, +_2} \times \struct {\Z_2, +_2}$.


Additive Group of Integers Modulo $6$
Consider the additive group of integers modulo $6$ $\struct {\Z_6, \times_6}$, illustrated by Cayley Table:
$\quad \begin{array}{r|rrrrrr}
\struct {\Z_6, +_6} & \eqclass 0 6 & \eqclass 1 6 & \eqclass 2 6 & \eqclass 3 6 & \eqclass 4 6 & \eqclass 5 6 \\
\hline
\eqclass 0 6 & \eqclass 0 6 & \eqclass 1 6 & \eqclass 2 6 & \eqclass 3 6 & \eqclass 4 6 & \eqclass 5 6
\\
\eqclass 1 6 & \eqclass 1 6 & \eqclass 2 6 & \eqclass 3 6 & \eqclass 4 6 & \eqclass 5 6 & \eqclass 0 6
\\
\eqclass 2 6 & \eqclass 2 6 & \eqclass 3 6 & \eqclass 4 6 & \eqclass 5 6 & \eqclass 0 6 & \eqclass 1 6
\\
\eqclass 3 6 & \eqclass 3 6 & \eqclass 4 6 & \eqclass 5 6 & \eqclass 0 6 & \eqclass 1 6 & \eqclass 2 6
\\
\eqclass 4 6 & \eqclass 4 6 & \eqclass 5 6 & \eqclass 0 6 & \eqclass 1 6 & \eqclass 2 6 & \eqclass 3 6
\\
\eqclass 5 6 & \eqclass 5 6 & \eqclass 0 6 & \eqclass 1 6 & \eqclass 2 6 & \eqclass 3 6 & \eqclass 4 6
\\
\end{array}$

Let $H := \set {0, 2, 4}$.
Let $K := \set {0, 3}$.
We have that:

$H +_6 K = \struct {\Z_6, +_6}$
and:

$H \cap K = \set 0$

Hence $H$ and $K$ are subgroups of $\struct {\Z_6, +_6}$ which fulfil the conditions of the Internal Direct Product Theorem.
Thus $\struct {\Z_6, +_6}$ is the internal group direct product of $H$ and $K$.
Because:

$H$ is isomorphic to $\struct {\Z_3, +_3}$
$K$ is isomorphic to $\struct {\Z_2, +_2}$
it follows by Isomorphism of External Direct Products that:

$\struct {\Z_6, +_6}$ is isomorphic to $\struct {\Z_3, +_3} \times \struct {\Z_2, +_2}$.




