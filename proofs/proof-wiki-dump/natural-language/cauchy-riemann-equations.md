# 

Source: https://proofwiki.org/wiki/Cauchy-Riemann_Equations


This page has been identified as a candidate for refactoring of advanced complexity.In particular: The content of the exposition has basically been extracted into a definition page. Hence the emphasis of this page is to be changed so as to establiush the equivalence between the definitions of a complex-differentiable function, and to establish that all these definitions -- complex-differentiable, complex analytic, holomorphic -- are in fact the same thing. Major exercise which probly won't be today.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $D \subseteq \C$ be an open subset of the set of complex numbers $\C$.
Let $f: D \to \C$ be a complex function on $D$.

Let $u, v: \set {\tuple {x, y} \in \R^2: x + i y = z \in D} \to \R$ be the two real-valued functions defined as:














\(\ds \map u {x, y}\)

\(=\)







\(\ds \map \Re {\map f z}\)




















\(\ds \map v {x, y}\)

\(=\)







\(\ds \map \Im {\map f z}\)









where:

$\map \Re {\map f z}$ denotes the real part of $\map f z$
$\map \Im {\map f z}$ denotes the imaginary part of $\map f z$.

Then $f$ is complex-differentiable in $D$ if and only if:

$u$ and $v$ are differentiable in their entire domain
and:

The following two equations, known as the Cauchy-Riemann equations, hold for the continuous partial derivatives of $u$ and $v$:



\(\text {(1)}: \quad\)









\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \dfrac {\partial v} {\partial y}\)










\(\text {(2)}: \quad\)









\(\ds \dfrac {\partial u} {\partial y}\)

\(=\)







\(\ds -\dfrac {\partial v} {\partial x}\)










This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: This relates to the final $3$rd part of this page: Cauchy-Riemann Equations/Expression of Derivative. Needs to be separated out properly.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
If the conditions are true, then for all $z \in D$:

$\map {f'} z = \map {\dfrac {\partial f} {\partial x} } z = -i \map {\dfrac {\partial f} {\partial y} } z$


Polar Form
The Cauchy-Riemann equations can be expressed in polar form as:




\(\text {(1)}: \quad\)









\(\ds \dfrac {\partial u} {\partial r}\)

\(=\)







\(\ds \dfrac 1 r \dfrac {\partial v} {\partial \theta}\)










\(\text {(2)}: \quad\)









\(\ds \dfrac 1 r \dfrac {\partial u} {\partial \theta}\)

\(=\)







\(\ds -\dfrac {\partial v} {\partial r}\)









where $z$ is expressed in exponential form as:

$z = r e^{i \theta}$


Proof
Necessary Condition
Let $z = x + i y \in D$.
The Epsilon-Function Complex Differentiability Condition shows that there exists $r \in \R_{>0}$ such that for all $t \in \map {B_r} 0 \setminus \set 0$:

$(\text a): \quad \map f {z + t} = \map f z + t \paren {\map {f'} z + \map \epsilon t}$
where:

$\map {B_r} 0$ denotes an open ball of $0$
$\epsilon: \map {B_r} 0 \setminus \set 0 \to \CC$ is a function with $\ds \lim_{t \mathop \to 0} \map \epsilon t = 0$.
Define $a, b, h, k \in \R$ by $a + i b = \map {f'} z$, and $h + i k = t$.

By taking the real parts of both sides of equation $(\text a)$, it follows that:














\(\ds \map u {x + h, y + k}\)

\(=\)







\(\ds \map \Re {\map f z} + \map \Re {t \map {f'} z} + \map \Re {t \map \epsilon t}\)





Addition of Real and Imaginary Parts














\(\ds \)

\(=\)







\(\ds \map u {x, y} + \map \Re {h a - k b + i h b + i a k} + \map \Re {h \map \epsilon t + i k \map \epsilon t}\)





Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds \map u {x, y} + h a - k b + h \map \Re {\map \epsilon t} + k \map \Re {i \map \epsilon t}\)





Multiplication of Real and Imaginary Parts














\(\ds \)

\(=\)







\(\ds \map u {x, y} + h \paren {a + \map \Re {\map \epsilon t} } + k \paren {-b + \map \Re {i \map \epsilon t} }\)









To find the partial derivative $\dfrac {\partial u} {\partial x}$, assume that $y$ is fixed, and let $t$ be wholly real.
Then $t = h$, and $k = 0$, so:

$\map u {x + h, y} = \map u {x, y} + h \paren {a + \map \Re {\map \epsilon h} }$
From Limits of Real and Imaginary Parts, it follows that:

$\ds \lim_{h \mathop \to 0} \map \Re {\map \epsilon h} = \map \Re {\lim_{h \mathop \to 0} \map \epsilon h} = \map \Re 0 = 0$

Then the Epsilon-Function Differentiability Condition proves that:

$\map {\dfrac {\partial u} {\partial x} } {x, y} = a$

To find the partial derivative $\dfrac {\partial u} {\partial y}$, assume that $x$ is fixed, and let $t$ be wholly imaginary.
Then $t = i k$, and $h = 0$, so:

$\map u {x, y + k} = \map u {x, y} + k \paren {-b + \map \Re {i \map \epsilon {i k} } }$

From Limits of Real and Imaginary Parts, it follows that:

$\ds \lim_{k \mathop \to 0} \map \Re {i \map \epsilon k} = \map \Re {i \lim_{k \mathop \to 0} \map \epsilon k} = 0$

Then the Epsilon-Function Differentiability Condition proves that:

$\map {\dfrac {\partial u} {\partial y} } {x, y} = -b$
$\Box$

By taking the imaginary parts of both sides of equation $(\text a)$, it follows that:














\(\ds \map v {x + h, y + k}\)

\(=\)







\(\ds \map v {x, y} + \map \Im {h a - k b + i h b + i a k} + \map \Im {h \map \epsilon t + i k \map \epsilon t}\)




















\(\ds \)

\(=\)







\(\ds \map v {x, y} + h \paren {b + \map \Im {\map \epsilon t} } + k \paren {a + \map \Im {i \map \epsilon t} }\)





by a similar calculation to the one above



To find the partial derivative $\dfrac {\partial v} {\partial x}$, assume that $y$ is fixed, and let $t$ be wholly real.
Then $t = h$, and $k = 0$, so:

$\map v {x + h, y} = \map v {x, y} + h \paren {b + \map \Im {\map \epsilon h} }$
A similar argument to the ones above shows that the Epsilon-Function Differentiability Condition can be applied to prove that:

$\map {\dfrac {\partial v} {\partial x} } {x, y} = b = -\map {\dfrac {\partial u} {\partial y} } {x, y}$
This proves the second Cauchy-Riemann equation.
To find the partial derivative $\dfrac {\partial v} {\partial y}$, assume that $x$ is fixed, and let $t$ be wholly imaginary.
Then $t = ik$, and $h = 0$, so:

$\map v {x, y + k} = \map v {x, y} + k \paren {a + \map \Im {i \map \epsilon {i k} } }$
Here, the Epsilon-Function Differentiability Condition shows that:

$\map {\dfrac {\partial v} {\partial y} } {x, y} = a = \map {\dfrac {\partial u} {\partial x} } {x, y}$
This proves the first Cauchy-Riemann equation.
$\Box$

From Holomorphic Function is Continuously Differentiable, it follows that $f'$ is continuous.
From Composite of Continuous Mappings is Continuous and Real and Imaginary Part Projections are Continuous, it follows that $\map \Re {f'}$ and $\map \Im {f'}$ are continuous.
Then all four partial derivatives are  continuous, as:














\(\ds \map {\dfrac {\partial u} {\partial x} } {x, y}\)

\(=\)







\(\ds \map {\dfrac {\partial v} {\partial y} } {x, y}\)




















\(\ds \)

\(=\)







\(\ds a\)




















\(\ds \)

\(=\)







\(\ds \map \Re {\map {f'} z}\)









and:














\(\ds \map {\dfrac {\partial u} {\partial y} } {x, y}\)

\(=\)







\(\ds -\map {\dfrac {\partial v} {\partial x} } {x, y}\)




















\(\ds \)

\(=\)







\(\ds -b\)




















\(\ds \)

\(=\)







\(\ds -\map \Im {\map {f'} z}\)










By definition of differentiable real-valued function, it follows that $u$ and $v$ are differentiable.
$\Box$


Sufficient Condition
Suppose that the Cauchy-Riemann equations hold for $u$ and $v$ in their entire domain.
Let $h, k \in \R \setminus \set 0$, and put $t = h + i k \in \C$.
Let $\tuple {x, y} \in \R^2$ be a point in the domain of $u$ and $v$.
Put:

$a = \map {\dfrac {\partial u} {\partial x} } {x, y} = \map {\dfrac {\partial v} {\partial y} } {x, y}$
and:

$b = -\map {\dfrac {\partial u} {\partial y} } {x, y} = \map {\dfrac {\partial v} {\partial x} } {x, y}$
From the Epsilon-Function Differentiability Condition, it follows that:

$\map u {x + h, y} = \map u {x, y} + h \paren {a + \map {\epsilon_{u x} } h}$
$\map u {x, y + k} = \map u {x, y} + k \paren {-b + \map {\epsilon_{u y} } k}$
$\map v {x + h, y} = \map v {x, y} + h \paren {b + \map {\epsilon_{v x} } k}$
$\map v {x, y + k} = \map v {x, y} + k \paren {a + \map {\epsilon_{v y} } h}$
where $\epsilon_{u x}, \epsilon_{u y}, \epsilon_{v x}, \epsilon_{v y}$ are real functions that converge to $0$ as $h$ and $k$ tend to $0$.
We have by hypothesis that the partial derivatives are continuous.
Then Epsilon-Function Differentiability Condition shows that $\epsilon_{u x}, \epsilon_{u y}, \epsilon_{v x}, \epsilon_{v y}$ are continuous real functions.
With $z = x + i y$, it follows that:














\(\ds \map f {z + t}\)

\(=\)







\(\ds \map u {x + h, y + k} + i \map v {x + h, y + k}\)




















\(\ds \)

\(=\)







\(\ds \map u {x, y} + i \map v {x, y} + h \paren {a + i b + \map {\epsilon_{u x} } h + i \map {\epsilon_{v x} } h} + k \paren {i a - b + \map {\epsilon_{u y} } k + i \map {\epsilon_{v y} } k}\)




















\(\ds \)

\(=\)







\(\ds \map f z + t \paren {a + i b + \dfrac h t \map {\epsilon_{u x} } h + \dfrac h t i \map {\epsilon_{v x} } h - \dfrac k t i \map {\epsilon_{u y} } k + \dfrac k t \map {\epsilon_{v y} } k}\)









Now, define $\map \epsilon t$ as:














\(\ds \map \epsilon t\)

\(=\)







\(\ds \dfrac h t \map {\epsilon_{u x} } h + \dfrac h t i \map {\epsilon_{v x} } h - \dfrac k t i \map {\epsilon_{u y} } k + \dfrac k t \map {\epsilon_{v y} } k\)














\(\ds \leadsto \ \ \)





\(\ds \cmod {\map \epsilon t}\)

\(\le\)







\(\ds \cmod {\dfrac h t \map {\epsilon_{u x} } h} + \cmod {\dfrac h t \map {\epsilon_{v x} } h} + \cmod {\dfrac k t \map {\epsilon_{u y} } k} + \cmod {\dfrac k t \map {\epsilon_{v y} } k}\)





Triangle Inequality for Complex Numbers














\(\ds \)

\(=\)







\(\ds \cmod {\dfrac h t} \cmod {\map {\epsilon_{u x} } h} + \cmod {\dfrac h t} \cmod {\map {\epsilon_{v x} } h} + \cmod {\dfrac k t} \cmod {\map {\epsilon_{u y} } k} + \cmod {\dfrac k t} \cmod {\map {\epsilon_{v y} } k}\)





Complex Modulus of Product of Complex Numbers




By Modulus Larger than Real Part and Imaginary Part:

$\cmod k \le \cmod t$
and:

$\cmod h \le \cmod t$
Hence dividing by $\cmod t$ we have:

$\cmod {\dfrac h t} \le 1$
and:

$\cmod {\dfrac k t} \le 1$
From Composite of Continuous Mappings is Continuous, it follows that $\map \epsilon t$ is continuous.
Thus:














\(\ds \lim_{t \mathop \to 0} \cmod {\map \epsilon t}\)

\(\le\)







\(\ds \lim_{t \mathop \to 0} \cmod {\dfrac h t} \cmod {\map {\epsilon_{u x} } h} + \cmod {\dfrac h t} \cmod {\map {\epsilon_{v x} } h}\)





Combined Sum Rule for Limits of Complex Functions














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \cmod {\dfrac k t} \cmod {\map {\epsilon_{u y} } k} + \cmod {\dfrac k t} \cmod {\map {\epsilon_{v y} } k}\)




















\(\ds \)

\(\le\)







\(\ds \lim_{t \mathop \to 0} \cmod {\map {\epsilon_{u x} } h} + \lim_{t \mathop \to 0} \cmod {\map {\epsilon_{v x} } h}\)





as $\cmod {\dfrac h t} \le 1$ and $\cmod {\dfrac k t} \le 1$ from above














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \lim_{t \mathop \to 0} \cmod {\map {\epsilon_{u y} } k} + \lim_{t \mathop \to 0} \cmod {\map {\epsilon_{v y} } k}\)




















\(\ds \)

\(=\)







\(\ds 0\)










This shows that:

$\ds \lim_{t \mathop \to 0} \map \epsilon t = 0$
Then the Epsilon-Function Complex Differentiability Condition shows that:

$\map {f'} x = a + i b$
$\blacksquare$


Expression of Derivative
Let $z = x + i y$.
Then:














\(\ds \map {\dfrac {\partial f} {\partial x} } z\)

\(=\)







\(\ds \map {\dfrac {\partial u} {\partial x} } {x, y} + i \map {\dfrac {\partial v} {\partial x} } {x, y}\)




















\(\ds \)

\(=\)







\(\ds \map \Re {\map {f'} z} + i \, \map \Im {\map {f'} z}\)





from the last part of the proof for sufficient condition














\(\ds \)

\(=\)







\(\ds \map {f'} z\)









Similarly:














\(\ds -i \map {\dfrac {\partial f} {\partial y} } z\)

\(=\)







\(\ds -i \paren {\map {\dfrac {\partial u} {\partial y} } {x, y} + i \map {\dfrac {\partial v} {\partial y} } {x, y} }\)




















\(\ds \)

\(=\)







\(\ds -i \paren {-\map \Im {\map {f'} z} + i \map \Re {\map {f'} z} }\)





from the last part of the proof for sufficient condition














\(\ds \)

\(=\)







\(\ds \map {f'} z\)









$\blacksquare$


Source of Name
This entry was named for Augustin Louis Cauchy and Georg Friedrich Bernhard Riemann.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.7$ Complex Numbers and Functions: Complex Functions, Cauchy-Riemann Equations: $3.7.30$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Cauchy-Riemann equations
2001: Christian Berg: Kompleks funktionsteori: $\S 1.3$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Cauchy-Riemann equations
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Cauchy-Riemann equations




