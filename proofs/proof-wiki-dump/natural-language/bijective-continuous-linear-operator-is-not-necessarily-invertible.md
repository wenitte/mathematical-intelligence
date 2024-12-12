# 

Source: https://proofwiki.org/wiki/Bijective_Continuous_Linear_Operator_is_not_necessarily_Invertible



Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be the normed vector space.
Let $\map {CL} X := \map {CL} {X, X}$ be a continuous linear transformation space.
Let $I \in \map {CL} X$ be the identity element.
Suppose $A \in \map {CL} X$ is bijective.

Then $A$ is not necessarily invertible.


Proof
Let $\mathbb F \in \set {\R, \C}$. 
Let $\map {c_{00} } {\mathbb F}$ be the space of almost-zero sequences on $\mathbb F$.
Let $\mathbf x = \tuple {x_1, x_2, \ldots, x_N, 0, \ldots} \in c_{00}$.
Let $A : c_{00} \to c_{00}$ be a mapping such that:

$\map A {\tuple {x_1, x_2, x_3, \ldots} } = \tuple {x_1, \dfrac {x_2} 2, \dfrac{x_3} 3, \ldots}$
Let $\struct {\map {\ell^\infty} {\mathbb F}, \norm {\, \cdot \,}_\infty}$ be the normed vector space of bounded sequences on $\mathbb F$.
We have that Space of Almost-Zero Sequences is Subspace of Space of Bounded Sequences:

$c_{00} \subseteq \ell^\infty$
Moreover, Space of Almost-Zero Sequences with Supremum Norm is Normed Vector Space.


$A$ is a linear operator









\(\ds \forall \mathbf x, \mathbf y \in \ell^\infty : \forall \lambda \in \mathbb F: \, \)



\(\ds \map A {\mathbf x} + \lambda \map A {\mathbf y}\)

\(=\)







\(\ds \tuple {x_1, \frac {x_2} 2, \frac {x_3} 3, \ldots} + \lambda \tuple {y_1, \frac {y_2} 2, \frac {y_3} 3, \ldots}\)




















\(\ds \)

\(=\)







\(\ds \tuple {x_1 + \lambda y_1, \frac {x_2} 2 + \lambda \frac {y_2} 2, \frac {x_3} 3 + \lambda \frac {y_3} 3, \ldots}\)





Space of Bounded Sequences with Pointwise Addition and Pointwise Scalar Multiplication on Ring of Sequences forms Vector Space














\(\ds \)

\(=\)







\(\ds \tuple {x_1 + \lambda y_1, \frac {x_2 + \lambda y_2} 2, \frac {x_3 + \lambda y_3} 3, \ldots}\)




















\(\ds \)

\(=\)







\(\ds \map A {\mathbf x + \lambda \mathbf y}\)









By definition, $A$ is a linear operator.
$\Box$
Let $\norm {\, \cdot \,}$ be the supremum operator norm.

$A$ is a continuous operator
By definition, $A$ is a diagonal operator with $\ds \sequence {\lambda_i}_{i \mathop \in \N_{> 0} } = \sequence {\frac 1 i}_{i \mathop \in \N_{> 0} }$.
By Supremum Operator Norm of Diagonal Operator over Bounded Sequence Space:

$\ds \norm {A} = \sup_{i \mathop \in \N_{> 0} } \size {\lambda_i}$
Then:










\(\ds \forall \mathbf x \in c_{00}: \, \)



\(\ds \norm {\map A {\mathbf x} }_\infty\)

\(\le\)







\(\ds \norm A \norm {\mathbf x}_\infty\)





Supremum Operator Norm as Universal Upper Bound














\(\ds \)

\(=\)







\(\ds 1 \cdot \norm {\mathbf x}_\infty\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf x}_\infty\)










By Continuity of Linear Transformation between Normed Vector Spaces, $A$ is continuous.
$\Box$


$A$ is an injection
Suppose:

$\forall \mathbf x, y \in \ell^\infty : \map A {\mathbf x} = \map A {\mathbf y}$.
Then:














\(\ds \map A {\mathbf x}\)

\(=\)







\(\ds \map A {\mathbf y}\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf 0\)

\(=\)







\(\ds \map A {\mathbf x} - \map A {\mathbf y}\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf 0\)

\(=\)







\(\ds \map A {\mathbf x - \mathbf y}\)





$A$ is a linear operator








\(\ds \leadsto \ \ \)





\(\ds \tuple {0, 0, 0, \ldots}\)

\(=\)







\(\ds \tuple {x_1 - y_1, \frac {x_2 - y_2} 2, \frac {x_3 - y_3} 3, \ldots}\)














\(\ds \leadsto \ \ \)

\(\ds \forall i \in \N_{>0}: \, \)



\(\ds x_i\)

\(=\)







\(\ds y_i\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf x\)

\(=\)







\(\ds \mathbf y\)









By definition, $A$ is injective.
$\Box$


$A$ is a surjection
Let $\mathbf y \in c_{00}$ and $N \in \N_{> 0}$ such that:

$\forall i \in \N_{> 0} : \paren {i \le N \implies y_i \in \R} \land \paren {i > N \implies \paren {y_i = 0} }$
Also, Real Multiplication is Closed.
Then:

$\exists \mathbf x \in c_{00} : \forall i \in \N_{> 0} : \paren {i \le N \implies \paren {x_i = i \cdot y_i \in \R} } \land \paren {i > N \implies \paren {x_i = 0} }$
Hence:










\(\ds \forall \mathbf y \in c_{00} : \exists \mathbf x \in c_{00}: \, \)



\(\ds \map A {\mathbf x}\)

\(=\)







\(\ds \map A {\tuple {1 \cdot y_i, 2 \cdot y_2, 3 \cdot y_3, \ldots} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {\frac {1 \cdot y_i} 1, \frac {2 \cdot y_2} 2, \frac {3 \cdot y_3} 3, \ldots}\)




















\(\ds \)

\(=\)







\(\ds \tuple {y_1, y_2, y_3, \ldots}\)




















\(\ds \)

\(=\)







\(\ds \mathbf y\)









By definition, $A$ is surjective.
$\Box$

By definition, $A$ is bijective.


$A$ is not invertible
Aiming for a contradiction, suppose there is $B \in \map {CL} {c_{00}}$ which is the inverse of $A$.
Let $\mathbf e_m = \tuple {\underbrace{0, \ldots, 0}_{m - 1}, 1, 0, \ldots}$.
Then:










\(\ds \forall m \in \N_{> 0}: \, \)



\(\ds 1\)

\(=\)







\(\ds \norm {\mathbf e_m}_\infty\)




















\(\ds \)

\(=\)







\(\ds \norm {B \circ \map A {\mathbf e_m} }_\infty\)




















\(\ds \)

\(\le\)







\(\ds \norm B \norm {\map A {\mathbf e_m} }_\infty\)




















\(\ds \)

\(=\)







\(\ds \norm B \cdot \frac 1 m\)














\(\ds \leadsto \ \ \)

\(\ds \forall m \in \N_{> 0}: \, \)



\(\ds m\)

\(\le\)







\(\ds \norm B\)














\(\ds \leadsto \ \ \)





\(\ds \norm B\)

\(=\)







\(\ds \infty\)





Definition of Infinity



However, by definition of supremum operator norm:

$\norm B = \map \sup {\norm {\map B {\mathbf x} }_\infty : \mathbf x \in c_{00}, \norm {\mathbf x}_\infty \le 1}$
where $\norm {\map B {\mathbf x} }_\infty \in \R$.
This is a contradiction.
$\Box$

Hence, $A$ is bijective, but not invertible.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.4$: Composition of continuous linear transformations




