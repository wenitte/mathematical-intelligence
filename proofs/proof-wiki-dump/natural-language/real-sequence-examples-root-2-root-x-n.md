# 

Source: https://proofwiki.org/wiki/Real_Sequence/Examples/Root_(2_%2B_Root_x(n))

Example of Real Sequence
Let $\sequence {x_n}$ denote the real sequence defined as:

$x_n = \begin {cases} \sqrt 2 : n = 1 \\ \sqrt {2 + \sqrt {x_{n - 1} } } & : n > 1 \end {cases}$
Then $\sequence {x_n}$ converges to a root of $x^4 - 4 x^2 - x + 4 = 0$ between $\sqrt 3$ and $2$.


Proof
  $x^4 - 4 x^2 - x + 4 = 0$
Because $x_1 = \sqrt 2$, we have that:

$x_2 > \sqrt 2 = x_1$
Suppose that:

$x_n > x_n - 1$
for some $n \ge 2$.
Then:














\(\ds x_{n + 1}\)

\(=\)







\(\ds \sqrt {2 + \sqrt {x_n} }\)




















\(\ds \)

\(>\)







\(\ds \sqrt {2 + \sqrt {x_{n - 1} } }\)




















\(\ds \)

\(=\)







\(\ds x_n\)









Hence $\sequence {x_n}$ is seen to be strictly increasing.

Next we note that if $x_n > 1$:














\(\ds x_{n + 1}\)

\(=\)







\(\ds \sqrt {2 + \sqrt {x_n} }\)




















\(\ds \)

\(>\)







\(\ds \sqrt {2 + \sqrt 1}\)




















\(\ds \)

\(=\)







\(\ds \sqrt 3\)









As $x_n$ is strictly increasing, it follows that $x_n > \sqrt 3$ for all $n \ge 1$.
Similarly, we note that if $x_n < 2$:














\(\ds x_{n + 1}\)

\(=\)







\(\ds \sqrt {2 + \sqrt {x_n} }\)




















\(\ds \)

\(<\)







\(\ds \sqrt {2 + \sqrt 2}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {2 + 2}\)




















\(\ds \)

\(=\)







\(\ds 2\)









So $\sequence {x_n} \to k$ where $\sqrt 3 < k \le 2$.
By definition of $x_n$:














\(\ds k\)

\(=\)







\(\ds \sqrt {2 + \sqrt k}\)














\(\ds \leadsto \ \ \)





\(\ds k^2\)

\(=\)







\(\ds 2 + \sqrt k\)














\(\ds \leadsto \ \ \)





\(\ds \paren {k^2 - 2}^2\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds k^4 - 4 k^2 + 4\)

\(=\)







\(\ds k\)














\(\ds \leadsto \ \ \)





\(\ds k^4 - 4 k^2 - k + 4\)

\(=\)







\(\ds 0\)









By investigating the shape of the graph, it is seen that this is the only root of $x^4 - 4 x^2 - x + 4 = 0$ strictly greater than $1$.
The other root, as is seen by inspection, is in fact $1$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: Exercise $1.5: 14$




