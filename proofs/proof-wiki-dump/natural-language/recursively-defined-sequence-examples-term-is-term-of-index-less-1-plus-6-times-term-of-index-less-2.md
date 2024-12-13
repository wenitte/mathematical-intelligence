# 

Source: https://proofwiki.org/wiki/Recursively_Defined_Sequence/Examples/Term_is_Term_of_Index_less_1_plus_6_times_Term_of_Index_less_2



Theorem
Consider the integer sequence $\left\langle{a_n}\right\rangle$ defined recursively as:

$a_n = \begin{cases} 0 & : n = 0 \\
1 & : n = 1 \\
a_{n - 1} + 6 a_{n - 2} & : \text{otherwise} \end{cases}$

$a_n$ has a closed-form expression:

$a_n = \dfrac {3^n - \left({-2}\right)^n} 5$


Proof
The proof proceeds by strong induction.
For all $n \in \Z_{\ge 0}$, let $P \left({n}\right)$ be the proposition:

$a_n = \dfrac {3^n - \left({-2}\right)^n} 5$


Basis for the Induction
$P \left({0}\right)$ is the case:














\(\ds \dfrac {3^0 - \left({-2}\right)^0} 5\)

\(=\)







\(\ds \dfrac {1 - 1} 5\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds a_0\)









Thus $P \left({0}\right)$ is seen to hold.

$P \left({1}\right)$ is the case:














\(\ds \dfrac {3^1 - \left({-2}\right)^1} 5\)

\(=\)







\(\ds \dfrac {3 - \left({-2}\right)} 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3 + 2} 5\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds a_1\)









Thus $P \left({1}\right)$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $P \left({j}\right)$ is true, for all $j$ such that $0 \le j \le k$, then it logically follows that $P \left({k + 1}\right)$ is true.

This is the induction hypothesis:

$a_k = \dfrac {3^k - \left({-2}\right)^k} 5$
and:

$a_{k - 1} = \dfrac {3^{k - 1} - \left({-2}\right)^{k - 1} } 5$

from which it is to be shown that:

$a_{k + 1} = \dfrac {3^{k + 1} - \left({-2}\right)^{k + 1} } 5$


Induction Step
This is the induction step:














\(\ds a_{k + 1}\)

\(=\)







\(\ds a_k + 6 a_{k - 1}\)





Definition of $a_n$














\(\ds \)

\(=\)







\(\ds \dfrac {3^k - \left({-2}\right)^k} 5 + 6 \times \dfrac {3^{k - 1} - \left({-2}\right)^{k - 1} } 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3^k - \left({-2}\right)^k + 6 \times 3^{k - 1} - 6 \left({-2}\right)^{k - 1} } 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3^{k - 1} \left({3 + 6}\right) - \left({-2}\right)^{k - 1} \left({-2 + 6}\right)} 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3^{k - 1} \times 9 - \left({-2}\right)^{k - 1} \times 4} 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3^{k - 1} \times 3^2 - \left({-2}\right)^{k - 1} \times \left({-2}\right)^2} 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3^{k + 1} - \left({-2}\right)^{k + 1} } 5\)









So $P \left({k}\right) \implies P \left({k + 1}\right)$ and the result follows by the Second Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: a_n = \dfrac {3^n - \left({-2}\right)^n} 5$
$\blacksquare$


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Given that this result was given as a question in a chapter on the Fibonacci numbers, one presumes there is a way to solve this by using Fibonacci numbers, or a Fibonacci-like approach. Maybe use generating functions.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $39$




