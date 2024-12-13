# 

Source: https://proofwiki.org/wiki/Matrix_Space_is_Module

Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $\mathbf A = \sqbrk a_{m n}$ be an $m \times n$ matrix over $\struct {R, +, \circ}$.

Then the matrix space $\map {\MM_R} {m, n}$ of all $m \times n$ matrices over $R$ is a module.


Proof
This follows as $\map {\MM_R} {m, n}$ is a direct instance of the module given in the module of all mappings, where $\map {\MM_R} {m, n}$ is the $R$-module $R^{\closedint 1 m \times \closedint 1 n}$.
The $S$ of that example is the set $\closedint 1 m \times \closedint 1 n$, while the $G$ of that example is the $R$-module $R$.

Let $\sqbrk a_{i j}$ and $\sqbrk b_{i j}$ be the $\tuple{i, j}$th element of $m \times n$ matrices $\mathbf A$ and $\mathbf B$ respectively.
Let $\lambda$ and $\mu$ be arbitrary elements of $R$.

We have for all $i \in \closedint 1 m$, $j \in \closedint 1 n$, by egregious abuse of notation:














\(\ds \lambda \circ \paren {\mathbf A + \mathbf B}\)

\(=\)







\(\ds \lambda \circ \paren {a_{i j} + b_{i j} }\)





Definition of Matrix Entrywise Addition over Ring














\(\ds \)

\(=\)







\(\ds \lambda \circ a_{i j} + \lambda \circ b_{i j}\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds \lambda \circ \mathbf A + \lambda \circ \mathbf B\)





hence fulfilling Module Axiom $\text M 1$: Distributivity over Module Addition


















\(\ds \paren {\lambda + \mu} \circ \mathbf A\)

\(=\)







\(\ds \paren {\lambda + \mu} \circ a_{i j}\)





Definition of Matrix Scalar Product over Ring














\(\ds \)

\(=\)







\(\ds \lambda \circ a_{i j} + \mu \circ a_{i j}\)





Ring Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds \lambda \circ \mathbf A + \mu \circ \mathbf A\)





hence fulfilling Module Axiom $\text M 2$: Distributivity over Scalar Addition


















\(\ds \paren {\lambda \circ \mu} \circ \mathbf A\)

\(=\)







\(\ds \paren {\lambda \circ \mu} \circ a_{i j}\)





Definition of Matrix Scalar Product over Ring














\(\ds \)

\(=\)







\(\ds \lambda \circ \paren {\mu \circ a_{i j} }\)





Ring Axiom $\text M1$: Associativity of Product














\(\ds \)

\(=\)







\(\ds \lambda \circ \paren {\mu \circ \mathbf A}\)





hence fulfilling Module Axiom $\text M 3$: Associativity



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 29$. Matrices




