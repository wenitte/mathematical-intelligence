# 

Source: https://proofwiki.org/wiki/Matrix_Entrywise_Addition_over_Ring_is_Associative



Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $\map {\MM_R} {m, n}$ be a $m \times n$ matrix space over $R$.
For $\mathbf A, \mathbf B \in \map {\MM_R} {m, n}$, let $\mathbf A + \mathbf B$ be defined as the matrix entrywise sum of $\mathbf A$ and $\mathbf B$.

The operation $+$ is associative on $\map {\MM_R} {m, n}$.
That is:

$\paren {\mathbf A + \mathbf B} + \mathbf C = \mathbf A + \paren {\mathbf B + \mathbf C}$
for all $\mathbf A$, $\mathbf B$ and $\mathbf C$ in $\map {\MM_R} {m, n}$.


Proof 1
Let $\mathbf A = \sqbrk a_{m n}$, $\mathbf B = \sqbrk b_{m n}$ and $\mathbf C = \sqbrk c_{m n}$ be elements of the $m \times n$ matrix space over $R$.
Then:














\(\ds \paren {\mathbf A + \mathbf B} + \mathbf C\)

\(=\)







\(\ds \paren {\sqbrk a_{m n} + \sqbrk b_{m n} } + \sqbrk c_{m n}\)





Definition of $\mathbf A$, $\mathbf B$ and $\mathbf C$














\(\ds \)

\(=\)







\(\ds \sqbrk {a + b}_{m n} + \sqbrk c_{m n}\)





Definition of Matrix Entrywise Addition over Ring














\(\ds \)

\(=\)







\(\ds \sqbrk {\paren {a + b} + c}_{m n}\)





Definition of Matrix Entrywise Addition over Ring














\(\ds \)

\(=\)







\(\ds \sqbrk {a + \paren {b + c} }_{m n}\)





Ring Axiom $\text A1$: Associativity of Addition














\(\ds \)

\(=\)







\(\ds \sqbrk a_{m n} + \sqbrk {b + c}_{m n}\)





Definition of Matrix Entrywise Addition over Ring














\(\ds \)

\(=\)







\(\ds \sqbrk a_{m n} + \paren {\sqbrk b_{m n} + \sqbrk c_{m n} }\)





Definition of Matrix Entrywise Addition over Ring














\(\ds \)

\(=\)







\(\ds \mathbf A + \paren {\mathbf B + \mathbf C}\)





Definition of $\mathbf A$, $\mathbf B$ and $\mathbf C$



$\blacksquare$


Proof 2
By definition, matrix entrywise addition is the Hadamard product of $\mathbf A$ and $\mathbf B$ with respect to ring addition.
We have from Ring Axiom $\text A1$: Associativity of Addition that ring addition is associative.
The result then follows directly from Associativity of Hadamard Product.
$\blacksquare$


Also see
Matrix Entrywise Addition over Ring is Commutative




