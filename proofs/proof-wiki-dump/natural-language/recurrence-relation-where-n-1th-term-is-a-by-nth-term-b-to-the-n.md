# 

Source: https://proofwiki.org/wiki/Recurrence_Relation_where_n%2B1th_Term_is_A_by_nth_term_%2B_B_to_the_n



Theorem
Let $\sequence {a_n}$ be the sequence defined by the recurrence relation:

$a_n = \begin {cases} 0 & : n = 0 \\ A a_{n - 1} + B^{n - 1} & : n > 0 \end {cases}$
for numbers $A$ and $B$.

Then the closed form for $\sequence {a_n}$ is given by:

$a_n = \begin {cases} \dfrac {A^n - B^n} {A - B} & : A \ne B \\ n A^{n - 1} & : A = B \end {cases}$


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$a_n = \begin {cases} \dfrac {A^n - B^n} {A - B} & : A \ne B \\ n A^{n - 1} & : A = B \end {cases}$

$\map P 0$ is the case:














\(\ds \dfrac {A^0 - B^0} {A - B}\)

\(=\)







\(\ds \dfrac {1 - 1} {A - B}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 0 {A - B}\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds a_0\)










When $A = B$:














\(\ds 0 A^{-1}\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds a_0\)










Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:














\(\ds \dfrac {A^1 - B^1} {A - B}\)

\(=\)







\(\ds \dfrac {A - B} {A - B}\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds 0 \times A + 1\)




















\(\ds \)

\(=\)







\(\ds A a_0 + B^0\)




















\(\ds \)

\(=\)







\(\ds a_1\)










When $A = B$:














\(\ds 1 \times  A^0\)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds A \times 0 + 1\)




















\(\ds \)

\(=\)







\(\ds A \times a_0 + A^0\)










Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

This is the induction hypothesis:

$a_k = \begin {cases} \dfrac {A^k - B^k} {A - B} & : A \ne B \\ k A^{k - 1} & : A = B \end {cases}$

from which it is to be shown that:

$a_{k + 1} = \begin {cases} \dfrac {A^{k + 1} - B^{k + 1} } {A - B} & : A \ne B \\ \paren {k + 1} A^k & : A = B \end {cases}$


Induction Step
This is the induction step:

First let $A \ne B$.














\(\ds a_{k + 1}\)

\(=\)







\(\ds A a_k + B^k\)





by definition














\(\ds \)

\(=\)







\(\ds A \dfrac {A^k - B^k} {A - B} + B^k\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \dfrac {A \paren {A^k - B^k} + \paren {A - B} B^k} {A - B}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {A^{k + 1} - A B^k + A B^k - B^{k + 1} } {A - B}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {A^{k + 1} - B^{k + 1} } {A - B}\)










When $A = B$ we have for $k > 0$:














\(\ds a_{k + 1}\)

\(=\)







\(\ds A a_k + A^k\)




















\(\ds \)

\(=\)







\(\ds A \paren {k A^{k - 1} } + A^k\)




















\(\ds \)

\(=\)







\(\ds k A^k + A^k\)




















\(\ds \)

\(=\)







\(\ds \paren {k + 1} A^k\)









So $\map P k \implies \map P {k + 1}$ and by the Principle of Mathematical Induction:

$a_n = \begin {cases} \dfrac {A^n - B^n} {A - B} & : A \ne B \\ n A^{n - 1} & : A = B \end {cases}$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $28$ (solution)




