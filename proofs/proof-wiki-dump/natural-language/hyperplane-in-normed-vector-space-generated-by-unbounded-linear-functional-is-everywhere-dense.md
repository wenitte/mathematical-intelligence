# 

Source: https://proofwiki.org/wiki/Hyperplane_in_Normed_Vector_Space_generated_by_Unbounded_Linear_Functional_is_Everywhere_Dense

Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\Bbb F$.
Let $\phi : X \to \Bbb F$ be a linear functional that is not bounded.
Let $U$ be a hyperplane in $X$ given by: 

$U = \map \ker \phi$

Then: 

$U$ is everywhere dense in $X$.


Proof
Since $\phi$ is not bounded, for each $n \in \N$ we can pick $v_n \ne 0$ such that:

$\cmod {\map \phi {v_n} } \ge n \norm {v_n}$
Set:

$\ds x_n = \frac {v_n} {\norm {v_n} }$
for each $n \in \N$.
Then for each $n \in \N$, we have:

$\cmod {\map \phi {x_n} } \ge n$
from linearity with: 

$\norm {x_n} = 1$
Fix $x \in X$ and $\epsilon > 0$.
We aim to show that there exists $y \in U$ such that: 

$\norm {x - y} < \epsilon$
It suffices to find a sequence $\sequence {y_n}_{n \mathop \in \N}$ in $U$ such that: 

$y_n \to x$
Then, from the definition of convergent sequence, we can find $N \in \N$ such that: 

$\norm {x - y_n} < \epsilon$
For each $n \in \N$, let: 

$\ds y_n = x - \frac {\map \phi x} {\map \phi {x_n} } x_n$
Then we have: 














\(\ds \map \phi {y_n}\)

\(=\)







\(\ds \map \phi x - \map \phi {\frac {\map \phi x} {\map \phi {x_n} } x_n}\)





Definition of Linear Functional














\(\ds \)

\(=\)







\(\ds \map \phi x - \frac {\map \phi x} {\map \phi {x_n} } \map \phi {x_n}\)





Definition of Linear Functional














\(\ds \)

\(=\)







\(\ds \map \phi x - \map \phi x\)




















\(\ds \)

\(=\)







\(\ds 0\)









So, we have: 

$y_n \in \map \ker \phi$
and so:

$y_n \in U$
We also have: 














\(\ds \norm {x - y_n}\)

\(=\)







\(\ds \norm {\frac {\map \phi x} {\map \phi {x_n} } x_n}\)




















\(\ds \)

\(=\)







\(\ds \frac {\cmod {\map \phi x} } {\cmod {\map \phi {x_n} } } \norm {x_n}\)





positive homogeneity of the norm.














\(\ds \)

\(=\)







\(\ds \frac {\cmod {\map \phi x} } {\cmod {\map \phi {x_n} } }\)





since $\norm {x_n} = 1$



Since: 

$\cmod {\map \phi {x_n} } \ge n$
We have: 

$\ds \frac {\cmod {\map \phi x} } {\cmod {\map \phi {x_n} } } \le \frac {\cmod {\map \phi x} } n$
So, we have: 

$\ds \norm {x - y_n} \le \frac {\cmod {\map \phi x} } n$
We therefore have: 

$\ds \norm {x - y_n} \to 0$ as $n \to \infty$.
From Sequence in Normed Vector Space Convergent to Limit iff Norm of Sequence minus Limit is Null Sequence, we have: 

$\ds y_n \to x$
So $\sequence {y_n}_{n \mathop \in \N}$ is the desired sequence converging to $x$.
Since $x$ was arbitrary, we have that: 

$U$ is everywhere dense in $X$.
$\blacksquare$





