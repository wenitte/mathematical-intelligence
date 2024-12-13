# 

Source: https://proofwiki.org/wiki/Natural_Numbers_have_No_Proper_Zero_Divisors



Theorem
Let $\N$ be the natural numbers.

Then for all $m, n \in \N$:

$m \times n = 0 \iff m = 0 \lor n = 0$
That is, $\N$ has no proper zero divisors.


Proof
Necessary Condition
Suppose that $n = 0$ or $m = 0$.
Then from Zero is Zero Element for Natural Number Multiplication:

$m \times n = 0$
$\Box$


Sufficient Condition
Let $m \times n = 0$.
Without loss of generality, suppose $n \ne 0$.














\(\ds n\)

\(\ne\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\le\)







\(\ds n\)





Definition of One








\(\ds \leadsto \ \ \)





\(\ds m \times n\)

\(=\)







\(\ds m \times \paren {\paren {n - 1} + 1}\)





Definition of Difference (Natural Numbers)














\(\ds \)

\(=\)







\(\ds m \times \paren {n - 1} + m\)





Natural Number Multiplication Distributes over Addition








\(\ds \leadsto \ \ \)





\(\ds 0 \le m\)

\(\le\)







\(\ds m \times \paren {n - 1} + m\)









But as:

$m \times \paren {n - 1} \circ m = m \times n = 0$
it follows that:

$0 \le m \le 0$
and so as $\le$ is antisymmetric, it follows that $m = 0$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.13: \ 1^\circ$




