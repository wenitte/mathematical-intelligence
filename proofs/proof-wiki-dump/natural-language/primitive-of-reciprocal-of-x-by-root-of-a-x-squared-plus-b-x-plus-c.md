# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_Root_of_a_x_squared_plus_b_x_plus_c



Theorem
Let $a, b, c \in \R_{\ne 0}$.
Then for $x \in \R$ such that $a x^2 + b x + c > 0$ and $x \ne 0$:
$\quad \ds \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } = \begin {cases}
\dfrac {-1} {\sqrt c} \dfrac {\size x} x \ln \size {\dfrac {2 \sqrt c \sqrt {a x^2 + b x + c} + b x + 2 c} x} + C & : c > 0, b^2 - 4 a c > 0 \\
\dfrac {-1} {\sqrt c} \map {\sinh^{-1} } {\dfrac {b x + 2 c} {\size x \sqrt {4 a c - b^2} } } + C & : c > 0, b^2 - 4 a c < 0 \\
\dfrac {-1} {\sqrt c} \dfrac {\size x} x \ln \size {\dfrac {2 c} x + b} + C & : c > 0, b^2 - 4 a c = 0 \\
\dfrac 1 {\sqrt {-c} } \map \arcsin {\dfrac {b x + 2 c} {\size x \sqrt {\size {b^2 - 4 a c} } } } & : c < 0, b^2 - 4 a c \ne 0  \\
\end {cases}$


Proof 1
Lemma
$\ds \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } = -\int \frac {\d u} {\pm \sqrt {a + b u + c u^2} }$
where $u := \dfrac 1 x$, according to whether $u > 0$ or $u < 0$.
$\Box$

Let $x > 0$, and so $u > 0$.
Then we have:

$\ds \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } = -\int \frac {\d u} {\sqrt {a + b u + c u^2} }$

We consider the two cases where $c > 0$ and $c < 0$.

First we take $c > 0$.
Thus:














\(\ds -\int \frac {\d u} {\sqrt {a + b u + c u^2} }\)

\(=\)







\(\ds \begin {cases}
\dfrac {-1} {\sqrt c} \ln \size {2 \sqrt c \sqrt {a + b u + c u^2} + 2 c u + b} + C & : b^2 - 4 a c > 0 \\
\dfrac {-1} {\sqrt c} \map {\sinh^{-1} } {\dfrac {2 c u + b} {\sqrt {4 a c - b^2} } } + C & : b^2 - 4 a c < 0 \\
\dfrac {-1} {\sqrt c} \ln \size {2 c u + b} + C & : b^2 - 4 a c = 0
\end {cases}\)





Primitive of $\dfrac 1 {\sqrt {a x^2 + b x + c} }$








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds \begin{cases}
\dfrac {-1} {\sqrt c} \ln \size {2 \sqrt c \sqrt {a + b \paren {\frac 1 x} + c \paren {\frac 1 x}^2} + 2 c \paren {\frac 1 x} + b} + C & : b^2 - 4 a c > 0 \\
\dfrac {-1} {\sqrt c} \map {\sinh^{-1} } {\dfrac {2 c \paren {\frac 1 x} + b} {\sqrt {4 a c - b^2} } } + C & : b^2 - 4 a c < 0 \\
\dfrac {-1} {\sqrt c} \ln \size {2 c \paren {\frac 1 x} + b} + C & : b^2 - 4 a c = 0
\end{cases}\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \begin{cases}
\dfrac {-1} {\sqrt c} \ln \size {2 \sqrt c \sqrt {\dfrac {a x^2 + b x + c} {x^2} } + \dfrac {b x + 2 c} x} + C & : b^2 - 4 a c > 0 \\
\dfrac {-1} {\sqrt c} \map {\sinh^{-1} } {\dfrac {b x + 2 c} {x \sqrt {4 a c - b^2} } } + C & : b^2 - 4 a c < 0 \\
\dfrac {-1} {\sqrt c} \ln \size {\dfrac {2 c} x + b} + C & : b^2 - 4 a c = 0
\end{cases}\)





simplifying














\(\ds \)

\(=\)







\(\ds \begin{cases}
\dfrac {-1} {\sqrt c} \ln \size {\dfrac {2 \sqrt c \sqrt {a x^2 + b x + c} + b x + 2 c} x} + C & : b^2 - 4 a c > 0 \\
\dfrac {-1} {\sqrt c} \map {\sinh^{-1} } {\dfrac {b x + 2 c} {\size x \sqrt {4 a c - b^2} } } + C & : b^2 - 4 a c < 0 \\
\dfrac {-1} {\sqrt c} \ln \size {\dfrac {2 c} x + b} + C & : b^2 - 4 a c = 0
\end{cases}\)









$\Box$

Then we take $c < 0$.
Thus:














\(\ds -\int \frac {\d u} {\sqrt {a + b u + c u^2} }\)

\(=\)







\(\ds -\dfrac {-1} {\sqrt {-c} } \map \arcsin {\dfrac {2 c u + b} {\sqrt {\size {b^2 - 4 a c} } } }\)





Primitive of $\dfrac 1 {\sqrt {a x^2 + b x + c} }$








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds \dfrac 1 {\sqrt {-c} } \map \arcsin {\dfrac {2 c \paren {\frac 1 x} + b} {\sqrt {\size {b^2 - 4 a c} } } }\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {-c} } \map \arcsin {\dfrac {b x + 2 c} {x \sqrt {\size {b^2 - 4 a c} } } }\)





simplifying



$\Box$

Now we consider what happens when $x < 0$, and so $u < 0$.
We have:














\(\ds \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds -\int \frac {\d u} {-\sqrt {a + b u + c u^2} }\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\d u} {\sqrt {a + b u + c u^2} }\)









which leads us to:














\(\ds \int \frac {\d u} {\sqrt {a + b u + c u^2} }\)

\(=\)







\(\ds \begin {cases}
\dfrac 1 {\sqrt c} \ln \size {2 \sqrt c \sqrt {a + b u + c u^2} + 2 c u + b} + C & : b^2 - 4 a c > 0 \\
\dfrac 1 {\sqrt c} \map {\sinh^{-1} } {\dfrac {2 c u + b} {\sqrt{4 a c - b^2} } } + C & : b^2 - 4 a c < 0 \\
\dfrac 1 {\sqrt c} \ln \size {2 c u + b} + C & : b^2 - 4 a c = 0
\end {cases}\)





Primitive of $\dfrac 1 {\sqrt {a x^2 + b x + c} }$








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds \begin{cases}
\dfrac 1 {\sqrt c} \ln \size {2 \sqrt c \sqrt {a + b \paren {\frac 1 x} + c \paren {\frac 1 x}^2} + 2 c \paren {\frac 1 x} + b} + C & : b^2 - 4 a c > 0 \\
\dfrac 1 {\sqrt c} \map {\sinh^{-1} } {\dfrac {2 c \paren {\frac 1 x} + b} {\sqrt {4 a c - b^2} } } + C & : b^2 - 4 a c < 0 \\
\dfrac 1 {\sqrt c} \ln \size {2 c \paren {\frac 1 x} + b} + C & : b^2 - 4 a c = 0
\end{cases}\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \begin{cases}
\dfrac 1 {\sqrt c} \ln \size {2 \sqrt c \sqrt {\dfrac {a x^2 + b x + c} {x^2} } + \dfrac {b x + 2 c} x} + C & : b^2 - 4 a c > 0 \\
\dfrac 1 {\sqrt c} \map {\sinh^{-1} } {\dfrac {b x + 2 c} {x \sqrt {4 a c - b^2} } } + C & : b^2 - 4 a c < 0 \\
\dfrac 1 {\sqrt c} \ln \size {\dfrac {2 c} x + b} + C & : b^2 - 4 a c = 0
\end{cases}\)





simplifying














\(\ds \)

\(=\)







\(\ds \begin{cases}
\dfrac {-1} {\sqrt c} \paren {-\ln \size {\dfrac {2 \sqrt c \sqrt {a x^2 + b x + c} + b x + 2 c} x} } + C & : b^2 - 4 a c > 0 \\
\dfrac {-1} {\sqrt c} \map {\sinh^{-1} } {\dfrac {b x + 2 c} {\paren {-x} \sqrt {4 a c - b^2} } } + C & : b^2 - 4 a c < 0 \\
\dfrac {-1} {\sqrt c} \paren {-\ln \size {\dfrac {2 c} x + b} } + C & : b^2 - 4 a c = 0
\end{cases}\)




















\(\ds \)

\(=\)







\(\ds \begin{cases}
\dfrac {-1} {\sqrt c} \dfrac {\size x} x \ln \size {\dfrac {2 \sqrt c \sqrt {a x^2 + b x + c} + b x + 2 c} x} + C & : b^2 - 4 a c > 0 \\
\dfrac {-1} {\sqrt c} \map {\sinh^{-1} } {\dfrac {b x + 2 c} {\size x \sqrt {4 a c - b^2} } } + C & : b^2 - 4 a c < 0 \\
\dfrac {-1} {\sqrt c} \dfrac {\size x} x \ln \size {\dfrac {2 c} x + b} + C & : b^2 - 4 a c = 0
\end{cases}\)









$\Box$

Finally we take $c < 0$.
Thus:














\(\ds \int \frac {\d u} {\sqrt {a + b u + c u^2} }\)

\(=\)







\(\ds \dfrac {-1} {\sqrt {-c} } \map \arcsin {\dfrac {2 c u + b} {\sqrt {\size {b^2 - 4 a c} } } }\)





Primitive of $\dfrac 1 {\sqrt {a x^2 + b x + c} }$








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds \dfrac {-1} {\sqrt {-c} } \map \arcsin {\dfrac {2 c \paren {\frac 1 x} + b} {\sqrt {\size {b^2 - 4 a c} } } }\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {-c} } \map \arcsin {\dfrac {b x + 2 c} {\paren {-x} \sqrt {\size {b^2 - 4 a c} } } }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {-c} } \map \arcsin {\dfrac {b x + 2 c} {\size x \sqrt {\size {b^2 - 4 a c} } } }\)





simplifying



$\blacksquare$


Proof 2 (incomplete)













\(\ds x \sqrt {a x^2 + b x + c}\)

\(=\)







\(\ds \frac x {\paren {a x^2 + b x + c}^{-\frac 1 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac{x \paren {2 \sqrt c \sqrt {a x^2 + b x + c} + b x + 2 c} } {\paren {a x^2 + b x + c}^{-\frac 1 2} \paren {2 \sqrt c \sqrt {a x^2 + b x + c} + b x + 2 c} }\)




















\(\ds \)

\(=\)







\(\ds \frac{x \paren {2 \sqrt c \sqrt {a x^2 + b x + c} + b x + 2 c} } {2 \sqrt c + \paren {b x + 2 c} \paren {a x^2 + b x + c}^{-\frac 1 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac N D\)










where:












\(\ds N\)

\(=\)







\(\ds \frac {2 \sqrt c \sqrt {a x^2 + b x + c} + b x + 2 c} x\)




















\(\ds D\)

\(=\)







\(\ds \frac {2 \sqrt c + \paren {b x + 2 c} \paren {a x^2 + b x + c}^{-\frac 1 2} } {x^2}\)









Then:














\(\ds \frac {\d N} {\d x}\)

\(=\)







\(\ds \frac {x \paren {\sqrt c \paren {2 a x + b} \paren {a x^2 + b x + c}^{-\frac 1 2} + b} - \paren {2 \sqrt c \sqrt {a x^2 + b x + c} + b x + 2 c} } {x^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {a x^2 + b x + c}^{-\frac 1 2} \frac {\paren {\sqrt c \paren {2 a x^2 + b x} + b x \sqrt {a x^2 + b x + c} } - \paren {2 \sqrt c \paren {a x^2 + b x + c} + \paren {b x + 2 c} \sqrt {a x^2 + b x + c} } } {x^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {a x^2 + b x + c}^{-\frac 1 2} \frac {\paren {\sqrt c \paren {2 a x^2 + b x - 2 a x^2 - 2 b x - 2 c} + b x \sqrt {a x^2 + b x + c} } - \paren {\paren {b x + 2 c} \sqrt {a x^2 + b x + c} } } {x^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {a x^2 + b x + c}^{-\frac 1 2} \frac {\paren {\sqrt c \paren {-b x - 2 c} - \paren {\paren {2 c} \sqrt {a x^2 + b x + c} } } } {x^2}\)




















\(\ds \)

\(=\)







\(\ds -\frac {2 c + \sqrt c \paren {b x + 2 c} \paren {a x^2 + b x + c}^{-\frac 1 2} } {x^2}\)




















\(\ds \)

\(=\)







\(\ds \sqrt c \times D\)










Now provided $N$ is real and non zero:














\(\ds \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds \int \frac D N \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {\sqrt c} \int \frac {\frac {\d N} {\d x} } N \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {\sqrt c} \ln \size N\)





Primitive of Function under its Derivative














\(\ds \)

\(=\)







\(\ds \frac {-1} {\sqrt c} \ln \size {\frac {\paren {2 \sqrt c \sqrt {a x^2 + b x + c} + b x + 2 c} } x}\)











Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + b x + c}$: $14.283$




