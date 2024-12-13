# 

Source: https://proofwiki.org/wiki/Partial_Fractions_Expansion_of_Cotangent


It has been suggested that this page or section be merged into Mittag-Leffler Expansion for Cotangent Function.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

It has been suggested that this page or section be merged into Series Expansion for Pi Cotangent of Pi Lambda.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let $x \in \R \setminus \Z$, that is such that $x$ is a real number that is not an integer.
Then:

$\ds \pi \cot \pi x = \dfrac 1 x + 2 x \sum_{n \mathop = 1}^\infty \frac 1 {x^2 - n^2}$


Proof 1
We have that:

$\cot \pi x = \dfrac {\cos \pi x} {\sin \pi x}$
has a denominator which is $0$ at $x = 0, \pm 1, \pm 2, \ldots$.
Hence the limitation on the domain of $x \cot \pi x$ to exclude integer $x$.
Having established that, we should be able to express $\cot \pi x$ in the form:

$\cot \pi x = \dfrac a x + \ds \sum_{n \mathop = 1}^\infty \paren {\frac {b_n} {x - n} + \frac {c_n} {x + n} }$

This article, or a section of it, needs explaining.In particular: why should we be able to express the cotangent in this form?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
using a partial fractions expansion.
By evaluating the coefficients $b_n$ and $c_n$ in the usual manner, they are found to be:


This article, or a section of it, needs explaining.In particular: Link to what this usual manner isYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This needs considerable tedious hard slog to complete it.In particular: Do the workTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\forall n \in \N: b_n = c_n = \dfrac 1 \pi$
The result follows.
$\blacksquare$


Proof 2
From the Euler Formula for Sine Function:

$\ds \sin x = x \prod_{n \mathop = 1}^\infty \paren {1 - \frac {x^2} {n^2 \pi^2} }$

Taking the logarithm of both sides:














\(\ds \map \ln {\sin x}\)

\(=\)







\(\ds \ln x + \sum_{n \mathop = 1}^\infty \map \ln {1 - \frac {x^2} {n^2 \pi^2} }\)




















\(\ds \)

\(=\)







\(\ds \ln x + \sum_{n \mathop = 1}^\infty \map \ln {\frac {n^2 \pi^2 - x^2} {n^2 \pi^2} }\)










Differentiating with respect to $x$:














\(\ds \cot x\)

\(=\)







\(\ds \dfrac 1 x + \sum_{n \mathop = 1}^\infty \dfrac {\dfrac {-2 x} {n^2 \pi^2} } {\paren {\dfrac {n^2 \pi^2 - x^2} {n^2 \pi^2} } }\)





Derivative of Composite Function














\(\ds \)

\(=\)







\(\ds \dfrac 1 x + \sum_{n \mathop = 1}^\infty \frac {-2 x} {n^2 \pi^2 - x^2}\)














\(\ds \leadsto \ \ \)





\(\ds \cot x\)

\(=\)







\(\ds \frac 1 x + 2 x \sum_{n \mathop = 1}^\infty \frac 1 {x^2 - n^2 \pi^2}\)





moving the $-1$ to the denominator








\(\ds \leadsto \ \ \)





\(\ds \pi \map \cot {\pi x}\)

\(=\)







\(\ds \pi \paren {\frac 1 {\pi x} + 2 \paren {\pi x} \sum_{n \mathop = 1}^\infty \frac 1 {\paren {\pi x}^2 - n^2 \pi^2} }\)





multiplying by $\pi$ and entering $\pi x$








\(\ds \leadsto \ \ \)





\(\ds \pi \map \cot {\pi x}\)

\(=\)







\(\ds \frac 1 x + 2 x \sum_{n \mathop = 1}^\infty \frac 1 {x^2 - n^2 }\)









Hence the result.
$\blacksquare$


Proof 3
From Euler's Reflection Formula:

$\forall x \notin \Z: \map \Gamma x \map \Gamma {1 - x} = \dfrac \pi {\map \sin {\pi x} }$
Taking the logarithm of both sides:














\(\ds \map \ln {\map {\Gamma} x } + \map \ln {\map {\Gamma} {1 - x} }\)

\(=\)







\(\ds \map \ln {\pi } - \map \ln {\map \sin {\pi x} }\)





Sum of Logarithms/Natural Logarithm and Difference of Logarithms




Taking the derivative of both sides:














\(\ds \frac {\map {\Gamma'} x} {\map \Gamma x} - \frac {\map {\Gamma'} {1 - x} } {\map \Gamma {1 - x} }\)

\(=\)







\(\ds -\frac 1 {\map \sin {\pi x} } \map \cos {\pi x} \pi\)





Derivative of Composite Function, Derivative of Natural Logarithm Function and Derivative of Sine Function














\(\ds \)

\(=\)







\(\ds -\pi \map \cot {\pi x}\)





Definition of cotangent



We now have:














\(\ds \pi \map \cot {\pi x}\)

\(=\)







\(\ds \frac {\map {\Gamma'} {1 - x} } {\map \Gamma {1 - x} } - \frac {\map {\Gamma'} x} {\map \Gamma x}\)





multiplying both sides by $-1$














\(\ds \)

\(=\)







\(\ds \paren {-\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {n - x } } } - \paren {-\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {x + n - 1} } }\)





Reciprocal times Derivative of Gamma Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\frac 1 {x + n - 1} - \frac 1 {n - x } }\)





Linear Combination of Convergent Series














\(\ds \)

\(=\)







\(\ds \frac 1 x + \sum_{n \mathop = 1}^\infty \paren {\frac 1 {x + n } - \frac 1 {n - x } }\)





reindexing the sum














\(\ds \)

\(=\)







\(\ds \frac 1 x + \sum_{n \mathop = 1}^\infty \paren {\frac 1 {x + n } + \frac 1 {x - n } }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 x + 2 x \sum_{n \mathop = 1}^\infty \frac 1 {x^2 - n^2}\)





Difference of Two Squares



$\blacksquare$





