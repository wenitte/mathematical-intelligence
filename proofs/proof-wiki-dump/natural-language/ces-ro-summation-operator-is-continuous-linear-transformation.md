# 

Source: https://proofwiki.org/wiki/Ces%C3%A0ro_Summation_Operator_is_Continuous_Linear_Transformation



Theorem
Let $\ell^\infty$ be the space of bounded sequences.
Let $A : \ell^\infty \to \ell^\infty$ be the Cesàro summation operator.

Then $A$ is a continuous linear transformation.


Proof
Well-Definedness
Let $\mathbf x = \sequence {x_n}_{n \mathop \in \N} \in \ell^\infty$.
Then:










\(\ds \forall n \in \N: \, \)



\(\ds \size {x_n}\)

\(\le\)







\(\ds \sup_{n \mathop \in \N} \size {x_n}\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf x}_\infty\)





Definition of Supremum Norm




Thus:














\(\ds \size {\sum_{i \mathop = 1}^n\frac{x_i} n }\)

\(\le\)







\(\ds \frac 1 n \sum_{i \mathop = 1}^n \size {x_i}\)





General Triangle Inequality for Complex Numbers














\(\ds \)

\(\le\)







\(\ds \frac 1 n \sum_{i \mathop = 1}^n \sup_{n \mathop \in \N} \size {x_i}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n n \norm {\mathbf x}_\infty\)





Definition of Supremum Norm














\(\ds \)

\(=\)







\(\ds \norm {\mathbf x}_\infty\)










Hence:

$A \mathbf x \in \ell^\infty$

Further research is required in order to fill out the details.In particular: Clarify connection to the Definition of Well-Defined MappingYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by finding out more.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Research}} from the code.
$\Box$


Linearity
Let $\mathbf x = \sequence {x_n}_{n \mathop \in \N}, \mathbf y = \sequence {y_n}_{n \mathop \in \N} \in \ell^\infty$.
Let $\lambda \in \C$.
By Space of Bounded Sequences with Pointwise Addition and Pointwise Scalar Multiplication on Ring of Sequences forms Vector Space:

$\mathbf x + \lambda \mathbf y \in \ell^\infty$

Then:














\(\ds \map A {\mathbf x + \lambda \mathbf y}\)

\(=\)







\(\ds \tuple {x_1 + \lambda y_1, \frac {x_1 + x_2 + \lambda \paren {y_1 + y_2} } 2, \frac {x_1 + x_2 + x_3 + \lambda \paren {y_1 + y_2 + y_3} } 3, \ldots}\)





Definition of Cesàro Summation Operator














\(\ds \)

\(=\)







\(\ds \tuple {x_1, \frac {x_1 + x_2} 2, \frac {x_1 + x_2 + x_3} 3, \ldots} + \tuple {\lambda y_1, \frac {\lambda \paren {y_1 + y_2} } 2, \frac {\lambda \paren {y_1 + y_2 + y_3} } 3, \ldots}\)





Space of Bounded Sequences with Pointwise Addition and Pointwise Scalar Multiplication on Ring of Sequences forms Vector Space














\(\ds \)

\(=\)







\(\ds \tuple {x_1, \frac {x_1 + x_2} 2, \frac {x_1 + x_2 + x_3} 3, \ldots} + \lambda \tuple {y_1, \frac {y_1 + y_2} 2, \frac {y_1 + y_2 + y_3} 3, \ldots}\)




















\(\ds \)

\(=\)







\(\ds \map A {\mathbf x} + \lambda \map A {\mathbf y}\)





Definition of Cesàro Summation Operator



By definition, $A$ is a linear transformation.
$\Box$


Continuity
Let $\mathbf x = \sequence {x_n}_{n \mathop \in \N} \in \ell^\infty$.
Then:














\(\ds \norm {A \mathbf x}_\infty\)

\(=\)







\(\ds \sup_{n \mathop \in \N} \size {\sum_{i \mathop = 1}^n \frac {x_i} n }\)





Definition of Cesàro Summation Operator














\(\ds \)

\(\le\)







\(\ds \norm {\mathbf x}_\infty\)









By Continuity of Linear Transformation between Normed Vector Spaces, $A$ is continuous. 
$\Box$

All together:

$A \in \map {CL} {\ell^\infty}$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X, Y}$. Operator norm and the normed space $\map {CL} {X, Y}$




