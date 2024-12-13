# 

Source: https://proofwiki.org/wiki/Product_of_Rationally_Expressible_Numbers_is_Rational


This page has been identified as a candidate for refactoring of basic complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $a, b \in \set {x \in \R_{>0} : x^2 \in \Q}$ be the lengths of rational line segments.
Furthermore, let $\dfrac a b \in \Q$.

Then, $a b \in \Q$.

In the words of Euclid:

The rectangle contained by rational straight lines commensurable in length is rational.
(The Elements: Book $\text{X}$: Proposition $19$)


Lemma
In the words of Euclid:

Since it has been proved that straight lines are commensurable in length are always commensurable in square also, while those commensurable in square are not always commensurable in length also, but can of course be either commensurable or incommensurable in length, it is manifest that, if any straight line be commensurable in length with a given rational straight line, it is called rational and commensurable with the other not only in length but in square also, since straight lines commensurable in length are always commensurable in square also.But, if any straight line be commensurable in square with a given rational straight line, then, if it is also commensurable in length with it, it is called in this case also rational and commensurable with it in both in length and in square; but, if again any straight line, being commensurable in square with a given rational straight line, be incommensurable in length with it, it is called in this case also rational but commensurable in square only.
(The Elements: Book $\text{X}$: Proposition $19$ : Lemma)


Proof 1

Let the rectangle $AC$ be contained by the rational straight lines $AB$ and $BC$.
Let $AB$ and $BC$ be commensurable in length.
Let the square $AD$ be described on $AB$.
From Book $\text{X}$ Definition $4$: Rational Area, $AD$ is rational.
Since:

$AB$ is commensurable in length with $BC$
and:

$AB = BD$
it follows that

$BD$ is commensurable in length with $BC$.
From Areas of Triangles and Parallelograms Proportional to Base:

$BD : BC = DA : AC$
Therefore $DA$ is commensurable in length with $AC$.
But $DA$ is rational.
It follows from Book $\text{X}$ Definition $4$: Rational Area that $AC$ is also rational.
$\blacksquare$


Proof 2
We have that $b^2 \in \Q$ by definition.
We also have that $\dfrac a b \in \Q$ by hypothesis.
Therefore, by Rational Multiplication is Closed, their product, $a b$, is also rational.
$\blacksquare$


Historical Note
This proof is Proposition $19$ of Book $\text{X}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 3 (2nd ed.) ... (previous) ... (next): Book $\text{X}$. Propositions




