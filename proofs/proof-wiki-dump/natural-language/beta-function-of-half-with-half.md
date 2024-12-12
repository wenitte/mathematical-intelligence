# 

Source: https://proofwiki.org/wiki/Beta_Function_of_Half_with_Half



Theorem
$\map \Beta {\dfrac 1 2, \dfrac 1 2} = \pi$
where $\Beta$ denotes the Beta function.


Proof 1
By definition of the Beta function:

$\ds \map \Beta {x, y} := 2 \int_0^{\pi / 2} \paren {\sin \theta}^{2 x - 1} \paren {\cos \theta}^{2 y - 1} \rd \theta$
Thus:














\(\ds \map \Beta {\dfrac 1 2, \dfrac 1 2}\)

\(=\)







\(\ds 2 \int_0^{\pi / 2} \paren {\sin \theta}^{2 \times \frac 1 2 - 1} \paren {\cos \theta}^{2 \times \frac 1 2 - 1} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds 2 \int_0^{\pi / 2} \paren {\sin \theta}^0 \paren {\cos \theta}^0 \rd \theta\)




















\(\ds \)

\(=\)







\(\ds 2 \int_0^{\pi / 2} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds 2 \bigintlimits \theta 0 {\pi / 2}\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {\pi / 2 - 0}\)




















\(\ds \)

\(=\)







\(\ds \pi\)









$\blacksquare$


Proof 2
By definition of the Beta function:

$\ds \map \Beta {x, y} := \int_{\mathop \to 0}^{\mathop \to 1} t^{x - 1} \paren {1 - t}^{y - 1} \rd t$
Thus:














\(\ds \map \Beta {\dfrac 1 2, \dfrac 1 2}\)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to 1} t^{\frac 1 2 - 1} \paren {1 - t}^{\frac 1 2 - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to 1} \dfrac {\rd t} {\sqrt {t \paren {1 - t} } }\)










Let $t = \sin^2 \theta$.
Then:

$\rd t = 2 \sin \theta \cos \theta \rd \theta$
and:














\(\ds t\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \sin^2 \theta\)

\(=\)







\(\ds 0\)




















\(\ds t\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \sin^2 \theta\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \theta\)

\(=\)







\(\ds \pi / 2\)










and so:














\(\ds \map \Beta {\dfrac 1 2, \dfrac 1 2}\)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to \pi / 2} \frac {2 \sin \theta \cos \theta \rd \theta} {\sin \theta \sqrt {1 - \sin^2 \theta} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to \pi / 2} \frac {2 \sin \theta \cos \theta \rd \theta} {\sin \theta \cos \theta}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to \pi / 2} 2 \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits {2 \theta} 0 {\pi / 2}\)




















\(\ds \)

\(=\)







\(\ds 2 \times \pi / 2 - 0\)




















\(\ds \)

\(=\)







\(\ds \pi\)









$\blacksquare$


Proof 3
By definition of the Beta function:

$\ds \map \Beta {x, y} := \int_{\mathop \to 0}^{\mathop \to 1} t^{x - 1} \paren {1 - t}^{y - 1} \rd t$
Thus:














\(\ds \map \Beta {\dfrac 1 2, \dfrac 1 2}\)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to 1} t^{\frac 1 2 - 1} \paren {1 - t}^{\frac 1 2 - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to 1} \dfrac {\rd t} {t^{1/2} \paren {1 - t}^{1/2} }\)










Let $t = u^2$.
Then:

$\rd t = 2 u \rd u$
and:














\(\ds t\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds u^2\)

\(=\)







\(\ds 0\)




















\(\ds t\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds u^2\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds 1\)










and so:














\(\ds \map \Beta {\dfrac 1 2, \dfrac 1 2}\)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to 1} \frac {2 u \rd u} {u \paren {1 - u^2}^{1/2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds 2 \int_{\mathop \to 0}^{\mathop \to 1} \frac {\rd u} {\sqrt {\paren {1 - u^2} } }\)




















\(\ds \)

\(=\)







\(\ds 2 \bigintlimits {\arcsin u} 0 1\)





Primitive of $\dfrac 1 {\sqrt {1 - u^2} }$














\(\ds \)

\(=\)







\(\ds 2 \times \pi / 2 - 0\)




















\(\ds \)

\(=\)







\(\ds \pi\)









$\blacksquare$





