# 

Source: https://proofwiki.org/wiki/Groups_of_Order_30



Theorem
Let $G$ be a group of order $30$.
Then $G$ is one of the following:

The cyclic group $C_{30}$
The dihedral group $D_{15}$
The group direct product $C_5 \times D_3$
The group direct product $C_3 \times D_5$


Proof
First we introduce a lemma:

Lemma
Let $G$ be a group of order $30$.
Then $G$ is one of the following:

The cyclic group $C_{30}$
The dihedral group $D_{15}$
Isomorphic to one of:
$\gen {x, y: x^{15} = e = y^2, y x y^{-1} = x^4}$
$\gen {x, y: x^{15} = e = y^2, y x y^{-1} = x^{11} }$
$\Box$

From the lemma, it remains to be shown that the group presentations:

$\gen {x, y: x^{15} = e = y^2, y x y^{-1} = x^{11} }$
$\gen {x, y: x^{15} = e = y^2, y x y^{-1} = x^4}$
give the groups $C_5 \times D_3$ and $C_3 \times D_5$.


Direct Product $C_5 \times D_3$
Let $G$ be defined by its group presentation:

$G = \gen {x, y: x^{15} = e = y^2, y x y^{-1} = x^{11} }$

Let $z$ denote $x^3$.
Then:














\(\ds y z y^{-1}\)

\(=\)







\(\ds y x^3 y^{-1}\)




















\(\ds \)

\(=\)







\(\ds \paren {y x y^{-1} }^3\)





Power of Conjugate equals Conjugate of Power














\(\ds \)

\(=\)







\(\ds \paren {x^{11} }^3\)





from Group Presentation














\(\ds \)

\(=\)







\(\ds x^{33}\)





Powers of Group Elements: Product of Indices














\(\ds \)

\(=\)







\(\ds x^{15} x^{15} x^3\)





Powers of Group Elements: Sum of Indices














\(\ds \)

\(=\)







\(\ds e \cdot e \cdot x^3\)





from Group Presentation














\(\ds \)

\(=\)







\(\ds x^3\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds z\)





Definition of $z$








\(\ds \leadsto \ \ \)





\(\ds y z\)

\(=\)







\(\ds z y\)





Product of both sides with $y$



So $z$ commutes with $y$.
As $z$ is a power of $x$, $z$ also commutes with $x$.
Hence by definition of center:

$z \in \map Z G$
It follows that $\gen z$ is a normal subgroup of order $5$.

Let $K$ be the subgroup of $G$ generated by $x^5$ and $y$.
Note that:














\(\ds y x^5 y^{-1}\)

\(=\)







\(\ds \paren {y x y^{-1} }^5\)





Power of Conjugate equals Conjugate of Power














\(\ds \)

\(=\)







\(\ds \paren {x^{11} }^5\)





from Group Presentation














\(\ds \)

\(=\)







\(\ds x^{55}\)





Powers of Group Elements: Product of Indices














\(\ds \)

\(=\)







\(\ds x^{15} x^{15} x^{15} x^{10}\)





Powers of Group Elements: Sum of Indices














\(\ds \)

\(=\)







\(\ds e \cdot e \cdot e \cdot x^{10}\)





from Group Presentation














\(\ds \)

\(=\)







\(\ds x^{10}\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds x^{-5}\)





as $x^{15} = e$



Hence the generator of $K$ satisfies:

$\paren{x^5}^3 = e = y^2$
and:

$y x^5 y^{-1} = x^{-5}$
Let $w := x^5$.
Then $K$ is generated by $w$ and $y$ where:

$w^3 = 1 = y^2$
and:

$w y = y w^2 = y w^{-1}$
and it is seen that $K$ is isomorphic to the dihedral group $D_3$.

It is now to be shown that $G$ is an internal group direct product of $K$ and $\gen z$.
We have that $K \cap \gen z = \set e$.
From the Internal Direct Product Theorem, we need to prove only that $K$ is a normal subgroup of $G$.
We have that:

$\order K = 6$
where $\order K$ denotes the order of $K$.
We also have that $K$ is a subgroup of its normalizer $\map {N_G} K$.
Hence by Lagrange's Theorem:

$6 \divides \order {\map {N_G} K}$
where $\divides$ denotes divisibility.
Again by Lagrange's Theorem:

$\order {\map {N_G} K} \divides 30$

We have:














\(\ds x w x^{-1}\)

\(=\)







\(\ds x x^5 x^{-1}\)





Definition of $w$














\(\ds \)

\(=\)







\(\ds x^5\)




















\(\ds \)

\(=\)







\(\ds w\)









demonstrating that $x$ is conjugate to $w$.

Then:














\(\ds x y x^{-1}\)

\(=\)







\(\ds x y^{-1} x^{-1}\)





as $y^2 = e$














\(\ds \)

\(=\)







\(\ds y x^{11} x^{-1}\)





from Group Presentation: $y x y^{-1} = x^{11}$














\(\ds \)

\(=\)







\(\ds y x^{10}\)




















\(\ds \)

\(=\)







\(\ds y w^2\)




















\(\ds \)

\(\in\)







\(\ds K\)









demonstrating that $x$ is conjugate to $y$.

Thus $x \in \map {N_G} K$ and so $\order {\map {N_G} K} > 6$.
As $6 \divides \order {\map {N_G} K}$ and $\order {\map {N_G} K} \divides 30$, it follows that:

$\map {N_G} K = G$
and so $K$ is normal in $G$.

Thus:

$K$ and $\gen z$ are normal in $G$
$K \cap \gen z = \set e$
$K \gen z = G$
and it therefore follows from the  Internal Direct Product Theorem that:

$G = C_5 \times D_3$
$\blacksquare$


Direct Product $C_3 \times D_5$
Let $G$ be defined by its group presentation:

$G = \gen {x, y: x^{15} = e = y^2, y x y^{-1} = x^4}$

Let $z$ denote $x^5$.
Then:














\(\ds y z y^{-1}\)

\(=\)







\(\ds y x^5 y^{-1}\)




















\(\ds \)

\(=\)







\(\ds \paren {y x y^{-1} }^5\)





Power of Conjugate equals Conjugate of Power














\(\ds \)

\(=\)







\(\ds \paren {x^4}^5\)





from Group Presentation














\(\ds \)

\(=\)







\(\ds x^{20}\)





Powers of Group Elements: Product of Indices














\(\ds \)

\(=\)







\(\ds x^{15} x^5\)





Powers of Group Elements: Sum of Indices














\(\ds \)

\(=\)







\(\ds e \cdot x^5\)





from Group Presentation














\(\ds \)

\(=\)







\(\ds x^5\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds z\)





Definition of $z$








\(\ds \leadsto \ \ \)





\(\ds y z\)

\(=\)







\(\ds z y\)





Product of both sides with $y$



So $z$ commutes with $y$.
As $z$ is a power of $x$, $z$ also commutes with $x$.
Hence by definition of center:

$z \in \map Z G$
It follows that $\gen z$ is a normal subgroup of order $3$.

Let $N$ be the subgroup of $G$ generated by $x^3$ and $y$.
Note that:














\(\ds y x^3 y^{-1}\)

\(=\)







\(\ds \paren {y x y^{-1} }^3\)





Power of Conjugate equals Conjugate of Power














\(\ds \)

\(=\)







\(\ds \paren {x^4}^5\)





from Group Presentation














\(\ds \)

\(=\)







\(\ds x^{12}\)





Powers of Group Elements: Product of Indices














\(\ds \)

\(=\)







\(\ds x^{-3}\)





as $x^{15} = e$



Hence the generator of $N$ satisfies:

$\paren{x^3}^5 = e = y^2$
and:

$y x^3 y^{-1} = x^{-3}$
Let $w := x^3$.
Then $N$ is generated by $w$ and $y$ where:

$w^5 = 1 = y^2$
and:

$w y = y w^4 = y w^{-1}$
and it is seen that $N$ is isomorphic to the dihedral group $D_5$.

It is now to be shown that $G$ is an internal group direct product of $N$ and $\gen z$.
We have that $N \cap \gen z = \set e$.
From the Internal Direct Product Theorem, we need to prove only that $N$ is a normal subgroup of $G$.
We have that:

$\order N = 10$
where $\order N$ denotes the order of $N$.
We also have that $N$ is a subgroup of its normalizer $\map {N_G} N$.
Hence by Lagrange's Theorem:

$10 \divides \order {\map {N_G} N}$
where $\divides$ denotes divisibility.
Again by Lagrange's Theorem:

$\order {\map {N_G} N} \divides 30$

We have:














\(\ds x w x^{-1}\)

\(=\)







\(\ds x x^3 x^{-1}\)





Definition of $w$














\(\ds \)

\(=\)







\(\ds x^3\)




















\(\ds \)

\(=\)







\(\ds w\)









demonstrating that $x$ is conjugate to $w$.

Then:














\(\ds x y x^{-1}\)

\(=\)







\(\ds x y^{-1} x^{-1}\)





as $y^2 = e$














\(\ds \)

\(=\)







\(\ds y x^4 x^{-1}\)





from Group Presentation: $y x y^{-1} = x^4$














\(\ds \)

\(=\)







\(\ds y x^3\)




















\(\ds \)

\(=\)







\(\ds y w\)




















\(\ds \)

\(\in\)







\(\ds N\)









demonstrating that $x$ is conjugate to $y$.

Thus $x \in \map {N_G} N$ and so $\order {\map {N_G} N} > 10$.
As $10 \divides \order {\map {N_G} N}$ and $\order {\map {N_G} N} \divides 30$, it follows that:

$\map {N_G} N = G$
and so $N$ is normal in $G$.

Thus:

$N$ and $\gen z$ are normal in $G$
$N \cap \gen z = \set e$
$N \gen z = G$
and it therefore follows from the  Internal Direct Product Theorem that:

$G = C_3 \times D_5$
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $13$: Direct products: Theorem $13.8$



