# 

Source: https://proofwiki.org/wiki/Integers_are_Dense_in_P-adic_Integers



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\Z_p$ be the $p$-adic integers.
Let $d_p$ be the metric induced by the norm $\norm {\,\cdot\,}_p$ restricted to the $p$-adic integers.

The integers $\Z$ are dense in the metric space $\struct{\Z_p, d_p}$.

Corollary
The integers $\Z$ are dense in the closed ball $\map {B^-_1} 0$.


Proof
From Open Ball Characterization of Denseness it is sufficient to show that every open ball of $\struct {\Z_p, d_p}$ contains an element of $\Z$.

Let $x \in \Z_p$ and $\epsilon \in \R_{>0}$.
By definition the open ball $\map {B_\epsilon} x$ is:

$\map {B_\epsilon} x = \set {y \in \Z_p: \norm y_p < \epsilon}$

From Sequence of Powers of Number less than One then:

$\ds \lim_{n \mathop \to \infty} p^{-n} = 0$
Hence there exists $N \in \N$:

$\forall n \ge N: p^{-n} < \epsilon$
Consider the open ball $\map {B_{p^{-N} } } x$.
Since $0 < p^{-n} < \epsilon$ then:

$\map {B_{p^{-N} } } x \subseteq \map {B_\epsilon} x$.

From Integers are Arbitrarily Close to P-adic Integers then:

$\exists \alpha \in \Z: \alpha \in \map {B_{p^{-N} } } x$
Hence $\alpha \in \map {B_\epsilon} x$.

Since $x$ and $\epsilon$ were arbitrary then every open ball of $\struct {\Z_p, d_p}$ contains an element of $\Z$.
From Open Ball Characterization of Denseness then $\Z$ is dense in the metric space $\struct {\Z_p, d_p}$.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.3$ Exploring $\Q_p$: Lemma $3.3.4 \ \text {(ii)}$




