# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Beta_Function



Theorem
The following definitions of the concept of Beta Function are equivalent:
For $\map \Re x, \map \Re y > 0$:

Definition 1
$\ds \map \Beta {x, y} := \int_{\mathop \to 0}^{\mathop \to 1} t^{x - 1} \paren {1 - t}^{y - 1} \rd t$
Definition 2
$\ds \map \Beta {x, y} := 2 \int_0^{\pi / 2} \paren {\sin \theta}^{2 x - 1} \paren {\cos \theta}^{2 y - 1} \rd \theta$
Definition 3
$\map \Beta {x, y} := \dfrac {\map \Gamma x \map \Gamma y} {\map \Gamma {x + y} }$
where $\Gamma$ is the gamma function.


Proof
Definition 1 is equivalent to Definition 2













\(\ds \map \Beta {x, y}\)

\(=\)







\(\ds \int_0^1 t^{x - 1} \paren {1 - t}^{y - 1} \rd t\)





Definition 1 of Beta Function














\(\ds \)

\(=\)







\(\ds \int_0^{\pi / 2} \paren {\sin \theta}^{2 x - 2} \paren {\cos \theta}^{2 y - 2} 2 \sin \theta \cos \theta \rd \theta\)





Substitute $t = \sin^2 \theta$














\(\ds \)

\(=\)







\(\ds 2 \int_0^{\pi / 2} \paren {\sin \theta}^{2 x - 1} \paren {\cos \theta}^{2 y - 1} \rd \theta\)





Definition 2 of Beta Function



$\Box$


Definition 2 is equivalent to Definition 3
By definition of Gamma function:

$\ds \map \Gamma x \, \map \Gamma y = \int_0^\infty t^{x - 1} e^{-t} \rd t \int_0^\infty s^{y - 1} e^{-s} \rd s$

Substitute $t = u^2$ and $s = v^2$:














\(\ds \map \Gamma x \, \map \Gamma y\)

\(=\)







\(\ds 4 \int_0^\infty u^{2 x - 1} e^{-u^2} \rd u \int_0^\infty v^{2 y - 1} e^{-v^2} \rd v\)




















\(\ds \)

\(=\)







\(\ds 4 \int_0^\infty \int_0^\infty u^{2 x - 1} v^{2 y - 1} e^{-\paren {u^2 + v^2} } \rd u \rd v\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds 4 \int_0^\infty \int_0^{\pi / 2} r^{2 x - 1} \paren {\sin \theta}^{2 x - 1} r^{2 y - 1} \paren {\cos \theta}^{2 y - 1} e^{-r^2} r \rd \theta \rd r\)





Substitute $v = r \cos \theta$ and $u = r \sin \theta$














\(\ds \)

\(=\)







\(\ds 4 \int_0^\infty r^{2 x + 2 y - 2} e^{-r^2} r \rd r \int_0^{\pi / 2} \paren {\sin \theta}^{2 x - 1} \paren {\cos \theta}^{2 y - 1} \rd \theta\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds 2 \int_0^\infty u^{x + y - 1} e^{-u} \rd u \int_0^{\pi / 2} \paren {\sin \theta}^{2 x - 1} \paren {\cos \theta}^{2 y - 1} \rd \theta\)





Substitute $u = r^2$














\(\ds \)

\(=\)







\(\ds 2 \, \map \Gamma {x + y} \int_0^{\pi / 2} \paren {\sin \theta}^{2 x - 1} \paren {\cos \theta}^{2 y - 1} \rd \theta\)





Definition of Gamma Function








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \frac {\map \Gamma x \, \map \Gamma y} {\map \Gamma {x + y} }\)





Definition 3 of Beta Function














\(\ds \)

\(=\)







\(\ds 2 \int_0^{\pi / 2} \paren {\sin \theta}^{2 x - 1} \paren {\cos \theta}^{2 y - 1} \rd \theta\)





Definition 2 of Beta Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.32$




