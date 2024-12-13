# 

Source: https://proofwiki.org/wiki/Kummer%27s_Hypergeometric_Theorem/Lemma_1

Lemma for Kummer's Hypergeometric Theorem
$\ds \lim_{y \mathop \to \infty} \dfrac {y^{\underline k} } {\paren {y + n + 1}^{\overline k} } = 1$
where $y^{\underline k}$ denotes the $k$th falling factorial of $y$.


Proof
From Properties of Limit at Infinity of Real Function: Product Rule, we have:














\(\ds \lim_{y \mathop \to \infty} \dfrac {y^{\underline k} } {\paren {y + n + 1}^{\overline k} }\)

\(=\)







\(\ds \lim_{y \mathop \to \infty} \paren {\paren {\dfrac y {\paren {y + n + 1} } } \paren {\dfrac {\paren {y - 1} } {\paren {y + n + 2} } } \cdots \paren {\dfrac {\paren {y + 1 - k} } {\paren {y + n + k} } } }\)





Definition of Rising Factorial and Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds \lim_{y \mathop \to \infty} \paren {\dfrac y {\paren {y + n + 1} } } \lim_{y \mathop \to \infty} \paren {\dfrac {\paren {y - 1} } {\paren {y + n + 2} } } \cdots \lim_{y \mathop \to \infty} \paren {\dfrac {\paren {y + 1 - k} } {\paren {y + n + k} } }\)





Properties of Limit at Infinity of Real Function: Product Rule




From L'Hôpital's Rule:Corollary 2, we have:

$\ds \lim_{y \mathop \to a^+} \frac {\map f y} {\map g y} = \lim_{y \mathop \to a^+} \frac {\map {f'} y} {\map {g'} y}$
In the present example, for the $k$th limit, we have:

$\map {f_k} y = \paren {y + 1 - k}$
$\map {g_k} y = \paren {y + n + k}$
Therefore taking the derivative of the numerator $\map {f_k} y$ and denominator $\map {g_k} y$ with respect to $y$, we proceed:














\(\ds \lim_{y \mathop \to \infty} \dfrac {y + 1 - k} {y + n + k}\)

\(=\)







\(\ds \lim_{y \mathop \to \infty} \dfrac {\map {\frac \d {\d y} } {y + 1 - k} } {\map {\frac \d {\d y} } {y + n + k} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{y \mathop \to \infty} \dfrac {1 + 0 + 0} {1 + 0 + 0}\)





Derivative of Identity Function, Derivative of Constant














\(\ds \)

\(=\)







\(\ds 1\)





trivially




Therefore:














\(\ds \lim_{y \mathop \to \infty} \dfrac {y^{\underline k} } {\paren {y + n + 1}^{\overline k} }\)

\(=\)







\(\ds \lim_{y \mathop \to \infty} \paren {\paren {\dfrac y {\paren {y + n + 1} } } \paren {\dfrac {\paren {y - 1} } {\paren {y + n + 2} } } \cdots \paren {\dfrac {\paren {y + 1 - k} } {\paren {y + n + k} } } }\)





Definition of Rising Factorial and Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds \lim_{y \mathop \to \infty} \paren {\dfrac y {\paren {y + n + 1} } } \lim_{y \mathop \to \infty} \paren {\dfrac {\paren {y - 1} } {\paren {y + n + 2} } } \cdots \lim_{y \mathop \to \infty} \paren {\dfrac {\paren {y + 1 - k} } {\paren {y + n + k} } }\)





Properties of Limit at Infinity of Real Function: Product Rule














\(\ds \)

\(=\)







\(\ds \lim_{y \mathop \to \infty} \dfrac 1 1 \lim_{y \mathop \to \infty} \dfrac 1 1 \cdots \lim_{y \mathop \to \infty} \dfrac 1 1\)





L'Hôpital's Rule:Corollary 2














\(\ds \)

\(=\)







\(\ds 1^k\)




















\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$





