# 

Source: https://proofwiki.org/wiki/Conjugacy_Class_Equation

  This article was Featured Proof between 13 June 2009  and  17 June 2009.


Theorem
Let $G$ be a group.
Let $\order G$ denote the order of $G$.
Let $\map Z G$ denote the center of $G$.
Let $x \in G$.
Let $\map {N_G} x$ denote the normalizer of $x$ in $G$.
Let $\index G {\map {N_G} x}$ denote the index of $\map {N_G} x$ in $G$.

Let $m$ be the number of non-singleton conjugacy classes of $G$.
Let $x_j: j \in \set {1, 2, \ldots, m}$ be arbitrary elements of those conjugacy classes.
Then:

$\ds \order G = \order {\map Z G} + \sum_{j \mathop = 1}^m \index G {\map {N_G} {x_j} }$


Proof 1
From Conjugacy Class of Element of Center is Singleton, all elements of $\map Z G$ form their own singleton conjugacy classes.


Abelian Group
Suppose $G$ is abelian.
Then by definition of abelian group:

$\map Z G = G$
So there are as many conjugacy classes as there are elements in $\map Z G$ and hence in $G$.
So in this case the result certainly holds.
$\Box$


Non-Abelian Group
Now suppose $G$ is non-abelian.
Thus:

$\map Z G \ne G$
and therefore:

$G \setminus \map Z G \ne \O$
From Conjugacy Class of Element of Center is Singleton, all the non-singleton conjugacy classes of $G$ are in $G \setminus \map Z G$.
From the way the theorem has been worded, there are $m$ of them.
Let us choose one element from each of the non-singleton conjugacy classes and call them $x_1, x_2, \ldots, x_m$.
Thus, these conjugacy classes can be written:

$\conjclass {x_1}, \conjclass {x_2}, \ldots, \conjclass {x_m}$
So:

$\ds \order {G \setminus \map Z G} = \sum_{j \mathop = 1}^m \order {\conjclass {x_j} }$
or:

$\ds \order G - \order {\map Z G} = \sum_{j \mathop = 1}^m \order {\conjclass {x_j} }$

From Size of Conjugacy Class is Index of Normalizer:

$\order {\conjclass {x_j} } = \index G {\map {N_G} {x_j} }$
and the result follows.
$\blacksquare$


Proof 2
Let the distinct orbits of $G$ under the conjugacy action be:

$\Orb {x_1}, \Orb {x_2}, \ldots, \Orb {x_s}$
Then from the Partition Equation:

$\order G = \order {\Orb {x_1} } + \order {\Orb {x_2} } + \cdots + \order {\Orb {x_s} }$

From the Orbit-Stabilizer Theorem:

$\order {\Orb {x_i} } \divides \order G, i = 1, \ldots, s$

The result follows from the definition of the conjugacy action.
$\blacksquare$


Also known as
Some sources refer to the Conjugacy Class Equation as the Class Equation.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $25$. Cyclic Groups and Lagrange's Theorem: Exercise $25.16 \ \text{(c)}$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): class equation




