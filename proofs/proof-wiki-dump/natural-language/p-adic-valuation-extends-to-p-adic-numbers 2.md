# 

Source: https://proofwiki.org/wiki/P-adic_Valuation_Extends_to_P-adic_Numbers



Theorem
Let $p$ be a prime number.
Let $\nu_p^\Q: \Q \to \Z \cup \set {+\infty}$ be the $p$-adic valuation on the set of  rational numbers.

Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\nu_p: \Q_p \to \Z \cup \set {+\infty}$ be defined by:

$\forall x \in \Q_p : \map {\nu_p} x = \begin {cases}
-\log_p \norm x_p : x \ne 0 \\
+\infty : x = 0
\end{cases}$

Then $\nu_p: \Q_p \to \Z \cup \set {+\infty}$ is a valuation that extends $\nu_p^\Q$ from $\Q$ to $\Q_p$.


Proof
It needs to be shown that $\nu_p$:

$(1): \quad \nu_p$ is a mapping into $\Z \cup \set {+\infty}$
$(2): \quad \nu_p$ satisfies the valuation axioms $\text V 1$, $\text V 2$ and $\text V 3$
$(3): \quad \nu_p$ extends $\nu_p^\Q$.

Let $x, y \in \Q_p$.


$\nu_p$ is a mapping into $\Z \cup \set {+\infty}$
If $x = 0$ then $\map {\nu_p} x = +\infty$ by definition.

Let $x \ne 0$.
By P-adic Norm of p-adic Number is Power of p then:

$\exists v \in \Z: \norm x_p = p^{-v}$
Hence:














\(\ds \map {\nu_p} x\)

\(=\)







\(\ds -\log_p \norm x_p\)





Since $x \ne 0$














\(\ds \)

\(=\)







\(\ds -\log_p p^{-v}\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds -\paren {-v}\)





Definition of Real General Logarithm














\(\ds \)

\(=\)







\(\ds v\)




















\(\ds \)

\(\in\)







\(\ds \Z\)





Definition of $v$



$\Box$


$\nu_p$ satisfies $(\text V 1)$
If $x = 0$ then:














\(\ds \map {\nu_p} {0 \cdot y}\)

\(=\)







\(\ds \map {\nu_p} 0\)




















\(\ds \)

\(=\)







\(\ds +\infty\)





Definition of $\nu_p$














\(\ds \)

\(=\)







\(\ds +\infty \cdot \map {\nu_p} y\)





Definition of Extended Real Multiplication














\(\ds \)

\(=\)







\(\ds \map {\nu_p} 0 \cdot \map {\nu_p} y\)





Definition of $\nu_p$




Similarly, if $y = 0$ then:














\(\ds \map {\nu_p} {x \cdot 0}\)

\(=\)







\(\ds \map {\nu_p} x \cdot \map {\nu_p} 0\)










If $x \ne 0, y \ne 0$ then:














\(\ds \map {\nu_p} {x y}\)

\(=\)







\(\ds -\log \norm {x y}_p\)





$x y \ne 0$














\(\ds \)

\(=\)







\(\ds -\log \norm x_p \norm y_p\)





Non-Archimedean Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds -\paren {\log \norm x_p + \log \norm y_p}\)





Sum of General Logarithms














\(\ds \)

\(=\)







\(\ds \paren {-\log \norm x_p} + \paren {-\log \norm y_p}\)




















\(\ds \)

\(=\)







\(\ds \map {\nu_p} x + \map {\nu_p} y\)





Definition of $\nu_p$



$\Box$


$\nu_p$ satisfies $(\text V 2)$
If $x = 0$ then $\map {\nu_p} x = +\infty$ by definition.
If $x \ne 0$ then $\map {\nu_p} x \in \Z$ by the above.
Hence:

$\map {\nu_p} x = +\infty \iff x = 0$
$\Box$


$\nu_p$ satisfies $(\text V 3)$
Suppose $x = 0$.
Then:














\(\ds \map {\nu_p} {0 + y}\)

\(=\)







\(\ds \map {\nu_p} y\)




















\(\ds \)

\(\ge\)







\(\ds \min \set {\map {\nu_p} 0, \map {\nu_p} y}\)





Definition of Min Operation




Similarly, if $y = 0$ then:














\(\ds \map {\nu_p} {x + 0}\)

\(\ge\)







\(\ds \min \set {\map {\nu_p} x, \map {\nu_p} 0}\)










Suppose $x + y = 0$.
Then:














\(\ds \map {\nu_p} {x + y}\)

\(=\)







\(\ds \map {\nu_p} 0\)




















\(\ds \)

\(=\)







\(\ds +\infty\)





Definition of $\nu_p$














\(\ds \)

\(\ge\)







\(\ds \map {\nu_p} x\)





Definition of Extended Real Number Line














\(\ds \)

\(\ge\)







\(\ds \min \set {\map {\nu_p} x, \map {\nu_p} y}\)





Definition of Min Operation




Suppose $x \ne 0, y \ne 0, x + y \ne 0$.
Then:














\(\ds \norm {x + y}\)

\(\le\)







\(\ds \max \set {\norm x_p, \norm y_p}\)





Non-Archimedean Norm Axiom $\text N 4$: Ultrametric Inequality














\(\ds \)

\(\)







\(\ds \)














\(\ds \leadsto \ \ \)





\(\ds \log \norm {x + y}\)

\(\le\)







\(\ds \log \max \set {\norm x_p, \norm y_p}\)





Logarithm is Strictly Increasing














\(\ds \)

\(=\)







\(\ds \max \set {\log \norm x_p, \log \norm y_p}\)





Logarithm is Strictly Increasing














\(\ds \)

\(\)







\(\ds \)














\(\ds \leadsto \ \ \)





\(\ds -\log \norm {x + y}\)

\(\ge\)







\(\ds -\max \set {\log \norm x_p, \log \norm y_p}\)





Inversion Mapping Reverses Ordering in Ordered Group














\(\ds \)

\(=\)







\(\ds \min \set {-\log \norm x_p, -\log \norm y_p}\)




















\(\ds \)

\(\)







\(\ds \)














\(\ds \leadsto \ \ \)





\(\ds \map {\nu_p} {x + y}\)

\(\ge\)







\(\ds \min \set {\map {\nu_p} x, \map {\nu_p} y}\)





Definition of $\nu_p$



$\Box$


$\nu_p$ extends $\nu_p^\Q$
Let $x \in \Q$.
If $x = 0$ then $\map {\nu_p} 0 = +\infty = \map {\nu_p^\Q} 0$.

Let $x \ne 0$.
From Rational Numbers are Dense Subfield of P-adic Numbers:

the $p$-adic norm $\norm {\,\cdot\,}_p$ on $p$-adic numbers $\Q_p$ is an extension of the $p$-adic norm $\norm {\,\cdot\,}_p$ on rational numbers $\Q$ by definition.
Hence:














\(\ds \map {\nu_p} x\)

\(=\)







\(\ds -\log \norm x_p\)





Definition of $\nu_p$














\(\ds \)

\(=\)







\(\ds \map {\nu_p^\Q} x\)





Definition of $p$-adic norm $\norm {\,\cdot\,}_p$ on rational numbers $\Q$



$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.3$ Exploring $\Q_p$: Lemma $3.3.2$




