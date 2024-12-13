# 

Source: https://proofwiki.org/wiki/Riesz_Representation_Theorem_(Hilbert_Spaces)


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $H$ be a Hilbert space.
Let $L$ be a bounded linear functional on $H$.

Then there is a unique $h_0 \in H$ such that:

$\forall h \in H: L h = \innerprod h {h_0}$


Proof
If $L \equiv 0$ identically, then $L h = 0 = \innerprod h 0$, and the theorem holds.
By Kernel of Bounded Linear Transformation is Closed Linear Subspace, $M := \ker L$ is a closed linear subspace of $H$.
Then we can decompose $H$ as a direct sum:

$H \cong M \oplus M^\perp$
As $L \not \equiv 0$:

$M^\perp \ne \set 0$

Choose a $z \in M^\perp$ with norm $1$.
By linearity of $L$, for any $h \in H$:














\(\ds L \paren {z L h - h L z}\)

\(=\)







\(\ds L z L h - L h L z\)




















\(\ds \)

\(=\)







\(\ds 0\)









So:

$z L h - h L z \in \ker L = M$
Then:














\(\ds L h\)

\(=\)







\(\ds L h \innerprod z z\)





as $\norm z = 1$














\(\ds \)

\(=\)







\(\ds \innerprod {z L h} z\)





linearity in the first argument














\(\ds \)

\(=\)







\(\ds \innerprod {z L h - h L z + h L z} z\)





adding and subtracting $h L z$ in the first argument














\(\ds \)

\(=\)







\(\ds \innerprod {z L h - h L z} z + \innerprod {h L z} z\)





linearity in the first argument














\(\ds \)

\(=\)







\(\ds \innerprod {h L z} z\)





$z L h - h L z \in M, z \in M^\perp$














\(\ds \)

\(=\)







\(\ds \innerprod h {z \paren {L z}^*}\)





conjugate symmetry



Thus $L h = \innerprod h {h_0}$ for $h_0 = z (Lz)^*$.

To show uniqueness, assume $h_0$ and $h_1$ both satisfy the above equation for all $h \in H$:














\(\ds \innerprod h {h_0}\)

\(=\)







\(\ds \innerprod h {h_1}\)














\(\ds \leadsto \ \ \)





\(\ds \innerprod h {h_0} - \innerprod h {h_1}\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds \innerprod h {h_0 - h_1}\)





additivity in the second argument



The result follows from Setting $h = h_0 - h_1$ and invoking the positive definiteness of the inner product.
$\blacksquare$


Examples
$L^2$ Space
Let $\struct{ X, \Sigma, \mu }$ be a measure space.
Let $\map {L^2} \mu$ be the associated $L^2$ space.
Let $F: \map {L^2} \mu \to \GF$ be a bounded linear functional.

Then there exists a unique $f_0 \in \map {L^2} \mu$ such that:

$\ds \forall f \in \map {L^2} \mu: \map F f = \int f \overline{f_0} \rd \mu$


Space of Square Summable Mappings
Let $\map {\ell^2} \N$ be the space of square summable mappings on $\N$.
Let $N \in \N$.
Let $L_N: \map {\ell^2} \N \to \GF$ be defined by:

$\map {L_N} {\sequence{ a_n } } := a_N$
Let $\delta_N \in \map {\ell^2} \N$ be given by:

$\forall n \in \N: \paren{ \delta_N }_n = \begin{cases}
1 & n = N \\
0 & n \ne N
\end{cases}$

Then for all $a \in \map {\ell^2} \N$:

$\map {L_N} a = \innerprod a {\delta_N}$


Source of Name
This entry was named for Frigyes Riesz.


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 3.$ The Riesz Representation Theorem: $3.4$ The Riesz Representation Theorem




