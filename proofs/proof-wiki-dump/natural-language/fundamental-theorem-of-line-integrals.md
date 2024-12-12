# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Line_Integrals


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This article, or a section of it, needs explaining.In particular: Explicate domain of validity, etc. etc. etc.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Theorem
Let $\CC$ be a smooth curve given by the vector function $\map {\mathbf r} t$ for $a \le t \le b$.
Let $f$ be a differentiable function of two or three variables whose gradient vector $\nabla f$ is continuous on $\CC$.

Then:

$\ds \int_\CC \nabla f \cdot d \mathbf r = \map f {\map {\mathbf r} b} - \map f {\map {\mathbf r} a}$


Proof













\(\ds \int_\CC \nabla f \cdot \rd \mathbf r\)

\(=\)







\(\ds \int_a^b \nabla f \cdot \map {\mathbf r'} t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \frac {\partial f} {\partial x} \frac {\rd x} {\rd t} + \frac {\partial f} {\partial y} \frac {\rd y} {\rd t} + \frac {\partial f} {\partial z} \frac {\rd z} {\rd t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \frac \rd {\rd t} \map f {\map {\mathbf r} t} \rd t\)





Chain Rule for Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \map f {\map {\mathbf r} b} - \map f {\map {\mathbf r} a}\)





Fundamental Theorem of Calculus



$\blacksquare$





