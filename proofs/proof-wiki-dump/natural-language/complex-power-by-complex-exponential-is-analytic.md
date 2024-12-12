# 

Source: https://proofwiki.org/wiki/Complex_Power_by_Complex_Exponential_is_Analytic

Lemma
Let $\psi, \eta \in \C$ be constant.
Let $\map f z = z^\psi \, \map \exp {-\eta z}$, where:

$z^\psi$ denotes $z$ to the power of $\psi$, defined on its principal branch
$\map \exp {-\eta z}$ denotes the complex exponential function.

Then $f$ is analytic on any simply connected domain that does not contain the origin nor any points on the negative real axis.


Proof
Let $z$ be written in exponential form:

$z = r \map \exp {i \theta}$
where:

$r > 0$
$\theta \in \hointl {-\pi} \pi$

Let $\psi = a + i b, \eta = c + i d$.
By the definition of $f$:














\(\ds \map f {r \, \map \exp {i \theta} }\)

\(=\)







\(\ds z^\psi \, \map \exp {-\eta z}\)




















\(\ds \)

\(=\)







\(\ds \paren {r e^{i \theta} }^\psi \, \map \exp {-\eta r \, \map \exp {i \theta} }\)




















\(\ds \)

\(=\)







\(\ds \map \exp {\psi \, \map \Log {r \, \map \exp {i \theta} } } \, \map \exp {-\eta r \paren {\cos \theta + i \sin \theta} }\)




















\(\ds \)

\(=\)







\(\ds \map \exp {\psi \ln r + i \psi \theta - \eta r \cos \theta - i \eta r \sin \theta}\)




















\(\ds \)

\(=\)







\(\ds \map \exp {\paren {a + i b} \ln r + i \paren {a + i b} \theta - \paren {c + i d} r \cos \theta - i \paren {c + i d} r \sin \theta}\)




















\(\ds \)

\(=\)







\(\ds \map \exp {a \ln r + i b \ln r + i a \theta - b \theta - c r \cos \theta - i d r \cos \theta - i c r \sin \theta + d r \sin \theta}\)




















\(\ds \)

\(=\)







\(\ds \map \exp {a \ln r - b \theta - c r \cos \theta + d r \sin \theta} \, \map \exp {i \paren {b \ln r + a \theta - d r \cos \theta - c r \sin \theta} }\)










Define:














\(\ds \map g {r, \theta}\)

\(=\)







\(\ds a \ln r - b \theta - c r \cos \theta + d r \sin \theta\)




















\(\ds \map h {r, \theta}\)

\(=\)







\(\ds b \ln r + a \theta - d r \cos \theta - c r \sin \theta\)









Then:














\(\ds \map f {r \, \map \exp {i \theta} }\)

\(=\)







\(\ds \map \exp g \, \map \exp {i h}\)




















\(\ds \)

\(=\)







\(\ds \map \exp g \, \map \cos h + i \map \exp g \, \map \sin h\)










Define:














\(\ds \map u {r, \theta}\)

\(=\)







\(\ds \map \exp g \, \map \cos h\)




















\(\ds \map v {r, \theta}\)

\(=\)







\(\ds \map \exp g \, \map \sin h\)









Then:














\(\ds \map f {r \, \map \exp {i \theta } }\)

\(=\)







\(\ds u + iv\)










We check the Polar Form of Cauchy-Riemann Equations.
As a preliminary: 














\(\ds \frac {\partial g} {\partial r}\)

\(=\)







\(\ds \frac a r - c \cos \theta + d \sin \theta\)




















\(\ds \frac {\partial h} {\partial r}\)

\(=\)







\(\ds \frac b r - d \cos \theta - \sin \theta\)




















\(\ds \frac {\partial g} {\partial \theta}\)

\(=\)







\(\ds -b + c r \sin \theta + d r \cos \theta\)




















\(\ds \frac {\partial h} {\partial \theta}\)

\(=\)







\(\ds a + d r \sin \theta - c r \cos \theta\)









Then:














\(\ds \frac {\partial u} {\partial r}\)

\(=\)







\(\ds \map \exp g \frac {\partial g} {\partial r} \map \cos h - \map \exp g \, \map \sin f \frac {\partial h} {\partial r}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 r \map \exp g \paren {\paren {a - r c \cos \theta + r d \sin \theta} \, \map \cos h + \map \sin h \paren {- b + r d \cos \theta + r c \sin \theta} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 r \map \exp g \paren {\frac {\partial h} {\partial \theta} \map \cos h + \, \map \sin h \frac {\partial g} {\partial \theta} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 r \frac {\partial v} {\partial \theta}\)




















\(\ds \frac {\partial u} {\partial \theta}\)

\(=\)







\(\ds \map \exp g \frac {\partial g} {\partial \theta} \, \map \cos h - \map \exp g \, \map \sin h \frac {\partial h} {\partial \theta}\)




















\(\ds \)

\(=\)







\(\ds -r \, \map \exp g \paren {\paren {\frac b r - c \sin \theta - d \cos \theta} \, \map \cos h + \map \sin h \paren {\frac a r + d \sin \theta - c  \cos \theta} }\)





Sine Function is Odd














\(\ds \)

\(=\)







\(\ds -r \, \map \exp g \paren {\frac {\partial h} {\partial r} \, \map \cos h + \map \sin h \frac {\partial g} {\partial r} }\)




















\(\ds \)

\(=\)







\(\ds -r \frac {\partial v} {\partial r}\)









$\blacksquare$





