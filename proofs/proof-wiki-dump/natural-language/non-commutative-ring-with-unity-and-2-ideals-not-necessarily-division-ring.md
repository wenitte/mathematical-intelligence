# 

Source: https://proofwiki.org/wiki/Non-Commutative_Ring_with_Unity_and_2_Ideals_not_necessarily_Division_Ring

Theorem
Let $\struct {R, +, \circ}$ be a ring with unity whose zero is $0_F$ and whose unity is $1_F$.
Let $\struct {R, +, \circ}$ specifically not be commutative.
Let $\struct {R, +, \circ}$ be such that the only ideals of $\struct {R, +, \circ}$ are $\set {0_R}$ and $R$ itself.

Then it is not necessarily the case that $\struct {R, +, \circ}$ is a division ring.


Proof
Let $S$ be the set of square matrices of order $2$ over the real numbers $\R$.
$S$ is not a division ring, as for example:

$\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$
and so both $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ and $\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ are proper zero divisors of $S$.

Let $J$ be an ideal of $S$ containing a non-zero matrix $A$ whose $\tuple {r, s}$th entry is $\lambda \ne 0$.
Let $E_{i j}$ be the matrix of order $2$ defined as:

$e_{a b} = \begin{cases} 1 & : a = i, b = j \\ 0 & : \text {otherwise} \end{cases}$
Thus for example:

$E_{1 2} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$
Then for each $i, j \in \set {1, 2}$, consider the matrix $\mathbf M = \dfrac 1 \lambda E_{i r} A E_{s j}$.
In Matrix Multiplication is Associative it is shown that, if $\mathbf A, \mathbf B, \mathbf C \in S$ and $\mathbf S = \mathbf A \mathbf B \mathbf C$:

$\ds s_{m n} = \sum_{k \mathop = 1}^2 \sum_{l \mathop = 1}^2 a_{m l} b_{l k} c_{k n}$
Notice that each $E_{i j}$ only has one non-zero entry $e_{i j} = 1$.
From the equation above we see that only $m_{i j}$ is can be non-zero.
Moreover the summand is non-zero only when $l = r$ and $k = s$.
Hence:

$m_{i j} = \dfrac 1 \lambda \times 1 \times a_{r s} \times 1 = 1$
and thus $\mathbf M = E_{i j}$.
It follows that:

$\forall i, j \in \set {1, 2}: E_{i j} \in J$
It remains to be shown that $J$ is the whole of $S$. 

Since $J$ is an ideal, we have:

$\forall r \in \R, i, j \in \set {1, 2}: r E_{i j} \in J$
$\struct {J, +}$ is a subgroup of $\struct {S, +}$, in particular, $\struct {J, +}$ is closed under $+$.
Since every element of $S$ can be written as:

$\begin{pmatrix} a & b \\ c & d \end{pmatrix} = a E_{1 1} + b E_{1 2} + c E_{2 1} + d E_{2 2}$
for some $a, b, c, d \in \R$, by the above every element of $S$ is an element of $J$.
Therefore we have $S = J$, and thus the only ideals of $S$ are $\set {\mathbf 0}$ and $S$ itself.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $6 \ \text {(ii)}$




