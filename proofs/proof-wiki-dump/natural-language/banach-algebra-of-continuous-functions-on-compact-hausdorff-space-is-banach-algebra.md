# 

Source: https://proofwiki.org/wiki/Banach_Algebra_of_Continuous_Functions_on_Compact_Hausdorff_Space_is_Banach_Algebra

Theorem
Let $X$ be a compact Hausdorff space.
Let $\map \CC X = \map \CC {X, \C}$ be the vector space of continuous functions on $X$.
Let $\ast$ be pointwise multiplication on $\C^X$. 
Let $\norm {\, \cdot \,}_\infty$ be the supremum norm on $\map \CC X$. 

Then $\struct {\map \CC X, \ast, \norm {\, \cdot \,} }$ is a Banach algebra.


Proof
We first show that $\struct {\map \CC X, \ast}$ is an algebra over $\C$.
For this, we show that $\struct {\map \CC X, \ast}$ is a subalgebra of $\C^X$.
As shown in Continuous Functions on Compact Space form Banach Space, $\map \CC X$ is a linear subspace of $\C^X$.
From Product of Continuous Functions on Topological Ring is Continuous, we have $f \ast g \in \map \CC X$. 
Hence $\struct {\map \CC X, \ast}$ is a subalgebra of $\C^X$.
Hence $\struct {\map \CC X, \ast}$ is an algebra over $\C$.

From Continuous Functions on Compact Space form Banach Space, $\map \CC X$ is a Banach space. 
It remains to show that $\norm {\, \cdot \,}_\infty$ is a algebra norm on $\map \CC X$. 
That is: 

$\norm {f \ast g}_\infty \le \norm f_\infty \norm g_\infty$ for each $f, g \in \map \CC X$.
For each $x \in X$, we have:














\(\ds \cmod {\map f x \map g x}\)

\(=\)







\(\ds \cmod {\map f x} \cmod {\map g x}\)




















\(\ds \)

\(\le\)







\(\ds \paren {\sup_{x \mathop \in X} \cmod {\map f x} } \cmod {\map g x}\)





Definition of Supremum of Subset of Real Numbers














\(\ds \)

\(\le\)







\(\ds \paren {\sup_{x \mathop \in X} \cmod {\map f x} } \paren {\sup_{x \mathop \in X} \cmod {\map g x} }\)





Definition of Supremum of Subset of Real Numbers














\(\ds \)

\(=\)







\(\ds \norm f_\infty \norm g_\infty\)





Definition of Supremum Norm



Hence $\struct {\map \CC X, \ast, \norm {\, \cdot \,} }$ is a Banach algebra.
$\blacksquare$





