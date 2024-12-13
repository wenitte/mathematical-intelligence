# 

Source: https://proofwiki.org/wiki/Pointwise_Scalar_Multiple_of_Measurable_Function_is_Measurable

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f : X \to \overline \R$ be a $\Sigma$-measurable function.
Let $\alpha \in \overline \R$ be an extended real number. 

Then the pointwise scalar multiple $\alpha f$ is $\Sigma$-measurable.


Proof
We want to show that: 

$\set {x \in X : \alpha \map f x \le t}$ is $\Sigma$-measurable for each $t \in \R$.
in each of the cases: 

$(1): \quad$ $\alpha = 0$
$(2): \quad$ $0 < \alpha < \infty$
$(3): \quad$ $-\infty < \alpha < 0$
$(4): \quad$ $\alpha = \infty$
$(5): \quad$ $\alpha = -\infty$

If $\alpha = 0$, then $\alpha f = 0$, and $\alpha f$ is $\Sigma$-measurable from Constant Function is Measurable, giving case $(1)$. 
Suppose that $0 < \alpha < \infty$. 
Since $f$ is $\Sigma$-measurable, we have that: 

$\ds \set {x \in X : \map f x \le \frac t \alpha}$ is $\Sigma$-measurable for each $t \in \R$.
Since: 

$\ds \set {x \in X : \alpha \map f x \le t} = \set {x \in X : \map f x \le \frac t \alpha}$
we have the theorem in the case $\alpha > 0$, giving case $(2)$. 

Suppose that $-\infty < \alpha < 0$.
Since $f$ is $\Sigma$-measurable, we have from Characterization of Measurable Functions:

$\ds \set {x \in X :\map f x \ge \frac t \alpha}$ is $\Sigma$-measurable for each $t \in \R$.
Since:

$\ds \set {x \in X : \alpha \map f x \le t} = \set {x \in X :\map f x \ge \frac t \alpha}$
we have the theorem in the case $\alpha < 0$, giving case $(3)$. 

Suppose that $\alpha = \infty$.
Then from the definition of extended real multiplication, we have: 

$\map {\paren {\alpha f} } x = \begin{cases}\infty & \map f x \ne 0 \\ 0 & \map f x = 0\end{cases}$
If $t < 0$, we have: 

$\set {x \in X : \alpha \map f x \le t} = \O$
which is $\Sigma$-measurable.
If $t \ge 0$, we have: 

$\set {x \in X : \alpha \map f x \le t} = \set {x \in X : \map f x = 0}$
From Measurable Functions Determine Measurable Sets and Constant Function is Measurable, we have that: 

$\set {x \in X : \map f x = 0} \in \Sigma$
So:

$\set {x \in X : \alpha \map f x \le t}$ is $\Sigma$-measurable for each $t \in \R$
giving case $(4)$. 

Suppose that $\alpha = -\infty$.
From the rules of extended real multiplication, we have: 

$\paren {-\infty} \times f = -\paren {\infty \times f}$
From case $(4)$, we have that: 

$\infty \times f$ is $\Sigma$-measurable.
From case $(2)$, we then have: 

$\paren {-1} \times \paren {\infty \times f} = \paren {-\infty} \times f$ is $\Sigma$-measurable
hence showing case $(5)$.
$\blacksquare$





