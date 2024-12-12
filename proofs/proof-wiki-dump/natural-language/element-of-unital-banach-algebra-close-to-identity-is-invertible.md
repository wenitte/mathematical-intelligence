# 

Source: https://proofwiki.org/wiki/Element_of_Unital_Banach_Algebra_Close_to_Identity_is_Invertible

Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $\struct {A, \norm \cdot}$ be a unital Banach algebra over $\Bbb F$ with identity element $\mathbf 1_A$. 
Let $a \in A$ be such that: 

$\norm {\mathbf 1_A - a} < 1$

Then $a$ is invertible with inverse element $a^{-1}$ satisfying: 

$\ds \norm {a^{-1} } \le \frac 1 {1 - \norm {\mathbf 1_A - a} }$


Proof
Let:

$x = \mathbf 1_A - a$
From Bound on Norm of Power of Element in Normed Algebra, we have: 

$\norm {x^n} \le \norm x^n$
for each $n \in \Z_{\ge 0}$.
Then we have: 

$\ds \sum_{n \mathop = 0}^\infty \norm {x^n} \le \sum_{n \mathop = 0}^\infty \norm x^n$
Since $\norm x < 1$, we have: 

$\ds \sum_{n \mathop = 0}^\infty \norm x^n$ converges
from Sum of Infinite Geometric Sequence. 
So:

$\ds \sum_{n \mathop = 0}^\infty \norm {x^n}$ converges.
Since $A$ is a Banach space, we have: 

$\ds \sum_{n \mathop = 0}^\infty x^n$ converges.
by Absolutely Convergent Series in Normed Vector Space is Convergent iff Space is Banach.
Let: 

$\ds b = \sum_{n \mathop = 0}^\infty x^n$
We show that: 

$\ds a b = \mathbf 1_A$
and:

$\ds b a = \mathbf 1_A$
Note that: 

$a = \mathbf 1_A - x$
Note that for each $N \in \N$, we have: 














\(\ds \paren {\mathbf 1_A - x} \sum_{n \mathop = 0}^N x^n\)

\(=\)







\(\ds \sum_{n \mathop = 0}^N \paren {\mathbf 1_A - x} x^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^N \paren {x^n - x^{n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \mathbf 1_A - x^{N + 1}\)









and similarly: 














\(\ds \paren {\sum_{n \mathop = 0}^N x^n} \paren {\mathbf 1_A - x}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^N x^n \paren {\mathbf 1_A - x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^N \paren {x^n - x^{n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \mathbf 1_A - x^{N + 1}\)









We have: 














\(\ds \norm {\mathbf 1_A - x^{N + 1} - \mathbf 1_A}\)

\(=\)







\(\ds \norm {x^{N + 1} }\)




















\(\ds \)

\(\le\)







\(\ds \norm x^{N + 1}\)




















\(\ds \)

\(\to\)







\(\ds 0\)





since $\norm x < 1$



so that: 

$\mathbf 1_A - x^{N + 1} \to \mathbf 1_A$
from Sequence in Normed Vector Space Convergent to Limit iff Norm of Sequence minus Limit is Null Sequence.
So taking $N \to \infty$ in: 

$\ds a \sum_{n \mathop = 0}^N x^n = \mathbf 1_A - x^{N + 1}$
we obtain: 

$a b = \mathbf 1_A$
from Product Rule for Sequence in Normed Algebra. 
Similarly taking $N \to \infty$ in: 

$\ds \paren {\sum_{n \mathop = 0}^N x^n} a = \mathbf 1_A - x^{N + 1}$
we obtain: 

$b a = \mathbf 1_A$
So $a$ is invertible with inverse element $b$. 
It remains to show that: 

$\ds \norm b \le \frac 1 {1 - \norm x}$
For each $N \in \N$, we have that:














\(\ds \norm {\sum_{n \mathop = 0}^N x^n}\)

\(\le\)







\(\ds \sum_{n \mathop = 0}^N \norm {x^n}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 0}^N \norm x^n\)





Bound on Norm of Power of Element in Normed Algebra














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 0}^\infty \norm x^n\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1 - \norm x}\)





Sum of Infinite Geometric Sequence



Taking $N \to \infty$, we have: 

$\ds \norm b \le \frac 1 {1 - \norm x} = \frac 1 {1 - \norm {\mathbf 1_A - a} }$
from Modulus of Limit: Normed Vector Space.
$\blacksquare$


Sources
2011: Graham R. Allan and H. Garth Dales: Introduction to Banach Spaces and Algebras ... (previous) ... (next): $4.4$: The group of units




