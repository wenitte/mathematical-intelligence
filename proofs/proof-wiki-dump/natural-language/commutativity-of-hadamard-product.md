# 

Source: https://proofwiki.org/wiki/Commutativity_of_Hadamard_Product



Theorem
Let $\struct {S, \cdot}$ be an algebraic structure.
Let $\map {\MM_S} {m, n}$ be a $m \times n$ matrix space over $S$.
For $\mathbf A, \mathbf B \in \map {\MM_S} {m, n}$, let $\mathbf A \circ \mathbf B$ be defined as the Hadamard product of $\mathbf A$ and $\mathbf B$.

The operation $\circ$ is commutative on $\map {\MM_S} {m, n}$ if and only if $\cdot$ is commutative on $\struct {S, \cdot}$.


Proof
Necessary Condition
Let the operation $\cdot$ be commutative on $\struct {S, \cdot}$.
Let $\mathbf A = \sqbrk a_{m n}$ and $\mathbf B = \sqbrk b_{m n}$ be elements of the $m \times n$ matrix space over $S$.
Then:














\(\ds \mathbf A \circ \mathbf B\)

\(=\)







\(\ds \sqbrk a_{m n} \circ \sqbrk b_{m n}\)





Definition of $\mathbf A$ and $\mathbf B$














\(\ds \)

\(=\)







\(\ds \sqbrk {a \cdot b}_{m n}\)





Definition of Hadamard Product














\(\ds \)

\(=\)







\(\ds \sqbrk {b \cdot a}_{m n}\)





as $\cdot$ is commutative














\(\ds \)

\(=\)







\(\ds \sqbrk b_{m n} \circ \sqbrk a_{m n}\)





Definition of Hadamard Product














\(\ds \)

\(=\)







\(\ds \mathbf B \circ \mathbf A\)





Definition of $\mathbf A$ and $\mathbf B$



That is, $\circ$ is commutative on $\map {\MM_S} {m, n}$.
$\Box$


Sufficient Condition
Suppose $\struct {S, \cdot}$ is such that $\cdot$ is not commutative.
Then there exists $a$ and $b$ such that:

$a \cdot b \ne b \cdot a$

Let $\mathbf A$ and $\mathbf B$ be elements of $\map {\MM_S} {m, n}$ such that:

$a_{i j} = a$, $b_{i j} = b$
where:

$a_{i j}$ is the $\tuple {i, j}$th element of $\mathbf A$
$b_{i j}$ is the $\tuple {i, j}$th element of $\mathbf B$

Then:

$a_{i j} \cdot b_{i j} \ne b_{i j} \cdot a_{i j}$
That is:

$\mathbf A \circ \mathbf B \ne \mathbf B \circ \mathbf A$
because they differ (at least) at indices $\tuple {i, j}$.
That is, $\circ$ is not commutative on $\map {\MM_S} {m, n}$.
$\blacksquare$


Also see
Closure of Hadamard Product
Associativity of Hadamard Product




