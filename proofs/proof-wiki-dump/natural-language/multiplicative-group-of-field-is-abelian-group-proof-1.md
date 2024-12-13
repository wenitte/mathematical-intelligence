# 

Source: https://proofwiki.org/wiki/Multiplicative_Group_of_Field_is_Abelian_Group/Proof_1

Theorem
Let $\struct {F, +, \times}$ be a field.
Let $F^* := F \setminus \set 0$ be the set $F$ less its zero.

The algebraic structure $\struct {F^*, \times}$ is an abelian group.


Proof
From the field axioms:




\((\text M 0)\)  

$:$  



Closure under product   

  \(\ds \forall x, y \in F:\)

\(\ds x \circ y \in F \)   







  


\((\text M 1)\)  

$:$  



Associativity of product   

  \(\ds \forall x, y, z \in F:\)

\(\ds \paren {x \circ y} \circ z = x \circ \paren {y \circ z} \)   







  


\((\text M 2)\)  

$:$  



Commutativity of product   

  \(\ds \forall x, y \in F:\)

\(\ds x \circ y = y \circ x \)   







  


\((\text M 3)\)  

$:$  



Identity element for product   

  \(\ds \exists 1_F \in F, 1_F \ne 0_F: \forall x \in F:\)

\(\ds x \circ 1_F = x = 1_F \circ x \)   







  $1_F$ is called the unity


\((\text M 4)\)  

$:$  



Inverse elements for product   

  \(\ds \forall x \in F^*: \exists x^{-1} \in F^*:\)

\(\ds x \circ x^{-1} = 1_F = x^{-1} \circ x \)   







  

Hence the result.
$\blacksquare$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 2$. Elementary Properties
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms: Examples of groups $\text{(ii)}$




