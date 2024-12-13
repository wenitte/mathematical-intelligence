# 

Source: https://proofwiki.org/wiki/Product_of_Big-O_Estimates/Real_Analysis

Theorem
Let $c$ be a real number.
Let $f, g : \hointr c \infty \to \R$ be real functions.
Let $\OO$ denote big-$\OO$ notation.
Let $R_1 : \hointr c \infty \to \R$ be a real function such that $f = \map \OO {R_1}$.
Let $R_2 : \hointr c \infty \to \R$ be a real function such that $g = \map \OO {R_2}$.

Then: 

$f g = \map \OO {R_1 R_2}$


Proof
Since: 

$f = \map \OO {R_1}$
there exists $x_1 \in \hointr c \infty$ and a real number $C_1$ such that: 

$\size {\map f x} \le C_1 \size {\map {R_1} x}$
for $x \ge x_1$.
Similarly, since:

$g = \map \OO {R_2}$
there exists $x_2 \in \hointr c \infty$ and a real number $C_2$ such that: 

$\size {\map g x} \le C_2 \size {\map {R_2} x}$
Set:

$x_0 = \max \set {x_1, x_2}$
Then for $x \ge x_0$ we have: 














\(\ds \size {\map f x \map g x}\)

\(=\)







\(\ds \size {\map f x} \size {\map g x}\)




















\(\ds \)

\(\le\)







\(\ds C_1 \size {\map {R_1} x} \size {\map g x}\)





since $x \ge x_1$














\(\ds \)

\(\le\)







\(\ds C_1 C_2 \size {\map {R_1} x} \size {\map {R_2} x}\)





since $x \ge x_2$














\(\ds \)

\(=\)







\(\ds C_1 C_2 \size {\map {R_1} x \map {R_2} x}\)









That is, by the definition of big-$\OO$ notation, we have: 

$f g = \map \OO {R_1 R_2}$
$\blacksquare$





