# 

Source: https://proofwiki.org/wiki/Element_of_Unital_Banach_Algebra_on_Boundary_of_Group_of_Units_of_Subalgebra_is_Not_Invertible_in_Algebra/Lemma

Lemma
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra.
Let $\map G A$ be the group of units of $A$. 
Let $x \in \partial \map G A$, where $\partial \map G A$ is the topological boundary of $\map G A$.

Then there exists a sequence $\sequence {z_n}_{n \in \N}$ in $A$ such that $\norm {z_n} = 1$ for each $n \in \N$, and: 

$z_n x \to 0$ as $n \to \infty$
and:

$x z_n \to 0$ as $n \to \infty$.


Proof
From Group of Units in Unital Banach Algebra is Open, we have: 

$\partial \map G A = \map G A^- \setminus \map G A$
So if $x \in \partial \map G A$, then $x \in A \setminus \map G A$ and there exists a sequence $\sequence {x_n}_{n \in \N}$ with $x_n \in \map G A$ for each $n \in \N$, such that: 

$x_n \to x$ as $n \to \infty$.
Let: 

$\ds z_n = \frac {x_n^{-1} } {\norm {x_n^{-1} } }$
We have:

$\ds \norm {z_n} = \norm {\frac {x_n^{-1} } {\norm {x_n^{-1} } } } = \frac {\norm {x_n^{-1} } } {\norm {x_n^{-1} } } = 1$
from Norm Axiom $\text N 2$: Positive Homogeneity, for each $n \in \N$. 
Now, we have: 














\(\ds \norm {z_n x}\)

\(=\)







\(\ds \norm {z_n \paren {x - x_n} + x_n z_n}\)




















\(\ds \)

\(=\)







\(\ds \norm {z_n \paren {x - x_n} } + \norm {x_n z_n}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \norm {x - x_n} + \frac 1 {\norm {x_n^{-1} } }\)





Definition of Algebra Norm, Definition of Unital Banach Algebra




This article, or a section of it, needs explaining.In particular: What is Definition of Algebra Norm? Is this not Definition of Banach Algebra?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
We know by hypothesis that $\norm {x - x_n} \to 0$, while from Norm of Inverse of Sequence of Invertible Elements Converging to Non-Invertible Element in Unital Banach Algebra, we have: 

$\ds \frac 1 {\norm {x_n^{-1} } } \to 0$
So, we have: 

$z_n x \to 0$ as $n \to \infty$.
Similarly, we have:














\(\ds \norm {x z_n}\)

\(=\)







\(\ds \norm {\paren {x - x_n} z_n + x_n z_n}\)




















\(\ds \)

\(\le\)







\(\ds \norm {\paren {x - x_n} z_n} + \norm {x_n z_n}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \norm {x - x_n} + \frac 1 {\norm {x_n^{-1} } }\)





Definition of Algebra Norm, Definition of Unital Banach Algebra



So $\sequence {z_n}_{n \in \N}$ satisfies the conditions given in the theorem. 
$\blacksquare$





