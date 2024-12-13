# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Bessel_Function_of_the_First_Kind/Proof_2


This article needs to be tidied.In particular: house style, in progressPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Theorem
Let $J_n$ denote the Bessel function of the first kind of order $n$.

Then the Laplace transform of $J_n$ is given as:

$\laptrans {\map {J_n} {a t} } = \dfrac {\paren {\sqrt {s^2 + a^2} - s}^n} {a^n \sqrt {s^2 + a^2} }$


Proof













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





