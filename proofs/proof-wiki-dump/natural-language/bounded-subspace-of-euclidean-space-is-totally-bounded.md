# 

Source: https://proofwiki.org/wiki/Bounded_Subspace_of_Euclidean_Space_is_Totally_Bounded


This article needs to be linked to other articles.In particular: here and thereYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\struct {\R^n, \norm {\, \cdot \,} }$ be a Euclidean space, where $\norm {\, \cdot \,}$ denotes the usual metric.
Let $M$ be a metric subspace of $\struct {\R^n, \norm {\, \cdot \,} }$.
Let $M$ be bounded.

Then $M$ is totally bounded.


Proof
As $M$ is bounded, it has a finite diameter $R$.
Consider arbitary $x, y \in \R^n$, expressed in their usual coordinates.














\(\ds \norm {y - x}\)

\(=\)







\(\ds \sqrt {\sum_{i \mathop = 1}^n \paren {y_i - x_i}^2}\)




















\(\ds \)

\(\le\)







\(\ds \sqrt {n \max_i \set {\paren {y_i - x_i}^2} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt n \max_i \size {y_i - x_i}\)









Thus, up to a positive constant multiple, the inequality:

$\ds \sup_{x, y \mathop \in M} \max_i \size {y_i - x_i} \le R$
implies that $M$ is bounded with radius $R$.
But this inequality is a characterization of an $n$-cube.
Because $R \le 2 R \sqrt n$ for all $R > 0$, $M$ can be placed inside an $n$-cube of the form $\closedint {c - R} {c + R}^n$, by diameter of $n$-cube.

For any $\epsilon > 0$, pick an integer $k > \sqrt n R \epsilon^{-1}$.
Consider a normal subdivision of $\closedint {c - R} {c + R}$ into $k$ pieces.
The length of each subinterval is then:

$\dfrac {\paren {c + R - \paren {c - R} } } k = 2 R k^{-1}$
For any subinterval chosen this way, the product of $n$ copies of such an interval will itself be a cube, because the subintervals were chosen as to all be the same length.
By diameter of $n$-cube, each sub-cube has diameter $2 R k^{-1} \sqrt n$
By the choice of $k$, we have $2 R k^{-1} \sqrt n < 2 \epsilon$
That means that each sub-cube can fit inside an open ball $n$-ball of radius $\epsilon$.
This in turn implies that $M$ can be covered by a finite number of balls with radius $\epsilon$.
Thus $M$ is totally bounded by definition, as $\epsilon$ was arbitrary.
$\blacksquare$


Sources
1984: Gerald B. Folland: Real Analysis: Modern Techniques and their Applications : $\S \text {P}.6$




