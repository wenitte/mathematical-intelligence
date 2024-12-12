# 

Source: https://proofwiki.org/wiki/General_Operation_from_Binary_Operation



Theorem
Let $\struct {S, \oplus}$ be a magma.

Then there a unique sequence $\sequence {\oplus_k}_{k \mathop \ge 1}$ such that:

$(1): \quad \forall n \in \N_{>0}: \oplus_n$ is an $n$-ary operation on $S$ such that:
$(2): \quad \forall \tuple {a_1, \ldots, a_k} \in S^k: \map {\oplus_k} {a_1, \ldots, a_k} = \begin{cases}
a : & k = 1 \\
\map {\oplus_n} {a_1, \ldots, a_n} \oplus a_{n + 1} : & k = n + 1
\end{cases}$

In particular, $\oplus_2$ is the same as the given binary operation $\oplus$.

The $n$th term $\oplus_n$ of the sequence $\sequence \oplus$ is called the $n$-ary operation defined by $\oplus$.


Proof
Let $\Bbb S = \leftset {\odot:}$ for some $n \in \N_{>0}$, $\odot$ is an $n$-ary operation on $\rightset S$.
Let $s: \Bbb S \to \Bbb S$ be the mapping defined as follows.

Let $\odot$ be any $n$-ary operation defined on $\Bbb S$.
Then $\map s \odot$ is the $\paren {n + 1}$-ary operation defined by:

$\forall \tuple {a_1, \ldots, a_n, a_{n + 1} } \in S^{n + 1}: \map {\map s \odot} {a_1, \ldots, a_n, a_{n + 1} } = \map \odot {a_1, \ldots, a_n} \oplus a_{n + 1}$

By the Principle of Recursive Definition, there is a unique sequence $\sequence {\oplus_k}_{k \mathop \ge 1}$ such that:

$\oplus_1$ is the unary operation defined as $\map {\oplus_1} a = a$
and:

$\oplus_{n + 1} = \map s {\oplus_n}$ for each $n \in \N_{>0}$.

Let $A$ be the set defined as the set of all $n$ such that:

$\oplus_n$ is an $n$-ary operation on $S$
and:

by the definition of $s$, $(2)$ holds for every ordered $n + 1$-tuple in $S^{n + 1}$.

It will be demonstrated by the Principle of Mathematical Induction that $A = \N$.


Basis for the Induction
We have that:

$\oplus_1$ is the unary operation defined as $\map {\oplus_1} a = a$
By the Principle of Recursive Definition:

$\oplus_2 = \map s {\oplus_1}$
is the unique operation on $S$ such that:










\(\ds \forall \tuple {a_1, a_2} \in S^2: \, \)



\(\ds \map {\oplus_2} {a_1, a_2}\)

\(=\)







\(\ds \map {\map s {\oplus_1} } {a_1, a_2}\)





Definition of $s$














\(\ds \)

\(=\)







\(\ds \map {\oplus_1} {a_1} \oplus a_2\)




















\(\ds \)

\(=\)







\(\ds a_1 \oplus a_2\)









By the definition of a magma, $\oplus$ is a operation defined such that:

$\forall \tuple {a_1, a_2} \in S \times S: map \oplus {a_1, a_2} \in S$
where $\oplus: S \times S \to S$ is a mapping.
$a_1 \oplus a_2$ is defined as:

$\forall \paren {a_1, a_2} \in S \times S: a_1 \oplus a_2 := \map \oplus {a_1, a_2}$
So $1 \in A$.
This is our basis for the induction.


Induction Hypothesis
It is to be shown that, if $m \in A$ where $m \ge 1$, then it follows that $m + 1 \in A$.

This is the induction hypothesis:

$\oplus_m$ is an $m$-ary operation on $S$
and:

by the definition of $s$, $(2)$ holds for every ordered $m + 1$-tuple in $S^{m + 1}$.

It is to be demonstrated that it follows that:

$\oplus_{m+1}$ is an $m+1$-ary operation on $S$
and:

by the definition of $s$, $(2)$ holds for every ordered $m + 2$-tuple in $S^{m + 2}$.


Induction Step
This is our induction step:
By the Principle of Recursive Definition:

$\oplus_{m + 1} = \map s {\oplus_m}$
is the unique operation on $S$ such that:










\(\ds \forall \tuple {a_1, a_2, \ldots, a_{m + 1} } \in S^{m + 1}: \, \)



\(\ds \map {\oplus_{m + 1} } {a_1, a_2, \ldots, a_{m + 1} }\)

\(=\)







\(\ds \map {\map s {\oplus_m} } {a_1, a_2, \ldots, a_{m + 1} }\)





Definition of $s$














\(\ds \)

\(=\)







\(\ds \map {\oplus_m} {a_1, a_2, \ldots, a_m} \oplus a_{m + 1}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a_1 \oplus a_2 \oplus \cdots \oplus a_m} \oplus a_{m + 1}\)










By the definition of a magma, $\oplus$ is a operation defined such that:

$\forall \tuple {a_1, a_2} \in S \times S: \map \oplus {a_1, a_2} \in S$
where $\oplus: S \times S \to S$ is a mapping.
By the induction hypothesis:

$\map {\oplus_m} {a_1, a_2, \ldots, a_m} \oplus a_{m + 1} \in S$
So by definition:
$\map {\oplus_{m + 1} } {a_1, a_2, \ldots, a_m, a_{m + 1} } \in S$
Let $b := \map {\oplus_{m + 1} } {a_1, a_2, \ldots, a_m, a_{m + 1} }$.
But then by the basis of the induction:

$b \oplus a_{m + 2} \in S$
That is:

$\map {\oplus_{m + 1} } {a_1, a_2, \ldots, a_m, a_{m + 1} } \oplus a_{m + 2} = \map {\oplus_{m + 2} } {a_1, a_2, \ldots, a_m, a_{m + 1}, a_{m + 2} } \in S$
So $m \in A \implies m + 1 \in A$ and the result follows by the Principle of Mathematical Induction:
$\blacksquare$


Also see
Definition:N-Ary Operation Defined by Binary Operation


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.1$




