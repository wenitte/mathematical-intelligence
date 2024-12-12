# 

Source: https://proofwiki.org/wiki/Approximation_to_Stirling%27s_Formula_for_Gamma_Function


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let:

$D_\epsilon = \set {z \in \C : \cmod {\Arg z} < \pi - \epsilon,\ \cmod z > 1}$
where:

$\cmod {\Arg z}$ denotes the absolute value of the principal argument of $z$
$\cmod z$ denotes the modulus of $z$
$\epsilon \in \R_{>0}$.

Then for all $z \in D_\epsilon$, the gamma function of $z$ satisfies:

$\map \Gamma z = \sqrt {\dfrac {2 \pi} z} \paren {\dfrac z e}^z \paren {1 + \map \OO {z^{-1} } }$
where $\map \OO {z^{-1} }$ denotes big-O of $z^{-1}$.


Proof
From Gamma Function is Unique Extension of Factorial:




\(\text {(1)}: \quad\)









\(\ds \paren {y + n}^y n!\)

\(=\)







\(\ds \paren {y + n}^y \map \Gamma {n + 1}\)





Gamma Function Extends Factorial














\(\ds \)

\(\le\)







\(\ds \map \Gamma {y + n + 1}\)




















\(\ds \)

\(\le\)







\(\ds \paren {n + 1}^y \map \Gamma {n + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {n + 1}^y n!\)









for $0 < y \le 1$ and $n \in \N$.

Let $x$ be given.
Let $n + 1$ be the largest natural number such that $n + 1 \le x$.


This article, or a section of it, needs explaining.In particular: So it was implicitly assume that $x \in \R_{\ge 1}$. Write this explicitly.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $x = y + n + 1$, and thus $0 < y \le 1$.
Then:














\(\ds \frac {\map \Gamma x} {\sqrt {2 \pi} x^x x^{-1/2} e^{-x} }\)

\(\le\)







\(\ds \frac {\paren {n + 1}^y n!} {\sqrt {2 \pi} x^x x^{-1/2} e^{-x} }\)





from $(1)$














\(\ds \)

\(\sim\)







\(\ds \frac {\paren {n + 1}^y n! \sqrt {2 \pi} n^n n^{1/2} e^{-n} } {\sqrt {2 \pi} x^x x^{-1/2} e^{-x} }\)





Stirling's Formula














\(\ds \)

\(=\)







\(\ds \frac {\paren {n + 1}^y n! n^n n^{1/2} e^{-n} } {\paren {y + n + 1}^{y + n} \paren {y + n + 1}^{1/2} e^{-y - n - 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {n + 1} {y + n + 1} }^y \paren {\frac n {y + n + 1} }^{1/2} \paren {1 + \frac {y + 1} n}^{-n} e^{y + 1}\)




















\(\ds \)

\(\to\)







\(\ds 1 \cdot 1 \cdot \frac 1 {e^{y + 1} } e^{y + 1} \text { as } n \to \infty\)




















\(\ds \)

\(=\)







\(\ds 1\)









Similarly for the right hand side.

The result follows from Gamma Function Extends Factorial.


The validity of the material on this page is questionable.In particular: Proved only for $x \in \R_{\ge 1}$. What about for other $z \in D_\epsilon$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$


Also see
Logarithmic Approximation of Error Term of Stirling's Formula for Gamma Function


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 17.7 \ (2)$




