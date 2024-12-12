# 

Source: https://proofwiki.org/wiki/Existence_of_Support_Functional

Theorem
Let $\mathbb F \in \set {\R, \C}$. 
Let $\struct {X, \norm \cdot_X}$ be a normed vector space over $\mathbb F$. 
Let $\struct {X^\ast, \norm \cdot_{X^\ast} }$ be the normed dual space of $X$. 
Let $x \in X$. 

Then there exists $f \in X^\ast$ such that:

$(1): \quad$ $\norm f_{X^\ast} = 1$
$(2): \quad$ $\map f x = \norm x_X$.
That is: 

there exists a support functional at $x$.


Proof
Let: 

$U = \span {\set x}$
Then $U$ consists precisely of the $u \in X$ of the form: 

$u = \alpha x$
for $\alpha \in \mathbb F$.
From Linear Span is Linear Subspace, we have: 

$U$ is a linear subspace of $X$.
Let $\struct {U^\ast, \norm \cdot_{U^\ast} }$ be the normed dual space of $U$.
Define $f_0 : U \to \R$ by: 

$\map {f_0} {\alpha x} = \alpha \norm x_X$
for each $\alpha \in \mathbb F$.
In particular, we have: 

$\map {f_0} x = \norm x$
We show that this is a linear functional.
Let $u, v \in U$ and $k, l \in \mathbb F$. 
Then there exists $\alpha, \beta \in \mathbb F$ such that: 

$u = \alpha x$
and:

$v = \beta x$
We then have:














\(\ds \map {f_0} {k u + l v}\)

\(=\)







\(\ds \map {f_0} {k \alpha x + l \beta x}\)




















\(\ds \)

\(=\)







\(\ds \map {f_0} {\paren {k \alpha + l \beta} x}\)




















\(\ds \)

\(=\)







\(\ds \paren {k \alpha + l \beta} \norm x_X\)




















\(\ds \)

\(=\)







\(\ds k \alpha \norm x_X + l \beta \norm x_X\)




















\(\ds \)

\(=\)







\(\ds k \map {f_0} u + l \map {f_0} v\)









so $f_0$ is a linear functional.
Now we show that $f_0 \in X^\ast$ and: 

$\norm {f_0}_{U^\ast} = 1$
Let $u \in U$ and write: 

$u = \alpha x$
for $\alpha \in \mathbb F$. 
We then have:














\(\ds \size {\map {f_0} u}\)

\(=\)







\(\ds \size {\map {f_0} {\alpha x} }\)




















\(\ds \)

\(=\)







\(\ds \size {\alpha \norm x_X}\)




















\(\ds \)

\(=\)







\(\ds \size \alpha \norm x_X\)




















\(\ds \)

\(=\)







\(\ds \norm {\alpha x}_X\)





Definition of Norm














\(\ds \)

\(=\)







\(\ds \norm u_X\)









so we have that $f_0$ is bounded.
That is, $f \in U^\ast$.  
We then have: 

$\ds \sup_{\norm u_X = 1} \size {\map {f_0} u} = 1$
That is, from the definition of dual norm, we have: 

$\norm {f_0}_{U^\ast} = 1$
We apply: 

Hahn-Banach Theorem: Real Vector Space: Corollary 2 if $\mathbb F = \R$
Hahn-Banach Theorem: Complex Vector Space: Corollary if $\mathbb F = \C$
to find that there exists $f \in X^\ast$ such that:

$f$ extends $f_0$ to $X$
and:

$\ds \norm f_{X^\ast} = \norm {f_0}_{U^\ast} = 1$
Since $f$ extends $f_0$, we have: 

$\map f x = \map {f_0} x = \norm x$
So $f$ is the required linear functional.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $20.1$: Existence of a Support Functional




