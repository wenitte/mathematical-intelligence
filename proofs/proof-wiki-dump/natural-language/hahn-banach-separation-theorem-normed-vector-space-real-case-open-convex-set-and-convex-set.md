# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Separation_Theorem/Normed_Vector_Space/Real_Case/Open_Convex_Set_and_Convex_Set

Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\R$.
Let $\struct {X^\ast, \norm \cdot_{X^\ast} }$ be the normed dual space of $\struct {X, \norm \cdot}$.
Let $A \subseteq X$ be an open convex set.
Let $B \subseteq X$ be a convex set disjoint from $A$. 

Then there exists $f \in X^\ast$ and $c \in \R$ such that: 

$A \subseteq \set {x \in X : \map f x < c}$
and:

$B \subseteq \set {x \in X : \map f x \ge c}$
That is: 

there exists $f \in X^\ast$ and $c \in \R$ such that $\map f a < c \le \map f b$ for each $a \in A$ and $b \in B$.


Proof
Let $a_0 \in A$ and $b_0 \in B$.
Let:

$v_0 = b_0 - a_0$
Let:

$C = v_0 + A - B = \set {v_0 + a - b : a \in A, \, b \in B}$
Lemma
$C$ is open, convex and contains $0$.
$\Box$

Note that: 

$v_0 \in C$
if and only if:

$v_0 + a - b = v_0$
for some $a \in A$ and $b \in B$.
That is: 

$a = b$
So:

$v_0 \in C$
if and only if:

$A \cap B \ne \O$
Since $A$ and $B$ are disjoint, we therefore have:

$v_0 \not \in C$
Define: 

$X_0 = \span \set {v_0}$
Then each $x_0 \in X_0$, there exists a unique $t \in \R$ such that: 

$x_0 = t v_0$
From Linear Span is Linear Subspace, we have: 

$X_0$ is a linear subspace of $X$.
Define $f_0 : X_0 \to \R$ by: 

$\map {f_0} {t v_0} = t$
Let $p_C$ be the Minkowski functional of $C$. 
From Minkowski Functional of Open Convex Set in Normed Vector Space recovers Set, we have:

$\map {p_C} {v_0} \ge 1$
From Minkowski Functional of Open Convex Set in Normed Vector Space is Sublinear Functional, we have: 

$p_C$ is a Sublinear functional.
With view to apply the Hahn-Banach Theorem: Real Vector Space, we now show that: 

$\map {f_0} {x_0} \le \map {p_C} {x_0}$
for each $x_0 \in X_0$. 
For $t \ge 0$, we have:














\(\ds \map {f_0} {t v_0}\)

\(=\)







\(\ds t\)




















\(\ds \)

\(\le\)







\(\ds t \map {p_C} {v_0}\)




















\(\ds \)

\(=\)







\(\ds \map {p_C} {t v_0}\)





Definition of Sublinear Functional



For $t < 0$, we have:














\(\ds \map {f_0} {t v_0}\)

\(=\)







\(\ds t\)




















\(\ds \)

\(<\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds \map {p_C} {t v_0}\)





Definition of Minkowski Functional in Normed Vector Space



So:

$\map {f_0} {x_0} \le \map {p_C} {x_0}$
for each $x_0 \in X_0$. 
From Hahn-Banach Theorem: Real Vector Space, there exists a linear functional $f : X \to \R$ extending $f_0$ such that:

$\map f x \le \map {p_C} x$
for each $x \in X$. 
We now check that $f \in X^\ast$. 
That is, that $f$ is bounded.
From Minkowski Functional of Open Convex Set in Normed Vector Space is Bounded, there exists $c > 0$ such that: 

$\map {p_C} x \le c \norm x$
for each $x \in X$.
So we have: 

$\map f x \le c \norm x$
We then have: 














\(\ds -\map f x\)

\(=\)







\(\ds \map f x\)





Definition of Linear Functional














\(\ds \)

\(\le\)







\(\ds c \norm {-x}\)




















\(\ds \)

\(=\)







\(\ds c \norm x\)





Norm Axiom $\text N 2$: Positive Homogeneity



So we have: 

$\size {\map f x} \le c \norm x$
for each $x \in X$.
So:

$f \in X^\ast$

We now show that there exists $c \in \R$ such that: 

$\map f a \le c \le \map f b$
for each $a \in A$ and $b \in B$.
Let $a \in A$ and $b \in B$.
Then:














\(\ds \map f {v_0 + a - b}\)

\(=\)







\(\ds \map f {v_0} + \map f a - \map f b\)





Definition of Linear Functional














\(\ds \)

\(=\)







\(\ds \map {f_0} {v_0} + \map f a - \map f b\)





since $f$ extends $f_0$














\(\ds \)

\(=\)







\(\ds 1 + \map f a - \map f b\)









We have that: 

$v_0 + a - b \in C$
So, from Minkowski Functional of Open Convex Set in Normed Vector Space recovers Set, we have: 

$\map {p_C} {v_0 + a - b} < 1$
so:














\(\ds \map f {v_0 + a - b}\)

\(\le\)







\(\ds \map {p_C} {v_0 + a - b}\)




















\(\ds \)

\(<\)







\(\ds 1\)









So we have: 

$1 + \map f a - \map f b < 1$
So:

$\map f a < \map f b$
for each $a \in A$ and $b \in B$.
So for any fixed $a_0 \in A$, we have: 

$\map f {a_0} < \map f b$
So: 

$\set {b \in B : \map f b}$ is bounded below.
So, from the Continuum Property, we have that: 

$\inf \set {b \in B : \map f b}$
exists.
If:

$c = \inf \set {b \in B : \map f b}$
Then: 

$\map f a \le c \le \map f b$
for each $a \in A$ and $b \in B$. 
It remains to show that in fact: 

$\map f a < c$
suppose that there existed $a' \in A$ with: 

$\map f {a'} = c$
Since $A$ is open, there exists $\epsilon > 0$ such that for all $a \in A$ with: 

$\norm {a - a'} < \epsilon$
we have $a \in A$. 
Note that since $v_0 \not \in C$, we have $v_0 \ne 0$.
In particular, $\norm {v_0} \ne 0$. 
So, we have: 

$\ds a' + \frac \epsilon {\norm {v_0} } v_0 \in A$
We then have: 














\(\ds \map f {a' + \frac \epsilon {\norm {v_0} } v_0}\)

\(=\)







\(\ds \map f {a'} + \map f {\frac \epsilon {\norm {v_0} } v_0}\)





Definition of Linear Functional














\(\ds \)

\(=\)







\(\ds c + \map {f_0} {\frac \epsilon {\norm {v_0} } v_0}\)





since $f$ extends $f_0$














\(\ds \)

\(=\)







\(\ds c + \frac \epsilon {\norm {v_0} }\)




















\(\ds \)

\(>\)







\(\ds c\)









which contradicts $\map f a \le c$ for each $a \in A$. 
So, we have: 

$\map f a < c \le \map f b$
for each $a \in A$ and $b \in B$.
$\blacksquare$





