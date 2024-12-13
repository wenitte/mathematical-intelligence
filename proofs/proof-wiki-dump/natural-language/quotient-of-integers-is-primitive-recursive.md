# 

Source: https://proofwiki.org/wiki/Quotient_of_Integers_is_Primitive_Recursive

Theorem
Let $\operatorname{quot}_\Z : \N^2 \to \N$ be defined as:

$\map {\operatorname{quot}_\Z} {a_\Z, b_\Z} = \begin{cases}
q_\Z & : b \ne 0 \\
0 & : b = 0
\end{cases}$
where:

$k_\Z$ denotes the code number for the integer $k$
$q$ is the quotient of $a$ on division by $b$
Then $\operatorname{quot}_\Z$ is primitive recursive.


Proof
By definition:

$a = q b + r$
where $0 \le r < \size b$.
We will first show that $\operatorname{quot}_{\Z,\N} : \N^2 \to \N$ defined as:

$\map {\operatorname{quot}_{\Z,\N}} {a_\Z, b} = \begin{cases}
q_\Z & : b \ne 0 \\
0 & : b = 0
\end{cases}$
with the difference being that $b \in \N$ instead of $\Z$.

If $a \ge 0$, we have $\operatorname{quot} : \N^2 \to \N$ from Quotient is Primitive Recursive.
If $a < 0$, we have:














\(\ds a\)

\(=\)







\(\ds q b + r\)




















\(\ds -a\)

\(=\)







\(\ds -q b - r\)




















\(\ds \)

\(=\)







\(\ds -\paren {q + 1} b - r + b\)




















\(\ds -\paren {a + 1}\)

\(=\)







\(\ds -\paren {q + 1} b + \paren {b - r - 1}\)









As $0 \le r < b$, we have $0 \le b - r - 1 < b$.
Thus, $-\paren {q + 1}$ is the quotient of $-\paren {a + 1}$ on division by $b$, by definition.
Additionally, since $a < 0$, we have $-\paren {a + 1} = -a - 1 \ge 0$.
Therefore, we can use the Quotient is Primitive Recursive form again.
If $q' = - \paren {q + 1}$, then we have:

$q = -q' + -1$
Putting it all together:

$\map {\operatorname{quot}_{\Z,\N}} {a_\Z, b} = \begin{cases}
\paren {\map {\operatorname{quot}} {\size a, b}}_\Z & : b \ne 0 \land \neg \paren {a < 0} \\
\paren {-1 + -\map {\operatorname{quot}} {\map {\operatorname{pred}} {\size a}, b}}_\Z & : b \ne 0 \land a < 0 \\
0 & : b = 0
\end{cases}$
which is primitive recursive by:

Definition by Cases is Primitive Recursive
Quotient is Primitive Recursive
Predecessor Function is Primitive Recursive
Addition of Integers is Primitive Recursive
Absolute Value of Integer is Primitive Recursive
Code Number for Non-Negative Integer is Primitive Recursive
Code Number for Non-Positive Integer is Primitive Recursive
Constant Function is Primitive Recursive
Set Operations on Primitive Recursive Relations
Ordering Relations are Primitive Recursive
Equality Relation is Primitive Recursive
Set of Strictly Negative Integers is Primitive Recursive

Finally, we can define $\operatorname{quot}_\Z$.
Observe that:

$a = q b + r \iff a = \paren {-q} \paren {-b} + r$
Thus:

$q$ is the quotient of $a$ on division by $b$ if and only if $-q$ is the quotient of $a$ on division by $-b$
Therefore, we can reduce to the case above:

$\map {\operatorname{quot}_\Z} {a_\Z, b_\Z} = \map {\sgn_\Z} b \times_\Z \map {\operatorname{quot}_{\Z,\N}} {a_\Z, \size b}$
which is primitive recursive by:

Multiplication of Integers is Primitive Recursive
Signum Function on Integers is Primitive Recursive
Absolute Value of Integer is Primitive Recursive
$\blacksquare$





