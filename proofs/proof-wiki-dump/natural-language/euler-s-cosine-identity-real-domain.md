# 

Source: https://proofwiki.org/wiki/Euler%27s_Cosine_Identity/Real_Domain



Theorem
For any real number $x \in \R$:

$\cos x = \dfrac {e^{i x} + e^{-i x} } 2$
where:

$e^{i x}$ denotes the exponential function
$\cos x$ denotes the real cosine function
$i$ denotes the inaginary unit.


Proof 1
Recall the definition of the real cosine function:














\(\ds \cos x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n!} }\)




















\(\ds \)

\(=\)







\(\ds 1 - \frac {x^2} {2!} + \frac {x^4} {4!} - \frac {x^6} {6!} + \cdots + \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!} + \cdots\)










Recall the definition of the exponential as a power series:














\(\ds e^x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds 1 + x + \frac {x^2} 2 + \frac {x^3} 6 + \cdots + \frac {x^n} {n!} + \cdots\)










Then, starting from the right hand side:














\(\ds \frac {e^{i x} + e^{-i x} } 2\)

\(=\)







\(\ds \frac 1 2 \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {i x}^n} {n!} + \sum_{n \mathop = 0}^\infty \frac {\paren {-i x}^n} {n!} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 0}^\infty \paren {\frac {\paren {i x}^n + \paren {-i x}^n} {n!} }\)





Cosine Function is Absolutely Convergent














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 0}^\infty \paren {\frac {\paren {i x}^{2 n} + \paren {-i x}^{2 n} } {\paren {2 n}!} + \frac {\paren {i x}^{2 n + 1} + \paren {-i x}^{2 n + 1} } {\paren {2 n + 1}!} }\)





split into even and odd $n$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 0}^\infty \frac {\paren {i x}^{2 n} + \paren {-i x}^{2 n} } {\paren {2 n}!}\)





as $\paren {-i x}^{2 n + 1} = -\paren {i x}^{2 n + 1}$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 0}^\infty \frac {2 \paren {i x}^{2 n} } {\paren {2 n}!}\)





as $\paren {-1}^{2 n} = 1$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {i x}^{2 n} } {\paren {2 n}!}\)





cancel $2$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!}\)





as $i^{2 n} = \paren {-1}^n$














\(\ds \)

\(=\)







\(\ds \cos x\)









$\blacksquare$


Proof 2
Recall Euler's Formula:

$e^{i x} = \cos x + i \sin x$

Then, starting from the right hand side:














\(\ds \frac {e^{i x} + e^{-i x} } 2\)

\(=\)







\(\ds \frac {\cos x + i \sin x + \map \cos {-x} + i \map \sin {-x} } 2\)




















\(\ds \)

\(=\)







\(\ds \frac {\cos x + \map \cos {-x} } 2\)





Sine Function is Odd














\(\ds \)

\(=\)







\(\ds \frac {2 \cos x} 2\)





Cosine Function is Even














\(\ds \)

\(=\)







\(\ds \cos x\)









$\blacksquare$


Proof 3



\(\text {(1)}: \quad\)









\(\ds e^{i x}\)

\(=\)







\(\ds \cos x + i \sin x\)





Euler's Formula




\(\text {(2)}: \quad\)









\(\ds e^{-i x}\)

\(=\)







\(\ds \cos x - i \sin x\)





Euler's Formula: Corollary








\(\ds \leadsto \ \ \)





\(\ds e^{i x} + e^{-i x}\)

\(=\)







\(\ds \paren {\cos x + i \sin x} + \paren {\cos x - i \sin x}\)





$(1) + (2)$














\(\ds \)

\(=\)







\(\ds 2 \cos x\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \frac {e^{i x} + e^{-i x} } 2\)

\(=\)







\(\ds \cos x\)









$\blacksquare$


Proof 4
Consider the differential equation:

$(1): \quad D^2_x \map f x = -\map f x$
subject to the initial conditions:

$(2): \quad \map f 0 = 1$
$(3): \quad D_x \map f 0 = 0$


Step 1
We will prove that $y = \cos x$ is a particular solution of $(1)$.














\(\ds y\)

\(=\)







\(\ds \cos x\)




















\(\ds D^2_x y\)

\(=\)







\(\ds D^2_x \cos x\)





taking second derivative of both sides














\(\ds \)

\(=\)







\(\ds \map {D_x} {-\sin x}\)





Derivative of Cosine Function














\(\ds \)

\(=\)







\(\ds -\map {D_x} {\sin x}\)





Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds -\cos x\)





Derivative of Sine Function














\(\ds \)

\(=\)







\(\ds -y\)









Thus $y = \cos x$ fulfils $(1)$.

Then from Cosine of Zero is One:

$\cos 0 = 1$
Thus $y = \cos x$ fulfils $(2)$.

Then:














\(\ds D_x \cos 0\)

\(=\)







\(\ds -\sin 0\)





Derivative of Cosine Function














\(\ds \)

\(=\)







\(\ds 0\)





Sine of Zero is Zero



Thus $y = \cos x$ fulfils $(3)$.
So $y = \cos x$ is a particular solution of $(1)$.
$\Box$


Step 2
We will prove that $z = \dfrac {e^{i x} + e^{-i x} } 2$ is a particular solution of $(1)$.














\(\ds z\)

\(=\)







\(\ds \frac {e^{i x} + e^{-i x} } 2\)




















\(\ds D^2_x z\)

\(=\)







\(\ds \map {D^2_x} {\frac {e^{i x} + e^{-i x} } 2}\)





taking second derivative of both sides














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {D^2_x e^{i x} + D^2_x e^{-i x} }\)





Linear Combination of Derivatives














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {i D_x e^{i x} - i D_x e^{-i x} }\)





Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {i^2 e^{i x} - i \paren {-i} e^{-i x} }\)





Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {- e^{i x} - e^{-i x} }\)





$i^2 = -1$














\(\ds \)

\(=\)







\(\ds -\frac {e^{i x} + e^{-i x} }2\)




















\(\ds \)

\(=\)







\(\ds -z\)









Thus $z = \dfrac {e^{i x} + e^{-i x} } 2$ fulfils $(1)$.

Then:














\(\ds \frac {e^{i \times 0} + e^{-i \times 0} } 2\)

\(=\)







\(\ds \frac {1 + 1} 2\)





Exponential of Zero














\(\ds \)

\(=\)







\(\ds 1\)









Thus $z = \dfrac {e^{i x} + e^{-i x} } 2$ fulfils $(2)$.

Then:














\(\ds \intlimits {D_x \frac {e^{i x} + e^{-i x} } 2} {x \mathop = 0} {}\)

\(=\)







\(\ds \intlimits {\frac {i e^{i x} - i e^{-i x} } 2} {x \mathop = 0} {}\)





Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds \frac {i - i} 2\)





Exponential of Zero














\(\ds \)

\(=\)







\(\ds 0\)









Thus $z = \dfrac {e^{i x} + e^{-i x} } 2$ fulfils $(3)$.
So $z = \dfrac {e^{i x} + e^{-i x} } 2$ is a particular solution of $(1)$.
$\Box$

We have shown that $y$ and $z$ are both particular solutions of $(1)$.
But a particular solution to a differential equation is unique.


This article needs to be linked to other articles.In particular: This result definitely needs backing up with an appropriate linkYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Therefore $y = z$.
That is:

$\cos x = \dfrac {e^{i x} + e^{-i x} } 2$
$\blacksquare$


Also presented as
Euler's Cosine Identity can also be presented as:

$\cos z = \dfrac 1 2 \paren {e^{-i z} + e^{i z} }$


Also see
Euler's Sine Identity
Euler's Tangent Identity
Euler's Cotangent Identity
Euler's Secant Identity
Euler's Cosecant Identity
Arccosine Logarithmic Formulation


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 7$: Relationship between Exponential and Trigonometric Functions: $7.18$




