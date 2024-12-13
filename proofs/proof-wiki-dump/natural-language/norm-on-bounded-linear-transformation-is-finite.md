# 

Source: https://proofwiki.org/wiki/Norm_on_Bounded_Linear_Transformation_is_Finite

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be normed vector spaces over $\GF$.
Let $A: X \to Y$ be a bounded linear transformation.
Let $\norm A$ denote the norm of $A$ defined by:

$\norm A = \inf \set {c > 0: \forall h \in X : \norm {A x}_Y \le c \norm x_X}$

Then:

$\norm A < \infty$


Proof
By definition of a bounded linear transformation:

$\exists c \in \R_{> 0}: \forall x \in X : \norm{A x}_Y \le c \norm x_X$
Hence:

$\set {\lambda > 0: \forall x \in X : \norm {A x}_Y \le \lambda \norm x_X} \ne \O$

By definition:

$\set {\lambda > 0: \forall x \in X : \norm {A x}_Y \le \lambda \norm x_X}$ is bounded below.

From the Greatest Lower Bound Property:

$\norm A = \inf \set {\lambda > 0: \forall x \in X : \norm {A x}_Y \le \lambda \norm x_X}$ exists.

We have:














\(\ds \norm A\)

\(\le\)







\(\ds c\)





Definition of Infimum














\(\ds \)

\(<\)







\(\ds \infty\)





As $c \in \R_{> 0}$



The result follows.
$\blacksquare$





