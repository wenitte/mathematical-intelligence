# 

Source: https://proofwiki.org/wiki/Antiassociative_Structure_of_Finite_Order

Theorem
Let $n \in \N$ such that $n > 2$.

Then there exists an algebraic structure $\struct {S, \circ}$ of order $n$ such that $\circ$ is antiassociative on $S$.


Proof
Let $S = \set {a_0, \ldots, a_{n - 1} }$.
Let $\circ$ be a binary operation defined on $S$ such that:

$\forall x \in S: x \circ a_i = a_{\paren {i + 1} \pmod n}$

Then $\forall j, k, m \in \closedint 0 {n - 1}$:














\(\ds \paren {a_j \circ a_k} \circ a_m\)

\(=\)







\(\ds a_{\paren {m + 1} \pmod n}\)









and:














\(\ds a_j \circ \paren {a_k \circ a_m}\)

\(=\)







\(\ds a_j \circ a_{\paren {m + 1} \pmod n}\)




















\(\ds \)

\(=\)







\(\ds a_{\paren {m + 2} \pmod n}\)









As $n \ge 2$ it follows that:

$m + 1 \ne m + 2 \pmod n$
and so $\forall j, k, m \in \closedint 0 {n - 1}$:

$\paren {a_j \circ a_k} \circ a_m \ne a_j \circ \paren {a_k \circ a_m}$

Hence the result.
$\blacksquare$





