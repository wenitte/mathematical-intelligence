# 

Source: https://proofwiki.org/wiki/Open_Ball_Contains_Open_Ball_Less_Than_Half_Its_Radius

Therorem
Let $M = \struct {A, d}$ be a metric space.

Let $a, b \in A$.
Let $\epsilon, \delta \in \R_{>0}$ such that $\delta \le \dfrac \epsilon 2$.

Let $\map {B_\epsilon} a$ be the open $\epsilon$-ball on $a$.
Let $\map {B_\delta} b$ be the open $\delta$-ball on $b$.

Let $a \in \map {B_\delta} b$.

Then:

$\map {B_\delta} b \subseteq \map {B_\epsilon} a$


Proof
We have:










\(\ds \forall c \in \map {B_\delta} b: \, \)



\(\ds \map d {a, c}\)

\(\le\)







\(\ds \map d {a, b} + \map d {b, c}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(<\)







\(\ds \delta + \map d {b, c}\)





Definition of open $\delta$-ball and $a \in \map {B_\delta} b$














\(\ds \)

\(<\)







\(\ds \delta + \delta\)





Definition of open $\delta$-ball and $c \in \map {B_\delta} b$














\(\ds \)

\(\le\)







\(\ds \dfrac \epsilon 2 + \dfrac \epsilon 2\)





as $\delta \le \dfrac \epsilon 2$














\(\ds \)

\(=\)







\(\ds \epsilon\)














\(\ds \leadsto \ \ \)

\(\ds \forall c \in \map {B_\delta} b: \, \)



\(\ds c\)

\(\in\)







\(\ds \map {B_\epsilon} a\)





Definition of open $\epsilon$-ball








\(\ds \leadsto \ \ \)





\(\ds \map {B_\delta} b\)

\(\subseteq\)







\(\ds \map {B_\epsilon} a\)





Definition of Subset



$\blacksquare$





