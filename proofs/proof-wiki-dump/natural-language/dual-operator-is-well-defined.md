# 

Source: https://proofwiki.org/wiki/Dual_Operator_is_Well-Defined

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ and $Y$ be normed vector spaces over $\GF$.
Let $T : X \to Y$ be a bounded linear transformation.
Let $X^\ast$ and $Y^\ast$ be the normed duals of $X$ and $Y$ respectively.

Then the dual operator $T : Y^\ast \to X^\ast$ is well-defined.


Proof
We first show that $T^\ast$ is well-defined as a mapping $Y^\ast \to X^\ast$. 
That is, we want to show that $T^\ast f \in X^\ast$ for each $f \in Y^\ast$.
For $x, y \in X$ and $\lambda, \mu \in \GF$, we have: 














\(\ds \map {\paren {T^\ast f} } {\alpha x + \beta y}\)

\(=\)







\(\ds \map f {\map T {\alpha x + \beta y} }\)




















\(\ds \)

\(=\)







\(\ds \map f {\alpha T x + \beta T y}\)





Definition of Linear Transformation














\(\ds \)

\(=\)







\(\ds \alpha \map f {T x} + \beta \map f {T y}\)





Definition of Linear Functional














\(\ds \)

\(=\)







\(\ds \alpha \map {\paren {T^\ast f} } x + \beta \map {\paren {T^\ast f} } y\)









So $T^\ast f$ is a linear functional.
We show that $T^\ast f$ is bounded.
For each $x \in X$, we have:














\(\ds \cmod {\map {\paren {T^\ast f} } x}\)

\(=\)







\(\ds \cmod {\map f {T x} }\)




















\(\ds \)

\(\le\)







\(\ds \norm f_{Y^\ast} \norm {T x}_Y\)





Fundamental Property of Norm on Bounded Linear Functional














\(\ds \)

\(\le\)







\(\ds \norm f_{Y^\ast} \norm T_{\map B {X, Y} } \norm x_X\)





Fundamental Property of Norm on Bounded Linear Transformation



So $T^\ast f$ is bounded.
$\blacksquare$


Sources
2001: Marián Fabian, Petr Habala, Petr Hájek, Vicente Montesinos Santalucía, Jan Pelant and Václav Zizler: Functional Analysis and Infinite-Dimensional Geometry ... (previous) ... (next): Definition $2.27$




