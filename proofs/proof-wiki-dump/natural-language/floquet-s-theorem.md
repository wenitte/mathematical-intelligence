# 

Source: https://proofwiki.org/wiki/Floquet%27s_Theorem


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\mathbf A \left({t}\right)$ be a continuous matrix function with period $T$.
Let $\Phi \left({t}\right)$ be a fundamental matrix of the Floquet system $\mathbf x' = \mathbf A \left({t}\right) \mathbf x$.

Then $\Phi \left({t + T}\right)$ is also a fundamental matrix.

Moreover, there exists:

A nonsingular, continuously differentiable matrix function $\mathbf P \left({t}\right)$ with period $T$
A constant (possibly complex) matrix $\mathbf B$ such that:
$\Phi \left({t}\right) = \mathbf P \left({t}\right) e^{\mathbf Bt}$


Proof 1
We assume the two hypotheses of the theorem.

We have that:














\(\ds \map {\frac \d {\d t} } {\map \Phi {t + T} }\)

\(=\)







\(\ds \map {\Phi'} {t + T}\)




















\(\ds \)

\(=\)







\(\ds \map {\mathbf A} {t + T} \map \Phi {t + T}\)




















\(\ds \)

\(=\)







\(\ds \map {\mathbf A} t \map \Phi {t + T}\)









So the first implication of the theorem holds, that is: that $\map \Phi {t + T}$ is a fundamental matrix.

Because $\map \Phi t$ and $\map \Phi {t + T}$ are both fundamental matrices, there must exist some matrix $\mathbf C$ such that:

$\map \Phi {t + T} = \map \Phi t \mathbf C$
Hence by the existence of the matrix logarithm, there exists a matrix $\mathbf B$ such that:

$\mathbf C = e^{\mathbf BT}$

Defining $\map {\mathbf P} t = \map \Phi t e^{-\mathbf B t}$, it follows that:














\(\ds \map {\mathbf P} {t + T}\)

\(=\)







\(\ds \map \Phi {t + T} e^{-\mathbf B t - \mathbf B T}\)




















\(\ds \)

\(=\)







\(\ds \map \Phi t C e^{-\mathbf B T} e^{-\mathbf B t}\)




















\(\ds \)

\(=\)







\(\ds \map \Phi t e^{-\mathbf B t}\)




















\(\ds \)

\(=\)







\(\ds \map {\mathbf P} t\)









and hence $\map {\mathbf P} t$ is periodic with period $T$.
As $\map \Phi t = \map {\mathbf P} t e^{\mathbf B t}$, the second implication also holds.
$\blacksquare$


Proof 2
Let $\map S t = \map \Phi {t + T} {\map \Phi T}^{-1}$.
Then:














\(\ds \map {\frac \d {\d t} } {\map S t}\)

\(=\)







\(\ds \map {\Phi'} {t + T} {\map \Phi T}^{-1}\)




















\(\ds \)

\(=\)







\(\ds \map {\mathbf A} {t + T} \map \Phi {t + T} {\map \Phi T}^{-1}\)




















\(\ds \)

\(=\)







\(\ds \map {\mathbf A} t \map S t\)









So $\map S t$ is a fundamental matrix and:

$\map S 0 = Id$
Then:

$\map S t = \map \Phi t$
which means that:

$\map \Phi {t + T} = \map \Phi t \map \Phi T$
Hence by the existence of the matrix logarithm, there exists a matrix $\mathbf B$ such that:

$\map \Phi T = e^{\mathbf B T}$

Defining $\map {\mathbf P} t = \map \Phi t e^{-\mathbf B t}$, it follows that:














\(\ds \map {\mathbf P} {t + T}\)

\(=\)







\(\ds \map \Phi {t + T} e^{-\mathbf B t - \mathbf B T}\)




















\(\ds \)

\(=\)







\(\ds \map \Phi t \map \Phi T e^{-\mathbf B T} e^{-\mathbf B t}\)




















\(\ds \)

\(=\)







\(\ds \map \Phi t e^{-\mathbf B t}\)




















\(\ds \)

\(=\)







\(\ds \map {\mathbf P} t\)









and hence $\map {\mathbf P} t$ is a periodic real function with period $T$.
As $\map \Phi t = \map {\mathbf P} t e^{\mathbf B t}$, the second implication also holds.
$\blacksquare$


Also see
General Fundamental Matrix


Source of Name
This entry was named for Achille Marie Gaston Floquet.





