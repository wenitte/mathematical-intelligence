# 

Source: https://proofwiki.org/wiki/Inverse_for_Real_Multiplication

Theorem
Each element $x$ of the set of non-zero real numbers $\R_{\ne 0}$ has an inverse element $\dfrac 1 x$ under the operation of real number multiplication:

$\forall x \in \R_{\ne 0}: \exists \dfrac 1 x \in \R_{\ne 0}: x \times \dfrac 1 x = 1 = \dfrac 1 x \times x$


Proof
By the definition of real number:

$\forall \epsilon \in \R_{>0}: \exists t \in \N: \forall i > t: \size {x_i - x} < \epsilon$

This article, or a section of it, needs explaining.In particular: In order for this line to make sense, it needs the definition (or at least the relevant part) extracted and posted here, so the context of the convergence condition is clear.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\epsilon = \size x$.
This is possible because $x \ne 0$, since it is required that $\epsilon > 0$.










\(\ds \exists t \in \N: \forall i > t: \, \)



\(\ds \size {x_i - x}\)

\(<\)







\(\ds \size x\)














\(\ds \leadsto \ \ \)

\(\ds \exists t \in \N: \forall i > t: \, \)



\(\ds \size {x_i - x}\)

\(<\)







\(\ds \size {x_i - x} + \size {x_i}\)





Triangle Inequality for Real Numbers








\(\ds \leadsto \ \ \)

\(\ds \exists t \in \N : \forall i > t: \, \)



\(\ds \size {x_i}\)

\(>\)







\(\ds 0\)










Construct a sequence $\sequence {y_n}$ as follows:

$y_n = \begin {cases} \dfrac 1 {x_n} & n > t \\ 0 & n \le t \end {cases}$

Let $u_n$ denote the Heaviside step function with parameter $t$.

We have:














\(\ds \eqclass {\sequence {x_n} } {} \times \eqclass {\sequence {y_n} } {}\)

\(=\)







\(\ds \eqclass {\sequence {x_n y_n} } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\sequence {u_n} } {}\)




















\(\ds \)

\(=\)







\(\ds 1\)









Similarly for $\eqclass {\sequence {y_n} } {} \times \eqclass {\sequence {x_n} } {}$.
So the inverse of $x \in \struct {\R_{\ne 0}, \times}$ is $x^{-1} = \dfrac 1 x = y$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses




