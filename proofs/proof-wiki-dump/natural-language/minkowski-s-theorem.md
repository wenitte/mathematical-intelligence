# 

Source: https://proofwiki.org/wiki/Minkowski%27s_Theorem


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $L$ be a lattice in $\R^n$.
Let $d$ be the covolume of $L$.
Let $\mu$ be a translation invariant measure on $\R^n$
Let $S$ be a convex subset of $\R^n$ that is symmetric about the origin, i.e. such that:

$\forall p \in S : -p \in S$
Let the volume of $S$ be greater than $2^n d$.

Then $S$ contains a non-zero point of $L$.


Proof
Let $D$ be any fundamental parallelepiped.
Then by definition:

$\ds \R^n = \coprod \limits_{\vec x \mathop \in L} \paren {D + \vec x}$
where:

$A + \vec x := \set {\vec a + \vec x : \vec a \in A}$

By Intersection with Subset is Subset:

$\dfrac 1 2 S \cap \R^n = \dfrac 1 2 S \iff \dfrac 1 2 S \subseteq \R^n$
Hence by Intersection Distributes over Union:

$(1): \quad \ds \frac 1 2 S = \coprod \limits_{\vec x \mathop \in L} \paren {\frac 1 2 S \cap \paren {D + \vec x} }$
where:

$\dfrac 1 2 S := \set {\dfrac 1 2 \vec s: \vec s \in S}$

This article, or a section of it, needs explaining.In particular: The translation and scaling operations need to link to their definitions on ProofWikiYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Consider the intersection of $D + \vec x$ and $\dfrac 1 2 S$.
This is obtained by adding $\vec x$ to every point in $D$ then taking those points that are also in $S$.
However, this is the same as subtracting $\vec x$ from all elements of $\dfrac 1 2 S$, taking the elements that are also in $D$ and adding $\vec x$ to restore them to their original position.
Thus:

$\ds \frac 1 2 S \cap \paren {D + \vec x} = \paren {\paren {\frac 1 2 S - \vec x} \cap D} + \vec x$

Since, by hypothesis, $\mu$ is translation invariant:




\(\text {(2)}: \quad\)









\(\ds \map \mu {\frac 1 2 S \cap \paren {D + \vec x} }\)

\(=\)







\(\ds \map \mu {\paren {\paren {\frac 1 2 S - \vec x} \cap D} + \vec x}\)




















\(\ds \)

\(=\)







\(\ds \map \mu {\paren {\frac 1 2 S - \vec x} \cap D}\)










Aiming for a contradiction, suppose the sets $\ds \set {\frac 1 2 S - \vec x: \vec x \in L}$ are pairwise disjoint.
That is:

$\ds \forall \vec x, \vec y \in L: \paren {\frac 1 2 S - \vec x} \cap \paren {\frac 1 2 S - \vec y} \ne \O \iff \vec x \ne \vec y$
Then:














\(\ds \map \mu S\)

\(=\)







\(\ds 2^n \map \mu {\frac 1 2 S}\)





Dilation of Lebesgue-Measurable Set is Lebesgue-Measurable














\(\ds \)

\(=\)







\(\ds 2^n \map \mu {\coprod \limits_{\vec x \mathop \in L} \paren {\frac 1 2 S \cap \paren {D + \vec x} } }\)





from $(1)$ above














\(\ds \)

\(=\)







\(\ds 2^n \map \mu {\coprod \limits_{\vec x \mathop \in L} \paren {\paren {\frac 1 2 S - \vec x} \cap D} }\)





from $(2)$ above














\(\ds \)

\(=\)







\(\ds 2^n \sum \limits_{\vec x \mathop \in L} \map \mu {\paren {\frac 1 2 S - \vec x} \cap D}\)





Definition of Measure














\(\ds \)

\(\le\)







\(\ds 2^n \map \mu D\)





Measure is Countably Subadditive














\(\ds \)

\(=\)







\(\ds 2^n d\)









which is a contradiction.
So $\ds \set {\frac 1 2 S - \vec x: \vec x \in L}$ are not pairwise disjoint.

This means:

$\ds \exists \vec x, \vec y \in L: \vec x \ne \vec y, \paren {\frac 1 2 S - \vec x} \cap \paren {\frac 1 2 S - \vec y} \ne \O$
Therefore there exist $\vec {p_1}, \vec {p_2} \in L$ such that $\vec {p_1} \ne \vec {p_2}$ and:

$\ds \frac 1 2 \vec {p_1} - \vec x = \frac 1 2 \vec {p_2} -  \vec y$
and therefore:

$\ds \frac 1 2 \paren {\vec {p_1} - \vec {p_2} } = \vec x - \vec y \in L$
Since $S$ is convex, we have that:

$\dfrac 1 2 \paren {\vec {p_1} - \vec {p_2} } \in S$
As $\vec {p_1} \ne \vec {p_2}$ by definition:

$\dfrac 1 2 \paren {\vec {p_1} - \vec {p_2} } \ne \vec 0$
Hence the result.
$\blacksquare$


Source of Name
This entry was named for Hermann Minkowski.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Minkowski's theorem on lattice points




