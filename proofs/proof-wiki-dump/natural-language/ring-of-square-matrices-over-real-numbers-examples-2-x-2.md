# 

Source: https://proofwiki.org/wiki/Ring_of_Square_Matrices_over_Real_Numbers/Examples/2_x_2



Example of Ring of Square Matrices over Real Numbers
Let $\struct {\map {\MM_\R} 2, +, \times}$ denote the ring of square matrices of order $2$ over the real numbers $\R$.

Then $\struct {\map {\MM_\R} 2, +, \times}$ forms a ring with unity which is specifically not commutative and also not an integral domain.


Proof
We need to do the following:

$(1): \quad$ Demonstrate that $\struct {\map {\MM_\R} 2, +, \times}$ satisfies the ring axioms
$(2): \quad$ Demonstrate that matrix product on $\map {\MM_\R} 2$ is not commutative
$(3): \quad$ Demonstrate that $\struct {\map {\MM_\R} 2, +, \times}$ has a unity
$(4): \quad$ Demonstrate the existence of proper zero divisors for $\struct {\map {\MM_\R} 2, +, \times}$.


$(1)$: Ring Axioms
We check the ring axioms:
A ring is an algebraic structure $\struct {R, *, \circ}$, on which are defined two binary operations $\circ$ and $*$, which satisfy the following conditions:




\((\text A 0)\)  

$:$  



Closure under addition   

  \(\ds \forall a, b \in R:\)

\(\ds a * b \in R \)   







  


\((\text A 1)\)  

$:$  



Associativity of addition   

  \(\ds \forall a, b, c \in R:\)

\(\ds \paren {a * b} * c = a * \paren {b * c} \)   







  


\((\text A 2)\)  

$:$  



Commutativity of addition   

  \(\ds \forall a, b \in R:\)

\(\ds a * b = b * a \)   







  


\((\text A 3)\)  

$:$  



Identity element for addition: the zero   

  \(\ds \exists 0_R \in R: \forall a \in R:\)

\(\ds a * 0_R = a = 0_R * a \)   







  


\((\text A 4)\)  

$:$  



Inverse elements for addition: negative elements   

  \(\ds \forall a \in R: \exists a' \in R:\)

\(\ds a * a' = 0_R = a' * a \)   







  


\((\text M 0)\)  

$:$  



Closure under product   

  \(\ds \forall a, b \in R:\)

\(\ds a \circ b \in R \)   







  


\((\text M 1)\)  

$:$  



Associativity of product   

  \(\ds \forall a, b, c \in R:\)

\(\ds \paren {a \circ b} \circ c = a \circ \paren {b \circ c} \)   







  


\((\text D)\)  

$:$  



Product is distributive over addition   

  \(\ds \forall a, b, c \in R:\)

\(\ds a \circ \paren {b * c} = \paren {a \circ b} * \paren {a \circ c} \)   







  












\(\ds \paren {a * b} \circ c = \paren {a \circ c} * \paren {b \circ c} \)   







  

These criteria are called the ring axioms.

Let $\mathbf A = \sqbrk a_{i j}$, $\mathbf B = \sqbrk b_{i j}$ and $\mathbf C = \sqbrk c_{i j}$ where:

$i, j \in \set {1, 2}$
$a_{i j}, b_{i j}, c_{i j} \in \R$
be arbitrary real elements of $\map {\MM_\R} 2$.


Ring Axiom $\text A0$: Closure under Addition
From Matrix Entrywise Addition: $2 \times 2$ Real Matrices, matrix addition on $\map {\MM_\R} 2$ is closed.
$\Box$


Ring Axiom $\text A1$: Associativity of Addition













\(\ds \mathbf A + \paren {\mathbf B + \mathbf C}\)

\(=\)







\(\ds \sqbrk a_{i j} + \paren {\sqbrk b_{i j} + \sqbrk c_{i j} }\)




















\(\ds \)

\(=\)







\(\ds \sqbrk a_{i j} + \sqbrk {b + c}_{i j}\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds \sqbrk {a + \paren {b + c} }_{i j}\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds \sqbrk {\paren {a + b} + c}_{i j}\)





Real Addition is Associative














\(\ds \)

\(=\)







\(\ds \sqbrk {a + b}_{i j} + \sqbrk c_{i j}\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds \paren {\sqbrk a_{i j} + \sqbrk b_{i j} } + \sqbrk c_{i j}\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds \paren {\mathbf A + \mathbf B} + \mathbf C\)









Thus matrix addition is associative on $\map {\MM_\R} 2$
$\Box$


Ring Axiom $\text A2$: Commutativity of Addition













\(\ds \mathbf A + \mathbf B\)

\(=\)







\(\ds \sqbrk a_{i j} + \sqbrk b_{i j}\)




















\(\ds \)

\(=\)







\(\ds \sqbrk {a + b}_{i j}\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds \sqbrk {b + a}_{i j}\)





Real Addition is Commutative














\(\ds \)

\(=\)







\(\ds \mathbf B + \mathbf A\)









Thus matrix addition is commutative on $\map {\MM_\R} 2$.
$\Box$


Ring Axiom $\text A3$: Identity for Addition
We have:














\(\ds \begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix} + \begin {pmatrix} 0 & 0 \\ 0 & 0 \end {pmatrix}\)

\(=\)







\(\ds \begin {pmatrix} a_{11} + 0 & a_{12} + 0 \\ a_{21} + 0 & a_{22} + 0 \end {pmatrix}\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix}\)





Real Addition Identity is Zero














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 0 + a_{11} & 0 + a_{12} \\ 0 + a_{21} & 0 + a_{22} \end {pmatrix}\)





Real Addition is Commutative














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 0 & 0 \\ 0 & 0 \end {pmatrix} + \begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix}\)









Thus $\begin {pmatrix} 0 & 0 \\ 0 & 0 \end {pmatrix}$ is seen to be the identity element of matrix addition on $\map {\MM_\R} 2$.
$\Box$


Ring Axiom $\text A4$: Inverses for Addition
We have:














\(\ds \begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix} + \begin {pmatrix} -a_{11} & -a_{12} \\ -a_{21} & -a_{22} \end {pmatrix}\)

\(=\)







\(\ds \begin {pmatrix} a_{11} + \paren {-a_{11} } & a_{12} + \paren {-a_{12} } \\ a_{21} + \paren {-a_{21} } & a_{22} + \paren {-a_{22} } \end {pmatrix}\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 0 & 0 \\ 0 & 0 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} \paren {-a_{11} } + a_{11} & \paren {-a_{12} } + a_{12} \\ \paren {-a_{21} } + a_{21} & \paren {-a_{22} } + a_{22} \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} -a_{11} & -a_{12} \\ -a_{21} & -a_{22} \end {pmatrix} + \begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix}\)









Thus $\begin {pmatrix} -a_{11} & -a_{12} \\ -a_{21} & -a_{22} \end {pmatrix}$ is seen to be the inverse element of $\begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix}$ for matrix addition on $\map {\MM_\R} 2$.
$\Box$


Ring Axiom $\text M0$: Closure under Product
From Matrix Product (Conventional): $2 \times 2$ Real Matrices, matrix product on $\map {\MM_\R} 2$ is closed.
$\Box$


Ring Axiom $\text M1$: Associativity of Product













\(\ds \mathbf A \paren {\mathbf B \mathbf C}\)

\(=\)







\(\ds \begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix} \paren {\begin {pmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end {pmatrix} \begin {pmatrix} c_{11} & c_{12} \\ c_{21} & c_{22} \end {pmatrix} }\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix} \begin {pmatrix} b_{11} c_{11} + b_{12} c_{21} & b_{11} c_{12} + b_{12} c_{22} \\ b_{21} c_{11} + b_{22} c_{21} & b_{21} c_{12} + b_{22} c_{22} \end {pmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} \paren {b_{11} c_{11} + b_{12} c_{21} } + a_{12} \paren {b_{21} c_{11} + b_{22} c_{21} } & a_{11} \paren {b_{11} c_{12} + b_{12} c_{22} } + a_{12} \paren {b_{21} c_{12} + b_{22} c_{22} } \\ a_{21} \paren {b_{11} c_{11} + b_{12} c_{21} } + a_{22} \paren {b_{21} c_{11} + b_{22} c_{21} } & a_{21} \paren {b_{11} c_{12} + b_{12} c_{22} } + a_{22} \paren {b_{21} c_{12} + b_{22} c_{22} } \end {pmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} b_{11} c_{11} + a_{11} b_{12} c_{21} + a_{12} b_{21} c_{11} + a_{12} b_{22} c_{21} & a_{11} b_{11} c_{12} + a_{11} b_{12} c_{22} + a_{12} b_{21} c_{12} + a_{12} b_{22} c_{22} \\ a_{21} b_{11} c_{11} + a_{21} b_{12} c_{21} + a_{22} b_{21} c_{11} + a_{22} b_{22} c_{21} & a_{21} b_{11} c_{12} + a_{21} b_{12} c_{22} + a_{22} b_{21} c_{12} + a_{22} b_{22} c_{22} \end {pmatrix}\)





Real Multiplication Distributes over Addition


















\(\ds \paren {\mathbf A \mathbf B} \mathbf C\)

\(=\)







\(\ds \paren {\begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix} \begin {pmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end {pmatrix} } \begin {pmatrix} c_{11} & c_{12} \\ c_{21} & c_{22} \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} b_{11} + a_{12} b_{21} & a_{11} b_{12} + a_{12} b_{22} \\ a_{21} b_{11} + a_{22} b_{21} & a_{21} b_{12} + a_{22} b_{22} \end {pmatrix} \begin {pmatrix} c_{11} & c_{12} \\ c_{21} & c_{22} \end {pmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} \paren {a_{11} b_{11} + a_{12} b_{21} } c_{11} + \paren {a_{11} b_{12} + a_{12} b_{22} } c_{21} & \paren {a_{11} b_{11} + a_{12} b_{21} } c_{12} + \paren {a_{11} b_{12} + a_{12} b_{22} } c_{22} \\ \paren {a_{21} b_{11} + a_{22} b_{21} } c_{11} + \paren {a_{21} b_{12} + a_{22} b_{22} } c_{21} & \paren {a_{21} b_{11} + a_{22} b_{21} } c_{12} + \paren {a_{21} b_{12} + a_{22} b_{22} } c_{22} \end {pmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} b_{11} c_{11} + a_{12} b_{21} c_{11} + a_{11} b_{12} c_{21} + a_{12} b_{22} c_{21} & a_{11} b_{11} c_{12} + a_{12} b_{21} c_{12} + a_{11} b_{12} c_{22} + a_{12} b_{22} c_{22} \\ a_{21} b_{11} c_{11} + a_{22} b_{21} c_{11} + a_{21} b_{12} c_{21} + a_{22} b_{22} c_{21} & a_{21} b_{11} c_{12} + a_{22} b_{21} c_{12} + a_{21} b_{12} c_{22} + a_{22} b_{22} c_{22} \end {pmatrix}\)





Real Multiplication Distributes over Addition




From Real Addition is Commutative, the expression for $\mathbf A \paren {\mathbf B \mathbf C}$ is seen to equal the one for $\paren {\mathbf A \mathbf B} \mathbf C$.
Thus matrix product is associative on $\map {\MM_\R} 2$.
$\Box$


Ring Axiom $\text D$: Distributivity of Product over Addition













\(\ds \mathbf A \paren {\mathbf B + \mathbf C}\)

\(=\)







\(\ds \begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix} \paren {\begin {pmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end {pmatrix} + \begin {pmatrix} c_{11} & c_{12} \\ c_{21} & c_{22} \end {pmatrix} }\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix} \begin {pmatrix} b_{11} + c_{11} & b_{12} + c_{12} \\ b_{21} + c_{21} & b_{22} + c_{22} \end {pmatrix}\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} \paren {b_{11} + c_{11} } + a_{12} \paren {b_{21} + c_{21} } & a_{11} \paren {b_{12} + c_{12} } + a_{12} \paren {b_{22} + c_{22} } \\ a_{21} \paren {b_{11} + c_{11} } + a_{22} \paren {b_{21} + c_{21} } & a_{21} \paren {b_{12} + c_{12} } + a_{22} \paren {b_{22} + c_{22} } \end {pmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} b_{11} + a_{11} c_{11} + a_{12} b_{21} + a_{12} c_{21} & a_{11} b_{12} + a_{11} c_{12} + a_{12} b_{22} + a_{12} c_{22} \\ a_{21} b_{11} + a_{21} c_{11} + a_{22} b_{21} + a_{22} c_{21} & a_{21} b_{12} + a_{21} c_{12} + a_{22} b_{22} + a_{22} c_{22} \end {pmatrix}\)





Real Multiplication Distributes over Addition


















\(\ds \mathbf A \mathbf B + \mathbf A \mathbf C\)

\(=\)







\(\ds \begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix} \begin {pmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end {pmatrix} + \begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix} \begin {pmatrix} c_{11} & c_{12} \\ c_{21} & c_{22} \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} b_{11} + a_{12} b_{21} & a_{11} b_{12} + a_{12} b_{22} \\ a_{21} b_{11} + a_{22} b_{21} & a_{21} b_{12} + a_{22} b_{22} \end {pmatrix} + \begin {pmatrix} a_{11} c_{11} + a_{12} c_{21} & a_{11} c_{12} + a_{12} c_{22} \\ a_{21} c_{11} + a_{22} c_{21} & a_{21} c_{12} + a_{22} c_{22} \end {pmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} b_{11} + a_{11} c_{11} + a_{12} b_{21} + a_{12} c_{21} & a_{11} b_{12} + a_{11} c_{12} + a_{12} b_{22} + a_{12} c_{22} \\ a_{21} b_{11} + a_{21} c_{11} + a_{22} b_{21} + a_{22} c_{21} & a_{21} b_{12} + a_{21} c_{12} + a_{22} b_{22} + a_{22} c_{22} \end {pmatrix}\)





Definition of Matrix Entrywise Addition




The expression for $\mathbf A \paren {\mathbf B + \mathbf C}$ is seen to equal the one for $\mathbf A \mathbf B + \mathbf A \mathbf C$.

Similarly:














\(\ds \paren {\mathbf A + \mathbf B} \mathbf C\)

\(=\)







\(\ds \paren {\begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix} + \begin {pmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end {pmatrix} } \begin {pmatrix} c_{11} & c_{12} \\ c_{21} & c_{22} \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} + b_{11} & a_{12} + b_{12} \\ a_{21} + b_{21} & a_{22} + b_{22} \end {pmatrix} \begin {pmatrix} c_{11} & c_{12} \\ c_{21} & c_{22} \end {pmatrix}\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} \paren {a_{11} + b_{11} } c_{11} + \paren {a_{12} + b_{12} } c_{21} & \paren {a_{11} + b_{11} } c_{12} + \paren {a_{12} + b_{12} } c_{22} \\ \paren {a_{21} + b_{21} } c_{11} + \paren {a_{22} + b_{22} } c_{21} & \paren {a_{21} + b_{21} } c_{12} + \paren {a_{22} + b_{22} } c_{22} \end {pmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} c_{11} + b_{11} c_{11} + a_{12} c_{21} + b_{12} c_{21} & a_{11} c_{12} + b_{11} c_{12} + a_{12} c_{22} + b_{12} c_{22} \\ a_{21} c_{11} + b_{21} c_{11} + a_{22} c_{21} + b_{22} c_{21} & a_{21} c_{12} + b_{21} c_{12} + a_{22} c_{22} + b_{22} c_{22} \end {pmatrix}\)





Real Multiplication Distributes over Addition


















\(\ds \mathbf A \mathbf C + \mathbf B \mathbf C\)

\(=\)







\(\ds \begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix} \begin {pmatrix} c_{11} & c_{12} \\ c_{21} & c_{22} \end {pmatrix} + \begin {pmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end {pmatrix} \begin {pmatrix} c_{11} & c_{12} \\ c_{21} & c_{22} \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} c_{11} + a_{12} c_{21} & a_{11} c_{12} + a_{12} c_{22} \\ a_{21} c_{11} + a_{22} c_{21} & a_{21} c_{12} + a_{22} c_{22} \end {pmatrix} + \begin {pmatrix} b_{11} c_{11} + b_{12} c_{21} & b_{11} c_{12} + b_{12} c_{22} \\ b_{21} c_{11} + b_{22} c_{21} & b_{21} c_{12} + b_{22} c_{22} \end {pmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} c_{11} + b_{11} c_{11} + a_{12} c_{21} + b_{12} c_{21} & a_{11} c_{12} + b_{11} c_{12} + a_{12} c_{22} + b_{12} c_{22} \\ a_{21} c_{11} + b_{21} c_{11} + a_{22} c_{21} + b_{22} c_{21} & a_{21} c_{12} + b_{21} c_{12} + a_{22} c_{22} + b_{22} c_{22} \end {pmatrix}\)





Definition of Matrix Entrywise Addition




The expression for $\paren {\mathbf A + \mathbf B} \mathbf C$ is seen to equal the one for $\mathbf A \mathbf C + \mathbf B \mathbf C$.

Thus matrix product is distributive over matrix addition on $\map {\MM_\R} 2$.
$\Box$


$(2)$: Non-Commutativity of Matrix Product
Let:














\(\ds \mathbf A\)

\(=\)







\(\ds \begin {pmatrix} 0 & 1 \\ 0 & 0 \end {pmatrix}\)




















\(\ds \mathbf B\)

\(=\)







\(\ds \begin {pmatrix} 1 & 0 \\ 0 & 0 \end {pmatrix}\)









By definition, both $\mathbf A$ and $\mathbf B$ are elements of $\map {\MM_\R} 2$.

We have:














\(\ds \mathbf A \mathbf B\)

\(=\)







\(\ds \begin {pmatrix} 0 & 1 \\ 0 & 0 \end {pmatrix} \begin {pmatrix} 1 & 0 \\ 0 & 0 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 0 \times 1 + 1 \times 0 & 0 \times 0 + 1 \times 0 \\ 0 \times 1 + 0 \times 0 & 0 \times 0 + 0 \times 0 \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}\)










and:














\(\ds \mathbf B \mathbf A\)

\(=\)







\(\ds \begin {pmatrix} 1 & 0 \\ 0 & 0 \end {pmatrix} \begin {pmatrix} 0 & 1 \\ 0 & 0 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 1 \times 0 + 0 \times 0 & 1 \times 1 + 0 \times 0 \\ 0 \times 0 + 0 \times 0 & 0 \times 1 + 0 \times 0 \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}\)










and it is seen that:

$\mathbf A \mathbf B \ne \mathbf B \mathbf A$
Thus by definition matrix product is not commutative on $\map {\MM_\R} 2$.
$\Box$


$(3)$: Existence of Unity
We have:














\(\ds \)

\(\)







\(\ds \begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix} \begin {pmatrix} 1 & 0 \\ 0 & 1 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} \times 1 + a_{12} \times 0 & a_{11} \times 0 + a_{12} \times 1 \\ a_{21} \times 1 + a_{22} \times 0 & a_{21} \times 0 + a_{22} \times 1 \end {pmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix}\)









and:














\(\ds \)

\(\)







\(\ds \begin {pmatrix} 1 & 0 \\ 0 & 1 \end {pmatrix} \begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 1 \times a_{11} + 0 \times a_{21} & 1 \times a_{12} + 0 \times a_{22} \\ 0 \times a_{11} + 1 \times a_{21} & 0 \times a_{12} + 1 \times a_{22} \end {pmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end {pmatrix}\)









demonstrating that $\begin {pmatrix} 1 & 0 \\ 0 & 1 \end {pmatrix}$ serves as a unity for $\struct {\map {\MM_\R} 2, +, \times}$.
$\Box$


$(4)$: Existence of Proper Zero Divisors
As for the proof of non-commutativity of matrix product on $\struct {\map {\MM_\R} 2, +, \times}$, let:














\(\ds \mathbf A\)

\(=\)







\(\ds \begin {pmatrix} 0 & 1 \\ 0 & 0 \end {pmatrix}\)




















\(\ds \mathbf B\)

\(=\)







\(\ds \begin {pmatrix} 1 & 0 \\ 0 & 0 \end {pmatrix}\)










Recall that we have:














\(\ds \mathbf A \mathbf B\)

\(=\)







\(\ds \begin {pmatrix} 0 & 1 \\ 0 & 0 \end {pmatrix} \begin {pmatrix} 1 & 0 \\ 0 & 0 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 0 \times 1 + 1 \times 0 & 0 \times 0 + 1 \times 0 \\ 0 \times 1 + 0 \times 0 & 0 \times 0 + 0 \times 0 \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}\)










But $\begin {pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ is the zero of $\struct {\map {\MM_\R} 2, +, \times}$.
Thus $\struct {\map {\MM_\R} 2, +, \times}$ has proper zero divisors.
It follows that $\struct {\map {\MM_\R} 2, +, \times}$ is not an integral domain.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $1$: Integral Domains: $\S 3$. Definition of an Integral Domain: Example $3$
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Rings: $\S 18$. Definition of a Ring: Example $27$




