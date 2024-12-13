# 

Source: https://proofwiki.org/wiki/Liouville%27s_Theorem_(Number_Theory)/Examples/Root_2

Example of Use of Liouville's Theorem (Number Theory)
Let $x$ be an irrational number that is algebraic of degree $n$.
Then there exists a constant $c > 0$ (which can depend on $x$) such that:

$\size {x - \dfrac p q} \ge \dfrac c {q^n}$
for every pair $p, q \in \Z$ with $q \ne 0$.


Example
Applying Liouville's Theorem (Number Theory) to $\sqrt 2$:

$\size {\sqrt 2 - \dfrac p q} \ge \dfrac c {q^2} \implies 0 \lt c \le 6 - 4 \sqrt 2$
for every pair $p, q \in \Z$ with $q \ne 0$.


Proof
We begin by deriving a formula that will calculate the constant c:














\(\ds \size {\sqrt 2 - \dfrac p q}\)

\(\ge\)







\(\ds \dfrac c {q^2}\)





$\sqrt 2$ is Algebraic of Degree $2$








\(\ds \leadsto \ \ \)





\(\ds q^2 \size {\sqrt 2 - \dfrac p q}\)

\(\ge\)







\(\ds c\)














\(\ds \leadsto \ \ \)





\(\ds \size {q^2 \sqrt 2 - p q }\)

\(\ge\)







\(\ds c\)










Next, we know that Convergents are Best Approximations to an irrational number
From Continued Fraction Expansion of $\sqrt 2$:

$\sqrt 2 = \sqbrk {1, \sequence 2}$

Then $p_i$ $q_i$ and $c_i$ are as follows:

$\begin{array}{r|cccccccccc}
i & 0 & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
p_i & 1 & 3 & 7 & 17 & 41 & 99 & 239 \\
q_i & 1 & 2 & 5 & 12 & 29 & 70 & 169 \\
\paren {\dfrac {p_i} {q_i} } & 1.0000 & 1.5000 & 1.4000 & 1.4167 & 1.4138 & 1.4143 & 1.4142 \\
c_i & \sqrt 2 - 1 & 6 - 4 \sqrt 2 & 25 \sqrt 2 - 35 & 204 - 144 \sqrt 2 & 841 \sqrt 2 - 1189 & 6930 - 4900 \sqrt 2 & 28561 \sqrt 2 - 40391 \\
c_i & 0.4142 & 0.3431 & 0.3553 & 0.3532 & 0.3536 & 0.3535 & 0.3536 \\
\hline
\end{array}$

So for $\sqrt 2$, $c = 6 - 4 \sqrt 2$ (that is, the minimum constant $c_i$ of all of the convergents $\dfrac {p_i } {q_i }$ of $\sqrt 2$) will ensure that:

$\size {\sqrt 2 - \dfrac p q} \ge \dfrac c {q^2}$
for every pair $p, q \in \Z$ with $q \ne 0$.
$\blacksquare$

To further illustrate the concept, we review the graph of the function $\map f x = x^2 - 2$ in the diagram below.
For all convergents $\dfrac {p_i} {q_i}$ of $\sqrt 2$: 














\(\ds \size {\map f {\frac {p_i} {q_i} } }\)

\(=\)







\(\ds \size {\frac 1 { {q_i}^2} }\)




















\(\ds \size {\delta {y_i} }\)

\(=\)







\(\ds \size {\frac 1 { {q_i}^2} }\)





The result of inputting the convergent $\dfrac {p_i } {q_i }$ into $\map f x = x^2 - 2$














\(\ds \size {\delta {x_i} }\)

\(=\)







\(\ds \size {\sqrt 2 - \frac {p_i} {q_i} }\)





The left hand side of the  Liouville Theorem inequality














\(\ds \frac {\delta {y_i } } {\delta {x_i } }\)

\(=\)







\(\ds \frac {\size {\frac 1 { {q_i}^2 } } } {\size {\sqrt 2 - \frac {p_i} {q_i} } }\)




















\(\ds \frac {\delta {y_i } } {\delta {x_i } }\)

\(=\)







\(\ds \frac 1 {\size {c_i } }\)





The approximation of the derivative of the function at the root (i.e. $\sqrt 2$) is the reciprocal of the constant $c_i$ in the  Liouville Theorem inequality














\(\ds \lim_{\delta x \mathop \to 0} \frac {\delta {y_i } } {\delta {x_i } }\)

\(=\)







\(\ds 2 \sqrt 2\)





Definition 2 of Derivative at Point














\(\ds \lim_{i \mathop \to \infty} \size {\sqrt 2 - \frac {p_i} {q_i} }\)

\(=\)







\(\ds \frac {\frac 1 {2 \sqrt 2} } { {q_i}^2}\)













Adding just one additional line to the table above:

$\begin{array}{r|cccccccccc}
i & 0 & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
p_i & 1 & 3 & 7 & 17 & 41 & 99 & 239 \\
q_i & 1 & 2 & 5 & 12 & 29 & 70 & 169 \\
\paren {\dfrac {p_i } {q_i } } & 1.0000 & 1.5000 & 1.4000 & 1.4167 & 1.4138 & 1.4143 & 1.4142 \\
c_i & \sqrt 2 - 1 & 6 - 4 \sqrt 2 & 25 \sqrt 2 - 35 & 204 - 144 \sqrt 2 & 841 \sqrt 2 - 1189 & 6930 - 4900 \sqrt 2 & 28561 \sqrt 2 - 40391 \\
c_i & 0.4142 & 0.3431 & 0.3553 & 0.3532 & 0.3536 & 0.3535 & 0.3536 \\
\map {f'} x = \dfrac 1 {c_i} & \sqrt 2 + 1 & \sqrt 2 + \dfrac 3 2 & \sqrt 2 + \dfrac 7 5 & \sqrt 2 + \dfrac {17} {12} & \sqrt 2 + \dfrac {41} {29} & \sqrt 2 + \dfrac {99} {70} & \sqrt 2 + \dfrac {239} {169} \\
\hline
\end{array}$
$\blacksquare$





