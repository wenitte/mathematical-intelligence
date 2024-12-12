# 

Source: https://proofwiki.org/wiki/Even_Functions_in_2-Lebesgue_Space_form_Closed_Subspace_of_2-Lebesgue_Space

Theorem
Let $\map {\LL^2} \R$ be the Lebesgue $2$-space.
For all $f \in \map {\LL^2} \R$ denote $\map {\check f} x = \map f {-x}$.
Let $Y = \set {f \in \map {\LL^2} \R : f = \check f}$ be the set of all even functions in $\map {\LL^2} \R$.

Then $Y$ is a closed subspace of $\map {\LL^2} \R$.


Proof
Let $R : \map {\LL^2} \R \to \map {\LL^2} \R$ be the reflection mapping such that:

$\map R f = \check f$
Then:








\(\ds \forall f, g \in \map {\LL^2} \R : \forall x \in \R : \ \ \)





\(\ds \map R {\map f x + \map g x}\)

\(=\)







\(\ds \map R {\map {\paren {f + g} } x}\)





Definition of Pointwise Addition of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \map {\paren {f + g} } {- x}\)




















\(\ds \)

\(=\)







\(\ds \map f {-x} + \map g {-x}\)





Definition of Pointwise Addition of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \map R {\map f x} + \map R {\map g x}\)









Furthermore:








\(\ds \forall f \in \map {\LL^2} \R : \forall x, \lambda \in \R : \ \ \)





\(\ds \map R {\lambda \map f x}\)

\(=\)







\(\ds \map R {\map {\paren {\lambda \cdot f} } x}\)





Definition of Pointwise Scalar Multiplication of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \map {\paren {\lambda \cdot f} } {-x}\)




















\(\ds \)

\(=\)







\(\ds \lambda \map f {-x}\)





Definition of Pointwise Scalar Multiplication of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \lambda  \map R {\map f x}\)









Thus, $R$ is a linear transformation:

$R \in \map L {\map {\LL^2} \R}$.
Moreover, because the reflection with respect to $y$-axis preserves the total area under the curve $\map f x$:

$\forall f \in \map {\LL^2} \R : \norm {f}_2 = \norm {\check f}_2$
By Continuity of Linear Transformation between Normed Vector Spaces, $R$ is continuous.

Let $I : \map {\LL^2} \R \to \map {\LL^2} \R$ be the identity map:

$\map I f = f$
By Identity Mapping on Normed Vector Space is Bounded Linear Operator, $I$ is a linear transformation:

$I \in \map L {\map {\LL^2} \R}$
Moreover:

$\forall f \in \map {\LL^2} \R : \norm {f}_2 = \norm {f}_2$
By Continuity of Linear Transformation between Normed Vector Spaces, $I$ is continuous.

By Linear Mappings between Vector Spaces form Vector Space, $I - R$ is a linear transformation:

$I - R \in \map L {\map {\LL^2} \R}$
By definition of pointwise addition of linear operators:

$\map {\paren {I - R} } f = f - \check f$
Then:














\(\ds \norm {\map {\paren {I - R} } f}_2\)

\(\le\)







\(\ds \norm {\map I f}_2 + \norm {\map R f}_2\)




















\(\ds \)

\(=\)







\(\ds \norm {f}_2 + \norm {\check f}_2\)




















\(\ds \)

\(=\)







\(\ds 2 \norm {f}_2\)









By Continuity of Linear Transformation between Normed Vector Spaces, $I - R$ is continuous.

Suppose $f$ is even.
Then:

$\check f = f$.
It follows that:

$\map {\paren {I - R} } f = 0$.
So the set of even functions is the kernel of $I - R$:

$Y = \map \ker {I - R}$
We have that $I - R$ is continuous.
By Singleton in Normed Vector Space is Closed, $\set 0$ is closed in $\map {\LL^2} \R$.
$Y$ is the inverse image of $\set 0$ under $I - R$.
By Mapping is Continuous iff Inverse Images of Closed Sets are Closed, $Y$ is closed.
$\blacksquare$


Further research is required in order to fill out the details.In particular: I need to state that p-Lebesgue space with p-norm is normed vector space, but elsewhere norm is replaced by semi-norm, so what is true?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by finding out more.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Research}} from the code.


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X,Y}$




