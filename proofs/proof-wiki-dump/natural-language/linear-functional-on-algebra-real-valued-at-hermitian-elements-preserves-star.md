# 

Source: https://proofwiki.org/wiki/Linear_Functional_on_*-Algebra_Real-Valued_at_Hermitian_Elements_preserves_Star

Theorem
Let $\struct {A, \ast}$ be a $\ast$-algebra over $\C$.
Let $f : A \to \C$ be a linear functional such that:

for each $x \in A$ Hermitian, we have $\map \phi x \in \R$.

Then:

$\overline {\map \phi x} = \map \phi {x^\ast}$ for each $x \in A$.


Proof
Let $x \in A$.
From Element of *-Algebra Uniquely Decomposes into Hermitian Elements, there exists Hermitian $b, c \in A$ such that:

$x = b + i c$
Then:

$x^\ast = b - i c$
by $(\text C^\ast 2)$ and $(\text C^\ast 4)$ in the definition of an involution.
By hypothesis we have $\map \phi b, \map \phi c \in \R$.
Then we have:














\(\ds \overline {\map \phi x}\)

\(=\)







\(\ds \overline {\map \phi {b + i c} }\)




















\(\ds \)

\(=\)







\(\ds \overline {\map \phi b + i \map \phi c}\)





$\phi$ is linear














\(\ds \)

\(=\)







\(\ds \map \phi b - i \map \phi c\)





$\map \phi b, \map \phi c \in \R$














\(\ds \)

\(=\)







\(\ds \map \phi {b - i c}\)





$\phi$ is linear














\(\ds \)

\(=\)







\(\ds \map \phi {x^\ast}\)









$\blacksquare$





