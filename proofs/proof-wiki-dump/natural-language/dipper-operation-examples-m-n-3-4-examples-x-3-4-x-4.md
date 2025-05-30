# 

Source: https://proofwiki.org/wiki/Dipper_Operation/Examples/(m,_n)_%3D_(3,_4)/Examples/x_%2B(3,4)_x_%3D_4

Examples of Equations on Dipper Operation $+_{3, 4}$
Let $\N_{<7}$ denote the initial segment of the natural numbers:

$\N_{<7} := \set {0, 1, \ldots, 6}$

Let $+_{3, 4}$ be the dipper operation on $\N_{<7}$ defined as:

$\forall a, b \in \N_{<7}: a +_{3, 4} b = \begin{cases} a + b & : a + b < 3 \\ a + b - 4 k & : a + b \ge 3 \end{cases}$
where $k$ is the largest integer satisfying:

$3 + 4 k \le a + b$

Consider the equation:

$x +_{3, 4} x = 4$
This has the solutions:

$x = 2$
$x = 4$
$x = 6$


Proof
Apparent from direct inspection of the Cayley table:
$\quad \begin{array}{r|rrrrrrr}
+_m & 0 & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
0 & 0 & 1 & 2 & 3 & 4 & 5 & 6
\\
1 & 1 & 2 & 3 & 4 & 5 & 6 & 3
\\
2 & 2 & 3 & 4 & 5 & 6 & 3 & 4
\\
3 & 3 & 4 & 5 & 6 & 3 & 4 & 5
\\
4 & 4 & 5 & 6 & 3 & 4 & 5 & 6
\\
5 & 5 & 6 & 3 & 4 & 5 & 6 & 3
\\
6 & 6 & 3 & 4 & 5 & 6 & 3 & 4
\\
\end{array}$

The main diagonal contains the elements $x$ of $\N_{<7}$ such that $x +_{3, 4} x$.
As can be seen, $x +_{3, 4} x = 4$ when $x = 2$, $x = 4$ and $x = 6$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 2$: Compositions: Exercise $2.8 \ \text{(c)}$




