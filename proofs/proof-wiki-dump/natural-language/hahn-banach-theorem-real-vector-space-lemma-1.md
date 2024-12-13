# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Theorem/Real_Vector_Space/Lemma_1

Lemma
Let $X$ be a vector space over $\R$. 
Let $p : X \to \R$ be a sublinear functional.
Let $G$ be a proper linear subspace of $X$. 
Let $g_0 : G \to \R$ be a linear functional such that: 

$\map {g_0} x \le \map p x$ for each $x \in G$.

Then there exists a linear subspace $G'$ of $X$ and a linear functional $g : G' \to \R$ such that: 

$g$ extends $g_0$ with $\map g x \le \map p x$ for each $x \in G'$.


Proof
Since $G \ne X$, $X \setminus G$ is non-empty. 
Let $z \in X \setminus G$. 
Set: 

$G' = \map \span {G \cup \set z}$
From Linear Span is Linear Subspace, we have: 

$G'$ is a linear subspace of $X$.
Then, for all $x \in G'$, there exists unique $x_0 \in G$ and $t \in \R$ such that: 

$x = x_0 + t z$
To show uniqueness, suppose that $x_0' \in G$ and $t' \in \R$ had:

$x = x_0' + t' z$
then: 

$0 = \paren {x_0' - x_0} + \paren {t' - t} z$
So that: 

$x_0 - x_0' = \paren {t' - t} z$
$t' \ne t$, then we would have: 

$\ds z = \frac 1 {t' - t} \paren {x_0 - x_0'}$
Since $G$ is a linear subspace, we would then have: 

$\ds \frac 1 {t' - t} \paren {x_0 - x_0'} \in G$
and so $z \in G$, so we have a contradiction and so $t' = t$.
We then obtain $x_0 = x_0'$ hence the desired uniqueness.

We look to extend $f_0$ to a linear functional $f : G' \to \R$. 
Let: 

$\map f x = \map {f_0} x$
for $x \in G$.
It remains to pick a value of $\map f x$ for $x \in G' \setminus G$.
If $f : G' \to \R$ is a linear functional extending $f_0$ we must have: 

$\map f {x_0 + t z} = \map f x + t \map f z$
that is: 

$\map f {x_0 + t z} = \map {f_0} x + t \map f z$
So any such extension is entirely determined by the choice of $\map f z$.
We will therefore determine a suitable choice of $\map f z$ and verify that the thus obtained map is linear.
For brevity, write:

$\map f z = C$

We require: 

$\map {f_0} {x_0} + t C \le \map p {x_0 + t z}$
for each $x_0 \in G$ and $t \in \R$.
If $t = 0$, the inequality follows from the hypothesis.
If $t > 0$, then:

$\map {f_0} {x_0} + t C \le \map p {x_0 + t z}$
is equivalent to: 

$\ds C \le \frac 1 t \paren {\map p {x_0 + t z} - \map {f_0} {x_0} }$
From linearity, we have: 

$\ds C \le \frac 1 t \map p {x_0 + t z} - \map {f_0} {\frac {x_0} t}$
Since $G$ is a linear subspace of $X$, this is equivalent to requiring: 

$\ds C \le \frac 1 t \map p {t x_0 + t z} - \map {f_0} {x_0}$
for each $x_0 \in G$ and $t > 0$.
Now suppose $t < 0$. 
Write $t = -s$ for $s > 0$. 
Then: 

$\map {f_0} {x_0} - s C \le \map p {x_0 - s z}$
is equivalent to: 

$s C \ge \map {f_0} {x_0} - \map p {x_0 - s z}$
From linearity, this is equivalent to: 

$\ds C \le \map {f_0} {\frac {x_0} s} - \frac 1 s \map p {s x_0 - s z}$
Since $G$ is a linear subspace of $X$, this is equivalent to requiring:

$C \le \map {f_0} {x_0} - \dfrac 1 s \map p {s x_0 - s z}$
for each $x_0 \in G$ and $s > 0$.
Let:

$\ds a = \sup_{s > 0, \, x_0 \in X} \paren {\map {f_0} {x_0} - \frac 1 s \map p {s x_0 - s z} }$
and:

$\ds b = \inf_{t > 0, \, x_0 \in X} \paren {\frac 1 t \map p {t x_0 + t z} - \map {f_0} {x_0} }$
We show that $a \le b$. 
Then, for any $C \in \closedint a b$, say: 

$\ds C = \frac {a + b} 2$
we have:

$C \le \map {f_0} {x_0} - \dfrac 1 s \map p {x_0 - s z}$
for each $x_0 \in G$ and $s > 0$, and: 

$\ds C \le \frac 1 t \map p {t x_0 + t z} - \map {f_0} {x_0} \le C$
for each $x_0 \in G$ and $t > 0$.
That is, we will obtain: 

$\map {f_0} {x_0} + t C \le \map p {x_0 + t z}$
for all $x_0 \in G$ and $t \ne 0$.

We will show that for each $t, s > 0$ and $x, y \in G$, we have: 

$\ds \map {f_0} x - \frac 1 s \map p {s x - s z} \le \frac 1 t \map p {t y + t z} - \map {f_0} y$
This is equivalent to: 

$\ds \map {f_0} x + \map {f_0} y \le \frac 1 t \map p {t y + t z} + \frac 1 s \map p {s x - s z}$
We have: 














\(\ds \frac 1 s \map p {s x - s z} + \frac 1 t \map p {t y + tz}\)

\(\ge\)







\(\ds \map p {x - z + y + z}\)





Definition of Sublinear Functional














\(\ds \)

\(=\)







\(\ds \map p {x + y}\)




















\(\ds \)

\(\ge\)







\(\ds \map {f_0} {x + y}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \map {f_0} x + \map {f_0} y\)





Definition of Linear Functional



as required.
So we obtain the required $a \le b < \infty$. 

Now set: 

$\ds C = \frac {a + b} 2$
and define $f : G' \to \R$ by: 

$\map f x = \map {f_0} {x_0} + t C$
for each $x \in G'$, where $x_0 \in G$ and $t \in \R$ are such that: 

$x = x_0 + t z$
We have shown that this decomposition is unique, so $f$ is well-defined.
If $x \in G$, then $t = 0$ and we obtain: 

$\map f x = \map {f_0} {x_0}$
so $f$ certainly extends $f_0$.
We verify that $f$ is a linear functional.
Let $x, y \in G'$ and $\lambda, \mu \in \R$. 
Decompose: 

$x = x_0 + t z$
for $x_0 \in G$ and $t \in \R$, and: 

$y = y_0 + s z$
for $y_0 \in G$ and $s \in \R$. 
Then: 














\(\ds \map f {\lambda x + \mu y}\)

\(=\)







\(\ds \map f {\lambda \paren {x_0 + t z} + \mu \paren {y_0 + s z} }\)




















\(\ds \)

\(=\)







\(\ds \map f {\paren {\lambda x_0 + \mu y_0} + \paren {\lambda t + \mu s} z}\)




















\(\ds \)

\(=\)







\(\ds \map {f_0} {\lambda x_0 + \mu y_0} + \paren {\lambda t + \mu s} C\)




















\(\ds \)

\(=\)







\(\ds \lambda \map {f_0} {x_0} + \mu \map {f_0} {y_0} + \lambda t C + \mu s C\)





as $f_0$ is a linear functional














\(\ds \)

\(=\)







\(\ds \lambda \paren {\map {f_0} {x_0} + t C} + \mu \paren {\map {f_0} {y_0} + s C}\)




















\(\ds \)

\(=\)







\(\ds \lambda \map f x + \mu \map f y\)





by the construction of $f$



We therefore have that $f$ is the desired extension.
$\blacksquare$





