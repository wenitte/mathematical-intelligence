# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Algebra/Proof_5

Theorem
Every non-constant polynomial with coefficients in $\C$ has a root in $\C$.


Proof

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Let $\map p z$ be an arbitrary non-constant polynomial with coefficients in $\C$.
This means that for some $n \in \Z_{ge 1}$ and $a_n \ne 0$:

$\map p z = a_n z^n + a_{n - 1}z^{n - 1} + \dots + a_0$
We have:

$\map p z = a_n z^n \paren {1 + \dfrac {a_{n - 1} } {a_n}z^{-1} + \dots + \dfrac 1 {a_n}z^{-n} } = a_n z^n \paren {1 + \map \OO {z^{-1} } }$
as $\size z \to \infty$.
Hence:

$\ds \lim_{\size z \mathop \to \infty} \size {\map p z} = \infty$
Thus we can pick $R > 0$ large enough so that:

$\ds \inf_{\size z \mathop \ge R} \size {\map p z} > \size {\map p 0}$
It follows that:

$\ds \inf_{z \mathop \in \C} \size {\map p z} = \inf_{\size z \mathop \le R} \size {\map p z}$
Since $D_R = \set {z \in \C : \size z \le R}$ is compact and $p$ is continuous, there exists $z_0 \in D_R$ such that:

$\ds \inf_{\size z \mathop \le R} \size {\map p z} = \size {\map p {z_0} }$
Hence:

$\ds \size {\map p {z_0} } = \inf_{z \mathop \in \C} \size {\map p z}$
It remains to show that $\map p {z_0} = 0$.
Aiming for a contradiction, suppose:

$\map p {z_0} = a \ne 0$
Write:

$\map {z_0 + \zeta} = a + \map q \zeta$
Note that $\map q \zeta$ is a nonconstant polynomial in $\zeta$ satisfying $\map q 0 = 0$.
Hence for some $k \ge 1$ and $b \ne 0$, we have:

$\map q \zeta = b \zeta^k + b_{k + 1} \zeta^{k + 1} + \dots + b_n \zeta^n$
That is:

$\map q \zeta = b \zeta^k + \map \OO {\zeta^{k + 1} }$
as $\zeta \to 0$.
Thus, uniformly in $\omega \in S^1 = \set {\omega \in \C : \size {\omega} = 1}$:

$\map p {z_0 + \epsilon \omega} = a + b \omega^k \epsilon^k + \map \OO {\epsilon^{k + 1} }$
as $\epsilon \searrow 0$.
Since $\size {-\dfrac {a / \size a} {b / \size b} } = 1$, by Euler's theorem, we can pick $\omega \in S^1$ such that:

$\omega^k = -\dfrac {a / \size a} {b / \size b}$
Then:

$\ds \map p {z_0 + \epsilon \omega} = a - a \dfrac {\size b} {\size a} \epsilon^k + \map \OO {\epsilon^{k + 1} } = a \paren {1 - \dfrac {\size b} {\size a} \epsilon^k} + \map \OO {\epsilon^{k + 1} }$
Thus:

$\size {\map p {z_0 + \epsilon\omega} } = \size a \size {1 - \dfrac {\size b} {\size a} \epsilon^k} + \map \OO {\epsilon^{k + 1} }$
Thus for $\epsilon > 0$ small enough:














\(\ds \size {\map p {z_0 + \epsilon \omega} }\)

\(=\)







\(\ds \size a \paren {1 - \dfrac {\size b} {\size a} \epsilon^k} + \map \OO {\epsilon^{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \size a - \size b \epsilon^k + \map \OO {\epsilon^{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \size a - \size b \epsilon^k \paren {1 + \map \OO \epsilon}\)




















\(\ds \)

\(>\)







\(\ds \size a\)









But this contradicts that:

$\size a = \inf_{z \mathop \in \C} \size {\map p z}$
Thus:

$\map p {z_0} = a = 0$
$\blacksquare$





