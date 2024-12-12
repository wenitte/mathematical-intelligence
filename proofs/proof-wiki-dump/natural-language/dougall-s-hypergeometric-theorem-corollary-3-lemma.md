# 

Source: https://proofwiki.org/wiki/Dougall%27s_Hypergeometric_Theorem/Corollary_3/Lemma

Lemma for Dougall's Hypergeometric Theorem/Corollary 3
$\ds \lim_{z \mathop \to \infty} \dfrac {\paren {x + z + n + 1}^{\overline y} } {\paren {z+ n + 1}^{\overline y} } = 1$
where $x^{\overline y}$ denotes the $y$th rising factorial of $x$.


Proof
From Properties of Limit at Infinity of Real Function: Product Rule, we have:














\(\ds \lim_{z \mathop \to \infty} \dfrac {\paren {x + z + n + 1}^{\overline y} } {\paren {z+ n + 1}^{\overline y} }\)

\(=\)







\(\ds \lim_{z \mathop \to \infty} \paren {\paren {\dfrac {\paren {x + z + n + 1} } {\paren {z + n + 1} } } \paren {\dfrac {\paren {x + z + n + 2} } {\paren {z + n + 2} } } \cdots \paren {\dfrac {\paren {x + z + n + y} } {\paren {z + n + y} } } }\)





Definition of Rising Factorial














\(\ds \)

\(=\)







\(\ds \lim_{z \mathop \to \infty} \paren {\dfrac {\paren {x + z + n + 1} } {\paren {z + n + 1} } } \lim_{z \mathop \to \infty} \paren {\dfrac {\paren {x + z + n + 2} } {\paren {z + n + 2} } }  \cdots \lim_{z \mathop \to \infty} \paren {\dfrac {\paren {x + z + n + y} } {\paren {z + n + y} } }\)





Properties of Limit at Infinity of Real Function: Product Rule




From L'Hôpital's Rule:Corollary 2, we have:

$\ds \lim_{z \mathop \to a^+} \frac {\map f z} {\map g z} = \lim_{z \mathop \to a^+} \frac {\map {f'} z} {\map {g'} z}$
In the present example, for the kth limit, we have $\ds \map {f_k} z = \paren {x + z + n + y}$ and $\ds \map {g_k} z = \paren {z + n + y}$
Therefore taking the derivative of the numerator $\map {f_k} z$ and denominator $\map {g_k} z$ with respect to $z$, we obtain:

$\ds \lim_{z \mathop \to \infty}\paren {\dfrac {\paren {x + z + n + y} } {\paren {z + n + y} } } = \lim_{z \mathop \to \infty} \dfrac 1 1 = 1$
Therefore:














\(\ds \lim_{z \mathop \to \infty} \dfrac {\paren {x + z + n + 1}^{\overline y} } {\paren {z+ n + 1}^{\overline y} }\)

\(=\)







\(\ds \lim_{z \mathop \to \infty} \paren {\paren {\dfrac {\paren {x + z + n + 1} } {\paren {z + n + 1} } } \paren {\dfrac {\paren {x + z + n + 2} } {\paren {z + n + 2} } } \cdots \paren {\dfrac {\paren {x + z + n + y} } {\paren {z + n + y} } } }\)





Definition of Rising Factorial














\(\ds \)

\(=\)







\(\ds \lim_{z \mathop \to \infty} \paren {\dfrac {\paren {x + z + n + 1} } {\paren {z + n + 1} } } \lim_{z \mathop \to \infty} \paren {\dfrac {\paren {x + z + n + 2} } {\paren {z + n + 2} } }  \cdots \lim_{z \mathop \to \infty} \paren {\dfrac {\paren {x + z + n + y} } {\paren {z + n + y} } }\)





Properties of Limit at Infinity of Real Function: Product Rule














\(\ds \)

\(=\)







\(\ds \lim_{z \mathop \to \infty} \dfrac 1 1 \lim_{z \mathop \to \infty} \dfrac 1 1 \cdots \lim_{z \mathop \to \infty} \dfrac 1 1\)





L'Hôpital's Rule:Corollary 2














\(\ds \)

\(=\)







\(\ds 1^y\)




















\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$





