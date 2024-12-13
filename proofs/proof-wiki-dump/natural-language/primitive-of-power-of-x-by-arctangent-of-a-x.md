# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Arctangent_of_a_x



Theorem
$\ds \int x^n \arctan a x \rd x = \frac {x^{n + 1} } {n + 1} \arctan a x + \frac a {n + 1} \int \frac {x^{n + 1} \rd x} {a^2 x^2 + 1}$
for $n \ne -1$.


Proof
Recall:




\(\text {(1)}: \quad\)









\(\ds \int x^n \arctan x \rd x\)

\(=\)







\(\ds \frac {x^{n + 1} } {n + 1} \arctan x - \frac 1 {n + 1} \int \frac {x^{n + 1} \rd x} {x^2 + 1}\)





Primitive of $x^n \arctan x$




Then:














\(\ds \int x^n \arctan a x \rd x\)

\(=\)







\(\ds \int \dfrac 1 {a^n} \paren {a x}^n \arctan a x \rd x\)





manipulating into appropriate form














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^n} \int \paren {a x}^n \arctan a x \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^n} \paren {\dfrac 1 a \paren {\frac {\paren {a x}^{n + 1} } {n + 1}  \arctan a x + \frac 1 {n + 1} \int \frac {\paren {a x}^{n + 1} \rd x} {\paren {a x}^2 + 1} } }\)





Primitive of Function of Constant Multiple, from $(1)$














\(\ds \)

\(=\)







\(\ds \frac {x^{n + 1} } {n + 1} \arctan a x + \frac a {n + 1} \int \frac {x^{n + 1} \rd x} {a^2 x^2 + 1}\)





simplifying 
There is believed to be a mistake here, possibly a typo.In particular: can't resolve the $\dfrac a {n + 1}$ factor, it seems to want to be $\dfrac 1 {n + 1}$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.



$\blacksquare$


Also see
Primitive of $x^n \arcsin a x$
Primitive of $x^n \arccos a x$


Sources
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $101$.




