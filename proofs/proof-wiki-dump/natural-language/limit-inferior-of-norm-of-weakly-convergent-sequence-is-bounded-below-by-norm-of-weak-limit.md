# 

Source: https://proofwiki.org/wiki/Limit_Inferior_of_Norm_of_Weakly_Convergent_Sequence_is_Bounded_Below_by_Norm_of_Weak_Limit

Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space.
Let $x \in X$. 
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $X$ converging weakly to $x$. 

Then, we have: 

$\ds \norm x \le \liminf_{n \mathop \to \infty} \norm {x_n}$


Proof
From Existence of Support Functional, there exists $f \in X^\ast$ such that: 

$\map f x = \norm x$
and:

$\norm f_{X^\ast} = 1$
Since:

$x_n \weakconv x$
we have: 

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = \map f x$
That is:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = \norm x$
From Absolute Value of Limit, we have: 

$\ds \lim_{n \mathop \to \infty} \cmod {\map f {x_n} } = \norm x$
From Convergence of Limsup and Liminf, we have: 

$\ds \liminf_{n \mathop \to \infty} \cmod {\map f {x_n} } = \norm x$
From Fundamental Property of Norm on Bounded Linear Functional, we have: 

$\cmod {\map f {x_n} } \le \norm f_{X^\ast} \norm {x_n}$
Since:

$\norm f_{X^\ast} = 1$
we have: 

$\cmod {\map f {x_n} } \le \norm {x_n}$
So, from Inequality Rule for Real Sequences: 

$\ds \liminf_{n \mathop \to \infty} \cmod {\map f {x_n} } \le \liminf_{n \mathop \to \infty} \norm {x_n}$
That is: 

$\ds \norm x \le \liminf_{n \mathop \to \infty} \norm {x_n}$
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $27.1$: Weak Convergence




