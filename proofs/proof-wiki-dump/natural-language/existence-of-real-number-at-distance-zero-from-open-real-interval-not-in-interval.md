# 

Source: https://proofwiki.org/wiki/Existence_of_Real_Number_at_Distance_Zero_from_Open_Real_Interval_not_in_Interval

Theorem
Let $S$ be a subset of the set of real numbers $\R$.
Let $x \in \R$ be a real number.
Let $\map d {x, S}$ denote the distance between $x$ and $S$.

Let $I \subseteq \R$ be an open real interval such that $I \ne \O$ and $I \ne \R$.
Then:

$\exists x \notin I: \map d {x, I} = 0$


Proof
From the definition of distance:

$\forall x, y \in \R: \map d {x, y} = \size {x - y}$
Thus:

$\ds \map d {x, S} = \map {\inf_{y \mathop \in S} } {\size {x - y} }$

As $I \ne \O$ and $I \ne \R$ it follows that one of the following applies:










\(\ds \exists a, b \in \R: \, \)



\(\ds I\)

\(=\)







\(\ds \openint a b\)
















\(\ds \exists a \in \R: \, \)



\(\ds I\)

\(=\)







\(\ds \openint a \to\)
















\(\ds \exists b \in \R: \, \)



\(\ds I\)

\(=\)







\(\ds \openint \gets b\)










It follows by the definition of open real interval that $I$ has either an infimum $a$, or a supremum $b$, or both.
Thus the required value of $x$ is either $a$ or $b$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: Exercise $\S 2.13 \ (5) \ \text {(iii)}$




