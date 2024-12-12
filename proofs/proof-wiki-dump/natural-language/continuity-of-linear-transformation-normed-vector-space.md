# 

Source: https://proofwiki.org/wiki/Continuity_of_Linear_Transformation/Normed_Vector_Space


This article needs to be tidied.In particular: sort out links mainlyPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $X, Y$ be a normed vector spaces over $\R$.
Let $T : X \to Y$ be a linear mapping.

The following statements are equivalent::

$(1): \quad T$ is continuous over $X$
$(2): \quad T$ is continuous at $\mathbf 0$
$(3): \quad \exists M > 0 : \forall x \in X : \norm {\map T x}_Y \le M \norm x_X$


Proof
$\paren 1 \implies \paren 2$
Let $T$ be continuous on $X$.
$X$ is a vector space.
By definition, $\exists \mathbf 0 \in X$.
Hence, $T$ is continuous at $\mathbf 0$.
$\Box$


$\paren 2 \implies \paren 3$
Let $T$ be continuous at $\mathbf 0$.
Let $\epsilon := 1 > 0$.
By definition of continuity:

$\exists \delta > 0: \forall x \in X : \norm {x - \mathbf 0} = \norm x < \delta \implies \norm {\map T x - \map T {\mathbf 0} } = \norm {\map T x} < 1$
Let $y := \dfrac \delta {2 \norm x} x$.
By definition of norm:

$\norm x \in \R$
Hence:

$\dfrac \delta {2 \norm x} \in \R$
Because $X$ is a vector space:

$y \in X$
Furthermore:














\(\ds \norm y\)

\(=\)







\(\ds \norm {\frac \delta {2 \norm x} x}\)




















\(\ds \)

\(=\)







\(\ds \frac \delta {2 \norm x} \norm x\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \frac \delta 2\)




















\(\ds \)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \norm {\map T y}\)

\(<\)







\(\ds 1\)










Then:














\(\ds \norm {\map T y}\)

\(=\)







\(\ds \norm {\map T {\frac \delta {2 \norm x} x} }\)




















\(\ds \)

\(=\)







\(\ds \norm {\frac \delta {2 \norm x} \map T x}\)





Definition of Linear Mapping














\(\ds \)

\(=\)







\(\ds \frac \delta {2 \norm x} \norm {\map T x}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(<\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \norm {\map T x}\)

\(<\)







\(\ds \frac 2 \delta \norm x\)










Suppose $x = \mathbf 0$.
Then:














\(\ds \norm {\map T {\mathbf 0} }\)

\(=\)







\(\ds \norm {\mathbf 0}\)





Linear Transformation Maps Zero Vector to Zero Vector














\(\ds \)

\(=\)







\(\ds 0\)





Norm Axiom $\text N 1$: Positive Definiteness














\(\ds \)

\(=\)







\(\ds \frac 2 \delta \norm {\mathbf 0}\)










All together:

$\norm {\map T x} \le M \norm x$
where $M = \dfrac 2 \delta$.
$\Box$


$\paren 3 \implies \paren 1$
Let $M > 0$ be such that:

$\forall x \in X: \norm {\map T x} \le M \norm x$
Let $x_0 \in X$.
Let $\epsilon > 0$.
Let $\delta := \dfrac \epsilon M > 0$.
Because $X$ is a vector space:

$x - x_0 \in X$
Suppose:

$\forall x \in X : \norm {x - x_0} < \delta$
Then:














\(\ds \norm {\map T x - \map T {x_0} }\)

\(=\)







\(\ds \norm {\map T {x - x_0} }\)





Definition of Linear Mapping














\(\ds \)

\(\le\)







\(\ds M \norm {x - x_0}\)




















\(\ds \)

\(<\)







\(\ds M \delta\)




















\(\ds \)

\(=\)







\(\ds M \frac \epsilon M\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









By definition, $T$ is continuous at $x_0$.
But $x_0$ was arbitrary.
Hence, $T$ is continuous on $X$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X,Y}$




