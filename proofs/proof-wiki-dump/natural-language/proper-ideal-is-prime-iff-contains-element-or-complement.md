# 

Source: https://proofwiki.org/wiki/Proper_Ideal_is_Prime_iff_Contains_Element_or_Complement



Theorem
Let $\struct {S, \preceq}$ be a boolean lattice.
Let $I$ be a proper ideal on $S$.

Then:

$I$ is a prime ideal
if and only if:

for every $a \in S$, either $a \in I$ or $\neg a \in I$.


Proof
Necessary Condition
Suppose that $I$ is a prime ideal.
Then, by definition:

$S \setminus I$ is a filter
Aiming for a contradiction, suppose $a, \neg a \notin I$.
Then, $a, \neg \in S \setminus I$.
Hence, by Filter is Closed under Meet:

$\neg a \wedge a \in S \setminus I$
but then by definition of complement:

$\bot = \neg \wedge a \notin I$
which contradicts Bottom in Ideal.
$\Box$

Sufficient Condition
Suppose that for every $a \in S$:

either $a \in I$ or $\neg a \in I$.
We will show that $S \setminus I$ satisfies the filter axioms.

As $I$ is a proper ideal:

$I \subsetneq S$
and such:

$S \setminus I \ne \O$
which is filter axiom $\paren 1$.

Let $x, y \in S \setminus I$.
Then, by hypothesis:

$\neg x, \neg y \in I$
Aiming for a contradiction, suppose $x \wedge y \in I$.
Hence:














\(\ds I\)

\(\ni\)







\(\ds \neg x \vee \paren {x \wedge y} \vee \neg y\)





Ideal is Closed under Join














\(\ds \)

\(=\)







\(\ds \paren {\paren {\neg x \vee x} \vee \neg y} \wedge \paren {\neg x \vee \paren {y \vee \neg y} }\)





Distributive Lattice Axioms $\paren 2$ and $\paren {2'}$, Join is Associative














\(\ds \)

\(=\)







\(\ds \paren {\top \vee \neg y} \wedge \paren {\neg x \vee \top}\)





Join is Commutative, Definition of Complement














\(\ds \)

\(=\)







\(\ds \top \wedge \top\)





Top is Zero of Join














\(\ds \)

\(=\)







\(\ds \top\)





Meet is Idempotent



But that is a contradiction by Top not in Proper Ideal.
Therefore, our assumption that:

$x \wedge y \in I$
was false.
Therefore:

$x \wedge y \in S \setminus I$
which is filter axiom $\paren 2$.

Finally, let:

$x \in S \setminus I$
$y \in S$
and suppose that:

$x \preceq y$
If it were the case that:

$y \in I$
we would have by ideal axiom $\paren 1$:

$x \in I$
which is a contradiction.
Therefore, we must have:

$y \in S \setminus I$
which is filter axiom $\paren 3$.
$\blacksquare$





