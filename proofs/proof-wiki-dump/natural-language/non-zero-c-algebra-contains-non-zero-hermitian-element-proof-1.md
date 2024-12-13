# 

Source: https://proofwiki.org/wiki/Non-Zero_C*-Algebra_contains_Non-Zero_Hermitian_Element/Proof_1

Theorem
Let $\tuple {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$ algebra such that:

$A \ne \set { {\mathbf 0}_A}$
where ${\mathbf 0}_A$ is the zero vector of $A$. 
Then there exists a Hermitian element $x \in A \setminus \set { {\mathbf 0}_A}$. 


Proof
Let $a \in A \setminus \set { {\mathbf 0}_A}$.
From Product of Element in *-Star Algebra with its Star is Hermitian, $a a^\ast$ is Hermitian.
We just need to show that $a a^\ast \ne {\mathbf 0}_A$.
By the $\text C^\ast$ identity, we have:

$\norm {a a^\ast} = \norm a^2 \ne 0$
from Norm Axiom $\text N 1$: Positive Definiteness, since $a \ne {\mathbf 0}_A$.
Hence applying Norm Axiom $\text N 1$: Positive Definiteness again, we have $a a^\ast \ne {\mathbf 0}_A$.
$\blacksquare$





