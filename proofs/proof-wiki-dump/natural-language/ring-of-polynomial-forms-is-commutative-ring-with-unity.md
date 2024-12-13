# 

Source: https://proofwiki.org/wiki/Ring_of_Polynomial_Forms_is_Commutative_Ring_with_Unity



Theorem
Let $\struct {R, +, \circ}$ be a commutative ring with unity.
Let $A = R \sqbrk {\set {X_j: j \in J} }$ be the set of all polynomial forms over $R$ in the indeterminates $\set {X_j: j \in J}$.

Then $\struct {A, +, \circ}$ is a commutative ring with unity.


Proof
We must show that the commutative and unitary ring axioms are satisfied:
A commutative and unitary ring is an algebraic structure $\struct {R, *, \circ}$, on which are defined two binary operations $\circ$ and $*$, which satisfy the following conditions:




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







  


\((\text M 2)\)  

$:$  



Commutativity of product   

  \(\ds \forall a, b \in R:\)

\(\ds a \circ b = b \circ a \)   







  


\((\text M 3)\)  

$:$  



Identity element for product: the unity   

  \(\ds \exists 1_R \in R: \forall a \in R:\)

\(\ds a \circ 1_R = a = 1_R \circ a \)   







  


\((\text D)\)  

$:$  



Product is distributive over addition   

  \(\ds \forall a, b, c \in R:\)

\(\ds a \circ \paren {b * c} = \paren {a \circ b} * \paren {a \circ c} \)   







  












\(\ds \paren {a * b} \circ c = \paren {a \circ c} * \paren {b \circ c} \)   







  


These criteria are called the commutative and unitary ring axioms.


Proof of the additive axioms
A1:
This is shown by Polynomials Closed under Addition.

A2-A5:
According to the formal definition, a polynomial is a map from the free commutative monoid to $R$.
Now observe that addition of polynomial forms is induced by addition in $R$.
Therefore:

A2 is shown by Structure Induced by Associative Operation is Associative
A3 is shown by Induced Structure Identity
A4 is shown by Pointwise Inverse in Induced Structure
A5 is shown by Structure Induced by Commutative Operation is Commutative


Proof of the multiplicative axioms
M1:
This is shown by Polynomials Closed under Ring Product.

Multiplication of polynomial forms is not induced by multiplication in $R$, so we must show the multiplicative axioms by hand.

M2:
This is shown by Multiplication of Polynomials is Associative.
M3:
This is shown by Polynomials Contain Multiplicative Identity.
M4:
This is shown by Multiplication of Polynomials is Commutative.
D:
This is shown by Multiplication of Polynomials Distributes over Addition.

Therefore, all of the axioms of a commutative ring with unity are satisfied.
$\blacksquare$





