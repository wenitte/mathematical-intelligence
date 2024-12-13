# 

Source: https://proofwiki.org/wiki/Image_of_Convex_Set_under_Linear_Transformation_is_Convex

Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $X$ and $Y$ be vector spaces over $\Bbb F$.
Let $C \subseteq X$ be convex.
Let $T : X \to Y$ be a linear transformation.

Then $\map T C \subseteq Y$ is convex.


Proof
Let $y_1, y_2 \in \map T C$ and $\lambda \in \closedint 0 1$. 
Then, there exists $x_1, x_2 \in C$ such that: 

$y_1 = T x_1$
and:

$y_2 = T x_2$
Then, we have: 

$\lambda y_1 + \paren {1 - \lambda} y_2 = \lambda T x_1 + \paren {1 - \lambda} T x_2 = \map T {\lambda x_1 + \paren {1 - \lambda} x_2}$
Since $C$ is convex, we have: 

$\lambda x_1 + \paren {1 - \lambda} x_2 \in C$
So, we have: 

$\map T {\lambda x_1 + \paren {1 - \lambda} x_2} \in \map T C$
That is: 

$\lambda y_1 + \paren {1 - \lambda} y_2 \in \map T C$
So $\map T C$ is convex.
$\blacksquare$





