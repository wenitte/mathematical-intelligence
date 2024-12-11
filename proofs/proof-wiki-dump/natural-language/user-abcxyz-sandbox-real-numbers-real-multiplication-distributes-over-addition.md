# 

Source: https://proofwiki.org/wiki/User:Abcxyz/Sandbox/Real_Numbers/Real_Multiplication_Distributes_over_Addition



Theorem
The operation of multiplication on the set of real numbers $\R$ is distributive over the operation of addition:

$\forall x, y, z \in \R:$
$x \times \left({y + z}\right) = x \times y + x \times z$
$\left({y + z}\right) \times x = y \times x + z \times x$


Proof 1
Let $\left({\R, +, \times, \le}\right)$ denote the real numbers, as axiomatically defined as a Dedekind complete totally ordered field.
By the field axioms, $\times$ is distributive over $+$ on $\R$.
$\blacksquare$


Proof 2
Let $\R$ denote the set of real numbers, as constructed from Cauchy sequences.
Let $\times$ and $+$ respectively denote multiplication and addition on $\R$.

From Rational Multiplication Distributes over Addition, it directly follows that $\times$ is distributive over $+$ on $\R$.
$\blacksquare$


Proof 3
Let $\R$ denote the set of real numbers, as constructed from Dedekind cuts.

Let $\alpha, \beta, \gamma \in \R$.
We only show that $\alpha \left({\beta + \gamma}\right) = \alpha \beta + \alpha \gamma$; that $\left({\beta + \gamma}\right) \alpha = \beta \alpha + \gamma \alpha$ follows similarly.


Case where $\alpha = 0^*$, $\beta = 0^*$, or $\gamma = 0^*$
The result follows because $0^*$ is the identity of $\left({\R, +}\right)$.
$\Box$


Case where $\alpha > 0^*$, $\beta > 0^*$, $\gamma > 0^*$
We have that $\alpha \left({\beta + \gamma}\right) > 0^*$, $\alpha \beta > 0^*$, and $\alpha \gamma > 0^*$.

Suppose that $q \in \alpha \left({\beta + \gamma}\right)$.
If $q \le 0$, then we have that $q \in \alpha \beta$ and $0 \in \alpha \gamma$, so $q \in \alpha \beta + \alpha \gamma$.
If $q > 0$, then there exist $r \in \alpha$, $s \in \beta + \gamma$, $r, s > 0$ such that $q = rs$.
By the definition of real addition, there exist $u \in \beta$ and $v \in \gamma$ such that $s = u + v$.
We have that $ru \in \alpha \beta$ and $rv \in \alpha \gamma$.
Since rational multiplication distributes over addition, we have that $q = ru + rv \in \alpha \beta + \alpha \gamma$.
Since $q$ was arbitrary, we have that $\alpha \left({\beta + \gamma}\right) \subseteq \alpha \beta + \alpha \gamma$.

Suppose that $q' \in \alpha \beta + \alpha \gamma$.
If $q' \le 0$, then $q' \in \alpha \left({\beta + \gamma}\right)$.
If $q' > 0$, then there exist $r' \in \alpha \beta$ and $s' \in \alpha \gamma$ such that $q' = r' + s'$.
We now define $u_1$, $v_1$, $u_2$, and $v_2$.
If $r' \le 0$, then choose any $u_1 \in \alpha$ such that $u_1 > 0$, and let $v_1 = \dfrac {r'} {u_1}$. Then $v_1 \in \beta$.
If $r' > 0$, then we can choose $u_1 \in \alpha$, $v_1 \in \beta$, $u_1, v_1 > 0$ such that $r' = u_1 v_1$.
If $s' \le 0$, then choose any $u_2 \in \alpha$ such that $u_2 > 0$, and let $v_2 = \dfrac {s'} {u_2}$. Then $v_2 \in \beta$.
If $s' > 0$, then we can choose $u_2 \in \alpha$, $v_2 \in \beta$, $u_2, v_2 > 0$ such that $s' = u_2 v_2$.
Let $A = \max {\left\{{u_1, u_2}\right\}} \in \alpha$.
Then:

$q' = A \left({\dfrac {u_1} A v_1 + \dfrac {u_2} A v_2}\right)$
If $v_1 \ge 0$, then by the definition of a Dedekind cut, we have that $\dfrac {u_1} A v_1 \in \beta$.
Otherwise, $v_1 < 0$, and so $\dfrac {u_1} A v_1 \in \beta$ because $\beta > 0^*$ by hypothesis.
Either way, $\dfrac {u_1} A v_1 \in \beta$; similarly, $\dfrac {u_2} A v_2 \in \gamma$.
Hence, $q' \in \alpha \left({\beta + \gamma}\right)$.
Since $q'$ was arbitrary, we have that $\alpha \beta + \alpha \gamma \subseteq \alpha \left({\beta + \gamma}\right)$.

By the definition of set equality, it follows that $\alpha \left({\beta + \gamma}\right) = \alpha \beta + \alpha \gamma$.
$\Box$


Case where $\alpha > 0^*$, $\beta + \gamma \ge 0^*$
If $\beta \ge 0^*$ and $\gamma \ge 0^*$, this has already been proven.
Thus, because real addition is commutative, we can assume, Without loss of generality, that $\beta < 0^*$.
Since $\le$ is compatible with $+$ on $\R$, we have that $-\beta \ge 0^*$, $\gamma \ge 0^*$.
Hence:














\(\ds \alpha \left({\beta + \gamma}\right)\)

\(=\)







\(\ds \alpha \beta + \alpha \left({-\beta}\right) + \alpha \left({\beta + \gamma}\right)\)





by the definition of real multiplication














\(\ds \)

\(=\)







\(\ds \alpha \beta + \alpha \left({\left({-\beta}\right) + \left({\beta + \gamma}\right)}\right)\)




















\(\ds \)

\(=\)







\(\ds \alpha \beta + \alpha \gamma\)





because real addition is associative



$\Box$


Case where $\alpha > 0^*$, $\beta + \gamma < 0^*$
If either $\beta = 0^*$ or $\gamma = 0^*$, the result follows.
Otherwise, we have $\beta < 0^*$ and $\gamma < 0^*$.
In this case:














\(\ds \alpha \left({\beta + \gamma}\right)\)

\(=\)







\(\ds -\left({\alpha \left({-\left({\beta + \gamma}\right)}\right)}\right)\)





by the definition of real multiplication














\(\ds \)

\(=\)







\(\ds -\left({\alpha \left({\left({-\beta}\right) + \left({-\gamma}\right)}\right)}\right)\)




















\(\ds \)

\(=\)







\(\ds -\left({\alpha \left({-\beta}\right) + \alpha \left({-\gamma}\right)}\right)\)





because $\left({-\beta}\right) + \left({-\gamma}\right) \ge 0^*$














\(\ds \)

\(=\)







\(\ds \left({-\left({\alpha \left({-\beta}\right)}\right)}\right) + \left({-\left({\alpha \left({-\gamma}\right)}\right)}\right)\)




















\(\ds \)

\(=\)







\(\ds \alpha \beta + \alpha \gamma\)





by the definition of real multiplication



$\Box$


Case where $\alpha < 0^*$













\(\ds \alpha \left({\beta + \gamma}\right)\)

\(=\)







\(\ds -\left({\left({-\alpha}\right) \left({\beta + \gamma}\right)}\right)\)





by the definition of real multiplication














\(\ds \)

\(=\)







\(\ds -\left({\left({-\alpha}\right) \beta + \left({-\alpha}\right) \gamma}\right)\)




















\(\ds \)

\(=\)







\(\ds \left({-\left({-\alpha}\right) \beta}\right) + \left({-\left({-\alpha}\right) \gamma}\right)\)




















\(\ds \)

\(=\)







\(\ds \alpha \beta + \alpha \gamma\)









$\blacksquare$


Proof 4
Let $\left({\left({\R, \le}\right), \phi}\right)$ be the Dedekind completion of the ordered set $\left({\Q, \le}\right)$ of rational numbers.


Strictly Positive Real Numbers
We only show that $\times$ is left distributive over $+$; that $\times$ is right distributive over $+$ follows similarly.

Let $x, y, z \in \R_{>0}$.
Define:

$A = \left\{{q \left({r + s}\right): q, r, s > 0, \, \phi \left({q}\right) \le x, \, \phi \left({r}\right) \le y, \, \phi \left({s}\right) \le z}\right\}$
$B = \left\{{pr + qs: p, q, r, s > 0, \, \phi \left({p}\right) \le x, \, \phi \left({q}\right) \le x, \, \phi \left({r}\right) \le y, \, \phi \left({s}\right) \le z}\right\}$
We have that:














\(\ds \sup \phi \left({A}\right)\)

\(=\)







\(\ds \sup { \left\{ {\phi \left({q}\right) \left({\phi \left({r}\right) + \phi \left({s}\right)}\right): q, r, s > 0, \, \phi \left({q}\right) \le x, \, \phi \left({r}\right) \le y, \, \phi \left({s}\right) \le z} \right\} }\)




















\(\ds \)

\(=\)







\(\ds \left({ \sup { \left\{ {\phi \left({q}\right): q > 0, \, \phi \left({q}\right) \le x} \right\} } }\right) \left({ \sup { \left\{ {\phi \left({r}\right): r > 0, \, \phi \left({r}\right) \le y} \right\} } + \sup { \left\{ {\phi \left({s}\right): s > 0, \, \phi \left({s}\right) \le z} \right\} } }\right)\)





by Supremum of Subset Product in Ordered Group














\(\ds \)

\(=\)







\(\ds x \left({y + z}\right)\)









Similarly:

$\sup \phi \left({B}\right) = xy + xz$
It thus suffices to show that $A = B$.

Clearly, $A \subseteq B$.
It remains to show that $B \subseteq A$.
Let $p, q, r, s \in \Q_{>0}$, $\phi \left({p}\right) \le x$, $\phi \left({q}\right) \le x$, $\phi \left({r}\right) \le y$, $\phi \left({s}\right) \le z$.
Let $\mu = \max {\left\{{p, q}\right\}}$.
Then:

$\ds pr + qs = \mu \left({\frac p \mu r + \frac q \mu s}\right) \in A$
Thus, by the definition of set equality, the result follows.
$\Box$


General Case

{{stub}}





