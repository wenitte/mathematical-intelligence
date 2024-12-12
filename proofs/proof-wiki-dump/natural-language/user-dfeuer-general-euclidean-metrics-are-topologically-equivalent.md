# 

Source: https://proofwiki.org/wiki/User:Dfeuer/General_Euclidean_Metrics_are_Topologically_Equivalent

Proof
First we are going to show that:

$\ds \map {d_1} {x, y} \ge \map {d_2} {x, y} \ge \cdots \ge \map {d_r} {x, y} \ge \cdots \ge \map {d_\infty} {x, y} \ge n^{-1} \map {d_1} {x, y}$
Then we can demonstrate Lipschitz equivalence between all of these metrics, from which topological equivalence follows.

Let $r \in \N: r \ge 1$.
Let $d_r$ be the metric defined as $\ds \map {d_r} {x, y} = \paren {\sum_{i \mathop = 1}^n \size {x_i - y_i}^r}^{\frac 1 r}$.

First we wish to show that $\map {d_\infty} {x, y} \ge n^{-1} \map {d_1} {x, y}$.
By the definitions of $d_\infty$ and $d_1$, this is equivalent to showing that

$n \max_{i \mathop = 1}^n \size {x_i - y_i} \ge \sum_{i \mathop = 1}^n \size {x_i - y_i}$
But this holds trivially.


Now we wish to show that that $\forall r \in \N: \map {d_r} {x, y} \ge \map {d_{r + 1} } {x, y}$.
That is, that:

$\ds \paren {\sum_{i \mathop = 1}^n \size {x_i - y_i}^r}^{\frac 1 r} \ge \paren {\sum_{i \mathop = 1}^n \size {x_i - y_i}^{r + 1} }^{\frac 1 {r + 1} }$

Let $\forall i \in \closedint 1 n: s_i = \size {x_i - y_i}$.
Suppose $s_k = 0$ for some $k \in \closedint 1 n$.
Then the problem reduces to the equivalent one of showing that:

$\ds \paren {\sum_{i \mathop = 1}^{n - 1} \size {x_i - y_i}^r}^{\frac 1 r} \ge \paren {\sum_{i \mathop = 1}^{n - 1} \size {x_i - y_i}^{r + 1} }^{\frac 1 {r + 1} }$
that is, of reducing the index by $1$.
Note that when $n = 1$, from simple algebra $\map {d_r} {x, y} = \map {d_{r + 1} } {x, y}$.
So, let us start with the assumption that $\forall i \in \closedint 1 n: s_i > 0$.

Let $\ds \map f r = \paren {\sum_{i \mathop = 1}^n s_i^r}^{1/r}$.

Let $\ds u = \sum_{i \mathop = 1}^n s_i^r, v = \frac 1 r$.
From Derivative of Function to Power of Function‎, $\map {D_r} {u^v} = v u^{v - 1} \map {D_r} u + u^v \ln u \map {D_r} v$
Here:

$\ds \map {D_r} u = \sum_{i \mathop = 1}^n s_i^r \ln s_i$ from Derivative of Exponential Function and Sum Rule for Derivatives
$\map {D_r} v = -\dfrac 1 {r^2}$ from Power Rule for Derivatives
So:














\(\ds \map {D_r} {\paren {\sum_{i \mathop = 1}^n s_i^r}^{1/r} }\)

\(=\)







\(\ds \frac 1 r \paren {\sum_{i \mathop = 1}^n s_i^r}^{\frac 1 r - 1} \paren {\sum_{i \mathop = 1}^n s_i^r \ln s_i} - \frac {\paren {\sum_{i \mathop = 1}^n s_i^r}^{1/r} \map \ln {\sum_{i \mathop = 1}^n s_i^r} } {r^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\sum_{i \mathop = 1}^n s_i^r}^{1/r} } r \paren {\frac {\sum_{i \mathop = 1}^n s_i^r \ln s_i} {\sum_{i \mathop = 1}^n s_i^r} - \frac {\map \ln {\sum_{i \mathop = 1}^n s_i^r} } r}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\sum_{i \mathop = 1}^n s_i^r}^{1/r} } r \paren {\frac {r \paren {\sum_{i \mathop = 1}^n s_i^r \ln s_i} - \paren {\sum_{i \mathop = 1}^n s_i^r} \map \ln {\sum_{i \mathop = 1}^n s_i^r} } {r \paren {\sum_{i \mathop = 1}^n s_i^r} } }\)




















\(\ds \)

\(=\)







\(\ds K \paren {r \paren {\sum_{i \mathop = 1}^n s_i^r \ln s_i} - \paren {\sum_{i \mathop = 1}^n s_i^r} \map \ln {\sum_{i \mathop = 1}^n s_i^r} }\)





where $\ds K = \frac {\paren {\sum_{i \mathop = 1}^n s_i^r}^{1/r} } {r^2 \paren {\sum_{i \mathop = 1}^n s_i^r} } > 0$














\(\ds \)

\(=\)







\(\ds K \paren {\sum_{i \mathop = 1}^n s_i^r \map \ln {s_i^r} - \paren {\sum_{i \mathop = 1}^n s_i^r} \map \ln {\sum_{i \mathop = 1}^n s_i^r} }\)





Logarithm of Power














\(\ds \)

\(=\)







\(\ds K \paren {\sum_{j \mathop = 1}^n \paren {s_j^r \paren {\map \ln {s_j^r} - \map \ln {\sum_{i \mathop = 1}^n s_i^r} } } }\)




















\(\ds \)

\(=\)







\(\ds K \paren {\sum_{j \mathop = 1}^n \paren {s_j^r \map \ln {\frac {s_j^r} {\sum_{i \mathop = 1}^n s_i^r} } } }\)









$K > 0$ because all of $s_i, r > 0$.
For the same reason, $\ds \forall j: \frac{s_j^r} {\sum_{i \mathop = 1}^n s_i^r} < 1$.
From Logarithm of 1 is 0 and Logarithm is Strictly Increasing, their logarithms are therefore negative.
So:

$\ds \map {D_r} {\paren {\sum_{i \mathop = 1}^n s_i^r}^{1/r} } < 0$
So, from Derivative of Monotone Function, it follows that (given the conditions on $r$ and $s_i$) $\ds \paren {\sum_{i \mathop = 1}^n s_i^r}^{1/r}$ is decreasing.

Hence $\forall r \in \N: \map {d_r} {x, y} \ge \map {d_{r + 1} } {x, y}$.

Since $\forall r \in \N: \map {d_r} {x, y} \ge \map {d_{r + 1} } {x, y}$:

$\forall r \in \N: n^{-1} \map {d_r} {x, y} \ge n^{-1} \map {d_{r + 1} } {x, y}$
Since $\map {d_\infty} {x, y} \ge n^{-1} \map {d_1} {x, y}$, we see by transitivity that:

$\forall r \in \N: n^{-1} \map {d_\infty} {x, y} \ge n^{-1} \map {d_r} {x, y}$
Thus:

$\forall r \in \N: \map {d_r} {x, y} \ge n^{-1} \map {d_\infty} {x, y} \ge n^{-1} \map {d_r} {x, y}$
Therefore, $d_r$ and $d_\infty$ are Lipschitz equivalent for each $r$.
$\blacksquare$





