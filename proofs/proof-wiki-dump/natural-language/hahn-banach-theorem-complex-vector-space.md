# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Theorem/Complex_Vector_Space



Theorem
Let $X$ be a vector space over $\C$. 
Let $p : X \to \R$ be a seminorm on $X$. 
Let $X_0$ be a linear subspace of $X$. 
Let $f_0 : X_0 \to \C$ be a linear functional such that: 

$\cmod {\map {f_0} x} \le \map p x$ for each $x \in X_0$.

Then there exists a linear functional $f$ defined on the whole space $X$ which extends $f_0$ and satisfies: 

$\cmod {\map f x} \le \map p x$ for each $x \in X$.

That is, there exists a linear functional $f : X \to \C$ such that: 

$\cmod {\map f x} \le \map p x$ for each $x \in X$
and:

$\map f x = \map {f_0} x$ for each $x \in X_0$.


Corollary
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\C$.
Let $X_0$ be a linear subspace of $X$. 
Let $f_0 : X_0 \to \C$ be a bounded linear functional.

Then $f_0$ can be extended to a bounded linear functional $f : X \to \C$ with: 

$\norm f_{X^\ast} = \norm {f_0}_{\paren {X_0}^\ast}$
where $\norm \cdot_{X^\ast}$ and $\norm \cdot_{\paren {X_0}^\ast}$ are the norms of the normed dual spaces $X^\ast$ and $\paren {X_0}^\ast$.


Proof

This article, or a section of it, needs explaining.In particular: Missing reference to the use of Boolean Prime Ideal Theorem/Ultrafilter Lemma or Axiom of Choice/Zorn's LemmaYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Define $g_0 : X_0 \to \R$ by: 

$\map {g_0} x = \map \Re {\map {f_0} x}$
for each $x \in X_0$.
By Real Part of Linear Functional is Linear Functional, $g_0$ is an $\R$-linear functional.
Also, define $h_0 : X_0 \to \R$ by: 

$\map {h_0} x = \map \Im {\map {f_0} x}$
for each $x \in X$. 
By Imaginary Part of Linear Functional is Linear Functional, $h_0$ is an $\R$-linear functional.
Now, for each $x \in X$, we have: 














\(\ds \cmod {\map {g_0} x}\)

\(=\)







\(\ds \sqrt {\paren {\map {g_0} x}^2}\)




















\(\ds \)

\(\le\)







\(\ds \sqrt {\paren {\map {g_0} x}^2 + \paren {\map {h_0} x}^2}\)




















\(\ds \)

\(=\)







\(\ds \cmod {\map {f_0} x}\)




















\(\ds \)

\(\le\)







\(\ds \map p x\)









Let $X_\R$ be the realification of $X$.
By Hahn-Banach Theorem: Real Vector Space on $X_\R$, there exists a $\R$-linear functional $g : X \to \R$ extending $g_0$ and satisfying: 

$\cmod {\map g x} \le \map p x$
for each $x \in X$. 
Define $f : X \to \C$ by: 

$\map f x = \map g x - i \map g {i x}$
for each $x \in X$. 
From Real Linear Functional is Real Part of Unique Linear Functional, we have that: 

$f : X \to \C$ is a linear functional
and: 

$\map g x = \map \Re {\map f x}$
for each $x \in X$. 

We now want to show that $f$ extends $f_0$.
Let $F_0$ be the restriction of $f$ to $X_0$.
We want to show that:

$f_0 = F_0$
We have:

$\map \Re {\map f x} = \map g x$
for each $x \in X$.
Hence: 

$\map \Re {\map f x} = \map {g_0} x = \map \Re {\map {f_0} x}$
for each $x \in X_0$. 
So: 

$\map \Re {\map {F_0} x} = \map \Re {\map {f_0} x}$
for each $x \in X_0$.
From Linear Functional on Complex Vector Space is Uniquely Determined by Real Part, it follows that: 

$\map {F_0} x = \map {f_0} x$
for each $x \in X_0$.
So $f$ indeed extends $f_0$.
Now take $x \in X$. 
Pick $\lambda \in \C$ such that:

$\cmod \lambda = 1$
and: 

$\lambda \map f x = \cmod {\map f x}$
Then, since $f$ is $\C$-linear: 














\(\ds \cmod {\map f x}\)

\(=\)







\(\ds \lambda \map f x\)




















\(\ds \)

\(=\)







\(\ds \map f {\lambda x}\)




















\(\ds \)

\(=\)







\(\ds \map g {\lambda x} - i \map g {i \lambda x}\)









Since: 

$\cmod {\map f x} \in \R$
we have that:

$\map g {i \lambda x} = 0$
Finally, we have: 














\(\ds \cmod {\map f x}\)

\(=\)







\(\ds \map g {\lambda x}\)




















\(\ds \)

\(\le\)







\(\ds \map p {\lambda x}\)




















\(\ds \)

\(=\)







\(\ds \cmod \lambda \map p x\)





Seminorm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \map p x\)









So $f$ is a linear functional satisfying our requirements.
$\blacksquare$


Source of Name
This entry was named for Hans Hahn and Stefan Banach.


Sources

There are no source works cited for this page.In particular: The Hahn-Banach Theorem is arguably one of the most important theorems in functional analysis to this date, so citation is highly desirable.Source citations are highly desirable, and mandatory for all definition pages.Definition pages whose content is wholly or partly unsourced are in danger of having such content deleted.To discuss this page in more detail, feel free to use the talk page.




