# 

Source: https://proofwiki.org/wiki/User:Abcxyz/Sandbox/Real_Numbers/Real_Multiplication_is_Associative



Theorem
Let $\R$ denote the set of real numbers.
Let $\times$ denote multiplication on $\R$.

Then $\times$ is associative on $\R$.


Proof 1
Let $\left({\R, +, \times, \le}\right)$ denote the real numbers, as axiomatically defined as a Dedekind complete totally ordered field.
By the field axioms, $\times$ is associative on $\R$.
$\blacksquare$


Proof 2
Let $\R$ denote the set of real numbers, as constructed from Cauchy sequences.
Let $\times$ denote multiplication on $\R$.

From Rational Multiplication is Associative, it directly follows that $\times$ is associative on $\R$.
$\blacksquare$


Proof 3
Let $\R$ denote the set of real numbers, as constructed from Dedekind cuts.

Let $\alpha, \beta, \gamma \in \R$.
We wish to show that $\left({\alpha \beta}\right) \gamma = \alpha \left({\beta \gamma}\right)$.


Case where $\alpha = 0^*$, $\beta = 0^*$, or $\gamma = 0^*$
The result follows because $0^*$ is the identity of $\left({\R, +}\right)$.
$\Box$


Case where $\alpha > 0^*$, $\beta > 0^*$, $\gamma > 0^*$
We have that $\alpha \beta > 0^*$ and $\beta \gamma > 0^*$.
Define:

$A = \left\{{pq: p \in \alpha \beta, \, q \in \gamma, \, p, q > 0}\right\}$
$B = \left\{{rs: r \in \alpha, \, s \in \beta \gamma, \, r, s > 0}\right\}$
We have that:

$\left({\alpha \beta}\right) \gamma = \Q_{\le 0} \cup A$
$\alpha \left({\beta \gamma}\right) = \Q_{\le 0} \cup B$
Hence, it suffices to show that $A = B$.

If $p \in \alpha \beta$, $q \in \gamma$, $p, q > 0$, then there exist $u \in \alpha$, $v \in \beta$, $u, v > 0$ such that $p = uv$.
Since rational multiplication is associative, we have that $pq = \left({uv}\right) q = u \left({vq}\right) \in \alpha \left({\beta \gamma}\right)$.
Since $p$ and $q$ were arbitrary, we have that $A \subseteq B$.
Similarly, $B \subseteq A$.
By the definition of set equality, we have that $A = B$.
$\Box$


Case where $\alpha > 0^*$, $\beta > 0^*$, $\gamma < 0^*$
We have that $-\gamma > 0^*$, $\beta \gamma = -\left({\beta \left({-\gamma}\right)}\right) < 0^*$.
Hence:

$\left({\alpha \beta}\right) \gamma = -\left({\left({\alpha \beta}\right) \left({-\gamma}\right)}\right) = -\left({\alpha \left({\beta \left({-\gamma}\right)}\right)}\right) = -\left({\alpha \left({-\left({\beta \gamma}\right)}\right)}\right) = \alpha \left({\beta \gamma}\right)$
$\Box$


Case where $\alpha > 0^*$, $\beta < 0^*$
We have that $-\beta > 0^*$, $\alpha \left({-\beta}\right) > 0^*$.
Hence:

$\left({\alpha \beta}\right) \gamma = \left({-\left({\alpha \left({-\beta}\right)}\right)}\right) \gamma = -\left({\left({\alpha \left({-\beta}\right)}\right) \gamma}\right) = -\left({\alpha \left({\left({-\beta}\right) \gamma}\right)}\right) = -\left({\alpha \left({-\left({\beta \gamma}\right)}\right)}\right) = \alpha \left({\beta \gamma}\right)$
$\Box$


Case where $\alpha < 0^*$
If $\alpha < 0^*$, then:

$\left({\alpha \beta}\right) \gamma = \left({-\left({\left({-\alpha}\right) \beta}\right)}\right) \gamma = -\left({\left({\left({-\alpha}\right) \beta}\right) \gamma}\right) = -\left({\left({-\alpha}\right) \left({\beta \gamma}\right)}\right) = \alpha \left({\beta \gamma}\right)$
$\blacksquare$





