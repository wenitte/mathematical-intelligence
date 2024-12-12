# 

Source: https://proofwiki.org/wiki/Functional_Completeness_over_Finite_Number_of_Arguments



Theorem
Every truth function is definable from the set of Binary Truth Functions.


Proof
Let $f : \Bbb B^k \to \Bbb B$ be an arbitrary truth function.

Suppose that $k = 0$.
Then, let:

$b = \map f {}$
If $b = T$, then let:

$\map g {p, q} = \map {f_\T} {p, q} = T$
otherwise, if $b = F$:

$\map g {p, q} = \map {f_\F} {p, q} = F$
Finally, let $\map i {} = \tuple {\F, \F}$.
$i$ is clearly an injection, and:

$\map g {\map i {}} = b$
Thus, $f = g \circ i$, and $f$ is definable for $k = 0$.

If $k = 1$, then by Unary Truth Functions, $f$ is either:

Constant $\F$
Constant $\T$
Identity
Logical Not
If $f$ is constant mapping, then the same $g$ definitions work as above.
If $f$ is identity or logical not, then we use:

$\map g {p, q} = \map {\pr_1} {p, q} = p$
and

$\map g {p, q} = \map {\overline {\pr_1}} {p, q} = \neg p$
respectively.
We also define:

$\map i p = \tuple {p, \F}$
As $f = g \circ i$, every $f$ is definable for $k = 1$.

For all remaining $k$, we will proceed by mathematical induction.

Basis for the Induction
Suppose that $k = 2$.
Then $f$ is a Binary Truth Functions already, so

$g = f$
and

$i$ identity
satisfies the definition.
$\Box$


Induction Hypothesis
Suppose that, for $k \ge 2$, every truth function $f : \Bbb B^k \to \Bbb B$ is definable from the set of Binary Truth Functions.
We want to conclude that, for $k \ge 2$, every truth function $f : \Bbb B^{k + 1} \to \Bbb B$


Induction Step
Let $f : \Bbb B^{k + 1} \to \Bbb B$ be arbitrary.
Define the two truth functions:

$\map {f_0} {x_1, \dotsc, x_k} = \map f {\F, x_1, \dotsc, x_k}$
$\map {f_1} {x_1, \dotsc, x_k} = \map f {\T, x_1, \dotsc, x_k}$
Define:

$\map g {b, x_1, \dotsc, x_k} = \paren {\neg \paren {b \impliedby \map {f_0} {x_1, \dotsc, x_k}}} \lor \paren {b \land \map {f_1} {x_1, \dotsc, x_k}}$
where:

$p \land q$ represents conjunction
$p \lor q$ represents disjunction
$\neg \paren {p \impliedby q}$ represents negated conditional
We want to show that, for all $b, x_1, \dotsc, x_k \in \Bbb B$:

$\map g {b, x_1, \dotsc, x_k} = \map f {b, x_1, \dotsc, x_k}$
If $b = \F$, then:














\(\ds \map g {b, x_1, \dotsc, x_k}\)

\(=\)







\(\ds \map g {\F, x_1, \dotsc, x_k}\)





Assumption














\(\ds \)

\(=\)







\(\ds \paren {\neg \paren {\F \impliedby \map {f_0} {x_1, \dotsc, x_k} } } \lor \paren {\F \land \map {f_1} {x_1, \dotsc, x_k} }\)





Definition of $g$














\(\ds \)

\(=\)







\(\ds \paren {\neg \paren {\F \impliedby \map {f_0} {x_1, \dotsc, x_k} } } \lor \F\)





Definition of Conjunction














\(\ds \)

\(=\)







\(\ds \neg \paren {\F \impliedby \map {f_0} {x_1, \dotsc, x_k} }\)





Definition of Disjunction














\(\ds \)

\(=\)







\(\ds \map {f_0} {x_1, \dotsc, x_k}\)





Definition of Negated Conditional














\(\ds \)

\(=\)







\(\ds \map f {\F, x_1, \dotsc, x_k}\)





Definition of $f_0$














\(\ds \)

\(=\)







\(\ds \map f {b, x_1, \dotsc, x_k}\)





Assumption



Instead, if $b = \T$, then:














\(\ds \map g {b, x_1, \dotsc, x_k}\)

\(=\)







\(\ds \map g {\T, x_1, \dotsc, x_k}\)





Assumption














\(\ds \)

\(=\)







\(\ds \paren {\neg \paren {\T \impliedby \map {f_0} {x_1, \dotsc, x_k} } } \lor \paren {\T \land \map {f_1} {x_1, \dotsc, x_k} }\)





Definition of $g$














\(\ds \)

\(=\)







\(\ds \F \lor \paren {\T \land \map {f_1} {x_1, \dotsc, x_k} }\)





Definition of Negated Conditional














\(\ds \)

\(=\)







\(\ds \T \land \map {f_1} {x_1, \dotsc, x_k}\)





Definition of Disjunction














\(\ds \)

\(=\)







\(\ds \map {f_1} {x_1, \dotsc, x_k}\)





Definition of Conjunction














\(\ds \)

\(=\)







\(\ds \map f {\T, x_1, \dotsc, x_k}\)





Definition of $f_1$














\(\ds \)

\(=\)







\(\ds \map f {b, x_1, \dotsc, x_k}\)





Assumption



Thus, regardless of the value of $b$:

$\map g {b, x_1, \dotsc, x_k} = \map f {b, x_1, \dotsc, x_k}$
always holds.

By the induction hypothesis, $f_0$ and $f_1$ are definable from the set of Binary Truth Functions.
As $g$ was obtained by composition from $f_0$, $f_1$, and Binary Truth Functions, it is as well.
As $f = g$, the same holds for $f$.
$\Box$

Thus, by the Principle of Mathematical Induction:

For every $k \ge 2$, all truth functions $\Bbb B^k \to \Bbb B$ are definable from the set of Binary Truth Functions.
Combined with the above results for $k = 0$ and $k = 1$, the result follows.
$\blacksquare$





