# 

Source: https://proofwiki.org/wiki/Ostrowski%27s_Theorem/Non-Archimedean_Norm/Lemma_2.1

Theorem
Let $\norm {\, \cdot \,}$ be a non-trivial non-Archimedean norm on the rational numbers $\Q$.

Then:

$\exists n \in \N: 0 < \norm n < 1$.


Proof
Because $\norm {\, \cdot \,}$ is non-trivial:

$\exists \dfrac a b \in \Q : 0 < \norm {\dfrac a b} \mbox { and } \norm {\dfrac a b} \ne 1$
By Norm of Inverse then:

$\norm {\dfrac a b} > 1 \implies \norm {\dfrac b a} < 1$
Hence either $\norm {\dfrac a b} < 1$ or $\norm {\dfrac b a} < 1$.

Without loss of generality assume $\norm {\dfrac a b} < 1$.
By Norm of Quotient then:

$\dfrac {\norm a} {\norm b} < 1$
Hence:

${\norm a} < \norm b$

Let $n = \size a$ and $m = \size b$ where $\size {\,\cdot\,}$ is the absolute value on $\Q$.
Then $n, m \in \N$
By Norm of Negative then:

$\norm n = \norm a$
$\norm m = \norm b$
Hence:

$\norm n < \norm m$

Since $\norm {\, \cdot \,}$ is non-Archimedean then:

$\norm m \le 1$
Hence:

$\norm n < \norm m \le 1$
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.1$ Absolute Values on $\Q$, Theorem $3.1.3$
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.9$ Metrics and norms on the rational numbers. Ostrowski’s Theorem, Theorem $1.50$




