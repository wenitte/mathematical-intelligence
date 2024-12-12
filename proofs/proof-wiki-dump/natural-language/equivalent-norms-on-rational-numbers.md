# 

Source: https://proofwiki.org/wiki/Equivalent_Norms_on_Rational_Numbers



Theorem
Let $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ be norms on the rational numbers $\Q$.

Then $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ are equivalent if and only if:

$\exists \alpha \in \R_{\gt 0}: \forall n \in \N: \norm n_1 = \norm n_2^\alpha$


Proof
Necessary Condition
Let $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ be equivalent.
By Norm is Power of Other Norm then:

$\exists \alpha \in \R_{\gt 0}: \forall q \in \Q: \norm q_1 = \norm q_2^\alpha$
In particular:

$\exists \alpha \in \R_{\gt 0}: \forall n \in \N: \norm n_1 = \norm n_2^\alpha$
$\Box$


Sufficient Condition
Let $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ satisfy:

$\exists \alpha \in \R_{\gt 0}: \forall n \in \N: \norm n_1 = \norm n_2^\alpha$

By Norm of Negative then:

$\forall n \in \N: \norm {-n}_1 = \norm n_1 = \norm n_2^\alpha = \norm {-n}_2^\alpha$
Hence:

$\forall k \in \Z: \norm k_1 = \norm k_2^\alpha$

By Norm of Quotient then:

$\forall \dfrac a b \in \Q: \norm {\dfrac a b}_1 = \dfrac {\norm a_1} {\norm b_1} = \dfrac {\norm a_2^\alpha} {\norm b_2^\alpha} = \norm {\dfrac a b}_2^\alpha$

By Norm is Power of Other Norm then  $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ are equivalent.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.1$ Absolute Values on $\Q$: Theorem $3.1.3$
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.9$ Metrics and norms on the rational numbers. Ostrowski’s Theorem: Theorem $1.50$




