# 

Source: https://proofwiki.org/wiki/Cauchy-Riemann_Equations/Necessary_Condition

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

The following two equations, known as the Cauchy-Riemann equations, hold for the partial derivatives of $u$ and $v$:



\(\text {(1)}: \quad\)









\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \dfrac {\partial v} {\partial y}\)










\(\text {(2)}: \quad\)









\(\ds \dfrac {\partial u} {\partial y}\)

\(=\)







\(\ds -\dfrac {\partial v} {\partial x}\)










If the conditions are true, then for all $z \in D$:

$\map {f'} z = \map {\dfrac {\partial f} {\partial x} } z = -i \map {\dfrac {\partial f} {\partial y} } z$


Proof
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
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori: $\S 1.3$




