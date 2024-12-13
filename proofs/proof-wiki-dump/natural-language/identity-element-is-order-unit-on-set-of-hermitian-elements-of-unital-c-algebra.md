# 

Source: https://proofwiki.org/wiki/Identity_Element_is_Order_Unit_on_Set_of_Hermitian_Elements_of_Unital_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $\le$ be the canonical preordering on $A$.
Let $A_{\mathbf {SA}}$ be the set of Hermitian elements of $A$.

Then ${\mathbf 1}_A$ is an order unit for $\tuple {A_{\mathbf{SA}}, \le}$. 


Proof
Fix $a \in A$ Hermitian.
Then from Bounds on Hermitian Element of Unital C*-Algebra in terms of Bounds on Spectrum:

$-\norm a {\mathbf 1}_A \le_A a \le \norm a {\mathbf 1}_A$
Take $N \in \N$ such that $N > \norm a$. 
From Non-Negative Multiple of Positive Element of C*-Algebra is Positive: Corollary, we have:

$-N {\mathbf 1}_A \le_A -\norm a {\mathbf 1}_A$
and:

$\norm a {\mathbf 1}_A \le_A N {\mathbf 1}_A$
Since $\le_A$ is a preordering, we have:

$-N {\mathbf 1}_A \le a \le_A N {\mathbf 1}_A$
Since $a \in A$ was arbitrary Hermitian, ${\mathbf 1}_A$ is an order unit.
$\blacksquare$





