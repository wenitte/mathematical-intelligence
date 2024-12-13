# 

Source: https://proofwiki.org/wiki/Order_of_5_in_Units_of_Ring_of_Integers_Modulo_2%5En


This article needs to be linked to other articles.In particular: crucial conceptYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring of basic complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $n \in \Z_{\ge 0}$ be a positive integer and $n \ge 2$.
Let $\struct {\Z / 2^n \Z, +, \times}$ be the ring of integers modulo $2^n$.
Let $U = \struct {\paren {\Z / 2^n \Z}^\times, \times}$ denote the group of units of $\struct {\Z / 2^n \Z, +, \times}$.
The order of $5$ in $U$ is $2^{n - 2}$.


Proof 1

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Proof by induction:

Induction Hypothesis
For all $k \ge 3$, we can write




\(\text {(1)}: \quad\)









\(\ds 5^{2^{k - 2} }\)

\(=\)







\(\ds 1 + a_k \cdot 2^k\)









where $a_k$ is odd.

Basis for the Induction
For $n = 3$, it means $5 ^2 = 1 + 3 \cdot 8$

Induction Step
This is our induction step:
Suppose for some $k \ge 3$, (1) is satisfied.
Consider $n = k + 1$.














\(\ds 5^{2^{k - 1} }\)

\(=\)







\(\ds \paren{5^{2^{k - 2} } }^2\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + a_k \cdot 2^k}^2\)




















\(\ds \)

\(=\)







\(\ds 1 + a_k 2^{k + 1} + a_k^2 \, 2^{2 k}\)




















\(\ds \)

\(=\)







\(\ds 1 + \underbrace {a_k \paren {1 + a_k 2^{k - 1} } }_{\text{odd} } 2^{k + 1}\)









This proves the inductive step.
Hence the result by induction.
$\Box$

Now we prove the order of $5$ in $U$ is $2^{n - 2}$.
By (1)

$5^{2^{n - 2}} \equiv 1 \pmod {2^n}$
so the order of $5$ in $U$ divides $2^{n - 2}$.
Aiming for a contradiction, suppose it is less than $2^{n - 2}$, then it divides $2^{n - 3}$, so:

$5^{2^{n - 3}} = 1 + m \cdot 2^n$
for some integer $m$. Then:

$5^{2^{n - 2}} = \paren{1 + m \cdot 2^n}^2 = 1 + \paren{2 m + m^2 2^n} 2^n$
where the coefficient $2 m + m^2 2^n$ is even, contradicting lemma.
$\blacksquare$

Proof 2
Lemma
For all $k \ge 3$,

$5^{2^{k - 3}} \equiv 1 + 2^{k - 1} \pmod{ 2^k}$
Proof of lemma
Write $\map {\nu_2} n$ for the highest exponent of a power of $2$ dividing $n$.
For all $i \ge 2$,

$i \le 2^{i - 1}$
so

$\map {\nu_2} i \le i - 1$
so














\(\ds \map {\nu_2} i\)

\(\le\)







\(\ds i - 1\)










\(\text {(1)}: \quad\)









\(\ds \)

\(\le\)







\(\ds 2i - 3\)





By $i \ge 2$



From definition of binomial coefficient:

$\ds \binom {2^{k - 3} } i = \frac {2^{k - 3} \binom {2^{k - 3} - 1} {i - 1} } i$
we have














\(\ds \map {\nu_2} {\binom {2^{k - 3} } i}\)

\(=\)







\(\ds \map {\nu_2} {2^{k - 3} \binom {2^{k - 3} - 1} {i - 1} } - \map {\nu_2} i\)




















\(\ds \)

\(\ge\)







\(\ds k - 3 - \map {\nu_2} i\)










\(\text {(2)}: \quad\)









\(\ds \)

\(\ge\)







\(\ds k - 2i\)





By (1)



so














\(\ds 5^{2^{k - 3} }\)

\(=\)







\(\ds \paren {2^2 + 1}^{2^{k - 3} }\)




















\(\ds \)

\(=\)







\(\ds 1 + 2^{k - 1} + \sum_{i \mathop \ge 2}\binom {2^{k - 3} } i 2^{2 i}\)





By binomial theorem














\(\ds \)

\(\equiv\)







\(\ds 1 + 2^{k - 1} \pmod {2^k}\)





By (2)




$\Box$
By the lemma,

$5^{2^{n - 3}} \not \equiv 1 \pmod{ 2^n}$
so the order of $5$ in $U$ does not divide $2^{n - 3}$.
Squaring both sides of the lemma:

$5^{2^{n - 2}} \equiv \paren{1 + 2^{n - 1}}^2 \equiv 1 \pmod{ 2^n}$
so the order of $5$ in $U$ divides $2^{n - 2}$.
Hence the order of $5$ in $U$ is $2^{n - 2}$.
$\blacksquare$

Generalization

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Put this in its own pageYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
Let $U$ be the same as above.
Let $u$ be any odd number of the form $8k + 3$ or $8k + 5$.
The order of $u$ in $U$ is $2^{n - 2}$.


Sources
1801: Carl Friedrich Gauss: Disquisitiones Arithmeticae, arts. $90$
Bernard (https://math.stackexchange.com/users/202857/bernard), Prove that $\text{ord}_{2^k}5=2^{k-2}$ where $k$ is any integer $\geq3$, URL (version: 2016-10-05): https://math.stackexchange.com/q/1486704




