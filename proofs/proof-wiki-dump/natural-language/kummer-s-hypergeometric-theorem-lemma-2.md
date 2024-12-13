# 

Source: https://proofwiki.org/wiki/Kummer%27s_Hypergeometric_Theorem/Lemma_2

Lemma for Kummer's Hypergeometric Theorem
$\ds \lim_{y \mathop \to \infty} \dfrac {\paren {y + \dfrac n 2 + 1}^{\overline x} } {\paren {y + n + 1}^{\overline x} } = 1$
where $y^{\overline x}$ denotes the $x$th rising factorial of $y$.


Proof
From Properties of Limit at Infinity of Real Function: Product Rule, we have:














\(\ds \lim_{y \mathop \to \infty} \dfrac {\paren {y + \dfrac n 2 + 1}^{\overline x} } {\paren {y + n + 1}^{\overline x} }\)

\(=\)







\(\ds \lim_{y \mathop \to \infty} \paren {\paren {\dfrac {\paren {y + \dfrac n 2 + 1} } {\paren {y + n + 1} } } \paren {\dfrac {\paren {y + \dfrac n 2 + 2} } {\paren {y + n + 2} } } \cdots \paren {\dfrac {\paren {y + \dfrac n 2 + x} } {\paren {y + n + x} } } }\)





Definition of Rising Factorial














\(\ds \)

\(=\)







\(\ds \lim_{y \mathop \to \infty} \paren {\dfrac {\paren {y + \dfrac n 2 + 1} } {\paren {y + n + 1} } } \lim_{y \mathop \to \infty} \paren {\dfrac {\paren {y + \dfrac n 2 + 2} } {\paren {y + n + 2} } } \cdots \lim_{y \mathop \to \infty} \paren {\dfrac {\paren {y + \dfrac n 2 + x} } {\paren {y + n + x} } }\)





Properties of Limit at Infinity of Real Function: Product Rule




From L'Hôpital's Rule:Corollary 2, we have:

$\ds \lim_{y \mathop \to a^+} \frac {\map f y} {\map g y} = \lim_{y \mathop \to a^+} \frac {\map {f'} y} {\map {g'} y}$
In the present example, for the kth limit, we have:

$\ds \map {f_k} y = \paren {y + \dfrac n 2 + x}$ and
$\ds \map {g_k} y = \paren {y + n + x}$
Therefore taking the derivative of the numerator $\map {f_k} y$ and denominator $\map {g_k} y$ with respect to $y$, we proceed:














\(\ds \lim_{y \mathop \to \infty} \dfrac {y + \dfrac n 2 + x} {y + n + x}\)

\(=\)







\(\ds \lim_{y \mathop \to \infty} \dfrac {\map {\frac \d {\d y} } {y + \dfrac n 2 + x} } {\map {\frac \d {\d y} } {y + n + x} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{y \mathop \to \infty} \dfrac {1 + 0 + 0} {1 + 0 + 0}\)





Derivative of Identity Function, Derivative of Constant














\(\ds \)

\(=\)







\(\ds 1\)





trivially




Therefore:














\(\ds \lim_{y \mathop \to \infty} \dfrac {\paren {y + \dfrac n 2 + 1}^{\overline x} } {\paren {y + n + 1}^{\overline x} }\)

\(=\)







\(\ds \lim_{y \mathop \to \infty} \paren {\paren {\dfrac {\paren {y + \dfrac n 2 + 1} } {\paren {y + n + 1} } } \paren {\dfrac {\paren {y + \dfrac n 2 + 2} } {\paren {y + n + 2} } } \cdots \paren {\dfrac {\paren {y + \dfrac n 2 + x} } {\paren {y + n + x} } } }\)





Definition of Rising Factorial














\(\ds \)

\(=\)







\(\ds \lim_{y \mathop \to \infty} \paren {\dfrac {\paren {y + \dfrac n 2 + 1} } {\paren {y + n + 1} } } \lim_{y \mathop \to \infty} \paren {\dfrac {\paren {y + \dfrac n 2 + 2} } {\paren {y + n + 2} } } \cdots \lim_{y \mathop \to \infty} \paren {\dfrac {\paren {y + \dfrac n 2 + x} } {\paren {y + n + x} } }\)





Properties of Limit at Infinity of Real Function: Product Rule














\(\ds \)

\(=\)







\(\ds \lim_{y \mathop \to \infty} \dfrac 1 1 \lim_{y \mathop \to \infty} \dfrac 1 1 \cdots \lim_{y \mathop \to \infty} \dfrac 1 1\)





L'Hôpital's Rule:Corollary 2














\(\ds \)

\(=\)







\(\ds 1^x\)




















\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$





