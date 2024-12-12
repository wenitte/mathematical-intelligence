# 

Source: https://proofwiki.org/wiki/Existence_of_Distance_Functional



Theorem
Let $\mathbb F \in \set {\R, \C}$. 
Let $\struct {X, \norm \cdot_X}$ be a normed vector space over $\mathbb F$.
Let $\struct {X^\ast, \norm \cdot_{X^\ast} }$ be the normed dual space of $X$. 
Let $Y$ be a proper closed linear subspace of $X$. 
Let $x \in X \setminus Y$.
Let:

$d = \map {\operatorname {dist} } {x, Y}$
where $\map {\operatorname {dist} } {x, Y}$ denotes the distance between $x$ and $Y$.

Then there exists $f \in X^\ast$ such that:

$(1): \quad$ $\norm f_{X^\ast} = 1$
$(2): \quad$ $\map f y = 0$ for each $y \in Y$
$(3): \quad$ $\map f x = d$.
That is: 

there exists a distance functional for $x$.


Proof 1
Since $x \not \in Y$, we have: 

$d > 0$
from Point at Distance Zero from Closed Set is Element.
Let:

$X_0 = \map \span {Y \cup \set x}$
From Linear Span is Linear Subspace, we have: 

$X_0$ is a linear subspace of $X$.
Note that we can then write any $u \in X_0$ in the form: 

$u = y + \alpha x$
for $y \in Y$ and $\alpha \in \mathbb F$. 
We want to define a map in terms of this representation, so we show that this representation is unique. 
Let: 

$u = y_1 + \alpha_1 x = y_2 + \alpha_2 x$
Then: 

$\paren {\alpha_2 - \alpha_1} x = y_1 - y_2$
If $\alpha_1 = \alpha_2$, then we have $y_1 = y_2$ as required.
Aiming for a contradiction, suppose suppose that $\alpha_1 \ne \alpha_2$, then we would have: 

$\ds x = \frac 1 {\alpha_2 - \alpha_1} \paren {y_1 - y_2}$
and so $x \in Y$, from the definition of a linear subspace, contradiction. 
So, we must have $\alpha_1 = \alpha_2$ and $y_1 = y_2$, and so the representation is unique. 

Now, define $\phi : X_0 \to \mathbb F$ by: 

$\map \phi {y + \alpha x} = \alpha d$
for each $y \in Y$ and $\alpha \in \mathbb F$.
Clearly, we have: 

$\map \phi x = d$
and:

$\map \phi y = 0$ for all $y \in Y$.
We will show that $\phi$ is a bounded linear functional and apply the Hahn-Banach Theorem. 
Let $u_1, u_2 \in X_0$ and $\lambda, \mu \in \mathbb F$. 
Write: 

$u_1 = y_1 + \alpha_1 x$
and:

$u_2 = y_2 + \alpha_2 x$
for $y_1, y_2 \in Y$ and $\alpha_1, \alpha_2 \in \mathbb F$. 
We then have: 














\(\ds \map \phi {\lambda u_1 + \mu u_2}\)

\(=\)







\(\ds \map \phi {\lambda \paren {y_1 + \alpha_1 x} + \mu \paren {y_2 + \alpha_2 x} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\lambda y_1 + \lambda \alpha_1 x + \mu y_2 + \mu \alpha_2 x}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\paren {\lambda y_1 + \mu y_2} + \paren {\lambda \alpha_1 + \mu \alpha_2} x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda \alpha_1 + \mu \alpha_2} d\)




















\(\ds \)

\(=\)







\(\ds \lambda \alpha_1 d + \mu \alpha_2 d\)




















\(\ds \)

\(=\)







\(\ds \lambda \map \phi {y_1 + \alpha_1 x} + \mu \map \phi {y_2 + \alpha_2 x}\)









so $\phi$ is linear. 
We will now show that $\phi$ is bounded and that: 

$\norm \phi_{\paren {X_0}^\ast} = 1$
To do this, we will show that: 

$\norm \phi_{\paren {X_0}^\ast} \le 1$
and:

$\norm \phi_{\paren {X_0}^\ast} \ge 1 - \epsilon$
for each $0 < \epsilon < 1$.
Let $u \in X_0$ and again write $u = y + \alpha x$. 
If $\alpha = 0$, then $u \in Y$, and we have: 

$\cmod {\map \phi u} = 0 \le \norm u$
Now take $\alpha \ne 0$. 
Since $Y$ is a linear subspace, we have: 

$\ds -\frac y \alpha \in Y$
Recall that, by the definition of the distance between $x$ and $Y$, we have: 

$d = \inf \set {\norm {x - y} : y \in Y}$
So, we have: 

$\ds d \le \norm {x - \paren {-\frac y \alpha} } = \norm {x + \frac y \alpha}$
Then, we have: 














\(\ds \cmod {\map \phi u}\)

\(=\)







\(\ds \cmod {\map \phi {y + \alpha x} }\)




















\(\ds \)

\(=\)







\(\ds \cmod {\alpha d}\)




















\(\ds \)

\(=\)







\(\ds \cmod \alpha d\)




















\(\ds \)

\(\le\)







\(\ds \cmod \alpha \norm {x + \frac y \alpha}\)




















\(\ds \)

\(=\)







\(\ds \norm {y + \alpha x}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \norm u\)









So in any case, we have: 

$\map \phi u \le \norm u$
So $\phi$ is bounded and we have: 

$\norm \phi_{\paren {X_0}^\ast} \le 1$
from the definition of the dual norm.
Now fix $0 < \epsilon < 1$. 
Noting again that: 

$d = \inf \set {\norm {x - y} : y \in Y}$
for each $n \in \N$ we can pick $y_n \in Y$ such that: 

$\ds d \le \norm {x - y_n} \le d \paren {1 + \frac 1 n}$
That is: 

$\ds \frac n {n + 1} \norm {x - y_n} \le d$
We then have: 














\(\ds \cmod {\map \phi {-y_n + x} }\)

\(=\)







\(\ds d\)




















\(\ds \)

\(\ge\)







\(\ds \frac n {n + 1} \norm {x - y_n}\)









Now note that for $N \in \N$ with: 

$\ds N \ge \frac 1 \epsilon - 1$
We have: 

$\ds \frac 1 {N + 1} \le \epsilon$
and so: 

$\ds \frac N {N + 1} = 1 - \frac 1 {N + 1} \ge 1 - \epsilon$
Then we have: 

$\cmod {\map \phi {-y_N + x} } \ge \paren {1 - \epsilon} \norm {x - y_n}$
We then cannot have: 

$\norm \phi_{\paren {X_0}^\ast} < 1 - \epsilon$
so we have: 

$\norm \phi_{\paren {X_0}^\ast} \ge 1 - \epsilon$
Since $0 < \epsilon < 1$ was arbitrary, we have: 

$\norm \phi_{\paren {X_0}^\ast} \ge 1$
and so: 

$\norm \phi_{\paren {X_0}^\ast} = 1$

We apply: 

Hahn-Banach Theorem: Real Vector Space: Corollary 2 if $\mathbb F = \R$
Hahn-Banach Theorem: Complex Vector Space: Corollary if $\mathbb F = \C$
to find that there exists $f \in X^\ast$ such that:

$f$ extends $\phi$ to $X$
with: 

$\norm f_{X^\ast} = \norm \phi_{\paren {X_0}^\ast} = 1$
Since $f$ extends $\phi$, we have: 

$\map f x = \map \phi x = d$
and:

$\map f y = \map \phi y = 0$ for each $y \in Y$.
So $f$ is the required bounded linear functional.
$\blacksquare$


Proof 2
Consider the normed quotient vector space $X/Y$ with quotient mapping $\pi$.
From Kernel of Quotient Mapping, we have $\map \pi x \ne 0$. 
So, from Existence of Support Functional, there exists $f \in \paren {X/Y}^\ast$ such that: 

$\norm f_{\paren {X/Y}^\ast} = 1$
and:

$\map f {\map \pi x} = \norm {\map \pi x}_{X/Y}$
From the definition of the quotient norm, we have: 

$\norm {\map \pi x}_{X/Y} = \map {\operatorname {dist} } {x, Y}$
From Normed Dual Space of Normed Quotient Vector Space is Isometrically Isomorphic to Annihilator, $g = f \circ \pi \in X^\ast$ and: 

$\norm g_{X^\ast} = \norm f_{\paren {X/Y}^\ast} = 1$
with: 

$\map g x = \map {\operatorname {dist} } {x, Y}$
So $g$ is a linear functional satisfying our requirements.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $20.2$: The Distance Functional




