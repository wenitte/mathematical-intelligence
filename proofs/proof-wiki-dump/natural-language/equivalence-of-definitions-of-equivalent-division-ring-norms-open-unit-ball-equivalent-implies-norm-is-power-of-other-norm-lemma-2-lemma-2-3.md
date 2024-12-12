# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Equivalent_Division_Ring_Norms/Open_Unit_Ball_Equivalent_implies_Norm_is_Power_of_Other_Norm/Lemma_2/Lemma_2.3

Theorem
Let $R$ be a division ring.
Let $\norm {\, \cdot \,}_1: R \to \R_{\ge 0}$ and $\norm {\, \cdot \,}_2: R \to \R_{\ge 0}$ be norms on $R$.
Let $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ satisfy:

$\forall x \in R:\norm x_1 < 1 \iff \norm x_2 < 1$

Let $x, y \in R \setminus 0_R$ such that $\norm x_1, \norm y_1 \ne 1$.

Let $\alpha = \dfrac {\log \norm x_1} {\log \norm x_2}$ and $\beta = \dfrac {\log \norm y_1} {\log \norm y_2}$.

Then:

$\alpha = \beta$


Proof
Because $x, y \in R \setminus 0_R$:

$\norm x_1 , \norm y_1, \norm x_2 , \norm y_2 > 0$.
Because $\norm{x}_1 , \norm {y}_1 \ne 1$, by Lemma 2:

$\norm x_2 , \norm y_2 \ne 1$.
Hence:

$\log \norm x_1 , \log \norm y_1, \log \norm x_2, \log \norm y_2 \ne 0$
and $\alpha, \beta$ are well-defined.

Let $r = \dfrac n m \in \Q$ be any rational number where $n, m \in \Z$ are integers and $m \ne 0$.
Then:














\(\ds \norm y_1^n < \norm x_1^m\)

\(\leadstoandfrom\)







\(\ds \dfrac {\norm y_1^n} {\norm x_1^m} < 1\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds \norm y_1^n \norm {x^{-1} }_1^m\)





Norm of Inverse in Division Ring














\(\ds \)

\(\leadstoandfrom\)







\(\ds \norm {y^n}_1 \norm {\paren {x^{-1} }^m}_1 < 1\)





Norm Axiom $(\text N 2)$: Multiplicativity














\(\ds \)

\(\leadstoandfrom\)







\(\ds \norm {y^n \paren {x^{-1} }^m}_1 < 1\)





Norm Axiom $(\text N 2)$: Multiplicativity














\(\ds \)

\(\leadstoandfrom\)







\(\ds \norm {y^n \paren {x^{-1} }^m}_2 < 1\)





By assumption














\(\ds \)

\(\leadstoandfrom\)







\(\ds \norm {y^n}_2 \norm {\paren {x^{-1} }^m}_2 < 1\)





Norm Axiom $(\text N 2)$: Multiplicativity














\(\ds \)

\(\leadstoandfrom\)







\(\ds \norm y_2^n \norm {x^{-1} }_2^m\)





Norm Axiom $(\text N 2)$: Multiplicativity














\(\ds \)

\(\leadstoandfrom\)







\(\ds \dfrac {\norm y_2^n} {\norm x_2^m} < 1\)





Norm of Inverse in Division Ring














\(\ds \)

\(\leadstoandfrom\)







\(\ds \norm y_2^n < \norm x_2^m\)










By Logarithm is Strictly Increasing:

$\log \norm y_1^n < \log \norm x_1^m \iff \log \norm y_2^n < \log \norm x_2^m$
By Sum of Logarithms:

$n \log \norm y_1 < m \log \norm x_1 \iff n \log \norm y_2 < m \log \norm x_2$

Because $m, \log \norm x_1, \log \norm x_2 \ne 0$:

$r = \dfrac n m < \dfrac {\log \norm x_1} {\log \norm y_1} \iff r = \dfrac n m < \dfrac {\log \norm x_2} {\log \norm y_2}$

By Between two Real Numbers exists Rational Number:

$\dfrac {\log \norm x_1} {\log \norm y_1} = \dfrac {\log \norm x_2} {\log \norm y_2}$

Because $\log \norm x_2, \log \norm y_2 \ne 0$:

$\dfrac {\log \norm x_1} {\log \norm x_2} = \dfrac {\log \norm y_1} {\log \norm y_2}$
That is:

$\alpha = \beta$
$\blacksquare$





