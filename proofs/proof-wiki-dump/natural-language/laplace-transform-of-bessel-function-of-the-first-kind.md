# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Bessel_Function_of_the_First_Kind



Theorem
Let $J_n$ denote the Bessel function of the first kind of order $n$.

Then the Laplace transform of $J_n$ is given as:

$\laptrans {\map {J_n} {a t} } = \dfrac {\paren {\sqrt {s^2 + a^2} - s}^n} {a^n \sqrt {s^2 + a^2} }$


Proof 1
From Series Expansion of Bessel Function of the First Kind:














\(\ds \map {J_n} {a t}\)

\(=\)







\(\ds \dfrac {\paren {a t}^n} {2^n \, \map \Gamma {n + 1} } \paren {1 - \dfrac {\paren {a t}^2} {2 \paren {2 n + 2} } + \dfrac {\paren {a t}^4} {2 \times 4 \paren {2 n + 2} \paren {2 n + 4} } - \cdots}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {k! \, \map \Gamma {n + k + 1} } \paren {\dfrac {a t} 2}^{n + 2 k}\)










Hence:














\(\ds \laptrans {\map {J_n} {a t} }\)

\(=\)







\(\ds \laptrans {\sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {k! \, \map \Gamma {n + k + 1} } \paren {\dfrac {a t} 2}^{n + 2 k} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k a^{n + 2 k} } {2^{n + 2 k} k! \, \map \Gamma {n + k + 1} } \laptrans {t^{n + 2 k} }\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k a^{n + 2 k} } {2^{n + 2 k} k! \, \map \Gamma {n + k + 1} } \dfrac {\map \Gamma {n + 2 k + 1} } {s^{n + 2 k + 1} }\)





Laplace Transform of Power














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \paren {\dfrac a 2}^{n + 2 k} \dfrac {\map \Gamma {n + 2 k + 1} } {k \, \map \Gamma k \, \map \Gamma {n + k + 1} } \dfrac 1 {s^{n + 2 k + 1} }\)





rearrangement, Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \paren {\dfrac a 2}^{n + 2 k} \dfrac 1 {k \, \map \Beta {k, n + k + 1} } \dfrac 1 {s^{n + 2 k + 1} }\)





Definition 3 of Beta Function






This needs considerable tedious hard slog to complete it.In particular: This approach may not be workable, so may have to take a different one and start again.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 2













\(\ds \laptrans {t^2 \frac {\d^2 x} {\d t^2} + t \frac {\d x} {\d t} + \paren {t^2 - \alpha^2} x} s\)

\(=\)







\(\ds 0\)





Laplace Transform of Bessel's Equation














\(\ds \frac {\d^2} {\d s^2} \laptrans {x} - \frac \d {\d s} \laptrans {x'} + \frac {\d^2} {\d s^2} \laptrans x - \alpha^2 \laptrans x\)

\(=\)







\(\ds 0\)





setting the initial conditions as $\map x 0 = 1, \ \map {x'} 0 = 0$














\(\ds \paren {s^2 + 1} \LL \set x + 3 s \LL' \set x + \paren {1 - \alpha^2} \laptrans x\)

\(=\)







\(\ds 0\)





Make the following change of variable $u = \sqrt {s^2 + 1} \laptrans x$














\(\ds u \sqrt {s^2 + 1} + \dfrac s {\sqrt {s^2 + 1} } u'\)

\(=\)







\(\ds \frac {\alpha^2 u} {\sqrt {s^2 + 1} }\)




















\(\ds \paren {u' \sqrt {s^2 + 1} }'\)

\(=\)







\(\ds \frac {\alpha^2 u} {\sqrt {s^2 + 1} }\)





multiplying both sides by $u' \sqrt {s^2 + 1}$














\(\ds \frac 1 2 \paren { \paren {u' \sqrt {s^2 + 1} }^2}'\)

\(=\)







\(\ds \frac 1 2 \alpha^2 \paren {u^2}'\)




















\(\ds u' \sqrt {s^2 + 1}\)

\(=\)







\(\ds -\alpha u\)





Constant of Integration removed by the Final Value Theorem of Laplace Transform














\(\ds \int \frac 1 u \rd u\)

\(=\)







\(\ds \int -\frac \alpha {\sqrt {s^2 + 1} } \rd s\)




















\(\ds \map \ln u\)

\(=\)







\(\ds \alpha \map \ln {\sqrt {s^2 + 1} - s}\)




















\(\ds u\)

\(=\)







\(\ds \paren {\sqrt {s^2 + 1} - s}^\alpha\)





reverting the substitution














\(\ds \laptrans x\)

\(=\)







\(\ds \dfrac {\paren {\sqrt {s^2 + 1} - s}^\alpha} {\sqrt {s^2 + 1} }\)










Hence:














\(\ds \map {\laptrans {\map {J_\alpha} t} } s\)

\(=\)







\(\ds \dfrac {\paren {\sqrt {s^2 + 1} - s}^\alpha} {\sqrt {s^2 + 1} }\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Laplace Transforms of Special Functions: $3$




