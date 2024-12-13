# 

Source: https://proofwiki.org/wiki/Infinite_Limit_Operator_is_Linear_Mapping



Theorem
Let $c$ be the space of convergent sequences.
Let $\R$ be the set of real numbers.
Let $L : c \to \R$ be the infinite limit operator.

Then $L$ is a linear mapping.


Proof
Let $\mathbf x = \sequence {x_n}_{n \mathop \in \N}, \mathbf y = \sequence {y_n}_{n \mathop \in \N} \in c$.
Suppose $\mathbf x$ and $\mathbf y$ converge to $x$ and $y$ respectively.
Let $\alpha \in \R$.


Distributivity













\(\ds \map L {\mathbf x + \mathbf y}\)

\(=\)







\(\ds \map {\lim_{n \mathop \to \infty} } {x_n + y_n}\)





Definition of Infinite Limit Operator














\(\ds \)

\(=\)







\(\ds x + y\)





Sum Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} x_n + \lim_{n \mathop \to \infty} y_n\)




















\(\ds \)

\(=\)







\(\ds \map L {\mathbf x} + \map L {\mathbf y}\)





Definition of Infinite Limit Operator



$\Box$


Positive homogenity













\(\ds \map L {\alpha \mathbf x}\)

\(=\)







\(\ds \map {\lim_{n \mathop \to \infty} } {\alpha x_n}\)




















\(\ds \)

\(=\)







\(\ds \alpha x\)





Multiple Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \alpha \lim_{n \mathop \to \infty} {x_n}\)




















\(\ds \)

\(=\)







\(\ds \alpha \map L {\mathbf x}\)





Definition of Infinite Limit Operator



$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.1$: Continuous and linear maps. Linear transformations




