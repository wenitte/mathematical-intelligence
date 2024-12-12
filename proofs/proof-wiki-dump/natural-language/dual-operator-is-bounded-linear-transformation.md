# 

Source: https://proofwiki.org/wiki/Dual_Operator_is_Bounded_Linear_Transformation

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ and $Y$ be normed vector spaces over $\GF$.
Let $T : X \to Y$ be a bounded linear transformation.
Let $X^\ast$ and $Y^\ast$ be the normed duals of $X$ and $Y$ respectively.

Then the dual operator $T^\ast : Y^\ast \to X^\ast$ is a bounded linear transformation.
Further: 

$\norm {T^\ast}_{\map B {Y^\ast, X^\ast} } = \norm T_{\map B {X, Y} }$


Proof
Let $f, g \in Y^\ast$ and $\alpha, \beta \in \GF$.
Then we have, for each $x \in X$: 














\(\ds \map {\paren {\map {T^\ast} {\alpha f + \beta g} } } x\)

\(=\)







\(\ds \map {\paren {\alpha f + \beta g} } {T x}\)




















\(\ds \)

\(=\)







\(\ds \alpha \map f {T x} + \beta \map g {T x}\)




















\(\ds \)

\(=\)







\(\ds \alpha \map {\paren {T^\ast f} } x + \beta \map {\paren {T^\ast g} } x\)









So we have: 

$\map {T^\ast} {\alpha f + \beta g} = \alpha T^\ast f + \beta T^\ast g$
In Dual Operator is Well-Defined, it was shown that for each $f \in Y^\ast$ and $x \in X$ we have: 

$\cmod {\map {\paren {T^\ast f} } x} \le \norm f_{Y^\ast} \norm T_{\map B {X, Y} } \norm x_X$
So we have: 

$\norm {T^\ast f}_{X^\ast} \le \norm T_{\map B {X, Y} } \norm f_{Y^\ast}$
for $f \in Y^\ast$. 
Hence: 

$\norm {T^\ast}_{\map B {Y^\ast, X^\ast} } \le \norm T_{\map B {X, Y} }$
We finally need to show that $\norm {T^\ast}_{\map B {Y^\ast, X^\ast} } = \norm T_{\map B {X, Y} }$.
Pick a sequence $\sequence {x_n}_{n \in \N}$ such that $\norm {x_n}_X = 1$ and: 

$\ds \norm T_{\map B {X, Y} } - \frac 1 n \le \norm {T x_n}_Y \le \norm T_{\map B {X, Y} }$
so that: 

$\norm {T x_n}_Y \to \norm T_{\map B {X, Y} }$
For each $n \in \N$, let $f_n \in Y^\ast$ be a support functional for $T x_n$.
Then we have: 

$\map {\paren {T^\ast f_n} } {x_n} = \map {f_n} {T x_n} = \norm {T x_n}_Y$
so that: 

$\ds \cmod {\map {\paren {T^\ast f_n} } {x_n} } \ge \paren {\norm T_{\map B {X, Y} } - \frac 1 n} \norm {x_n}_X$
We therefore have: 

$\ds \paren {\norm T_{\map B {X, Y} } - \frac 1 n} \norm {f_n}_{Y^\ast} \le \norm {T^\ast f_n}_{X^\ast}$
so that: 

$\ds \norm {T^\ast}_{\map B {Y^\ast, X^\ast} } \ge \norm T_{\map B {X, Y} } - \frac 1 n$
for each $n \in \N$.
Then: 

$\norm {T^\ast}_{\map B {Y^\ast, X^\ast} } \ge \norm T_{\map B {X, Y} }$
With that, we obtain: 

$\norm {T^\ast}_{\map B {Y^\ast, X^\ast} } = \norm T_{\map B {X, Y} }$
$\blacksquare$


Sources
2001: Marián Fabian, Petr Habala, Petr Hájek, Vicente Montesinos Santalucía, Jan Pelant and Václav Zizler: Functional Analysis and Infinite-Dimensional Geometry ... (previous) ... (next): Proposition $2.28$




