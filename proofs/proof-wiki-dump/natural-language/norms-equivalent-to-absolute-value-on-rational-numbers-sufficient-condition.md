# 

Source: https://proofwiki.org/wiki/Norms_Equivalent_to_Absolute_Value_on_Rational_Numbers/Sufficient_Condition



Theorem
Let $\alpha \in \R_{> 0}$.
Let $\norm {\,\cdot\,}: \Q \to \R$ be the mapping defined by:

$\forall x \in \Q: \norm x = \size x^\alpha$
where $\size x$ is the absolute value of $x$ in $\Q$.
Then:

$\alpha \le 1 \implies \norm {\,\cdot\,}$ is a norm on $\Q$


Proof
Suppose $\alpha \le 1$.
It is shown that $\norm {\,\cdot\,}$ satisfies the norm axioms $(\text N 1)$-$(\text N 3)$.


Norm Axiom $\text N 1$: Positive Definiteness
Let $x \in \Q$.














\(\ds \norm x = 0\)

\(\leadstoandfrom\)







\(\ds \size x^\alpha = 0\)





Definition of $\norm {\,\cdot\,}$














\(\ds \)

\(\leadstoandfrom\)







\(\ds \size x = 0\)





Definition of $a$ to the power of $r$ for $a \in \R_{\ge 0}$ and $r \in \R_{> 0}$














\(\ds \)

\(\leadstoandfrom\)







\(\ds x = 0\)





Absolute Value is Norm and Norm Axiom $\text N 1$: Positive Definiteness



$\Box$


Norm Axiom $\text N 2$: Multiplicativity
Let $x, y \in \Q$.
Then:














\(\ds \norm {x y}\)

\(=\)







\(\ds \size {x y}^\alpha\)





Definition of $\norm {\,\cdot\,}$














\(\ds \)

\(=\)







\(\ds \paren {\size x \size y}^\alpha\)





Absolute Value is Norm and Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds \size x^\alpha \size {y}^\alpha\)





Power of Product














\(\ds \)

\(=\)







\(\ds \norm x \norm y\)





Definition of $\norm {\,\cdot\,}$



$\Box$


Norm Axiom $\text N 3$: Triangle Inequality
Let $x, y \in \Q$.
Without loss of generality, let $\norm y < \norm x$.

If $\norm x = 0$ then $\norm y = 0$.
By Norm Axiom $\text N 1$: Positive Definiteness above:

$x = y = 0$
Hence:














\(\ds \norm {x + y}\)

\(=\)







\(\ds \norm 0\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds 0 + 0\)




















\(\ds \)

\(=\)







\(\ds \norm x + \norm y\)










If $\norm x > 0$ then:

$\norm x > 0 \leadstoandfrom \size x^\alpha > 0 \leadstoandfrom \size x > 0$
Hence:














\(\ds \norm {x + y}\)

\(=\)







\(\ds \size {x + y}^\alpha\)




















\(\ds \)

\(\le\)







\(\ds \paren {\size x + \size y}^\alpha\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \size x^\alpha \paren {1 + \dfrac {\size y} {\size x} }^\alpha\)




















\(\ds \)

\(\le\)







\(\ds \size x^\alpha \paren {1 + \dfrac {\size y} {\size x} }\)





Power Function on Base Greater than One is Strictly Increasing














\(\ds \)

\(\le\)







\(\ds \size x^\alpha \paren {1 + \dfrac {\size y^\alpha} {\size x^\alpha} }\)





Power Function on Base between Zero and One is Strictly Decreasing














\(\ds \)

\(\le\)







\(\ds \size x^\alpha + \size y^\alpha\)




















\(\ds \)

\(=\)







\(\ds \norm x + \norm y\)









$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.2$ Normed fields, Proposition $1.11$




