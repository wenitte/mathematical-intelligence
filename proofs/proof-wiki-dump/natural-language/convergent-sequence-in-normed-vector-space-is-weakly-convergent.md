# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_in_Normed_Vector_Space_is_Weakly_Convergent



Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space.
Let $x \in X$. 
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $X$ converging to $x$. 

Then $\sequence {x_n}_{n \mathop \in \N}$ converges weakly to $x$.


Proof 1
Let $\struct {X^\ast, \norm \cdot_{X^\ast} }$ be the normed dual space of $\struct {X, \norm \cdot}$.
Let $f \in X^\ast$. 
If $\norm f_{X^\ast} = 0$, then $f = 0$ and: 

$\map f {x_n} \to \map f x$
Take $f \ne 0$, so that $\norm f_{X^\ast} \ne 0$.
Let $\epsilon > 0$. 
We then have: 














\(\ds \cmod {\map f {x_n} - \map f x}\)

\(=\)







\(\ds \cmod {\map f {x_n - x} }\)





Definition of Linear Functional














\(\ds \)

\(\le\)







\(\ds \norm f_{X^\ast} \norm {x_n - x}\)





Fundamental Property of Norm on Bounded Linear Functional



Since $\sequence {x_n}_{n \mathop \in \N}$ converges to $x$:

there exists $N \in \N$ such that $\ds \norm {x_n - x} < \frac \epsilon {\norm f_{X^\ast} }$ for all $n \ge N$.
Then, for $n \ge N$, we have: 














\(\ds \cmod {\map f {x_n} - \map f x}\)

\(\le\)







\(\ds \norm f_{X^\ast} \norm {x_n - x}\)




















\(\ds \)

\(<\)







\(\ds \norm f_{X^\ast} \paren {\frac \epsilon {\norm f_{X^\ast} } }\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









Since $\epsilon > 0$ was arbitrary, we obtain: 

$\map f {x_n} \to \map f x$
Since $f \in X^\ast$ was arbitrary, we have: 

$\sequence {x_n}_{n \mathop \in \N}$ converges weakly to $x$.
$\blacksquare$


Proof 2
Let $\struct {X^\ast, \norm \cdot_{X^\ast} }$ be the normed dual space of $\struct {X, \norm \cdot}$.
Then, for each $f \in X^\ast$:














\(\ds \size {\map f {x_n} - \map f x}\)

\(\le\)







\(\ds \norm f_{X^\ast} \norm {x_n - x}_X\)





Fundamental Property of Norm on Bounded Linear Functional














\(\ds \)

\(\)







\(\ds \stackrel{n \to \infty}{\longrightarrow} 0\)









$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $27.1$: Weak Convergence




