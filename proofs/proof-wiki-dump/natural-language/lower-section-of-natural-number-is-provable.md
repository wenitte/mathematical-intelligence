# 

Source: https://proofwiki.org/wiki/Lower_Section_of_Natural_Number_is_Provable



Theorem
Let $x \in \N$ be a natural number.
Then the following WFF:

$\forall y: y = 0 \lor y = \map s 0 \lor \dotso \lor y = \sqbrk {x - 1} \lor \neg \paren {y < \sqbrk x}$
is a theorem of minimal arithmetic.

Proof
Proceed by induction on $x$.


Basis for the Induction
Let $x = 0$.
Then the result follows immediately from Axiom $\text M 7$.
$\Box$


Induction Hypothesis
Suppose that there is a formal proof of:

$\forall y: y = 0 \lor y = \map s 0 \lor \dotso \lor y = \sqbrk {x - 1} \lor \neg \paren {y < \sqbrk x}$


Induction Step
The following is a formal proof:

By Universal Instantiation, let $y_0$ be arbitrary.
Suppose $y_0 = 0 \lor y_0 = \map s 0 \lor \dotso \lor y_0 = \sqbrk {x - 1}$.
Then, the result follows from Rule of Addition.
Otherwise, $\neg {\paren {y_0 < \sqbrk x} }$.
By Law of Excluded Middle, $y_0 = \sqbrk x \lor y_0 \ne \sqbrk x$.
Suppose $y_0 = \sqbrk x$.
Then, the result again follows from Rule of Addition.
Finally, $y_0 \ne \sqbrk x$.
By Rule of Conjunction and Conjunction of Negations, $\neg \paren {y_0 < \sqbrk x \lor y_0 = \sqbrk x}$.
By Axiom $\text M 8$ and Modus Tollendo Tollens: $\neg \paren {y_0 < \map s {\sqbrk x} }$.
The result follows from Rule of Addition.
The result in question is:

$y_0 = 0 \lor y_0 = \map s 0 \lor \dotso \lor y_0 = \sqbrk {x - 1} \lor y_0 = \sqbrk x \lor \neg \paren {y_0 < \map s {\sqbrk x} }$
But as $\map s {\sqbrk x}$ is the same as $\sqbrk {\map s x}$, the induction step is satisfied by Universal Generalisation.
$\Box$

The result follows from Principle of Mathematical Induction.
$\blacksquare$





