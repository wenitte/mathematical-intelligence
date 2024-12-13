# 

Source: https://proofwiki.org/wiki/Roots_of_Complex_Number


This article, or a section of it, needs explaining.In particular: This page is full of $\cis$, but the first statement uses the full $\cos + i \sin$ which makes the whole confusingYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Theorem
Let $z := \polar {r, \theta}$ be a complex number expressed in polar form, such that $z \ne 0$.
Let $n \in \Z_{>0}$ be a (strictly) positive integer.

Then the $n$th roots of $z$ are given by:

$z^{1 / n} = \set {r^{1 / n} \paren {\map \cos {\dfrac {\theta + 2 \pi k} n} + i \, \map \sin {\dfrac {\theta + 2 \pi k} n} }: k \in \set {0, 1, 2, \ldots, n - 1} }$
There are $n$ distinct such $n$th roots.


Exponential Form
This result can also be expressed thus in exponential form:

$z^{1 / n} = \set {r^{1 / n} e^{i \paren {\theta + 2 \pi k} / n}: k \in \set {0, 1, 2, \ldots, n - 1} }$


Corollary
Let $z := \polar {r, \theta}$ be a complex number expressed in polar form, such that $z \ne 0$.
Let $n \in \Z_{>0}$ be a (strictly) positive integer.

Let $w$ be one of the complex $n$th roots of $z$.

Then the $n$th roots of $z$ are given by:

$z^{1 / n} = \set {w \epsilon^k: k \in \set {1, 2, \ldots, n - 1} }$
where $\epsilon$ is a primitive $n$th root of unity.


Proof
Let:

$w := r^{1 / n} \paren {\map \cos {\dfrac {\theta + 2 \pi k} n} + i \, \map \sin {\dfrac {\theta + 2 \pi k} n} }$
for $k \in \Z_{>0}$.

Then:














\(\ds w^n\)

\(=\)







\(\ds \paren {r^{1 / n} \paren {\map \cos {\dfrac {\theta + 2 \pi k} n} + i \, \sin {\dfrac {\theta + 2 \pi k} n} } }^n\)




















\(\ds \)

\(=\)







\(\ds \paren {r^{1 / n} }^n \paren {\cos n \paren {\dfrac {\theta + 2 \pi k} n} + i \sin n \paren {\dfrac {\theta + 2 \pi k} n} }\)





De Moivre's Formula














\(\ds \)

\(=\)







\(\ds r \paren {\map \cos {\theta + 2 \pi k} + i \, \map \sin {\theta + 2 \pi k} }\)




















\(\ds \)

\(=\)







\(\ds r \paren {\cos \theta + i \, \map \sin {\theta + 2 \pi k} }\)





Cosine of Angle plus Multiple of Full Angle














\(\ds \)

\(=\)







\(\ds r \paren {\cos \theta + i \sin \theta}\)





Sine of Angle plus Multiple of Full Angle




Now let $m = k + n$.
Then:














\(\ds \frac {\theta + 2 m \pi} n\)

\(=\)







\(\ds \frac {\theta + 2 \paren {k + n} \pi} n\)




















\(\ds \)

\(=\)







\(\ds \frac {\theta + 2 k \pi} n + \frac {2 n \pi} n\)




















\(\ds \)

\(=\)







\(\ds \frac {\theta + 2 k \pi} n + 2 \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {\theta + 2 k \pi} n + 2 \pi\)














\(\ds \leadsto \ \ \)





\(\ds \cos \frac {\theta + 2 m \pi} n + i \sin \frac {\theta + 2 m \pi} n\)

\(=\)







\(\ds \cos \frac {\theta + 2 k \pi} n + i \sin \frac {\theta + 2 k \pi} n\)





from above



exploiting the fact that Sine and Cosine are Periodic on Reals.
The result follows.
$\blacksquare$


Examples
Square Roots of $2 \sqrt 3 - 2 i$
The complex square roots of $2 \sqrt 3 - 2 i$ are given by:

$\paren {2 \sqrt 3 - 2 i}^{1/2} = \set {2 \cis 165 \degrees, 2 \cis 345 \degrees}$


Square Roots of $4 \sqrt 2 + 4 \sqrt 2 i$
The complex square roots of $4 \sqrt 2 + 4 \sqrt 2 i$ are given by:

$\paren {4 \sqrt 2 + 4 \sqrt 2 i}^{1/2} = \set {\sqrt 8 \cis 22.5 \degrees, \sqrt 8 \cis 202.5 \degrees}$


Cube Roots of Complex Number
Let $z := \polar {r, \theta}$ be a complex number expressed in polar form, such that $z \ne 0$.

Then the complex cube roots of $z$ are given by:

$z^{1 / 3} = \set {r^{1 / 3} \paren {\map \cos {\dfrac {\theta + 2 \pi k} 3} + i \, \map \sin {\dfrac {\theta + 2 \pi k} 3} }: k \in \set {0, 1, 2} }$
There are $3$ distinct such complex cube roots.

These can also be expressed as:

$z^{1 / 3} = \set {r^{1 / 3} e^{i \paren {\theta + 2 \pi k} / 3}: k \in \set {0, 1, 2} }$
or:

$z^{1 / 3} = \set {r^{1 / 3} e^{i \theta / 3} \omega^k: k \in \set {0, 1, 2} }$
where $\omega = e^{2 i \pi / 3} = -\dfrac 1 2 + \dfrac {i \sqrt 3} 2$ is the first cube root of unity.


Cube Roots of $8$
The complex cube roots of $8$ are given by:

$\paren 8^{1/3} = \set {2 \, \map \cis {120 k} \degrees}$
for $k = 0, 1, 2$.


Cube Roots of $2 + 2 i$
The complex cube roots of $2 + 2 i$ are given by:

$\paren {2 + 2 i}^{1/3} = \set {\sqrt 2 \paren {\cos \dfrac \pi {12} + i \sin \dfrac \pi {12} }, -1 + i, -\sqrt 2 \paren {\cos \dfrac {5 \pi} {12} + i \sin \dfrac {5 \pi} {12} }}$


Cube Roots of $-1 + i$
The complex cube roots of $-1 + i$ are given by:

$\paren {-1 + i}^{1/3} = \set {2^{1/6} \paren {\cos \dfrac \pi 4 + i \sin \dfrac \pi 4}, 2^{1/6} \paren {\cos \dfrac {11 \pi} {12} + i \sin \dfrac {11 \pi} {12} }, 2^{1/6} \paren {\cos \dfrac {19 \pi} {12} + i \sin \dfrac {19 \pi} {12} } }$


Cube Roots of $-11 - 2 i$
The complex cube roots of $-11 - 2 i$ are given by:

$\paren {-11 - 2 i}^{1/3} = \set {1 + 2 i, -\dfrac 1 2 + \sqrt 3 + \paren {-1 - \dfrac {\sqrt 3} 2} i, -\dfrac 1 2 - \sqrt 3 + \paren {-1 + \dfrac {\sqrt 3} 2} i}$


Cube Roots of $2 + 11 i$
The complex cube roots of $2 + 11 i$ are given by:

$\paren {2 + 11 i}^{1/3} = \set {2 + i, -1 + \dfrac {\sqrt 3} 2 + i \paren {-\dfrac 1 2 - \sqrt 3 }, -1 - \dfrac {\sqrt 3} 2 + i \paren {-\dfrac 1 2 + \sqrt 3}}$


Cube Roots of $2 - 11 i$
The complex cube roots of $2 - 11 i$ are given by:

$\paren {2 - 11 i}^{1/3} = \set {2 - i, -1 + \dfrac {\sqrt 3} 2 + i \paren {\dfrac 1 2 + \sqrt 3 }, -1 - \dfrac {\sqrt 3} 2 + i \paren {\dfrac 1 2 - \sqrt 3}}$


Cube Roots of $2 + 2 \sqrt 3 i$
The complex cube roots of $2 + 2 \sqrt 3 i$ are given by:

$\paren {2 + 2 \sqrt 3 i}^{1/3} = \set {\sqrt [3] 4 \, \map \cis {20 + 120 k} \degrees}$
for $k = 0, 1, 2$.


Square of Cube Roots of $i$
The squares of the complex cube roots of $i$ are given by:

$\paren i^{2/3} = \set {\map \cis {60 + 120 k} \degrees}$
for $k = 0, 1, 2$.


$4$th Roots of $i$
The complex $4$th roots of $i$ are given by:

$i^{1/4} = \set {b, bi, -b, -bi}$
where:

$b = \paren {\cos \dfrac \pi 8 + i \sin \dfrac \pi 8}$


$4$th Roots of $-16 i$
The complex $4$th roots of $-16 i$ are given by:

$\paren {-16 i}^{1/4} = \set {2 \, \map \cis {67.5 + 90 k} \degrees}$
for $k = 0, 1, 2, 3$.


$4$th Roots of $-2 \sqrt 3 - 2 i$
The complex $4$th roots of $-2 \sqrt 3 - 2 i$ are given by:

$\paren {-2 \sqrt 3 - 2 i}^{1/4} = \set {\sqrt 2 \paren {\map \cis {\dfrac {7 \pi} {24} + \dfrac {k \pi} 2} } }$
for $k = 0, 1, 2, 3$.


Roots of $z^4 + 81 = 0$
The roots of the polynomial:

$z^4 + 81$
are:

$\set {3 \cis 45 \degrees, 3 \cis 135 \degrees, 3 \cis 225 \degrees, 3 \cis 315 \degrees}$


Roots of $z^4 - 81 = 0$
The roots of the polynomial:

$z^4 - 81$
are:

$\set {3, 3 i, -3, -3 i}$


$5$th Roots of $-32$
Let $z^5 = -32$.
Then:

$z = 2 \paren {\map \cos {\dfrac {\pi + 2 k \pi} 5} + i \, \map \sin {\dfrac {\pi + 2 k \pi} 5} }$
for $k = 0, 1, 2, 3, 4$.


$5$th Roots of $-4 + 4 i$
The complex $5$th roots of $-4 + 4i$ are given by:

$\paren {-4 + 4i}^{1/5} = \set {\sqrt 2 \, \map \cis {27 + 72 k} \degrees}$
for $k = 0, 1, 2, 3, 4$.


$5$th Roots of $-16 + 16 \sqrt 3 i$
The complex $5$th roots of $-16 + 16 \sqrt 3 i$ are given by:

$\paren {-16 + 16 \sqrt 3 i}^{1/5} = \set {2 \, \map \cis {24 + 72 k} \degrees}$
for $k = 0, 1, 2, 3, 4$.


Roots of $z^5 + 1 = 0$
The roots of the polynomial:

$z^5 + 1 = 0$
are:

$\set {\cos \dfrac \pi 5 \pm i \sin \dfrac \pi 5, \cos \dfrac {3 \pi} 5 \pm i \sin \dfrac {3 \pi} 5, -1}$


$6$th Roots of $64$
The complex $6$th roots of $64$ are given by:

$\paren {64}^{1/6} = \set {2 \, \map \cis {60 k} \degrees}$
for $k = 0, 1, 2, 3, 4, 5$.


$6$th Roots of $-27 i$
The complex $6$th roots of $-27 i$ are given by:

$\paren {-27 i}^{1/6} = \set {\sqrt 3 \, \map \cis {45 + 60 k} \degrees}$
for $k = 0, 1, 2, 3, 4, 5$.


Roots of $z^6 + 1 = \sqrt 3 i$
The roots of the equation:

$z^6 + 1 = \sqrt 3 i$
are:

$\set {\sqrt [6] 2 \cis 20 \degrees, \sqrt [6] 2 \cis 80 \degrees, \sqrt [6] 2 \cis 140 \degrees, \sqrt [6] 2 \cis 200 \degrees, \sqrt [6] 2 \cis 260 \degrees, \sqrt [6] 2 \cis 320 \degrees}$


Roots of $z^8 + 1 = 0$
The roots of the polynomial:

$z^8 + 1 = 0$
are:

$\set {\cos \dfrac {\paren {2 k + 1} \pi} 8 + i \sin \dfrac {\paren {2 k + 1} \pi} 8: k \in \set {0, 1, \ldots, 7} }$


Sources
1957: E.G. Phillips: Functions of a Complex Variable (8th ed.) ... (previous) ... (next): Chapter $\text I$: Functions of a Complex Variable: $\S 3$. Geometric Representation of Complex Numbers
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $6.10$: Roots of Complex Number
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Roots of Complex Number
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Axiomatic Foundations of Complex Numbers: $80 \ \text{(a)}$




