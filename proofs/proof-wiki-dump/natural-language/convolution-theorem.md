# 

Source: https://proofwiki.org/wiki/Convolution_Theorem



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $f: \R \to \GF$ and $g: \R \to \GF$ be functions.
Let their Laplace transforms $\laptrans {\map f t} = \map F s$ and $\laptrans {\map g t} = \map G s$ exist.

Then:

$\map F s \map G s = \ds \laptrans {\int_0^t \map f u \map g {t - u} \rd u}$


Proof 1













\(\ds \laptrans {\int_0^t \map f u \map g {t - u} \rd u}\)

\(=\)







\(\ds \int_{t \mathop = 0}^\infty e^{-s t} \paren {\int_{u \mathop = 0}^t \map f u \map g {t - u} \rd u} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_{t \mathop = 0}^\infty \int_{u \mathop = 0}^t e^{-s t} \map f u \map g {t - u} \rd u \rd t\)




















\(\ds \)

\(=\)







\(\ds \lim_{M \mathop \to \infty} \int_{t \mathop = 0}^M \int_{u \mathop = 0}^t e^{-s t} \map f u \map g {t - u} \rd u \rd t\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \lim_{M \mathop \to \infty} s_M\)









where $s_M$ is defined to be:

$\ds \int_{t \mathop = 0}^M \int_{u \mathop = 0}^t e^{-s t} \map f u \map g {t - u} \rd u \rd t$

The region in the plane over which $(1)$ is to be integrated is $\mathscr R_{t u}$ below:




Setting $t - u = v$, that is $t = u + v$, the shaded region above is transformed into the region $\mathscr R_{u v}$ the $u v$ plane:




Thus:














\(\ds s_M\)

\(=\)







\(\ds \iint_{\mathscr R_{t u} } e^{-s t} \map f u \map g {t - u} \rd u \rd t\)





from $(1)$ above




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \iint_{\mathscr R_{u v} } e^{-s \paren {u + v} } \map f u \map g v \size {\dfrac {\map \partial {u, t} } {\map \partial {u, v} } } \rd u \rd v\)





Change of Variables Theorem (Multivariable Calculus)



where $\dfrac {\map \partial {u, t} } {\map \partial {u, v} }$ is the Jacobian of the transformation:














\(\ds J\)

\(=\)







\(\ds \dfrac {\map \partial {u, t} } {\map \partial {u, v} }\)




















\(\ds \)

\(=\)







\(\ds \begin{vmatrix} \dfrac {\partial u} {\partial u} & \dfrac {\partial u} {\partial v} \\ \dfrac {\partial t} {\partial u} & \dfrac {\partial t} {\partial v} \end{vmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{vmatrix} 1 & 0 \\ 1 & 1 \end{vmatrix}\)










Thus the right hand side of $(2)$ is:

$(3): \quad \ds s_M = \int_{v \mathop = 0}^M \int_{u \mathop = 0}^{M - v} e^{-s \paren {u + v} } \map f u \map g v \rd u \rd v$

Let $\map K {u, v}$ be the function defined as:

$\map K {u, v} = \begin{cases} e^{-s \paren {u + v} } \map f u \map g v & : u + v \le M \\ 0 & : u + v > M \end{cases}$

This function is defined over the square region in the diagram below:




but is zero over the lighter shaded portion.

Now we can write $(3)$ as:














\(\ds s_M\)

\(=\)







\(\ds \int_{v \mathop = 0}^M \int_{u \mathop = 0}^M \map K {u, v} \rd u \rd v\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{M \mathop \to \infty} s_M\)

\(=\)







\(\ds \int_{v \mathop = 0}^\infty \int_{u \mathop = 0}^\infty \map K {u, v} \rd u \rd v\)




















\(\ds \)

\(=\)







\(\ds \int_{v \mathop = 0}^\infty \int_{u \mathop = 0}^\infty e^{-s \paren {u + v} } \map f u \map g v \rd u \rd v\)




















\(\ds \)

\(=\)







\(\ds \paren {\int_{v \mathop = 0}^\infty e^{-s u} \map f u \rd u} \paren {\int_{v \mathop = 0}^\infty e^{-s v} \map g u \rd v}\)




















\(\ds \)

\(=\)







\(\ds \map F s \map G s\)









Hence the result.
$\blacksquare$


Proof 2
Convolution Theorem/Proof 2

Also presented as
Some sources give this as:

$\invlaptrans {\map F s \map G s} = \ds \int_0^t \map f u \map g {t - u} \rd u$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of General Properties of Laplace Transforms: $32.15$




