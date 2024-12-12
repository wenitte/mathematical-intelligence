# 

Source: https://proofwiki.org/wiki/Composition_of_Computably_Uniformly_Continuous_Real-Valued_Functions_is_Computably_Uniformly_Continuous

Theorem
Let $D \subseteq \R^n$ and $E \subseteq \R^m$ be subsets of real cartesian space.
Let $f : D \to \R$ be computably uniformly continuous.
Let $g_1, g_2, \dotsc, g_n : E \to \R$ be computably uniformly continuous.
Suppose that, for every $\bsx \in E$:

$\tuple {\map {g_1} \bsx, \map {g_2} \bsx, \dotsc, \map {g_n} \bsx} \in D$

Then $h : E \to \R$ defined as:

$\map h {x_1, \dotsc, x_m} = \map f {\map {g_1} {x_1, \dotsc, x_m}, \dotsc, \map {g_n} {x_1, \dotsc, x_m}}$
is computably uniformly continuous.


Proof
By definition of computably uniformly continuous, for each of:

$f, g_1, \dotsc, g_n$
there exists a total recursive function $d_f : \N \to \N$ such that, for all $k \in \N$ and $\bsx, \bsy \in \Dom f$:

$\norm {\bsx - \bsy} < \dfrac 1 {\map {d_f} k + 1} \implies \size {\map f \bsx - \map f \bsy} < \dfrac 1 {k + 1}$
Define $d_h : \N \to \N$ as:

$\map {d_h} k = \map \max {\map {d_{g_1}} {n \map {d_f} k + \paren {n - 1}}, \dotsc, \map {d_{g_n}} {n \map {d_f} k + \paren {n - 1}}}$
By definition of general max operation, it is obtained by substitution using the binary max operation.
Thus, by:

Maximum Function is Primitive Recursive
Multiplication is Primitive Recursive
Addition is Primitive Recursive
Constant Function is Primitive Recursive
Primitive Recursive Function is Total Recursive Function
we have that $d_h$ is a total recursive function.

Let $k \in \N$ and $\bsx, \bsy \in E$ satisfy:

$\norm {\bsx - \bsy} < \dfrac 1 {\map {d_h} k + 1}$
By Max Operation Yields Supremum of Parameters/General Case, and the definition of supremum:

$\map {d_h} k \ge \map {d_{g_i}} {n \map {d_f} k + \paren {n - 1}}$
for every $1 \le i \le n$.
Therefore:

$\dfrac 1 {\map {d_h} k + 1} \le \dfrac 1 {\map {d_{g_i}} {n \map {d_f} k + \paren {n - 1}} + 1}$
Hence:

$\norm {\bsx - \bsy} < \dfrac 1 {\map {d_{g_i}} {n \map {d_f} k + \paren {n - 1}} + 1}$
for every $1 \le i \le n$.
By assumption on $d_{g_i}$:

$\size {\map {g_i} \bsx - \map {g_i} \bsy} < \dfrac 1 {n \map {d_f} k + \paren {n - 1} + 1} = \dfrac 1 {n \paren {\map {d_f} k + 1}}$
for every $1 \le i \le n$.
Then:














\(\ds \norm {\tuple {\map {g_1} \bsx, \dotsc, \map {g_n} \bsx} - \tuple {\map {g_1} \bsy, \dotsc, \map {g_n} \bsy} }\)

\(=\)







\(\ds \norm {\tuple {\map {g_1} \bsx - \map {g_1} \bsy, \dotsc, \map {g_n} \bsx - \map {g_n} \bsy} }\)





Definition of Vector Subtraction














\(\ds \)

\(=\)







\(\ds \norm {\tuple {\map {g_1} \bsx - \map {g_1} \bsy, 0, \dotsc, 0} + \dotso + \tuple {0, \dotsc, 0, \map {g_n} \bsx - \map {g_n} \bsy} }\)





Definition of Vector Addition














\(\ds \)

\(\le\)







\(\ds \norm {\tuple {\map {g_1} \bsx - \map {g_1} \bsy, 0, \dotsc, 0} } + \dotso + \norm {\tuple {0, \dotsc, 0, \map {g_n} \bsx - \map {g_n} \bsy} }\)





Triangle Inequality for Vectors in Euclidean Space














\(\ds \)

\(=\)







\(\ds \size {\map {g_1} \bsx - \map {g_1} \bsy} + \dotso + \size {\map {g_n} \bsx - \map {g_n} \bsy}\)




















\(\ds \)

\(<\)







\(\ds \dfrac 1 {n \paren {\map {d_f} k + 1} } + \dotso \dfrac 1 {n \paren {\map {d_f} k + 1} }\)





Above inequality














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\map {d_f} k + 1}\)





There are $n$ terms in the sum



Additionally, by assumption:

$\tuple {\map {g_1} \bsx, \dotsc, \map {g_n} \bsx} \in D$
$\tuple {\map {g_1} \bsy, \dotsc, \map {g_n} \bsy} \in D$
Therefore, by assumption on $d_f$:

$\size {\map f {\map {g_1} \bsx, \dotsc, \map {g_n} \bsx} - \map f {\map {g_1} \bsy, \dotsc, \map {g_n} \bsy}} < \dfrac 1 {k + 1}$
Thus, by definition of $h$:

$\size {\map h \bsx - \map h \bsy} < \dfrac 1 {k + 1}$
As $k, \bsx, \bsy$ were arbitrary, $h$ is computably uniformly continuous by definition.
$\blacksquare$





