# 

Source: https://proofwiki.org/wiki/Group/Examples/inv_x_%3D_1_-_x



Theorem
Let $S = \set {x \in \R: 0 < x < 1}$.
Then an operation $\circ$ can be found such that $\struct {S, \circ}$ is a group such that the inverse of $x \in S$ is $1 - x$.


Proof
Define $f: \openint 0 1 \to \R$ by:

$\map f x := \map \ln {\dfrac {1 - x} x}$
Let us show that $f$ is a bijection by constructing an inverse mapping $g: \R \to \openint 0 1$:

$\map g z := \dfrac 1 {1 + \exp z}$
Lemma 1
$\map {f \circ g} x = x$


Lemma 2
$\map {g \circ f} x = x$



This needs considerable tedious hard slog to complete it.In particular: Might also be necessary to demonstrate the domain of $f$ is the image set of $g$ and vice versa.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Thus $f$ is a bijection.

Let $\struct {\R, +}$ be the additive group on $\R$.
Now define $\circ := +_f$ to be the operation induced on $\openint 0 1$ by $f$ and $+$:

$x \circ y := \map {f^{-1} } {\map f x + \map f y}$
Let us determine the behaviour of $\circ$ more explicitly:














\(\ds x \circ y\)

\(=\)







\(\ds \map g {\map f x + \map f y}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1 + \map \exp {\map \log {\frac {1 - x} x} + \map \log {\frac {1 - y} y} } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1 + \map \exp {\map \log {\frac {1 - x} x} } \map \exp {\map \log {\frac {1 - y} y} } }\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \frac 1 {1 + \paren {\frac {1 - x} x} \paren {\frac {1 - y} y} }\)





Exponential of Natural Logarithm




This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
We see that $\circ$ is commutative.
Let $x = \dfrac 1 2$, $\dfrac {1 - x} x = 1$ so that:














\(\ds \dfrac 1 2 \circ y\)

\(=\)







\(\ds \dfrac 1 {1 + \paren {\frac {1 - y} y} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\frac y y + \frac {1 - y} y}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\frac 1 y}\)




















\(\ds \)

\(=\)







\(\ds y\)









so that $\dfrac 1 2$ is the identity element for $\circ$.
Furthermore, putting $y = 1 - x$, the following obtains:














\(\ds \frac 1 {1 + \paren {\frac {1 - x} x} \paren {\frac x {1 - x} } }\)

\(=\)







\(\ds \frac 1 {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2\)









establishing $1 - x$ to be the inverse of $x$, as desired.
That $\circ$ in fact determines a group on $\openint 0 1$ follows from Pullback of Group is Group.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Definition of Group Structure: $\S 26 \mu$




