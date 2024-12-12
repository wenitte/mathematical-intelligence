# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Inequality/Proof_1



Theorem
$\ds \sum {r_i}^2 \sum {s_i}^2 \ge \paren {\sum {r_i s_i} }^2$
where all of $r_i, s_i \in \R$.


Proof
For any $\lambda \in \R$, we define $f: \R \to \R$ as the function:

$\ds \map f \lambda = \sum {\paren {r_i + \lambda s_i}^2}$
Now:

$\map f \lambda \ge 0$
because it is the sum of squares of real numbers.

Hence:










\(\ds \forall \lambda \in \R: \, \)



\(\ds \map f \lambda\)

\(\equiv\)

\(\, \ds \sum {\paren { {r_i}^2 + 2 \lambda r_i s_i + \lambda^2 {s_i}^2} } \, \)

\(\, \ds \ge \, \)



\(\ds 0\)




















\(\ds \)

\(\equiv\)

\(\, \ds \sum { {r_i}^2} + 2 \lambda \sum {r_i s_i} + \lambda^2 \sum { {s_i}^2} \, \)

\(\, \ds \ge \, \)



\(\ds 0\)









This is a quadratic equation in $\lambda$.
From Solution to Quadratic Equation:

$\ds a \lambda^2 + b \lambda + c = 0: a = \sum { {s_i}^2}, b = 2 \sum {r_i s_i}, c = \sum { {r_i}^2}$

The discriminant of this equation (that is $b^2 - 4 a c$) is:

$\ds D := 4 \paren {\sum {r_i s_i} }^2 - 4 \sum { {r_i}^2} \sum { {s_i}^2}$

Aiming for a contradiction, suppose $D$ is (strictly) positive.
Then $\map f \lambda = 0$ has two distinct real roots, $\lambda_1 < \lambda_2$, say.
From Sign of Quadratic Function Between Roots, it follows that $f$ is (strictly) negative somewhere between $\lambda_1$ and $\lambda_2$.
But we have:

$\forall \lambda \in \R: \map f \lambda \ge 0$

From this contradiction it follows that:

$D \le 0$
which is the same thing as saying:

$\ds \sum { {r_i}^2} \sum { {s_i}^2} \ge \paren {\sum {r_i s_i} }^2$
$\blacksquare$


Source of Name
This entry was named for Augustin Louis Cauchy.


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.2$: Examples: Example $2.2.1$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 1$: Real Numbers: $\S 1.11$: Example




