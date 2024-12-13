# 

Source: https://proofwiki.org/wiki/Properties_of_Hadamard_Product



Theorem
Let $\map {\MM_S} {m, n}$ be a $m \times n$ matrix space over $S$ over an algebraic structure $\struct {S, \cdot}$.
Let $\mathbf A, \mathbf B \in \map {\MM_S} {m, n}$.
Let $\mathbf A \circ \mathbf B$ be defined as the Hadamard product of $\mathbf A$ and $\mathbf B$.

The operation $\circ$ of Hadamard product satisfies the following properties:

$\circ$ is closed on $\map {\MM_S} {m, n}$ if and only if $\cdot$ is closed on $\struct {S, \cdot}$
$\circ$ is associative on $\map {\MM_S} {m, n}$ if and only if $\cdot$ is associative on $\struct {S, \cdot}$
$\circ$ is commutative on $\map {\MM_S} {m, n}$ if and only if $\cdot$ is commutative on $\struct {S, \cdot}$.


Proof
Closure of Hadamard Product
Necessary Condition
Let the operation $\cdot$ be closed on $\struct {S, \cdot}$.
Let $\mathbf A = \sqbrk a_{m n}$ and $\mathbf B = \sqbrk b_{m n}$ be elements of $\map {\MM_S} {m, n}$.
Let $\sqbrk c_{m n} = \sqbrk a_{m n} \cdot \sqbrk b_{m n}$.
Then:

$\forall i \in \closedint 1 m, j \in \closedint 1 n: c_{i j} = a_{i j} \circ b_{i j}$
Thus:

$\struct {S, \cdot}$ is closed if and only if $c_{i j} \in S$.
From the definition of Hadamard product, $\sqbrk c_{m n}$ has the same order as both $\sqbrk a_{m n}$ and $\sqbrk b_{m n}$.
Thus it follows that:

$\sqbrk c_{m n} \in \map {\MM_S} {m, n}$
Thus $\struct {\map {\MM_S} {m, n}, \circ}$, as it is defined, is closed.
$\Box$


Sufficient Condition
Suppose $\struct {S, \cdot}$ is such that $\cdot$ is not closed on $\struct {S, \cdot}$.
Then there exists $a$ and $b$ such that:

$a \cdot b \notin S$

Let $\mathbf A$ and $\mathbf B$ be elements of $\map {\MM_S} {m, n}$ such that:

$a_{i j} = a$, $b_{i j} = b$
where:

$a_{i j}$ is the $\tuple {i, j}$th element of $\mathbf A$
$b_{i j}$ is the $\tuple {i, j}$th element of $\mathbf B$

Then:

$a_{i j} \cdot b_{i j} \notin S$
That is:

$\mathbf A \circ \mathbf B \notin \map {\MM_S} {m, n}$
because (at least) one element of $\mathbf A \circ \mathbf B$ is not an element of $S$.
That is, $\circ$ is not closed on $\map {\MM_S} {m, n}$.
$\blacksquare$


Associativity of Hadamard Product
Let $\struct {S, \cdot}$ be an algebraic structure.
Let $\map {\MM_S} {m, n}$ be a $m \times n$ matrix space over $S$.
For $\mathbf A, \mathbf B \in \map {\MM_S} {m, n}$, let $\mathbf A \circ \mathbf B$ be defined as the Hadamard product of $\mathbf A$ and $\mathbf B$.

The operation $\circ$ is associative on $\map {\MM_S} {m, n}$ if and only if $\cdot$ is associative on $\struct {S, \cdot}$.


Commutativity of Hadamard Product
Let $\struct {S, \cdot}$ be an algebraic structure.
Let $\map {\MM_S} {m, n}$ be a $m \times n$ matrix space over $S$.
For $\mathbf A, \mathbf B \in \map {\MM_S} {m, n}$, let $\mathbf A \circ \mathbf B$ be defined as the Hadamard product of $\mathbf A$ and $\mathbf B$.

The operation $\circ$ is commutative on $\map {\MM_S} {m, n}$ if and only if $\cdot$ is commutative on $\struct {S, \cdot}$.





