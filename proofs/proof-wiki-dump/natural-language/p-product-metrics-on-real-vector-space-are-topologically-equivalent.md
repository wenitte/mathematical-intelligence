# 

Source: https://proofwiki.org/wiki/P-Product_Metrics_on_Real_Vector_Space_are_Topologically_Equivalent


Work In ProgressIn particular: This can be connected with the theory of Lamé Curves.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
For $n \in \N$, let $\R^n$ be an Euclidean space.
Let $p \in \R_{\ge 1}$.
Let $d_p$ be the $p$-product metric on $\R^n$.
Let $d_\infty$ be the Chebyshev distance on $\R^n$.

Then $d_p$ and $d_\infty$ are topologically equivalent.


Proof
Let $r, t \in \R_{\ge 1}$.
Without loss of generality, assume that $r \le t$.
For all $x, y \in \R^n$, we are going to show that:

$\map {d_r} {x, y} \ge \map {d_\infty} {x, y} \ge n^{-1} \map {d_r} {x, y}$
Then we can demonstrate Lipschitz equivalence between all of these metrics, from which topological equivalence follows.
Let $d_r$ be the metric defined as:

$\ds \map {d_r} {x, y} = \paren {\sum_{i \mathop = 1}^n \size {x_i - y_i}^r}^{1/r}$


Inequalities for Chebyshev Distance
By definition of the Chebyshev distance on $\R^n$, we have:

$\ds \map {d_\infty} {x, y} = \max_{i \mathop = 1}^n \size {x_i - y_i}$
where $x = \tuple {x_1, x_2, \ldots, x_n}$ and $y = \tuple {y_1, y_2, \ldots, y_n}$.
Let $j$ be chosen so that:

$\ds \size {x_j - y_j} = \max_{i \mathop = 1}^n \size {x_i - y_i}$
Then:














\(\ds \map {d_\infty} {x, y}\)

\(=\)







\(\ds \paren {\size {x_j - y_j}^p}^{1/p}\)




















\(\ds \)

\(\le\)







\(\ds \paren {\sum_{i \mathop = 1}^n \size {x_i - y_i}^p}^{1/p}\)





Power of Maximum is not Greater than Sum of Powers














\(\ds \)

\(=\)







\(\ds \map {d_p} {x, y}\)




















\(\ds \)

\(\le\)







\(\ds \paren {n \size {x_j - y_j}^p}^{1/p}\)





Sum of $r$ Powers is not Greater than $r$ times Power of Maximum














\(\ds \)

\(=\)







\(\ds n^{1/p} \size {d_\infty} {x, y}\)









$\Box$


Inequality for General Case
We show that $\ds \map {d_r} {x, y} \ge \map {d_t} {x, y}$, which is equivalent to proving that:

$\ds \paren {\sum_{i \mathop = 1}^n \size {x_i - y_i}^r}^{1/r} \ge \paren {\sum_{i \mathop = 1}^n \size {x_i - y_i}^t}^{1/t}$

Let $\forall i \in \closedint 1 n: s_i = \size {x_i - y_i}$.
Suppose $s_k = 0$ for some $k \in \closedint 1 n$.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Putting off the analysis of s_k being 0 until near the end of the proof should shorten it without losing any clarity.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Then the problem reduces to the equivalent one of showing that:

$\ds \paren {\sum_{i \mathop = 1}^{n - 1} \size {x_i - y_i}^r}^{1/r} \ge \paren {\sum_{i \mathop = 1}^{n - 1} \size {x_i - y_i}^t}^{1/t}$
that is, of reducing the index by $1$.
Note that when $n = 1$, from simple algebra $\map {d_r} {x, y} = \map {d_t} {x, y}$.

So, let us start with the assumption that $\forall i \in \closedint 1 n: s_i > 0$.
Let $\ds u = \sum_{i \mathop = 1}^n \size {x_i - y_i}^r = \sum_{i \mathop = 1}^n s_i^r$, and $v = \dfrac 1 r$.
From Derivative of Function to Power of Function‎, $\map {D_r} {u^v} = v u^{v - 1} \map {D_r} u + u^v \ln u \map {D_r} v$.
Here:

$\ds \map {D_r} u = \sum_{i \mathop = 1}^n s_i^r \ln s_i$ from Derivative of Exponential Function and Sum Rule for Derivatives
$\map {D_r} v = - \dfrac 1 {r^2}$ from Power Rule for Derivatives
In the case where $r = 1$, we have:

$\map {D_r} {u^v} = 0$
When $r > 1$, we have:














\(\ds \map {D_r} {\paren {\sum_{i \mathop = 1}^n s_i^r}^{1 / r} }\)

\(=\)







\(\ds \dfrac 1 r \paren {\sum_{i \mathop = 1}^n s_i^r}^{1 / \paren {r - 1} } \paren {\sum_{i \mathop = 1}^n s_i^r \ln s_i} - \dfrac {\paren {\sum_{i \mathop = 1}^n s_i^r}^{1/r} \map \ln {\sum_{i \mathop = 1}^n s_i^r} } {r^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\sum_{i \mathop = 1}^n s_i^r}^{1 / r} } r \paren {\dfrac {\sum_{i \mathop = 1}^n s_i^r \ln s_i} {\sum_{i \mathop = 1}^n s_i^r} - \dfrac {\map \ln {\sum_{i \mathop = 1}^n s_i^r} } r}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\sum_{i \mathop = 1}^n s_i^r}^{1 / r} } r \paren {\dfrac {r \paren {\sum_{i \mathop = 1}^n s_i^r \ln s_i} - \paren {\sum_{i \mathop = 1}^n s_i^r} \map \ln {\sum_{i \mathop = 1}^n s_i^r} } {r \paren {\sum_{i \mathop = 1}^n s_i^r} } }\)




















\(\ds \)

\(=\)







\(\ds K \paren {r \paren {\sum_{i \mathop = 1}^n s_i^r \ln s_i} - \paren {\sum_{i \mathop = 1}^n s_i^r} \map \ln {\sum_{i \mathop = 1}^n s_i^r} }\)





where $\ds K = \dfrac {\paren {\sum_{i \mathop = 1}^n s_i^r}^{1 / r} } {r^2 \paren {\sum_{i \mathop = 1}^n s_i^r} } > 0$














\(\ds \)

\(=\)







\(\ds K \paren {\sum_{i \mathop = 1}^n s_i^r \map \ln {s_i^r} - \paren {\sum_{i \mathop = 1}^n s_i^r} \map \ln {\sum_{i \mathop = 1}^n s_i^r} }\)





Logarithms of Powers














\(\ds \)

\(=\)







\(\ds K \paren {\sum_{j \mathop = 1}^n \paren {s_j^r \paren {\map \ln {s_j^r} - \map \ln {\sum_{i \mathop = 1}^n s_i^r} } } }\)




















\(\ds \)

\(=\)







\(\ds K \paren {\sum_{j \mathop = 1}^n \paren {s_j^r \map \ln {\frac {s_j^r} {\sum_{i \mathop = 1}^n s_i^r} } } }\)









where $K > 0$ because all of $s_i, r > 0$.
For the same reason, $\ds \dfrac{s_j^r} {\sum_{i \mathop = 1}^n s_i^r} < 1$ for all $j \in \set {1, \ldots, n}$.
From Logarithm of 1 is 0 and Logarithm is Strictly Increasing, their logarithms are therefore negative.
So for $r > 1$:

$\ds \map {D_r} {\paren {\sum_{i \mathop = 1}^n s_i^r}^{1 / r} } < 0$
So, from Derivative of Monotone Function, it follows that (given the conditions on $r$ and $s_i$) $\ds \paren {\sum_{i \mathop = 1}^n s_i^r}^{1 / r}$ is decreasing.

As we assumed $r \le t$, we have $\map {d_r} {x, y} \ge \map {d_t} {x, y}$.
$\Box$

When we combine the inequalities, we have:


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: In fact, this inequality (for real $r \ge 1$) can be established quite easily without the humongous calculation.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\map {d_r} {x, y} \ge \map {d_\infty} {x, y} \ge n^{-1} \map {d_1} {x, y} \ge n^{-1} \map {d_r} {x, y}$
Therefore, $d_r$ and $d_\infty$ are Lipschitz equivalent for all $r \in \R_{\ge 1}$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.4$: Equivalent metrics: Example $2.4.5$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 18$




