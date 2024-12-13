# 

Source: https://proofwiki.org/wiki/Nth_Root_of_*-Algebra_Homomorphism_at_Positive_Element_of_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,}_A}$ and $\struct {B, \dagger, \norm {\, \cdot \,}_B}$ be $\text C^\ast$-algebras.
Let $\phi : A \to B$ be a $\ast$-algebra homomorphism.
Let $a \in A$ be positive. 

Then we have:

$\paren {\map \phi a}^{1/n} = \map \phi {a^{1/n} }$
for each $n \in \N$, where $\cdot^{1/n}$ denotes the positive $n$th root.


Proof
From *-Algebra Homomorphism preserves Canonical Preordering of C*-Algebra, $\map \phi a$ is positive.
Since $a^{1/n}$ is positive by definition, we also obtain from *-Algebra Homomorphism preserves Canonical Preordering of C*-Algebra that $\map \phi {a^{1/n} }$ is positive.
Since $\phi$ is an algebra homomorphism, we have:

$\paren {\map \phi {a^{1/n} } }^n = \map \phi {\paren {a^{1/n} }^n} = \map \phi a$
from the definition of positive $n$th root.
From Existence and Uniqueness of Positive Nth Root of Positive Element of C*-Algebra, $\map \phi a^{1/n}$ is the unique positive element such that $\paren {\paren {\map \phi a}^{1/n} }^n = \map \phi a$.
Hence we have:

$\paren {\map \phi a}^{1/n} = \map \phi {a^{1/n} }$
$\blacksquare$





