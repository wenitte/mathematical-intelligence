# 

Source: https://proofwiki.org/wiki/Cauchy-Riemann_Equations/Sufficient_Condition

Theorem
Let $D \subseteq \C$ be an open subset of the set of complex numbers $\C$.
Let $f: D \to \C$ be a complex function on $D$.

Let $u, v: \set {\paren {x, y} \in \R^2: x + i y = z \in D} \to \R$ be two real-valued functions defined as:

$\map u {x, y} = \map \Re {\map f z}$
$\map v {x, y} = \map \Im {\map f z}$
where:

$\map \Re {\map f z}$ denotes the real part of $\map f z$
$\map \Im {\map f z}$ denotes the imaginary part of $\map f z$.

Let:

$u$ and $v$ be differentiable in their entire domain
and:

The following two equations, known as the Cauchy-Riemann equations, hold for the continuous partial derivatives of $u$ and $v$:
$(1): \quad \dfrac {\partial u} {\partial x} = \dfrac {\partial v} {\partial y}$
$(2): \quad \dfrac {\partial u} {\partial y} = -\dfrac {\partial v} {\partial x}$

Then:

$f$ is complex-differentiable in $D$
and:

for all $z \in D$:
$\map {f'} z = \map {\dfrac {\partial f} {\partial x} } z = -i \map {\dfrac {\partial f} {\partial y} } z$


Proof
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


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 1.3$




