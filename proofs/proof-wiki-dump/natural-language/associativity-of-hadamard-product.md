# 

Source: https://proofwiki.org/wiki/Associativity_of_Hadamard_Product



Theorem
Let $\struct {S, \cdot}$ be an algebraic structure.
Let $\map {\MM_S} {m, n}$ be a $m \times n$ matrix space over $S$.
For $\mathbf A, \mathbf B \in \map {\MM_S} {m, n}$, let $\mathbf A \circ \mathbf B$ be defined as the Hadamard product of $\mathbf A$ and $\mathbf B$.

The operation $\circ$ is associative on $\map {\MM_S} {m, n}$ if and only if $\cdot$ is associative on $\struct {S, \cdot}$.


Proof
Necessary Condition
Let the operation $\cdot$ be associative on $\struct {S, \cdot}$.
Let $\mathbf A = \sqbrk a_{m n}$, $\mathbf B = \sqbrk b_{m n}$ and $\mathbf C = \sqbrk c_{m n}$ be elements of the $m \times n$ matrix space over $S$.
Then:














\(\ds \paren {\mathbf A \circ \mathbf B} \circ \mathbf C\)

\(=\)







\(\ds \paren {\sqbrk a_{m n} \circ \sqbrk b_{m n} } \circ \sqbrk c_{m n}\)





Definition of $\mathbf A$, $\mathbf B$ and $\mathbf C$














\(\ds \)

\(=\)







\(\ds \sqbrk {a \cdot b}_{m n} \circ \sqbrk c_{m n}\)





Definition of Hadamard Product














\(\ds \)

\(=\)







\(\ds \sqbrk {\paren {a \cdot b} \cdot c}_{m n}\)





Definition of Hadamard Product














\(\ds \)

\(=\)







\(\ds \sqbrk {a \cdot \paren {b \cdot c} }_{m n}\)





as $\cdot$ is associative














\(\ds \)

\(=\)







\(\ds \sqbrk a_{m n} \circ \sqbrk {b \cdot c}_{m n}\)





Definition of Hadamard Product














\(\ds \)

\(=\)







\(\ds \sqbrk a_{m n} \circ \paren {\sqbrk b_{m n} \circ \sqbrk c_{m n} }\)





Definition of Hadamard Product














\(\ds \)

\(=\)







\(\ds \mathbf A \circ \paren {\mathbf B \circ \mathbf C}\)





Definition of $\mathbf A$, $\mathbf B$ and $\mathbf C$



That is, $\circ$ is associative on $\map {\MM_S} {m, n}$.
$\Box$


Sufficient Condition
Suppose $\struct {S, \cdot}$ is such that $\cdot$ is not associative.
Then there exists $a$, $b$ and $c$ in $S$ such that:

$a \cdot \paren {b \cdot c} \ne \paren {a \cdot b} \cdot c$

Let $\mathbf A$, $\mathbf B$ and $\mathbf C$ be elements of $\map {\MM_S} {m, n}$ such that:

$a_{i j} = a$, $b_{i j} = b$, $c_{i j} = c$
where:

$a_{i j}$ is the $\tuple {i, j}$th element of $\mathbf A$
$b_{i j}$ is the $\tuple {i, j}$th element of $\mathbf B$
$c_{i j}$ is the $\tuple {i, j}$th element of $\mathbf C$

Then:

$a_{i j} \cdot \paren {b_{i j} \cdot c_{i j} } \ne \paren {a_{i j} \cdot b_{i j} } \cdot c_{i j}$
That is:

$\paren {\mathbf A \circ \mathbf B} \circ \mathbf C \ne \mathbf A \circ \paren {\mathbf B \circ \mathbf C}$
because they differ (at least) at indices $\tuple {i, j}$.
That is, $\circ$ is not associative on $\map {\MM_S} {m, n}$.
$\blacksquare$


Also see
Closure of Hadamard Product
Commutativity of Hadamard Product




