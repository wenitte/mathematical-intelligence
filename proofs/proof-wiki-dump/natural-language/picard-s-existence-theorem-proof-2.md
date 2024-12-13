# 

Source: https://proofwiki.org/wiki/Picard%27s_Existence_Theorem/Proof_2



Theorem
Let $\map f {x, y} : \R^2 \to \R$ be continuous in a region $D \subseteq \R^2$.
Let $\exists M \in \R: \forall x, y \in D: \size {\map f {x, y} } < M$.
Let $\map f {x, y}$ satisfy in $D$ the Lipschitz condition in $y$:

$\size{\map f {x, y_1} - \map f {x, y_2} } \le A \size {y_1 - y_2}$
where $A$ is independent of $x, y_1, y_2$.

Let the rectangle $R$ be defined as $\set {\tuple {x, y} \in \R^2: \size {x - a} \le h, \size {y - b} \le k}$ such that $M h \le k$.
Let $R \subseteq D$.

Then $\forall x \in \R: \size {x - a} \le h$, the first order ordinary differential equation:

$y' = \map f {x, y}$
has one and only one solution $y = \map y x$ for which $b = \map y a$.


Proof
Let us define the following series of functions:














\(\ds \map {y_0} x\)

\(=\)







\(\ds b\)




















\(\ds \map {y_1} x\)

\(=\)







\(\ds b + \int_a^x \map f {t, \map {y_0} t} \rd t\)




















\(\ds \map {y_2} x\)

\(=\)







\(\ds b + \int_a^x \map f {t, \map {y_1} t} \rd t\)




















\(\ds \)

\(\ldots\)







\(\ds \)




















\(\ds \map {y_n} x\)

\(=\)







\(\ds b + \int_a^x \map f {t, \map {y_{n-1} } t} \rd t\)









Denote this sequence by $\sequence {y_k}_{k \mathop \in \N_0}$.
What we are going to do is prove that $\ds \map y x = \lim_{n \mathop \to \infty} \map {y_n} x$ is the required solution.


The curve lies in the rectangle
We will show that for $a - h \le x \le a + h$, the curve $y = \map {y_n}x$ lies in the rectangle $R$.
That is, that $b - k < y < b + k$.
Suppose $y = \map {y_{n - 1} } x$ lies in $R$.
Then:














\(\ds \size {\map {y_n} x - b}\)

\(=\)







\(\ds \size {\int_a^x \map f {t, \map {y_{n - 1} } t} \rd t}\)




















\(\ds \)

\(\le\)







\(\ds M \size {x - a}\)




















\(\ds \)

\(\le\)







\(\ds M h\)




















\(\ds \)

\(<\)







\(\ds k\)









Clearly $y_0$ lies in $R$, and the argument holds for $y_1$.
So by induction, $y = \map {y_n} x$ lies in $R$ for all $n \in \N$.


Existence
The sequence $\sequence {y_k}_{k \mathop \in N_0}$ can be expressed as a telescoping series:

$\ds y_{n + 1} = y_0 + \sum_{k \mathop = 0}^n \paren {y_{k + 1} - y_k}$
The theorem contains more variables $\paren {\set {x, y_1, y_2} }$ and parameters $\paren {\set{h, k, M, A} }$ than inequality constraints.
Thus, more relations between them can be chosen without affecting the constraints.
Choose $h = \dfrac A 2$.
For $a \le x \le h$ we have:














\(\ds \size {\map {y_{n+1} } x - \map {y_n} x}\)

\(=\)







\(\ds \size {\int_a^x \map f {t, \map {y_n} t} - \map f {t, \map {y_{n - 1} } t} \rd t}\)




















\(\ds \)

\(\le\)







\(\ds \int_a^x \size {\map f {t, \map {y_n} t} - \map f {t, \map {y_{n - 1} } t} } \rd t\)





Absolute Value of Definite Integral














\(\ds \)

\(\le\)







\(\ds \int_a^x A \size {\map {y_n} t - \map {y_{n - 1} } t} \rd t\)





Definition of Lipschitz Condition (Real Function)














\(\ds \)

\(\le\)







\(\ds \int_a^x A \norm {y_n - y_{n - 1} }_\infty \rd t\)





Definition of Supremum Norm














\(\ds \)

\(=\)







\(\ds A \norm {y_n - y_{n-1} }_\infty \paren {x - a}\)




















\(\ds \)

\(\le\)







\(\ds A \norm {y_n - y_{n-1} }_\infty h\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \norm {y_n - y_{n - 1} }_\infty\)









By taking supremum norm of both sides, we get:

$\norm {y_{n + 1} - y_n}_\infty \le \dfrac 1 2 \norm {y_n - y_{n - 1} }_\infty$
By induction, the inequality can be extended:

$(1): \quad \norm {y_{n + 1} - y_n} \le \dfrac 1 {2^n} \norm {y_1 - y_0}$
Therefore:














\(\ds \sum_{n = 0}^\infty \norm {y_{n + 1} - y_n}\)

\(\le\)







\(\ds \norm {y_1 - y_0} \sum_{n \mathop = 0}^\infty \frac 1 {2^n}\)




















\(\ds \)

\(<\)







\(\ds \infty\)





Sum of Infinite Geometric Progression



Same argument applies to $-h \le x \le a$.
Hence, $\sequence {y_k}_{k \mathop \in \N_0}$ converges in $\struct {\map {C^1} {\size{x - a} \le h}, \norm {\cdot}_\infty}$ to $y \in \map {C^1} {\size {x - a} \le h}$ absolutely.
Therefore, the sequence is convergent:

$\ds \map y x = \lim_{n \mathop \to \infty} \map {y_{n + 1} } x = x_0 + \lim_{n \mathop \to \infty} \int_a^x \map f {x, \map {y_n} x} \rd x$
To find the limit, consider the following sequence:

$\map {g_n} x = \map f {x, \map {y_n} x}$
The sequence $\sequence {g_n}_{n \mathop \in \N_0}$ is a sequence of partial sums $\ds g_0 + \sum_{k \mathop = 0}^n \paren {g_{k + 1} - g_k}$.
It follows that:














\(\ds \norm {\map {g_{k + 1} } x - \map {g_k} x}\)

\(=\)







\(\ds \norm {\map f {x, \map {y_{k+1} } x} - \map f {x, \map {y_k} x} }\)




















\(\ds \)

\(\le\)







\(\ds L \norm {\map {y_{k + 1} } x - \map {y_k} x}\)





assumption in theorem














\(\ds \)

\(\le\)







\(\ds L \norm {y_{k + 1} - y_k}_\infty\)





Definition of Supremum Norm














\(\ds \)

\(\le\)







\(\ds \frac 1 {2^k} \norm {y_1 - y_0}_\infty\)





from $(1)$



So $\sequence {g_n}_{n \mathop \in \N_0}$ converges to some $g$ in $\struct {\map C {\size {x - a} \le h}, \norm {\, \cdot \,}_\infty}$ absolutely.
It follows that:














\(\ds \map g x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {g_n} x\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map f {x, \map {y_n} x}\)




















\(\ds \)

\(=\)







\(\ds \map f {x, \map y x}\)









On the other hand, a Riemann integral is a continuous mapping.
From Continuous Map Preserves Convergent Sequences:














\(\ds \lim_{n \mathop \to \infty} \int_a^x \map f {t, \map {y_n} t} \rd t\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_a^x \paren {\map {g_0} t + \sum_{k \mathop = 0}^{n - 1} \paren {\map {g_{k + 1} } t - \map {g_k} t} } \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_a^x \map g t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_a^x \map f {t, \map y t} \rd t\)









We conclude that:

$\ds \map y x = y_0 + \int_a^x \map f {t, \map y t} \rd t$
where:

$\map y a = y_0 + 0 = b$
and, by Fundamental Theorem of Calculus:

$\map {y'} x = 0 + \map f {x, \map y x}$
for all $x \in \R : \size {x - a} \le h$.


Uniqueness
Aiming for a contradiction, suppose that the solution to IVP is not unique.
Then, for the same initial conditions there exists a non-empty subset of $R$ where solutions differ.
Let $y_1, y_2$ be solutions to IVP for $x \in \R : \size {x - a} \le h$.
Let $x_* := \max \set {x \in \R : \size {x - a} \le h : \map {y_1} t = \map {y_2} t, \forall t \le x }$
Then:

$\ds \map {y_1} x - \map {y_1} {x_*} = \int_{x_*}^x \map {y_1'} t \rd t = \int_{x_*}^x \map {f_1} {t, \map {y_1} t} \rd t$
$\ds \map {y_2} x - \map {y_2} {x_*} = \int_{x_*}^x \map {y_2'} t \rd t = \int_{x_*}^x \map {f_2} {t, \map {y_2} t} \rd t$
After taking the difference:

$\ds \map {y_1} x - \map {y_2} x = \int_{x_*}^x \paren {\map {f_1} {t, \map {y_1} t} - \map {f_2} {t, \map {y_2} t}} \rd t$
Let $N \in \R$ be such that:

$N > \max \set {1, \dfrac 1 A, \dfrac 1 {A \paren {a \mathop + h \mathop - x_*} } }$
For all cases it holds that:

$x_* + \dfrac 1 {A N} < a + h$
Let:

$\ds B = \max_{t \mathop \in \closedint {x_*} {x_* \mathop + \frac 1 {A N} } } \size {\map {x_2} t - \map {x_1} t} \le 2 k$
Then $\forall x \in \closedint {x_*} {x_* + \dfrac 1 {AN} }$ we have:














\(\ds \size {\map {x_2} x - \map {x_1} x}\)

\(=\)







\(\ds \size {\int_{x_*}^x  \paren {\map f {\map {x_2} t, t} - \map f {\map {x_1} t, t} } \rd t}\)




















\(\ds \)

\(\le\)







\(\ds \int_{x_*}^x  \size {\map f {\map {x_2} t, t} - \map f {\map {x_1} t, t} } \rd t\)





Absolute Value of Definite Integral














\(\ds \)

\(\le\)







\(\ds \int_{x_*}^x A \size {\map {x_2} t - \map {x_1} t} \rd t\)





Definition of Lipschitz Condition (Real Function)














\(\ds \)

\(\le\)







\(\ds \int_{x_*}^x A B \rd t\)




















\(\ds \)

\(=\)







\(\ds A B \paren {x - x_*}\)




















\(\ds \)

\(\le\)







\(\ds A B \paren {x_* + \frac 1 {A N} - x_*}\)




















\(\ds \)

\(=\)







\(\ds \frac {A B} {A N}\)




















\(\ds \)

\(=\)







\(\ds \frac B N\)









Thus: 

$\forall t \in \closedint {x_*} {x_* + \dfrac 1 {A N} } : \size {\map {x_1} t - \map {x_2} t} \le \dfrac B N$
and $B \le \dfrac B N$ or $N \le 1$. 
This brings us to a contradiction.
Hence our assumption that the solution to IVP is not unique was false.
Hence the result, by Proof by Contradiction.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




