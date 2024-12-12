# 

Source: https://proofwiki.org/wiki/Dx_-_k_is_Hypoelliptic

Theorem
Let $f \in \map {C^\infty} \R$ be a smooth real function.
Let $T \in \map {\DD'} \R$ be a distribution.
Let $T_f$ be the distribution associated with $f$.
Let $k \in \R$.
Suppose in the distributional sense it holds that:

$\paren {\dfrac \d {\d x} - k} T = T_f \quad (1)$

Then there is a $c \in \R$ such that:

$T = T_{F + c \map \exp {k x} }$
where $F \in \map {C^\infty} \R$ is a solution to:


This article, or a section of it, needs explaining.In particular: General or particular? From its form it looks the latter. The source does not discuss this, but $F$ looks like a particular solution.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\paren {\dfrac \d {\d x} - k} F = f$
In other words, $\dfrac \d {\d x} - k$ is a hypoelliptic operator.


Proof
By assumption $f \in \map {C^\infty} \R$.
By Solution to Linear First Order ODE with Constant Coefficients:

$\exists F \in \map {C^\infty} \R : \paren {\dfrac \d {\d x} - k} F = f$
By Differentiable Function as Distribution and multiplication of distribution by a smooth function:

$\exists F \in \map {C^\infty} \R : \paren {\dfrac \d {\d x} - k} T_F = T_f \quad (2)$
Subtract $(2)$ from $(1)$:














\(\ds \paren {\dfrac \d {\d x} - k} \paren {T - T_F}\)

\(=\)







\(\ds T_f - T_f\)




















\(\ds \)

\(=\)







\(\ds \mathbf 0\)









where $\mathbf 0$ is the zero distribution.
This is solved by:

$T - T_F = T_{c \map \exp {k x} }$
or:

$T = T_{F + c \map \exp {k x} }$
where $c \in \C$.
Finally:

$\ds \paren {\dfrac \d {\d x} - k} \paren {F + c \map \exp {k x} } = f$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.4$: A glimpse of distribution theory. Multiplication by $C^\infty$ functions




