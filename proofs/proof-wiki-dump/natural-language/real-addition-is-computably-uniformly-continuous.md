# 

Source: https://proofwiki.org/wiki/Real_Addition_is_Computably_Uniformly_Continuous

Theorem
Let $f : \R^2 \to \R$ be defined as:

$\map f {x, y} = x + y$
Then $f$ is computably uniformly continuous.


Proof
We will define $d : \N \to \N$ as:

$\map d n = 2 n + 1$
which is primitive recursive by:

Addition is Primitive Recursive
Constant Function is Primitive Recursive
and thus total recursive by:

Primitive Recursive Function is Total Recursive Function

Let $x_1, y_1, x_2, y_2 \in \R$ and $n \in \N$ be arbitrary, and suppose:

$\norm {\tuple {x_1, y_1} - \tuple {x_2, y_2}} < \dfrac 1 {\map d n + 1} = \dfrac 1 {2 n + 2}$
We have:














\(\ds \size {x_1 - x_2} + \size {y_1 - y_2}\)

\(=\)







\(\ds \norm {\tuple {x_1 - x_2, 0} } + \norm {\tuple {0, y_1 - y_2} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {\tuple {x_1 - x_2, y_1 - y_2} }\)




















\(\ds \)

\(=\)







\(\ds \norm {\tuple {x_1, y_1} - \tuple {x_2, y_2} }\)





Triangle Inequality for Vectors in Euclidean Space



and thus:

$\size {x_1 - x_2} \le \norm {\tuple {x_1, y_1} - \tuple {x_2, y_2}} < \dfrac 1 {2 n + 2}$
$\size {y_1 - y_2} \le \norm {\tuple {x_1, y_1} - \tuple {x_2, y_2}} < \dfrac 1 {2 n + 2}$

Hence:














\(\ds \size {\map f {x_1, y_1} - \map f {x_2, y_2} }\)

\(=\)







\(\ds \size {x_1 + y_1 - x_2 - y_2}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \size {\paren {x_1 - x_2} + \paren {y_1 - y_2} }\)




















\(\ds \)

\(\le\)







\(\ds \size {x_1 - x_2} + \size {y_1 - y_2}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(<\)







\(\ds \dfrac 1 {2 n + 2} + \dfrac 1 {2 n + 2}\)





Inequality above














\(\ds \)

\(=\)







\(\ds \dfrac 1 {n + 1}\)









$\blacksquare$





