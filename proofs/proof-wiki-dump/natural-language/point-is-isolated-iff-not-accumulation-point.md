# 

Source: https://proofwiki.org/wiki/Point_is_Isolated_iff_not_Accumulation_Point



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$.
Let $x \in H$.
Then:

$x$ is an isolated point in $H$
if and only if:

$x$ is not an accumulation point of $H$


Proof
Sufficient Condition
Let $x \in H$ be an isolated point in $H$.
Then by definition of isolated point:

$\exists U \in \tau: H \cap U = \set x$
That is, by definition of uniqueness:

$\lnot \forall U \in \tau: \paren {x \in U \implies \exists y \in S: \paren {y \in H \cap U \land x \ne y} }$
Hence by Characterization of Derivative by Open Sets:

$x \notin A'$
where $A'$ denotes the derivative of $A$.
Thus by definition of derivative:

$x$ is not an accumulation point of $H$.
$\Box$


Necessary Condition
Let $x \in H$ not be an accumulation point of $H$.
Thus by definition of derivative:

$x \notin A'$
Hence:










\(\ds \lnot \forall U \in \tau: \, \)



\(\ds \)

\(\)







\(\ds \paren {x \in U \implies \exists y \in S: \paren {y \in H \cap U \land x \ne y} }\)





Characterization of Derivative by Open Sets










\(\ds \exists U \in \tau: \, \)



\(\ds \)

\(\)







\(\ds \lnot \paren {x \in U \implies \exists y \in S: \paren {y \in H \cap U \land x \ne y} }\)





Denial of Universality










\(\ds \exists U \in \tau: \, \)



\(\ds \)

\(\)







\(\ds \paren {x \in U \land \lnot \exists y \in S: \paren {y \in H \cap U \land x \ne y} }\)





[[	Conjunction with Negative is Equivalent to Negation of Conditional]]










\(\ds \exists U \in \tau: \, \)



\(\ds \)

\(\)







\(\ds \paren {x \in U \land \forall y \in S: \lnot \paren {y \in H \cap U \land x \ne y} }\)





Denial of Existence










\(\ds \exists U \in \tau: \, \)



\(\ds \)

\(\)







\(\ds \paren {x \in U \land \forall y \in S: \paren {y \in H \cap U \implies x = y} }\)





Conditional is Equivalent to Negation of Conjunction with Negative










\(\ds \exists U \in \tau: \, \)



\(\ds \)

\(\)







\(\ds H \cap U = \set x\)





Definition of Unique, and $x \in H$




Thus by definition of isolated point:

$x$ is an isolated point in $H$.
$\blacksquare$





