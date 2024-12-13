# 

Source: https://proofwiki.org/wiki/Lebesgue%27s_Number_Lemma/Compact_Space

Theorem
Let $M = \struct {X, d}$ be a metric space.
Let $M$ be compact.

Then there exists a Lebesgue number for every open cover of $M$.


Proof
Let $\UU$ be an open cover of $M$.
By definition of compact, there exists a finite subcover $\set {A_i}_{1 \le i \le n} \subseteq \UU$.

First, suppose some $A_i = X$.
Then, let $\epsilon = 1$.
For any $x \in X$:

$\map {B_\epsilon} x \subseteq X = A_i \in \UU$
Therefore, $\epsilon$ is a Lebesgue number for $\UU$.

Now, suppose every $A_i \subsetneq X$.
Then, for every $1 \le i \le n$:

$X \setminus A_i$
is non-empty.

By Distance in Pseudometric is Non-Negative:

$\map d {x, y} \ge 0$
for every $x, y \in X$
Therefore, for every $x \in X$ and $1 \le i \le n$:

$\set {\map d {x, y} : y \in X \setminus A_i}$
is bounded below.
Therefore, by the Greatest Lower Bound Property:

$\ds \inf_{y \mathop \in X \setminus A_i} \map d {x, y}$
is well-defined.

For each $1 \le i \le n$, define $f_i : X \to \R_{\ge 0}$ as:

$\ds \map {f_i} x = \inf_{y \mathop \in X \setminus A_i} \map d {x, y}$
We must show that every $f_i$ is continuous.

Let $\epsilon > 0$ and $a \in X$ be arbitrary.
Let $x \in X$ be arbitrary, satisfying:

$\map d {x, a} < \dfrac \epsilon 2$









\(\ds \forall y \in X \setminus A_i: \, \)



\(\ds \map d {x, y}\)

\(\le\)







\(\ds \map d {x, a} + \map d {a, y}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \map d {a, y}\)





Premise








\(\ds \leadsto \ \ \)





\(\ds \map {f_i} x\)

\(\le\)







\(\ds \frac \epsilon 2 + \map {f_i} a\)




















\(\ds \)

\(<\)







\(\ds \epsilon + \map {f_i} a\)














\(\ds \leadsto \ \ \)





\(\ds \map {f_i} x - \map {f_i} a\)

\(<\)







\(\ds \epsilon\)
















\(\ds \forall y \in X \setminus A_i: \, \)



\(\ds \map d {a, y}\)

\(\le\)







\(\ds \map d {a, x} + \map d {x, y}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \map d {x, a} + \map d {x, y}\)





Metric Space Axiom $(\text M 3)$














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \map d {x, y}\)














\(\ds \leadsto \ \ \)





\(\ds \map {f_i} a\)

\(\le\)







\(\ds \frac \epsilon 2 + \map {f_i} x\)




















\(\ds \)

\(<\)







\(\ds \epsilon + \map {f_i} x\)














\(\ds \leadsto \ \ \)





\(\ds -\epsilon\)

\(<\)







\(\ds \map {f_i} x - \map {f_i} a\)










Combining the above, we have:














\(\ds -\epsilon\)

\(<\)

\(\, \ds \map {f_i} x - \map {f_i} a \, \)

\(\, \ds < \, \)



\(\ds \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)

\(\, \ds \size {\map {f_i} x - \map {f_i} a} \, \)

\(\, \ds < \, \)



\(\ds \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)

\(\, \ds \map {d_\R} {\map {f_i} x, \map {f_i} a} \, \)

\(\, \ds < \, \)



\(\ds \epsilon\)









As $x \in X$ and $\epsilon > 0$ were arbitrary, it follows that $f_i$ is continuous at $a$ by definition.
But as $a \in X$ was also arbitrary, it follows that $f_i$ is continuous on $M$.

Define $f : X \to \R$ as:

$\ds \map f x = \frac 1 n \sum_{i = 1}^n \map {f_i} x$
By the Sum Rule and Multiple Rule:

$f$ is continuous on $M$.

By Continuous Image of Compact Space is Compact:

$f \sqbrk X$ is compact
By Compact Subspace of Real Numbers is Closed and Bounded:

$f \sqbrk X$ is closed and bounded.
By Infimum of Bounded Below Set of Reals is in Closure and Closed Set Equals its Closure:

$\epsilon_0 = \ds \inf_{x \in X} \map f x \in f \sqbrk X$
from which it follows that there is some $x_0 \in X$ such that:

$\map f {x_0} = \epsilon_0$
By definition of cover, there exists some $1 \le i \le n$ such that:

$x_0 \in A_i$
By definition of open set, there exists some $\epsilon > 0$ such that:

$\map {B_\epsilon} {x_0} \subseteq A_i$
Therefore:










\(\ds \forall y \in X \setminus A_i: \, \)



\(\ds y\)

\(\notin\)







\(\ds \map {B_\epsilon} {x_0}\)














\(\ds \leadsto \ \ \)





\(\ds \map d {x_0, y}\)

\(\ge\)







\(\ds \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds \map {f_i} {x_0}\)

\(\ge\)







\(\ds \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds \map f {x_0}\)

\(\ge\)







\(\ds \frac 1 n \map {f_i} {x_0}\)




















\(\ds \)

\(\ge\)







\(\ds \frac \epsilon n\)




















\(\ds \)

\(>\)







\(\ds 0\)









Therefore:

$\epsilon_0 > 0$

It remains to show that $\epsilon_0$ is a Lebesgue number for $\UU$.
Let $x \in X$ be arbitrary.
We want to show that:

$\map {B_{\epsilon_0}} x \subseteq A_i$
for some $1 \le i \le n$.
By definition of infimum:

$\map f x \ge \epsilon_0$
Therefore:

$\ds \sum_{i \mathop = 1}^n \map {f_i} x \ge n \epsilon_0$
It follows that:

$\map {f_i} x \ge \epsilon_0$
for some $1 \le i \le n$.
By definition of infimum again:

$\forall y \in X \setminus A_i: \map d {x, y} \ge \epsilon_0$
That is:

$\forall y \in X: \map d {x, y} < \epsilon_0 \implies y \in A_i$
which is precisely:

$\map {B_{\epsilon_0}} x \subseteq A_i$
$\blacksquare$


Source of Name
This entry was named for Henri Léon Lebesgue.





