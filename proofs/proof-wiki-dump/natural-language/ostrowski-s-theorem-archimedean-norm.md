# 

Source: https://proofwiki.org/wiki/Ostrowski%27s_Theorem/Archimedean_Norm



Theorem
Let $\norm {\, \cdot \,}$ be a non-trivial Archimedean norm on the rational numbers $\Q$.

Then $\norm {\, \cdot \,}$ is equivalent to the absolute value $\size {\, \cdot \,}$.


Proof
By Characterisation of Non-Archimedean Division Ring Norms then:

$\exists n \in \N$ such that $\norm n > 1$

Let $n_0 = \min \set {n \in \N : \norm n > 1}$
By Norm of Unity then:

$n_0 > 1$

Let $\alpha = \dfrac {\log \norm {n_0} } {\log n_0}$
Since $n_0, \norm n_0 > 1$ then:

$\alpha > 0$


Lemma 1.1
$\forall n \in N: \norm n \le n^\alpha$
$\Box$


Lemma 1.2
$\forall n \in N: \norm n \ge n^\alpha$
$\Box$

Hence:

$\forall n \in \N: \norm n = n^\alpha = \size n^\alpha$
By Equivalent Norms on Rational Numbers then $\norm {\, \cdot \,}$ is equivalent to the absolute value $\size {\, \cdot \,}$.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.1$ Absolute Values on $\Q$, Theorem $3.1.3$
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.9$ Metrics and norms on the rational numbers. Ostrowski’s Theorem, Theorem $1.50$




