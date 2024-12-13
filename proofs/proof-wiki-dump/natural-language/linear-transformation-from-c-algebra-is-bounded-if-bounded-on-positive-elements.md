# 

Source: https://proofwiki.org/wiki/Linear_Transformation_from_C*-Algebra_is_Bounded_if_Bounded_on_Positive_Elements

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,}_A}$ be a $\text C^\ast$-algebra.
Let $\struct {B, \norm {\, \cdot \,}_B}$ be a normed vector space over $\C$.
Let $T : A \to B$ be a linear transformation such that there exists $M > 0$ with:

$\norm {T x}_B \le M \norm x_A$ for each $x \in A$ positive.

Then $T$ is bounded.


Proof
From Linear Transformation from Banach *-Algebra is Bounded if Bounded on Hermitian Elements, it is enough to show that there exists $M' > 0$ such that:

$\norm {T x}_B \le M' \norm x_A$ for each $x \in A$ Hermitian.
Let $x \in A$ be Hermitian. 
From Hermitian Element of C*-Algebra Decomposes into Positive Elements, there exists positive $x^+, x^-$ such that:

$x = x^+ - x^-$
with:

$\norm {x^+}_A \le \norm x_A$ and $\norm {x^-}_A \le \norm x_A$
Then we have:














\(\ds \norm {T x}_B\)

\(=\)







\(\ds \norm {T x^+ - T x^-}_B\)





Definition of Linear Transformation














\(\ds \)

\(\le\)







\(\ds \norm {T x^+}_B + \norm {T x^-}_B\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds M \norm {x^+}_A + M \norm {x^-}_A\)




















\(\ds \)

\(\le\)







\(\ds M \norm x_A + M \norm x_A\)




















\(\ds \)

\(=\)







\(\ds 2 M \norm x_A\)









for all $x \in A$. 
Hence $M' = 2 M$ satisfies:

$\norm {T x}_B \le M' \norm x_A$ for each $x \in A$ Hermitian.
So by Linear Transformation from Banach *-Algebra is Bounded if Bounded on Hermitian Elements, $T$ is bounded.
$\blacksquare$





