# 

Source: https://proofwiki.org/wiki/Order_Sum_of_Ordered_Sets_is_Ordered



Theorem
Let $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ be ordered sets.

Then the order sum $\struct {S_1, \preccurlyeq_1} \oplus \struct {S_2, \preccurlyeq_2}$ of $\struct {S_1, \preccurlyeq_1}$ and $\struct {S_2, \preccurlyeq_2}$ is also an ordered set.


Proof
Let $\struct {S, \preccurlyeq} := \struct {S_1, \preccurlyeq_1} \oplus \struct {S_2, \preccurlyeq_2}$.

By definition:

$\forall \tuple {a, b}, \tuple {c, d} \in S: \tuple {a, b} \preccurlyeq \tuple {c, d} \iff \begin {cases} b = 0 \text { and } d = 1 \\ b = d = 0 \text { and } a \preccurlyeq_1 c \\ b = d = 1 \text { and } a \preccurlyeq_2 c \end {cases}$

We check in turn each of the criteria for an ordering:


Reflexivity
We have by definition of set union:

$\forall \tuple {a, n} \in S_1 \sqcup S_2: a \in S_1 \lor a \in S_1$
and so either $a \preccurlyeq_1 a$ or $a \preccurlyeq_2 a$.
Hence by definition of $\oplus$:

$\forall \tuple {a, n} \in S: \tuple {a, n} \preccurlyeq \tuple {a, n}$

So $\preccurlyeq$ is reflexive.
$\Box$


Transitivity
We proceed on a case-by-case basis.

Let $\tuple {a, n_a}, \tuple {b, n_b}, \tuple {c, n_c} \in S$.
Let $\tuple {a, n_a} \preccurlyeq \tuple {b, n_b}$ and $\tuple {b, n_b} \preccurlyeq \tuple {c, n_c}$.

Suppose $a, b, c \in S_1$.
Then:














\(\ds \tuple {a, n_a}\)

\(\preccurlyeq\)







\(\ds \tuple {b, n_b}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {a, 0}\)

\(\preccurlyeq\)







\(\ds \tuple {b, 0}\)





as $a, b \in S_1$








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\preccurlyeq_1\)







\(\ds b\)





Definition of $\oplus$














\(\ds \tuple {b, n_b}\)

\(\preccurlyeq\)







\(\ds \tuple {c, n_c}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {b, 0}\)

\(\preccurlyeq\)







\(\ds \tuple {c, 0}\)





as $b, c \in S_1$








\(\ds \leadsto \ \ \)





\(\ds b\)

\(\preccurlyeq_1\)







\(\ds c\)





Definition of $\oplus$








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\preccurlyeq_1\)







\(\ds c\)





Transitivity of $\preccurlyeq_1$








\(\ds \leadsto \ \ \)





\(\ds \tuple {a, n_a}\)

\(\preccurlyeq\)







\(\ds \tuple {c, n_c}\)





Definition of $\oplus$




Suppose $a, b, c \in S_2$.
Then:














\(\ds \tuple {a, n_a}\)

\(\preccurlyeq\)







\(\ds \tuple {b, n_b}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {a, 1}\)

\(\preccurlyeq\)







\(\ds \tuple {b, 1}\)





as $a, b \in S_2$








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\preccurlyeq_2\)







\(\ds b\)





Definition of $\oplus$














\(\ds \tuple {b, n_b}\)

\(\preccurlyeq\)







\(\ds \tuple {c, n_c}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {b, 1}\)

\(\preccurlyeq\)







\(\ds \tuple {c, 1}\)





as $b, c \in S_2$








\(\ds \leadsto \ \ \)





\(\ds b\)

\(\preccurlyeq_2\)







\(\ds c\)





Definition of $\oplus$








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\preccurlyeq_2\)







\(\ds c\)





Transitivity of $\preccurlyeq_2$








\(\ds \leadsto \ \ \)





\(\ds \tuple {a, n_a}\)

\(\preccurlyeq\)







\(\ds \tuple {c, n_c}\)





Definition of $\oplus$




Suppose $a, b \in S_1$ and $c \in S_2$.
Then:














\(\ds \tuple {a, n_a}\)

\(\preccurlyeq\)







\(\ds \tuple {b, n_b}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {a, 0}\)

\(\preccurlyeq\)







\(\ds \tuple {b, 0}\)





as $a, b \in S_1$








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\preccurlyeq_1\)







\(\ds b\)





Definition of $\oplus$




Then we have that:














\(\ds \tuple {a, n_a}\)

\(=\)







\(\ds \tuple {a, 0}\)




















\(\ds \tuple {c, n_c}\)

\(=\)







\(\ds \tuple {c, 1}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {a, n_a}\)

\(\preccurlyeq\)







\(\ds \tuple {c, n_c}\)





Definition of $\oplus$




Suppose $a \in S_1$ and $b, c \in S_2$.
Then:














\(\ds \tuple {b, n_b}\)

\(\preccurlyeq\)







\(\ds \tuple {c, n_c}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {b, 1}\)

\(\preccurlyeq\)







\(\ds \tuple {c, 1}\)





as $b, c \in S_2$








\(\ds \leadsto \ \ \)





\(\ds b\)

\(\preccurlyeq_2\)







\(\ds c\)





Definition of $\oplus$




Then we have that:














\(\ds \tuple {a, n_a}\)

\(=\)







\(\ds \tuple {a, 0}\)




















\(\ds \tuple {c, n_c}\)

\(=\)







\(\ds \tuple {c, 1}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {a, n_a}\)

\(\preccurlyeq\)







\(\ds \tuple {c, n_c}\)





Definition of $\oplus$




There are four other cases to consider:

$a, c \in S_1, b \in S_2$
$b, c \in S_1, a \in S_2$
$c \in S_1, a, b \in S_2$
$b \in S_1, a, c \in S_2$.
None of these can happen as otherwise one of $\lnot \paren {\tuple {a, n_a} \preccurlyeq \tuple {b, n_b} }$ or $\lnot \paren {\tuple {b, n_b} \preccurlyeq \tuple {c, n_c} }$ would be the case.

Thus in all cases we have that:

$\tuple {a, n_a} \preccurlyeq \tuple {b, n_b} \text { and } \tuple {b, n_b} \preccurlyeq \tuple {c, n_c} \implies \tuple {a, n_a} \preccurlyeq \tuple {c, n_c}$

So we have shown that $\preccurlyeq$ is transitive.
$\Box$


Antisymmetry
Suppose $\tuple {a, n_a} \preccurlyeq \tuple {b, n_b}$ and $\tuple {b, n_b} \preccurlyeq \tuple {a, n_a}$.

It cannot be the case that $a \in S_1$ and $b \in S_2$ because then $\lnot \paren {\tuple {b, n_b} \preccurlyeq \tuple {a, n_a} }$.
It cannot be the case that $a \in S_2$ and $b \in S_1$ because then $\lnot \paren {\tuple {a, n_a} \preccurlyeq \tuple {b, n_b} }$

So either $a, b \in S_1$ or $a, b \in S_2$.
If $a, b \in S_1$ then $a = b$ by antisymmetry of $\preccurlyeq_1$.
If $a, b \in S_2$ then $a = b$ by antisymmetry of $\preccurlyeq_2$.
Thus in all cases it can be seen that:

$\tuple {a, n_a} \preccurlyeq \tuple {b, n_b} \text { and } \tuple {b, n_b} \preccurlyeq \tuple {a, n_a} \implies \tuple {a, n_a} = \tuple {b, n_b}$
So $\preccurlyeq$ is antisymmetric.
$\Box$

So we have shown that $\preccurlyeq$ is reflexive, transitive and antisymmetric.
Thus by definition, $\preccurlyeq$ is an ordering and so $\struct {S_1, \preccurlyeq_1} \oplus \struct {S_2, \preccurlyeq_2}$ is an ordered set.
$\blacksquare$





