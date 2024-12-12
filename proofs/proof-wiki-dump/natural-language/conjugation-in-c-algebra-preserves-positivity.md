# 

Source: https://proofwiki.org/wiki/Conjugation_in_C*-Algebra_preserves_Positivity



Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $a \in A$ be positive.
Let $c \in A$.

Then $c^\ast a c$ is positive.


Corollary
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $\le$ be the canonical preordering on $A$.
Let $a, b \in A$ be such that $a \le b$. 
Let $c \in A$.

Then $c^\ast a c \le c^\ast b c$.


Proof
Since $a$ is positive, there exists a positive $b \in A$ such that $a = b^2$ from Existence and Uniqueness of Positive Nth Root of Positive Element of C*-Algebra.
We then have:

$\paren {b c}^\ast \paren {b c} = c^\ast b^2 c = c^\ast a c$
From Product of Element of C*-Algebra with its Star is Positive, we have that $\paren {b c}^\ast \paren {b c}$ is positive.
Hence $c^\ast a c$ is positive.
$\blacksquare$


Sources
1990: Gerard J. Murphy: C*-Algebras and Operator Theory ... (previous) ... (next): $2.2$: Positive Elements of $C^\ast$-Algebras




