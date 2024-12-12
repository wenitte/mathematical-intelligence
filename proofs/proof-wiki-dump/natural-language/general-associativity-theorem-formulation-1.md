# 

Source: https://proofwiki.org/wiki/General_Associativity_Theorem/Formulation_1



Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $\sequence {a_k}_{p + 1 \mathop \le k \mathop \le p + n}$ be a sequence of elements of $S$.
Let $\sequence {r_k}_{0 \mathop \le k \mathop \le s}$ be a strictly increasing sequence of natural numbers such that $r_0 = p$ and $r_s = p+n$.

Suppose:

$\ds \forall k \in \closedint 1 s: b_k = \prod_{j \mathop = r_{k - 1} \mathop + 1}^{r_k} {a_j}$
Then:

$\ds \forall n \in \N_{>0}: \prod_{k \mathop = 1}^s {b_k} = \prod_{k \mathop = p \mathop + 1}^{p \mathop + n} {a_k}$

That is:

$\ds \forall n \in \N_{>0}: \prod_{k \mathop = 1}^s \paren {a_{r_{k - 1} + 1} \circ a_{r_{k - 1} + 2} \circ \ldots \circ a_{r_k} } = a_{p + 1} \circ \ldots \circ a_{p + n}$


Proof
The proof will proceed by the Principle of Mathematical Induction on $\N$.
Let $T$ be the set of all $n \in \N_{>0}$ such that:

$(1): \quad$ for every sequence $\sequence {a_k}_{p + 1 \mathop \le k \mathop \le p + n}$ of elements of $S$
and:

$(2): \quad$ for every strictly increasing sequence $\sequence {r_k}_{0 \mathop \le k \mathop \le s}$ of natural numbers such that $r_0 = p$ and $r_s = p + n$:
the statement:

$\ds b_k = \prod_{j \mathop = r_{k - 1} \mathop + 1}^{r_k} a_j$
holds.


Basis for the Induction
Let $n = 1$.
Then:














\(\ds n\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds r_s\)

\(=\)







\(\ds r_0 + 1\)














\(\ds \leadsto \ \ \)





\(\ds s\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \prod_{k \mathop = 1}^s b_k\)

\(=\)







\(\ds b_1\)




















\(\ds \)

\(=\)







\(\ds a_{p + 1}\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = p + 1}^{p \mathop + n} a_k\)










So $1 \in T$.
This is our basis for the induction.


Induction Hypothesis
It is to be shown that, if $m \in T$ where $m \ge 1$, then it follows that $m + 1 \in T$.
This is the induction hypothesis:

$(1): \quad$ for every sequence $\sequence {a_k}_{p + 1 \mathop \le k \mathop \le p + m}$ of elements of $S$
and:

$(2): \quad$ for every strictly increasing sequence $\sequence {r_k}_{0 \mathop \le k \mathop \le s}$ of natural numbers such that $r_0 = p$ and $r_s = p + m$:
the statement:

$\ds b_k = \prod_{j \mathop = r_{k-1} \mathop + 1}^{r_k} a_j$
holds.

It is to be demonstrated that it follows that:

$(1): \quad$ for every sequence $\sequence {a_k}_{p + 1 \mathop \le k \mathop \le p + m + 1}$ of elements of $S$
and:

$(2): \quad$ for every strictly increasing sequence $\sequence {r_k}_{0 \mathop \le k \mathop \le s}$ of natural numbers such that $r_0 = p$ and $r_s = p + m + 1$:
the statement:

$\ds b_k = \prod_{j \mathop = r_{k - 1} \mathop + 1}^{r_k} a_j$
holds.


Induction Step
This is our induction step:
Let $\sequence {a_k}_{p + 1 \mathop \le k \mathop \le p + m + 1}$ be a sequence of elements of $S$.
Let $\sequence {r_k}_{0 \mathop \le k \mathop \le s}$ be a strictly increasing sequence of natural numbers such that $r_0 = p$ and $r_s = p + m + 1$.
Then $r_{s - 1} \le p + m$.
There are two cases:

$(1): \quad r_{s - 1} = p + m$
$(2): \quad r_{s - 1} < p + m$

First, suppose:

$r_{s - 1} = p + m$
Then:

$b_s = a_{p + m + 1}$

Thus:














\(\ds a_{p + 1} \circ \ldots \circ a_{p + m}\)

\(=\)







\(\ds b_1 \circ \ldots \circ b_{s-1}\)





$m \in T$ by Induction Hypothesis








\(\ds \leadsto \ \ \)





\(\ds a_{p + 1} \circ \ldots \circ a_{p + m + 1}\)

\(=\)







\(\ds \paren {a_{p + 1} \circ \ldots \circ a_{p + m} } \circ a_{p + m + 1}\)





Definition of Composite (Abstract Algebra)














\(\ds \)

\(=\)







\(\ds \paren {b_1 \circ \ldots \circ b_{s - 1} } \circ b_s\)




















\(\ds \)

\(=\)







\(\ds b_1 \circ \ldots \circ b_s\)





Definition of Composite (Abstract Algebra)




Secondly, suppose:

$r_{s - 1} < p + m$
Let $b\,'_s = a_{r_{s - 1} + 1} \circ \ldots \circ a_{r_s + 1}$.
Then by definition of composite:

$b_s = b\,'_s \circ a_{p + m + 1}$

Now by the Induction Hypothesis:

$m \in T \implies a_{p + 1} \circ \ldots \circ a_{p + m} = b_1 \circ \ldots \circ b_{s - 1} \circ b\,'_s$

Thus:














\(\ds b_1 \circ \ldots \circ b_s\)

\(=\)







\(\ds \paren {b_1 \circ \ldots \circ b_{s - 1} } \circ \paren {b\,'_s \circ a_{p + m + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {b_1 \circ \ldots \circ b_{s - 1} } \circ b\,'_s} \circ a_{p + m + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {b_1 \circ \ldots \circ b_{s - 1} \circ b\,'_s} \circ a_{p + m + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {a_{p + 1} \circ \ldots \circ a_{p + m} } \circ a_{p + m + 1}\)




















\(\ds \)

\(=\)







\(\ds a_{p + 1} \circ \ldots \circ a_{p + m} \circ a_{p + m + 1}\)










Thus in both cases $m + 1 \in T$.
So by the Principle of Mathematical Induction:

$T = \N_{>0}$

Hence the result.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 2$: The Axioms of Group Theory: $(1.4)$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.5$




