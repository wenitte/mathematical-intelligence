# 

Source: https://proofwiki.org/wiki/Ackermann-P%C3%A9ter_Function_is_not_Primitive_Recursive



Theorem
The Ackermann-Péter function is not primitive recursive.


Proof
Let $A : \N^2 \to \N$ denote the Ackermann-Péter function.
It suffices to show that, for every primitive recursive $f : \N^k \to \N$, there exists some $t_f \in \N$ such that:

$\forall x_1, \dotsc, x_k \in \N: \map f {x_1, \dotsc, x_k} < \map A {t_f, \map \max {x_1, \dotsc, x_k}}$
For, if $A$ were primitive recursive, we would have:

$\map A {t_A, t_A} < \map A {t_A, \map \max {t_A, t_A}} = \map A {t_A, t_A}$
which is a contradiction.

We will proceed by induction on the definition of $f$.


Basic Primitive Recursive Functions
If $f$ is the zero function, we have:

$t_{\Zero} = 0$
as:














\(\ds \map \Zero x\)

\(=\)







\(\ds 0\)





Definition of Zero Function














\(\ds \)

\(<\)







\(\ds x + 1\)




















\(\ds \)

\(=\)







\(\ds \map A {0, x}\)





Definition of Ackermann-Péter Function




If $f$ is a successor function, we have:

$t_{\Succ} = 1$
as:














\(\ds \map \Succ x\)

\(=\)







\(\ds x + 1\)





Definition of Successor Function














\(\ds \)

\(<\)







\(\ds x + 2\)




















\(\ds \)

\(=\)







\(\ds \map A {1, x}\)





Ackermann-Péter Function at (1,y)




If $f$ is a projection function, we have:

$t_{\pr_j^k} = 0$
as:














\(\ds \map {\pr_j^k} {x_1, \dotsc, x_k}\)

\(=\)







\(\ds x_j\)





Definition of Projection Function














\(\ds \)

\(\le\)







\(\ds \map \max {x_1, \dotsc, x_k}\)





Max Operation Yields Supremum of Operands














\(\ds \)

\(<\)







\(\ds \map \max {x_1, \dotsc, x_k} + 1\)




















\(\ds \)

\(=\)







\(\ds \map A {0, \map \max {x_1, \dotsc, x_k} }\)





Definition of Ackermann-Péter Function



$\Box$


Substitution
Suppose $f : \N^k \to \N$ is obtained by substitution from:

$g_1, \dotsc, g_m : \N^k \to \N$
$h : \N^m \to \N$
as:

$\map f {x_1, \dotsc, x_k} = \map h {\map {g_1} {x_1, \dotsc, x_k}, \dotsc, \map {g_m} {x_1, \dotsc, x_k}}$
Let $t_g = \map \max {t_{g_1}, \dotsc, t_{g_m}}$
Then, we have:

$t_f = t_h + t_g + 2$

For every $1 \le j \le m$:














\(\ds \map {g_j} {x_1, \dotsc, x_k}\)

\(<\)







\(\ds \map A {t_{g_j}, \map \max {x_1, \dotsc, x_k} }\)





Inductive hypothesis on $t_{g_j}$














\(\ds \)

\(\le\)







\(\ds \map A {t_g, \map \max {x_1, \dotsc, x_k} }\)





Ackermann-Péter Function is Strictly Increasing on First Argument




Thus:














\(\ds \map f {x_1, \dotsc, x_k}\)

\(=\)







\(\ds \map h {\map {g_1} {x_1, \dotsc, x_k}, \dotsc, \map {g_m} {x_1, \dotsc, x_k} }\)




















\(\ds \)

\(<\)







\(\ds \map A {t_h, \map \max {\map {g_1} {x_1, \dotsc, x_k}, \dotsc, \map {g_m} {x_1, \dotsc, x_k} } }\)





Inductive hypothesis on $t_h$














\(\ds \)

\(=\)







\(\ds \map A {t_h, \map {g_j} {x_1, \dotsc, x_k} }\)





where $\map {g_j} {x_1, \dotsc, x_k} = \map \max {\map {g_1} {x_1, \dotsc, x_k}, \dotsc, \map {g_m} {x_1, \dotsc, x_k} }$














\(\ds \)

\(<\)







\(\ds \map A {t_h, \map A {t_g, \map \max {x_1, \dotsc, x_k} } }\)





Ackermann-Péter Function is Strictly Increasing on Second Argument














\(\ds \)

\(<\)







\(\ds \map A {t_h + t_g + 2, \map \max {x_1, \dotsc, x_k} }\)





Strict Upper Bound for Composition of Ackermann-Péter Functions














\(\ds \)

\(=\)







\(\ds \map A {t_f, \map \max {x_1, \dotsc, x_k} }\)









$\Box$


Primitive Recursion
Suppose $f : \N^{k + 1} \to \N$ is obtained by primitive recursion from:

$g : \N^k \to \N$
$h : \N^{k + 2} \to \N$
as:

$\map f {x_1, \dotsc, x_k, z} = \begin{cases}
\map g {x_1, \dotsc, x_k} & : z = 0 \\
\map h {x_1, \dotsc, x_k, z - 1, \map f {x_1, \dotsc, x_k, z - 1}} & : z > 0
\end{cases}$

Then, we have:

$t_f = \map \max {t_g, t_h} + 5$
It suffices to show that, for all $x_1, \dotsc, x_k, z \in \N$:

$\map f {x_1, \dotsc, x_k, z} < \map A {\map \max {t_g, t_h} + 1, \map \max {x_1, \dotsc, x_k} + z}$
For:














\(\ds \map f {x_1, \dotsc, x_k, z}\)

\(<\)







\(\ds \map A {\map \max {t_g, t_h} + 1, \map \max {x_1, \dotsc, x_k} + z}\)





To be shown














\(\ds \)

\(\le\)







\(\ds \map A {\map \max {t_g, t_h} + 1, 2 \map \max {x_1, \dotsc, x_k, z} }\)





Ackermann-Péter Function is Strictly Increasing on Second Argument














\(\ds \)

\(<\)







\(\ds \map A {\map \max {t_g, t_h} + 1, 2 \map \max {x_1, \dotsc, x_k, z} + 3}\)





Ackermann-Péter Function is Strictly Increasing on Second Argument














\(\ds \)

\(=\)







\(\ds \map A {\map \max {t_g, t_h} + 1, \map A {2, \map \max {x_1, \dotsc, x_k, z} } }\)





Ackermann-Péter Function at (2,y)














\(\ds \)

\(<\)







\(\ds \map A {\map \max {t_g, t_h + 5, \map \max {x_1, \dotsc, x_k, z} } }\)





Strict Upper Bound for Composition of Ackermann-Péter Functions














\(\ds \)

\(=\)







\(\ds \map A {t_f, \map \max {x_1, \dotsc, x_k, z} }\)










In order to prove that statement, we will perform induction on $z$.

Basis for the Induction
First, suppose $z = 0$.
Then:














\(\ds \map f {x_1, \dotsc, x_k, 0}\)

\(=\)







\(\ds \map g {x_1, \dotsc, x_k}\)




















\(\ds \)

\(<\)







\(\ds \map A {t_g, \map \max {x_1, \dotsc, x_k} }\)




















\(\ds \)

\(<\)







\(\ds \map A {\map \max {t_g, t_h} + 1, \map \max {x_1, \dotsc, x_k} + 0}\)





Ackermann-Péter Function is Strictly Increasing on First Argument



satisfying the basis for the induction.
$\Box$


Induction Hypothesis
The induction hypothesis is:

$\map f {x_1, \dotsc, x_k, z} < \map A {\map \max {t_g, t_h} + 1, \map \max {x_1, \dotsc, x_k} + z}$
Assuming that, we want to show:

$\map f {x_1, \dotsc, x_k, z + 1} < \map A {\map \max {t_g, t_h} + 1, \map \max {x_1, \dotsc, x_k} + z + 1}$


Induction Step
First, we will show that:

$\map \max {x_1, \dotsc, x_k, z, \map f {x_1, \dotsc, x_k, z} } < \map A {\map \max {t_g, t_h} + 1, \map \max {x_1, \dotsc, x_k} + z}$
If the greatest among $\set {x_1, \dotsc, x_k, z, \map f {x_1, \dotsc, x_k, z} }$ is some $x_i$, then:














\(\ds x_i\)

\(\le\)







\(\ds \map \max {x_1, \dotsc, x_k}\)





Max Operation Yields Supremum of Operands














\(\ds \)

\(\le\)







\(\ds \map \max {x_1, \dotsc, x_k} + z\)




















\(\ds \)

\(<\)







\(\ds \map A {\map \max {t_g, t_h} + 1, \map \max {x_1, \dotsc, x_k} + z}\)





Ackermann-Péter Function is Greater than Second Argument



If it is $z$, then:














\(\ds z\)

\(\le\)







\(\ds \map \max {x_1, \dotsc, x_k} + z\)




















\(\ds \)

\(<\)







\(\ds \map A {\map \max {t_g, t_h} + 1, \map \max {x_1, \dotsc, x_k} + z}\)





Ackermann-Péter Function is Greater than Second Argument



If it is $\map f {x_1, \dotsc, x_k, z}$, the statement holds by the induction hypothesis.
Thus, by Proof by Cases, the statement:

$\paren 1 \quad \map \max {x_1, \dotsc, x_k, z, \map f {x_1, \dotsc, x_k, z} } < \map A {\map \max {t_g, t_h} + 1, \map \max {x_1, \dotsc, x_k} + z}$
is true.

Now:














\(\ds \map f {x_1, \dotsc, x_k, z + 1}\)

\(=\)







\(\ds \map h {x_1, \dotsc, x_k, z, \map f {x_1, \dotsc, x_k, z} }\)




















\(\ds \)

\(<\)







\(\ds \map A {t_h, \map \max {x_1, \dotsc, x_k, z, \map f {x_1, \dotsc, x_k, z} } }\)




















\(\ds \)

\(<\)







\(\ds \map A {t_h, \map A {\map \max {t_g, t_h} + 1, \map \max {x_1, \dotsc, x_k} + z} }\)





Ackermann-Péter Function is Strictly Increasing on Second Argument and $\paren 1$














\(\ds \)

\(\le\)







\(\ds \map A {\map \max {t_g, t_h}, \map A {\map \max {t_g, t_h} + 1, \map \max {x_1, \dotsc, x_k} + z} }\)





Ackermann-Péter Function is Strictly Increasing on First Argument














\(\ds \)

\(=\)







\(\ds \map A {\map \max {t_g, t_h} + 1, \map \max {x_1, \dotsc, x_k} + z + 1}\)





Definition of Ackermann-Péter Function



Thus, the induction step is satisfied.
$\Box$
By the Principle of Mathematical Induction, it holds that:

$\map f {x_1, \dotsc, x_k, z} < \map A {\map \max {t_g, t_h} + 1, \map \max {x_1, \dotsc, x_k} + z}$
for all $z \in \N$.
So, the case is concluded by the remarks above.
$\Box$

By definition, every primitive recursive function $f$ must be obtainable from just those operations, and so necessarily satisfy the required property.
It follows from the remarks at the start of the proof that the Ackermann-Péter function is not primitive recursive.
$\blacksquare$





