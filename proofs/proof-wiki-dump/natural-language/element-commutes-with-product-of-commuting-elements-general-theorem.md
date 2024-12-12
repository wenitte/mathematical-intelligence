# 

Source: https://proofwiki.org/wiki/Element_Commutes_with_Product_of_Commuting_Elements/General_Theorem



Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$ be a sequence of terms of $S$.

Let $b \in S$ such that $b$ commutes with $a_k$ for each $k \in \closedint 1 n$.
Then $b$ commutes with $a_1 \circ \cdots \circ a_n$.


Proof
The proof proceeds by induction on $n$, the length of $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$.


Basis for the Induction
The case $n = 1$ states that:

$b \circ a_1 = a_1 \circ b$
That is, $b$ commutes with $a_1$, which holds by hypothesis.

This constitutes the basis for the induction.


Induction Hypothesis
Fix $n \in \N$ with $n \ge 1$.
Assume that the theorem holds for sequences of length $n$.
This is our induction hypothesis.


Induction Step
This is our induction step:

Let $\sequence {a_k}_{1 \mathop \le k \mathop \le n + 1}$ be a sequence of length $n + 1$ in $S$.
Suppose that $b$ commutes with $a_k$ for all $k \in \closedint 0 {n + 1}$.

Then (suppressing brackets as $\circ$ is associative):














\(\ds b \circ a_1 \circ \cdots \circ a_n \circ a_{n + 1}\)

\(=\)







\(\ds a_1 \circ \cdots \circ a_n \circ b \circ a_{n + 1}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds a_1 \circ \cdots a_n \circ a_{n + 1} \circ b\)





$a_{n + 1}$ commutes with $b$




We conclude that the theorem holds for sequences of length $n + 1$.
The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.6$




