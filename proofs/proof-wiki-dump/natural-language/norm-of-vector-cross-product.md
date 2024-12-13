# 

Source: https://proofwiki.org/wiki/Norm_of_Vector_Cross_Product

Theorem
Let $\mathbf a$ and $\mathbf b$ be vectors in the real Euclidean space $\R^3$.
Let $\times$ denote the vector cross product.

Then:

$\norm {\mathbf a \times \mathbf b} = \norm {\mathbf a} \norm {\mathbf b} \size {\sin \theta}$
where $\theta$ is the angle between $\mathbf a$ and $\mathbf b$, or an arbitrary number if $\mathbf a$ or $\mathbf b$ is the zero vector.


This article, or a section of it, needs explaining.In particular: link to $\norm {\mathbf a}$ etc. defining what it meansYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
Suppose either $\mathbf a$ or $\mathbf b$ is the zero vector.
Then by Norm Axiom $\text N 1$: Positive Definiteness:

$\norm {\mathbf a} = 0$
or:

$\norm {\mathbf b} = 0$

By calculation, it follows that $\mathbf a \times \mathbf b$ is also the zero vector.
Hence:

$\norm {\mathbf a \times \mathbf b} = 0$
and equality holds.

Now suppose that both $\mathbf a$ or $\mathbf b$ are non-zero vectors.
We have:














\(\ds \norm {\mathbf a \times \mathbf b}^2\)

\(=\)







\(\ds \norm {\mathbf a}^2 \norm {\mathbf b}^2 - \paren {\mathbf a \cdot \mathbf b}^2\)





Square of Norm of Vector Cross Product














\(\ds \)

\(=\)







\(\ds \norm {\mathbf a}^2 \norm {\mathbf b}^2 - \norm {\mathbf a}^2 \norm {\mathbf b}^2 \cos^2 \theta\)





Cosine Formula for Dot Product














\(\ds \)

\(=\)







\(\ds \norm {\mathbf a}^2 \norm {\mathbf b}^2 \paren{1 - \cos^2 \theta}\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf a}^2 \norm {\mathbf b}^2 \sin^2 \theta\)





Sum of Squares of Sine and Cosine








\(\ds \leadstoandfrom \ \ \)





\(\ds \norm {\mathbf a \times \mathbf b}\)

\(=\)







\(\ds \norm {\mathbf a} \norm {\mathbf b} \size{\sin \theta}\)





taking the square root of both sides of the equality



$\blacksquare$


Sources
1994: Robert Messer: Linear Algebra: Gateway to Mathematics: $\S 7.5$




