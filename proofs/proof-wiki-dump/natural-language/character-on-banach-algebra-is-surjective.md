# 

Source: https://proofwiki.org/wiki/Character_on_Banach_Algebra_is_Surjective

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a Banach algebra over $\C$. 
Let $\phi : A \to \C$ be a character on $A$. 

Then $\phi$ is surjective.


Proof 1
From Image of Submodule under Linear Transformation is Submodule, $\phi \sqbrk A$ is a vector subspace of $\C$. 
From Dimension of Proper Subspace is Less Than its Superspace, we have:

$\dim \phi \sqbrk A \le \dim \C = 1$
and so we either have $\phi \sqbrk A = \set 0$ or $\phi \sqbrk A = \C$.
Since $\phi \ne 0$ by the definition of a character, we have $\phi \sqbrk A = \C$.
$\blacksquare$


Proof 2
As $\phi$ is non-zero, there exists an $x_0 \in A$ such that:

$\map \phi {x_0} \in \C \setminus \set 0$
Thus, for each $a \in \C$:














\(\ds \frac a {\map \phi {x_0} } x_0\)

\(\in\)







\(\ds A\)





as $A$ is a $\C$-algebra



and:














\(\ds \map \phi {\frac a {\map \phi {x_0} } x_0}\)

\(=\)







\(\ds \frac a {\map \phi {x_0} } \map \phi {x_0}\)





as $\phi$ is a $\C$-algebra homomorphism














\(\ds \)

\(=\)







\(\ds a\)









$\blacksquare$





