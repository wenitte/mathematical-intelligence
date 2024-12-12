# 

Source: https://proofwiki.org/wiki/Distributional_Solution_to_y%27_-_k_y_%3D_0

Theorem
Let $f \in \map {C^1} \R$ be a continuously differentiable function.
Let $T \in \map {\DD'} \R$ be a distribution.
Let $T_f$ be a distribution associated with $f$.
Let $\mathbf 0 \in \map {\DD'} \R$ be the zero distribution.
Let $T$ be a distributional solution to the following distributional differential equation:

$\paren {\dfrac \d {\d x} - k} T = \mathbf 0$

This article, or a section of it, needs explaining.In particular: Unless a "distributional solution" actually is the same thing as a "weak solution" (I believe not), then we need the former to have its own page, where it is specifically defined. At the very least it should be a redirect.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Then $T = T_f$ where $f$ is a classical solution to the ordinary differential equation:


This article, or a section of it, needs explaining.In particular: General or particular? From its form I suspect the latter. If it's actually "technically neither" because of complications that I haven't perceived, then we need to set up a page for "classical solution", or we are in serious danger of further muddying the already rather turbid water around this area. In any case, the exact nature of $f$ really needs to be explained further. The source does not discuss this, but the classical solution $f$ is the solution with zero RHS, so I guess general.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\paren {\dfrac \d {\d x} - k} f = 0$


Proof
In the distributional sense we have:














\(\ds \paren {\map \exp {- k x} T}'\)

\(=\)







\(\ds -\map \exp {-k x} T + \map \exp {-k x} T'\)





Product Rule for Distributional Derivatives of Distributions multiplied by Smooth Functions














\(\ds \)

\(=\)







\(\ds \map \exp {-k x} \paren {-k T + T'}\)




















\(\ds \)

\(=\)







\(\ds \map \exp {-k x} \paren {\dfrac \d {\d x} - k} T\)




















\(\ds \)

\(=\)







\(\ds \mathbf 0\)









By Vanishing Distributional Derivative of Distribution implies Distribution is Constant:

$\exists c \in \C : \map \exp {-k x} T = T_c$
In other words:














\(\ds T\)

\(=\)







\(\ds \map \exp {k x} T_c\)




















\(\ds \)

\(=\)







\(\ds T_{c \map \exp {k x} }\)









If $f = c \map \exp {k x}$, then:

$\paren {\dfrac \d {\d x} - k} f = 0$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.4$: A glimpse of distribution theory. Multiplication by $C^\infty$ functions




