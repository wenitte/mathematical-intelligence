# 

Source: https://proofwiki.org/wiki/Character_on_C*-Algebra_is_*-Algebra_Homomorphism

Theorem
Let $\tuple {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $\phi$ be a character on $A$.

Then $\phi$ is a $\ast$-algebra homomorphism.


Proof
Let $x \in A$.
From Element of *-Algebra Uniquely Decomposes into Hermitian Elements, there exists Hermitian elements $a, b \in A$ such that:

$x = a + i b$
We have:














\(\ds \map \phi {x^\ast}\)

\(=\)







\(\ds \map \phi {a^\ast - i b^\ast}\)





$(\text C^\ast 2)$, $(\text C^\ast 4)$ in the definition of an involution














\(\ds \)

\(=\)







\(\ds \map \phi a - i \map \phi b\)





$a, b$ are Hermitian and $\phi$ is linear














\(\ds \)

\(=\)







\(\ds \overline {\map \phi a + i \map \phi b}\)





Character on Unital C*-Algebra is Real at Hermitian Elements














\(\ds \)

\(=\)







\(\ds \overline {\map \phi {a + i b} }\)





$\phi$ is linear














\(\ds \)

\(=\)







\(\ds \overline {\map \phi x}\)









$\blacksquare$





