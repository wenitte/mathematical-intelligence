# 

Source: https://proofwiki.org/wiki/Degree_of_Element_of_Finite_Field_Extension_divides_Degree_of_Extension

Theorem
Let $F$ be a field whose zero is $0$ and whose unity is $1$.
Let $K / F$ be a finite field extension of degree $n$.
Let $\alpha \in K$ be algebraic over $F$.

Then the degree of $\alpha$ is a divisor of $n$.


Proof
Let $\alpha \in K$.
The dimension of $K / F$ considered as a vector space is $n$.

Let $S$ be the set defined as:

$S := \set {1, \alpha, \alpha^2, \ldots, \alpha_n}$
We have that:

$\card S = n + 1$
From Cardinality of Linearly Independent Set is No Greater than Dimension:

$S$ is linearly dependent on $F$.
Hence there are scalars $c_0, c_1, \ldots, c_n \in F$, not all zero, such that:

$c_0 + c_1 \alpha + c_2 \alpha^2 + \dotsb + c_n \alpha_n = 0$
which is a polynomial of degree $n$.
So $\alpha$ is algebraic over $F$ with degree no greater than $n$.

Consider $\map F \alpha$, the simple algebraic extension of $F$ on $\alpha$.
We have that:

$F \subseteq \map F \alpha \subseteq K$
Let $\alpha$ be algebraic over $F$ with degree $m$.
Then $\map F \alpha$ is a finite extension of $F$ with degree $\index {\map F \alpha} F = m$.
We also have that $K$ is a finite extension of $F$ with degree $n$.
So by Degree of Field Extensions is Multiplicative:

$\index K F = \index K {\map F \alpha} \index {\map F \alpha} F$
But $\index K F = n$ and $\index {\map F \alpha} F = m$
so it follows that:

$m \divides n$
The result follows.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Field Extensions: $\S 38$. Simple Algebraic Extensions: Theorem $74 \ \text {(i)}$




