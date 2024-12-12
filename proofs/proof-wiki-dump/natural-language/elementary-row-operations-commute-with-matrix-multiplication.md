# 

Source: https://proofwiki.org/wiki/Elementary_Row_Operations_Commute_with_Matrix_Multiplication



Theorem
Let $\struct {R, +, \circ}$ be a commutative ring.
Let $\mathbf A = \sqbrk a_{m n}$ be an $m \times n$ matrix over $R$.
Let $\mathbf B = \sqbrk b_{n p}$ be an $n \times p$ matrix over $R$.

Let $\hat o_1, \ldots, \hat o_{\hat n}$ be a finite sequence of elementary row operations that can be performed on a matrix over $R$ with $m$ rows.

Let $\mathbf A'$ denote the $m \times n$-matrix that results from using $\hat o_1, \ldots, \hat o_{\hat n}$ on $\mathbf A$.
Let $\mathbf C = \mathbf A \mathbf B$ be the matrix product of $\mathbf A$ and $\mathbf B$.

Let $\mathbf C'$ denote the $m \times p$-matrix that results from using $\hat o_1, \ldots, \hat o_{\hat n}$ on $\mathbf C$.

Then:

$\mathbf C' = \mathbf A' \mathbf B$


Proof
Proof by induction over $\hat n \in \N$, the number of elementary row operations.


Basis for the Induction
Suppose that $\hat n = 0$.
Then, the proof is trivial:

$\mathbf C' = \mathbf C = \mathbf A \mathbf B = \mathbf A' \mathbf B$
This is the basis for the induction


Induction Hypothesis
Let $\hat n \in \N$ be fixed.
Let $\mathbf A' = \sqbrk {a'}_{m n}$ denote the matrix that results from using $\hat o_1, \ldots, \hat o_{\hat n}$ on $\mathbf A$.
Let $\mathbf C' = \sqbrk {c'}_{m p}$ denote the matrix that results from using $\hat o_1, \ldots, \hat o_{\hat n}$ on $\mathbf C = \mathbf A \mathbf B$.
The induction hypothesis is that:

$\mathbf C' = \mathbf A' \mathbf B$
By definition of matrix product, this is equivalent to:

$\ds \forall i \in \set {1, \ldots, m}, k \in \set {1, \ldots, p}:  c'_{i k} = \sum_{j \mathop = 1}^n a'_{i j} b_{j k}$


Induction Step
This is the induction step:
Let $\hat o_1, \ldots, \hat o_{\hat n}, \hat o_{\hat n + 1}$ be a finite sequence of elementary row operations that can be performed on a matrix over $R$ with $m$ rows.
Let $\mathbf A = \sqbrk {a}_{m n}$ denote the matrix that results from using $\hat o_1, \ldots, \hat o_{\hat n + 1}$ on $\mathbf A$.
Let $\mathbf C = \sqbrk {c}_{m p}$ denote the matrix that results from using $\hat o_1, \ldots, \hat o_{\hat n + 1}$ on $\mathbf C$.
We must show that $\mathbf C = \mathbf A \mathbf B$, which by definition of matrix product is equivalent to:

$\ds \forall i \in \set {1, \ldots, m}, k \in \set {1, \ldots, p}: c_{i k} = \sum_{j \mathop = 1}^n a_{i j} b_{j k}$

Let $r_{i_0}$ denote the $i_0$'th row of a matrix.
It is clear that $\hat o_{\hat n + 1}$ converts $\mathbf A'$ to $\mathbf A$, and $\hat o_{\hat n + 1}$ converts $\mathbf C'$ to $\mathbf C$.

First, suppose that $\hat o_{\hat n + 1}$ is of the type $r_{i_0} \to \alpha r_{i_0}$, where $\alpha \in R$ and $i_0 \in \set {1, \ldots, m}$.
If $i \ne i_0$, then:








\(\ds (\text i) \ \ \)





\(\ds c_{i k}\)

\(=\)







\(\ds c'_{i k}\)





as $\hat o_{\hat n + 1}$ has no effect on $c'_{i k}$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^{n} a'_{i j} b_{j k}\)





by the induction hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^{n} a_{i j} b_{j k}\)





as $\hat o_{\hat n + 1}$ has no effect on $a'_{i j}$



If $i = i_0$, then:














\(\ds c_{i k}\)

\(=\)







\(\ds \alpha c'_{i_0 k}\)





by $\hat o_{\hat n + 1}$














\(\ds \)

\(=\)







\(\ds \alpha \sum_{j \mathop = 1}^{n} a'_{i_0 j} b_{j k}\)





by the induction hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \paren {\alpha a'_{i_0 j} } b_{j k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n a_{i j} b_{j k}\)





by $\hat o_{\hat n + 1}$



$\Box$

Suppose that $\hat o_{\hat n + 1}$ is of the type:

$r_{i_0} \to r_{i_0} + \alpha r_{i_1}$
where $\alpha \in R$ and $i_0, i_1 \in \set {1, \ldots, m}, i_0 \ne i_1$.
If $i \ne i_0$, then $\ds c_{i k} = \sum_{j \mathop = 1}^{n} a_{i j} b_{j k}$ as in the equation $(\text i )$.
If $i = i_0$, then:














\(\ds c_{i k}\)

\(=\)







\(\ds c'_{i_0 k} + \alpha c'_{i_1 k}\)





by $\hat o_{\hat n + 1}$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n a'_{i_0 j} b_{j k} + \alpha \sum_{j \mathop = 1}^n a'_{i_1 j} b_{j k}\)





by the induction hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \paren {a'_{i_0 j} + \alpha a'_{i_1 j} } b_{j k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n a_{i j} b_{j k}\)





by $\hat o_{\hat n + 1}$



$\Box$

Suppose that $\hat o_{\hat n + 1}$ is of the type $r_{i_0} \leftrightarrow r_{i_1}$, where $i_0, i_1 \in \set {1, \ldots, m}, i_0 \ne i_1$.
If $i \ne i_0$ and $i \ne i_1$, then $\ds c_{i k} = \sum_{j \mathop = 1}^n a_{i j} b_{j k}$ as in the equation $(\text i)$.
If $i = i_0$, then:














\(\ds c_{i k}\)

\(=\)







\(\ds c'_{i_1 k}\)





by $\hat o_{\hat n + 1}$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n a'_{i_1 j} b_{j k}\)





by the induction hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n a_{i j} b_{j k}\)





by $\hat o_{\hat n + 1}$



If $i = i_1$, then:














\(\ds c_{i k}\)

\(=\)







\(\ds c'_{i_0 k}\)





by $\hat o_{\hat n + 1}$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^{n} a'_{i_0 j} b_{j k}\)





by the induction hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^{n} a_{i j} b_{j k}\)





by $\hat o_{\hat n + 1}$



$\Box$

Then the induction stepis proved for all three types of elementary row operations.
$\blacksquare$


Sources
1994: Robert Messer: Linear Algebra: Gateway to Mathematics: $\S 5.1$




