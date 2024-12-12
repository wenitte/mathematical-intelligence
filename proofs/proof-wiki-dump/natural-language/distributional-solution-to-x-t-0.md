# 

Source: https://proofwiki.org/wiki/Distributional_Solution_to_x_T_%3D_0



Theorem
Let $T \in \map {\DD'} \R$ be a distribution.
Let $\delta$ be the Dirac delta distribution.
Let $\mathbf 0$ be the zero distribution.
Suppose $T$ satisfies the following equation in the distributional sense:

$x T = \mathbf 0$

Then $T = \alpha \delta$ where $c \in \C$.


Proof
Let $\phi \in \map \DD \R$ be a test function.
Let $c \in \C$.
Suppose:

$T = c \delta$
Then:














\(\ds x \map T {\map \phi x}\)

\(=\)







\(\ds x \paren{c \map \delta {\map \phi x} }\)




















\(\ds \)

\(=\)







\(\ds \map \delta {c x \map \phi x}\)





Definition of Multiplication of Distribution by Smooth Function














\(\ds \)

\(=\)







\(\ds 0\)





Definition of Dirac Delta Distribution














\(\ds \)

\(=\)







\(\ds \map {\mathbf 0} \phi\)









Direct inclusion
Suppose:

$T \in \map {\DD'} \R : x T = 0$
Then:










\(\ds \forall \phi \in \map \DD \R: \, \)



\(\ds 0\)

\(=\)







\(\ds \map {xT} \phi\)




















\(\ds \)

\(=\)







\(\ds \map T {x \phi}\)





Definition of Multiplication of Distribution by Smooth Function



So:

$\set {x \phi : \phi \in \map \DD \R} \subseteq \ker T$
where $\ker$ denotes the kernel of $T$.
$\Box$

Let $\psi = x \phi$.
Suppose $\phi \in \map \DD \R$.
Then $\psi \in \map \DD \R$.
Furthermore:

$\paren {\map \phi 0 = 0} \implies \paren {\map \psi 0 = 0}$
Hence:

$\set {x \phi : \phi \in \map \DD \R} \subseteq \set {\psi \in \map \DD \R : \map \psi 0 = 0}$


Reverse inclusion
Let $\psi \in \map \DD \R$ such that $\map \psi 0 = 0$.
Then:














\(\ds \map \delta \psi\)

\(=\)







\(\ds \map \psi 0\)




















\(\ds \)

\(=\)







\(\ds 0\)









Hence:

$\ker \delta = \set {\psi \in \map \DD \R : \map \psi 0 = 0}$
By the fundamental theorem of calculus:














\(\ds \map \psi x\)

\(=\)







\(\ds \map \psi 0 + \int_0^x \map {\psi'} \xi \rd \xi\)




















\(\ds \)

\(=\)







\(\ds 0 + x \int_0^1 \map {\psi'} {tx} \rd t\)





$\xi = t x$














\(\ds \)

\(=\)







\(\ds x \int_0^1 \map {\psi'} {tx} \rd t\)









Let $\ds \map \phi x := \int_0^1 \map {\psi'} {tx} \rd t$.
Then $\map \psi x = x \map \phi x$
By assumption, $\psi$ is a test function.
Hence, $\psi$ is smooth:

$\psi \in \map {C^\infty} \R$
By differentiating under integral sign:

$\phi \in \map {C^\infty} \R$
By definition, $\psi$ has a compact support.
Let $a \in \R_{\mathop > 0}$.
Suppose:

$\forall x \notin \closedint {-a} a : \map \psi x = 0$
Then:

$\ds \forall  x \notin \closedint {-a} a : \map \phi x = \frac {\map \psi x}x = 0$
We have that $\phi$ is smooth and compactly supported.
By definition, $\phi \in \map \DD \R$.
Altogether:

$\set {\psi \in \map \DD \R : \map \psi 0 = 0} \subset \set {x \phi : \phi \in \map \DD \R}$
Thus:

$\ker \delta \subseteq \set {x \phi : \phi \in \map \DD \R} \subseteq \ker T$
By Kernel of Linear Transformation contained in Kernel of different Linear Transformation implies Transformations are Proportional:

$\exists c \in \C : T = c \delta$

$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.4$: A glimpse of distribution theory. Multiplication by $C^\infty$ functions




