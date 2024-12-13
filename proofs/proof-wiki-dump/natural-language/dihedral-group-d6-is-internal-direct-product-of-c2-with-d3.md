# 

Source: https://proofwiki.org/wiki/Dihedral_Group_D6_is_Internal_Direct_Product_of_C2_with_D3

Theorem
The dihedral group $D_6$ is an internal direct product of the cyclic group $C_2$ of order $2$ and the dihedral group $D_3$:

$D_6 = C_2 \times D_3$


Proof
Let $G$ be defined by its group presentation:

$G = \gen {x, y: x^6 = e = y^2, y x y^{-1} = x^{-1} }$
or:

$G = \gen {x, y: x^6 = e = y^2, y x y^{-1} = x^5}$

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







\(\ds \paren {x^5}^3\)





from Group Presentation














\(\ds \)

\(=\)







\(\ds x^{15}\)





Powers of Group Elements: Product of Indices














\(\ds \)

\(=\)







\(\ds x^{12} x^3\)





Powers of Group Elements: Sum of Indices














\(\ds \)

\(=\)







\(\ds e \cdot x^3\)





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
It follows that $\gen z$ is a normal subgroup of order $2$.

Let $N$ be the subgroup of $G$ generated by $x^2$ and $y$.
Note that:














\(\ds y x^2 y^{-1}\)

\(=\)







\(\ds \paren {y x y^{-1} }^2\)





Power of Conjugate equals Conjugate of Power














\(\ds \)

\(=\)







\(\ds \paren {x^5}^2\)





from Group Presentation














\(\ds \)

\(=\)







\(\ds x^{10}\)





Powers of Group Elements: Product of Indices














\(\ds \)

\(=\)







\(\ds x^{-2}\)





as $x^{10} = e$



Hence the generator of $N$ satisfies:

$\paren{x^2}^3 = e = y^2$
and:

$y x^2 y^{-1} = x^{-2}$
Let $w := x^3$.
Then $N$ is generated by $w$ and $y$ where:

$w^3 = 1 = y^2$
and:

$w y = y w^2 = y w^{-1}$
and it is seen that $N$ is isomorphic to the dihedral group $D_3$.

It is now to be shown that $G$ is an internal group direct product of $N$ and $\gen z$.
We have that $N \cap \gen z = \set e$.
From the Internal Direct Product Theorem, we need to prove only that $N$ is a normal subgroup of $G$.
We have that:

$\order N = 6$
where $\order N$ denotes the order of $N$.
We also have that $N$ is a subgroup of its normalizer $\map {N_G} N$.
Hence by Lagrange's Theorem:

$6 \divides \order {\map {N_G} N}$
where $\divides$ denotes divisibility.
Again by Lagrange's Theorem:

$\order {\map {N_G} N} \divides 12$

We have:














\(\ds x w x^{-1}\)

\(=\)







\(\ds x x^2 x^{-1}\)





Definition of $w$














\(\ds \)

\(=\)







\(\ds x^2\)




















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







\(\ds y x^5 x^{-1}\)





from Group Presentation: $y x y^{-1} = x^5$














\(\ds \)

\(=\)







\(\ds y x^2\)




















\(\ds \)

\(=\)







\(\ds y w\)




















\(\ds \)

\(\in\)







\(\ds N\)









demonstrating that $x$ is conjugate to $y$.

Thus $x \in \map {N_G} N$ and so $\order {\map {N_G} N} > 6$.
As $6 \divides \order {\map {N_G} N}$ and $\order {\map {N_G} N} \divides 12$, it follows that:

$\map {N_G} N = G$
and so $N$ is normal in $G$.

Thus:

$N$ and $\gen z$ are normal in $G$
$N \cap \gen z = \set e$
$N \gen z = G$
and it therefore follows from the  Internal Direct Product Theorem that:

$G = C_2 \times D_3$
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $13$: Direct products: Exercise $3$



